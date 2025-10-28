import { NextRequest } from "next/server";
import { requireAuth, canPerformAction } from "@/lib/auth";
import { db } from "@/lib/db";
import { posts, postCategories, postTags } from "@/lib/db/schema";
import {
  apiSuccess,
  apiError,
  apiForbidden,
  apiValidationError,
} from "@/lib/api/response";
import { createPostSchema } from "@/lib/api/validation";
import { generateSlug } from "@/lib/cms/slug";
import { markdownToHtml, generateExcerpt } from "@/lib/cms/markdown";
import { eq, and, desc } from "drizzle-orm";

/**
 * GET /api/admin/posts - List all posts
 */
export async function GET(request: NextRequest) {
  try {
    const user = await requireAuth();

    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "20");
    const status = searchParams.get("status");

    const offset = (page - 1) * limit;

    let query = db.select().from(posts);

    // Apply filters
    const conditions = [];

    if (status) {
      conditions.push(
        eq(posts.status, status as "draft" | "published" | "archived")
      );
    }

    // If not admin, only show user's own posts
    if (user.role !== "admin" && user.role !== "editor") {
      conditions.push(eq(posts.authorId, user.id));
    }

    if (conditions.length > 0) {
      query = query.where(and(...conditions)) as typeof query;
    }

    const allPosts = await query
      .orderBy(desc(posts.updatedAt))
      .limit(limit)
      .offset(offset);

    return apiSuccess({
      posts: allPosts,
      pagination: {
        page,
        limit,
        total: allPosts.length,
      },
    });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return apiError(
      error instanceof Error ? error.message : "Failed to fetch posts",
      500
    );
  }
}

/**
 * POST /api/admin/posts - Create new post
 */
export async function POST(request: NextRequest) {
  try {
    const user = await requireAuth();

    if (!canPerformAction(user.role, "create")) {
      return apiForbidden("You do not have permission to create posts");
    }

    const body = await request.json();
    const validated = createPostSchema.safeParse(body);

    if (!validated.success) {
      return apiValidationError(
        validated.error.issues[0]?.message || "Validation error"
      );
    }

    const { categoryIds, tagIds, ...postData } = validated.data;

    // Generate slug if not provided
    const slug = postData.slug || generateSlug(postData.title);

    // Generate excerpt if not provided
    const excerpt =
      postData.excerpt || generateExcerpt(postData.contentMarkdown);

    // Convert markdown to HTML
    const contentHtml = await markdownToHtml(postData.contentMarkdown);

    // Create post
    const [newPost] = await db
      .insert(posts)
      .values({
        title: postData.title,
        slug,
        excerpt,
        contentMarkdown: postData.contentMarkdown,
        contentHtml,
        featuredImage: postData.featuredImage,
        status: postData.status,
        seoTitle: postData.seoTitle,
        seoDescription: postData.seoDescription,
        ogImage: postData.ogImage,
        authorId: user.id,
        publishedAt: postData.status === "published" ? new Date() : null,
      })
      .returning();

    // Add categories
    if (categoryIds && categoryIds.length > 0) {
      await db.insert(postCategories).values(
        categoryIds.map((categoryId) => ({
          postId: newPost.id,
          categoryId,
        }))
      );
    }

    // Add tags
    if (tagIds && tagIds.length > 0) {
      await db.insert(postTags).values(
        tagIds.map((tagId) => ({
          postId: newPost.id,
          tagId,
        }))
      );
    }

    return apiSuccess(newPost, "Post created successfully");
  } catch (error) {
    console.error("Error creating post:", error);
    return apiError(
      error instanceof Error ? error.message : "Failed to create post",
      500
    );
  }
}
