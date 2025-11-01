import { type NextRequest } from "next/server";
import { updateSession } from "./src/lib/supabase/middleware";

/**
 * Global middleware for authentication and session management
 * Protects admin routes and refreshes Supabase session tokens
 * 
 * @param request - Incoming Next.js request
 * @returns Response with updated session cookies
 */
export async function middleware(request: NextRequest) {
  return await updateSession(request);
}

/**
 * Middleware configuration
 * Applies to all routes except static files and images
 */
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - Static assets (svg, png, jpg, jpeg, gif, webp)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
