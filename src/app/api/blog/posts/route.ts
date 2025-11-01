import { NextResponse } from "next/server";
import { desc, eq } from "drizzle-orm";

import { db } from "@/lib/db";
import { posts, postCategories, categories } from "@/lib/db/schema";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const publishedPosts = await db
      .select({
        id: posts.id,
        title: posts.title,
        slug: posts.slug,
        excerpt: posts.excerpt,
        featuredImage: posts.featuredImage,
        publishedAt: posts.publishedAt,
        viewCount: posts.viewCount,
        category: categories.name,
      })
      .from(posts)
      .leftJoin(postCategories, eq(posts.id, postCategories.postId))
      .leftJoin(categories, eq(postCategories.categoryId, categories.id))
      .where(eq(posts.status, "published"))
      .orderBy(desc(posts.publishedAt));

    // Group posts by ID and take first category
    const uniquePosts = publishedPosts.reduce((acc, post) => {
      if (!acc[post.id]) {
        acc[post.id] = post;
      }
      return acc;
    }, {} as Record<string, (typeof publishedPosts)[0]>);

    return NextResponse.json(Object.values(uniquePosts));
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
