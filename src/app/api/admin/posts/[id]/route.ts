import { NextRequest } from "next/server";
import { requireAuth, canPerformAction } from "@/lib/auth";
import { db } from "@/lib/db";
import {
  posts,
  postCategories,
  postTags,
  postRevisions,
} from "@/lib/db/schema";
import {
  apiSuccess,
  apiError,
  apiForbidden,
  apiNotFound,
} from "@/lib/api/response";
import { updatePostSchema } from "@/lib/api/validation";
import { markdownToHtml, generateExcerpt } from "@/lib/cms/markdown";
import { eq } from "drizzle-orm";

interface RouteParams {
  params: Promise<{ id: string }>;
}

/**
 * GET /api/admin/posts/:id - Get single post
 */
export async function GET(request: NextRequest, { params }: RouteParams) {
  try {
    const user = await requireAuth();
    const { id } = await params;

    const [post] = await db
      .select()
      .from(posts)
      .where(eq(posts.id, id))
      .limit(1);

    if (!post) {
      return apiNotFound("Post not found");
    }

    // Check permissions
    if (
      user.role !== "admin" &&
      user.role !== "editor" &&
      post.authorId !== user.id
    ) {
      return apiForbidden("You do not have permission to view this post");
    }

    // Get categories
    const postCategoryRecords = await db
      .select()
      .from(postCategories)
      .where(eq(postCategories.postId, id));

    // Get tags
    const postTagRecords = await db
      .select()
      .from(postTags)
      .where(eq(postTags.postId, id));

    return apiSuccess({
      ...post,
      categoryIds: postCategoryRecords.map((pc) => pc.categoryId),
      tagIds: postTagRecords.map((pt) => pt.tagId),
    });
  } catch (error) {
    console.error("Error fetching post:", error);
    return apiError(
      error instanceof Error ? error.message : "Failed to fetch post",
      500
    );
  }
}

/**
 * PUT /api/admin/posts/:id - Update post
 */
export async function PUT(request: NextRequest, { params }: RouteParams) {
  try {
    const user = await requireAuth();
    const { id } = await params;

    const [existingPost] = await db
      .select()
      .from(posts)
      .where(eq(posts.id, id))
      .limit(1);

    if (!existingPost) {
      return apiNotFound("Post not found");
    }

    // Check permissions
    if (!canPerformAction(user.role, "update")) {
      return apiForbidden("You do not have permission to update posts");
    }

    if (
      user.role !== "admin" &&
      user.role !== "editor" &&
      existingPost.authorId !== user.id
    ) {
      return apiForbidden("You can only edit your own posts");
    }

    const body = await request.json();
    const validated = updatePostSchema.safeParse(body);

    if (!validated.success) {
      return apiError(
        validated.error.issues[0]?.message || "Validation error",
        422
      );
    }

    const { categoryIds, tagIds, ...postData } = validated.data;

    // Save revision before updating
    await db.insert(postRevisions).values({
      postId: id,
      title: existingPost.title,
      contentMarkdown: existingPost.contentMarkdown,
      createdBy: user.id,
    });

    // Generate excerpt if content changed
    if (postData.contentMarkdown && !postData.excerpt) {
      postData.excerpt = generateExcerpt(postData.contentMarkdown);
    }

    // Convert markdown to HTML if content changed
    let contentHtml = existingPost.contentHtml;
    if (postData.contentMarkdown) {
      contentHtml = await markdownToHtml(postData.contentMarkdown);
    }

    // Update post
    const [updatedPost] = await db
      .update(posts)
      .set({
        ...postData,
        contentHtml,
        updatedAt: new Date(),
      })
      .where(eq(posts.id, id))
      .returning();

    // Update categories if provided
    if (categoryIds !== undefined) {
      await db.delete(postCategories).where(eq(postCategories.postId, id));

      if (categoryIds.length > 0) {
        await db.insert(postCategories).values(
          categoryIds.map((categoryId) => ({
            postId: id,
            categoryId,
          }))
        );
      }
    }

    // Update tags if provided
    if (tagIds !== undefined) {
      await db.delete(postTags).where(eq(postTags.postId, id));

      if (tagIds.length > 0) {
        await db.insert(postTags).values(
          tagIds.map((tagId) => ({
            postId: id,
            tagId,
          }))
        );
      }
    }

    return apiSuccess(updatedPost, "Post updated successfully");
  } catch (error) {
    console.error("Error updating post:", error);
    return apiError(
      error instanceof Error ? error.message : "Failed to update post",
      500
    );
  }
}

/**
 * DELETE /api/admin/posts/:id - Delete post
 */
export async function DELETE(request: NextRequest, { params }: RouteParams) {
  try {
    const user = await requireAuth();
    const { id } = await params;

    if (!canPerformAction(user.role, "delete")) {
      return apiForbidden("You do not have permission to delete posts");
    }

    const [existingPost] = await db
      .select()
      .from(posts)
      .where(eq(posts.id, id))
      .limit(1);

    if (!existingPost) {
      return apiNotFound("Post not found");
    }

    // Only admin can delete others' posts
    if (user.role !== "admin" && existingPost.authorId !== user.id) {
      return apiForbidden("You can only delete your own posts");
    }

    await db.delete(posts).where(eq(posts.id, id));

    return apiSuccess(null, "Post deleted successfully");
  } catch (error) {
    console.error("Error deleting post:", error);
    return apiError(
      error instanceof Error ? error.message : "Failed to delete post",
      500
    );
  }
}
