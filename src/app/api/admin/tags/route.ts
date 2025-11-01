import { desc } from "drizzle-orm";
import { type NextRequest } from "next/server";

import { apiError, apiSuccess } from "@/lib/api/response";
import { requireAuth } from "@/lib/auth";
import { db } from "@/lib/db";
import { tags } from "@/lib/db/schema";

/**
 * GET /api/admin/tags - List all tags
 */
export async function GET() {
  try {
    await requireAuth();

    const allTags = await db.select().from(tags).orderBy(desc(tags.createdAt));

    return apiSuccess(allTags);
  } catch (error) {
    console.error("Error fetching tags:", error);
    return apiError(
      error instanceof Error ? error.message : "Failed to fetch tags",
      500
    );
  }
}

/**
 * POST /api/admin/tags - Create tag
 */
export async function POST(request: NextRequest) {
  try {
    await requireAuth();

    const body = await request.json();
    const { name, slug } = body;

    if (!name || !slug) {
      return apiError("Name and slug are required", 400);
    }

    const [newTag] = await db.insert(tags).values({ name, slug }).returning();

    return apiSuccess(newTag, "Tag created successfully");
  } catch (error) {
    console.error("Error creating tag:", error);
    return apiError(
      error instanceof Error ? error.message : "Failed to create tag",
      500
    );
  }
}
