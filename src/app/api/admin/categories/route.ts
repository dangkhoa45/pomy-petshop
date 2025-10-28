import { NextRequest } from "next/server";
import { requireAuth } from "@/lib/auth";
import { db } from "@/lib/db";
import { categories } from "@/lib/db/schema";
import { apiSuccess, apiError } from "@/lib/api/response";
import { desc } from "drizzle-orm";

/**
 * GET /api/admin/categories - List all categories
 */
export async function GET() {
  try {
    await requireAuth();

    const allCategories = await db
      .select()
      .from(categories)
      .orderBy(desc(categories.createdAt));

    return apiSuccess(allCategories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return apiError(
      error instanceof Error ? error.message : "Failed to fetch categories",
      500
    );
  }
}

/**
 * POST /api/admin/categories - Create category
 */
export async function POST(request: NextRequest) {
  try {
    await requireAuth();

    const body = await request.json();
    const { name, slug, description } = body;

    if (!name || !slug) {
      return apiError("Name and slug are required", 400);
    }

    const [newCategory] = await db
      .insert(categories)
      .values({ name, slug, description })
      .returning();

    return apiSuccess(newCategory, "Category created successfully");
  } catch (error) {
    console.error("Error creating category:", error);
    return apiError(
      error instanceof Error ? error.message : "Failed to create category",
      500
    );
  }
}
