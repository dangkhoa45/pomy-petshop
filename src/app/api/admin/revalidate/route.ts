import { NextRequest } from "next/server";
import { revalidatePath, revalidateTag } from "next/cache";
import { apiSuccess, apiError, apiUnauthorized } from "@/lib/api/response";

/**
 * POST /api/admin/revalidate - Trigger revalidation
 */
export async function POST(request: NextRequest) {
  try {
    // Verify revalidation token
    const authHeader = request.headers.get("authorization");
    const token = authHeader?.replace("Bearer ", "");

    if (!token || token !== process.env.VERCEL_REVALIDATE_TOKEN) {
      return apiUnauthorized("Invalid revalidation token");
    }

    const body = await request.json();
    const { path, tag } = body;

    if (!path && !tag) {
      return apiError("Either path or tag must be provided", 400);
    }

    if (path) {
      revalidatePath(path);
    }

    if (tag) {
      revalidateTag(tag);
    }

    return apiSuccess(
      { revalidated: true, path, tag },
      "Revalidation triggered"
    );
  } catch (error) {
    console.error("Error revalidating:", error);
    return apiError(
      error instanceof Error ? error.message : "Failed to revalidate",
      500
    );
  }
}
