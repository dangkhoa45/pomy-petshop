import slugify from "slugify";
import { nanoid } from "nanoid";

/**
 * Generate URL-friendly slug from text
 */
export function generateSlug(
  text: string,
  addRandomSuffix: boolean = false
): string {
  const slug = slugify(text, {
    lower: true,
    strict: true,
    locale: "vi",
    remove: /[*+~.()'"!:@]/g,
  });

  if (addRandomSuffix) {
    return `${slug}-${nanoid(6)}`;
  }

  return slug;
}

/**
 * Check if slug is valid
 */
export function isValidSlug(slug: string): boolean {
  const slugRegex = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;
  return slugRegex.test(slug);
}

/**
 * Sanitize slug
 */
export function sanitizeSlug(slug: string): string {
  return slug
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
