import { NextRequest } from "next/server";
import { requireAuth, canPerformAction } from "@/lib/auth";
import { db } from "@/lib/db";
import { posts } from "@/lib/db/schema";
import {
  apiSuccess,
  apiError,
  apiForbidden,
  apiNotFound,
} from "@/lib/api/response";
import { eq } from "drizzle-orm";

interface RouteParams {
  params: Promise<{ id: string }>;
}

/**
 * POST /api/admin/posts/:id/publish - Publish post
 */
export async function POST(request: NextRequest, { params }: RouteParams) {
  try {
    const user = await requireAuth();
    const { id } = await params;

    if (!canPerformAction(user.role, "publish")) {
      return apiForbidden("You do not have permission to publish posts");
    }

    const [existingPost] = await db
      .select()
      .from(posts)
      .where(eq(posts.id, id))
      .limit(1);

    if (!existingPost) {
      return apiNotFound("Post not found");
    }

    const [publishedPost] = await db
      .update(posts)
      .set({
        status: "published",
        publishedAt: existingPost.publishedAt || new Date(),
        updatedAt: new Date(),
      })
      .where(eq(posts.id, id))
      .returning();

    return apiSuccess(publishedPost, "Post published successfully");
  } catch (error) {
    console.error("Error publishing post:", error);
    return apiError(
      error instanceof Error ? error.message : "Failed to publish post",
      500
    );
  }
}
