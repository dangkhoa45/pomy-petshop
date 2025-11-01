import { NextResponse } from "next/server";
import { and, eq, ne, desc } from "drizzle-orm";

import { db } from "@/lib/db";
import { posts, postCategories, categories } from "@/lib/db/schema";
import { estimateReadingTime, markdownToHtml } from "@/lib/cms/markdown";

export const dynamic = "force-dynamic";

interface RouteParams {
  params: Promise<{
    slug: string;
  }>;
}

export async function GET(request: Request, { params }: RouteParams) {
  try {
    const { slug } = await params;

    // Get the post
    const [postResult] = await db
      .select()
      .from(posts)
      .where(and(eq(posts.slug, slug), eq(posts.status, "published")))
      .limit(1);

    if (!postResult) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    // Generate HTML from markdown if not cached
    const contentHtml =
      postResult.contentHtml ||
      (await markdownToHtml(postResult.contentMarkdown));
    const readingTime = estimateReadingTime(postResult.contentMarkdown);

    // Get category
    const [categoryResult] = await db
      .select({
        category: categories.name,
      })
      .from(postCategories)
      .leftJoin(categories, eq(postCategories.categoryId, categories.id))
      .where(eq(postCategories.postId, postResult.id))
      .limit(1);

    // Get related posts (same category or just recent posts)
    const relatedPostsQuery = await db
      .select({
        id: posts.id,
        title: posts.title,
        slug: posts.slug,
        excerpt: posts.excerpt,
        featuredImage: posts.featuredImage,
      })
      .from(posts)
      .where(and(eq(posts.status, "published"), ne(posts.id, postResult.id)))
      .orderBy(desc(posts.publishedAt))
      .limit(3);

    const post = {
      ...postResult,
      contentHtml,
      readingTime,
      category: categoryResult?.category || null,
    };

    return NextResponse.json({
      post,
      relatedPosts: relatedPostsQuery,
    });
  } catch (error) {
    console.error("Error fetching post:", error);
    return NextResponse.json(
      { error: "Failed to fetch post" },
      { status: 500 }
    );
  }
}
