import { NextRequest } from "next/server";
import { requireAuth } from "@/lib/auth";
import { createClient } from "@/lib/supabase/server";
import {
  apiSuccess,
  apiError,
  apiValidationError,
  apiUnauthorized,
  apiServerError,
} from "@/lib/api/response";
import { nanoid } from "nanoid";

/**
 * POST /api/admin/upload - Upload image to Supabase Storage
 */
export async function POST(request: NextRequest) {
  try {
    const user = await requireAuth();

    const formData = await request.formData();
    const file = formData.get("file") as File;

    if (!file) {
      return apiValidationError("No file provided");
    }

    // Validate file type
    const allowedTypes = ["image/jpeg", "image/png", "image/webp", "image/gif"];
    if (!allowedTypes.includes(file.type)) {
      return apiValidationError(
        "Invalid file type. Only JPEG, PNG, WebP, and GIF are allowed."
      );
    }

    // Validate file size (max 5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      return apiValidationError("File size exceeds 5MB limit");
    }

    const supabase = await createClient();

    // Generate unique filename
    const fileExt = file.name.split(".").pop();
    const fileName = `${nanoid()}.${fileExt}`;
    const filePath = `uploads/${user.id}/${fileName}`;

    // Upload to Supabase Storage
    const { error } = await supabase.storage
      .from("blog-images")
      .upload(filePath, file, {
        contentType: file.type,
        upsert: false,
      });

    if (error) {
      console.error("Supabase upload error:", error);
      // Return the actual error message to help debugging/UX
      return apiError(error.message || "Failed to upload image", 400);
    }

    // Get public URL
    const { data: urlData } = supabase.storage
      .from("blog-images")
      .getPublicUrl(filePath);

    return apiSuccess(
      {
        url: urlData.publicUrl,
        path: filePath,
        fileName,
      },
      "Image uploaded successfully"
    );
  } catch (error) {
    console.error("Error uploading image:", error);
    if (error instanceof Error && error.message === "Unauthorized") {
      return apiUnauthorized();
    }
    return apiServerError(
      error instanceof Error ? error.message : "Failed to upload image"
    );
  }
}
