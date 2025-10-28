import { createClient } from "@/lib/supabase/server";
import { db } from "@/lib/db";
import { members, profiles } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export type UserRole = "admin" | "editor" | "author" | "viewer";

export interface AuthUser {
  id: string;
  email: string;
  role: UserRole;
  fullName?: string | null;
  avatarUrl?: string | null;
}

/**
 * Get current authenticated user with role information
 */
export async function getCurrentUser(): Promise<AuthUser | null> {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return null;
  }

  // Get user profile and member info
  const [profile] = await db
    .select({
      id: profiles.id,
      email: profiles.email,
      fullName: profiles.fullName,
      avatarUrl: profiles.avatarUrl,
    })
    .from(profiles)
    .where(eq(profiles.id, user.id))
    .limit(1);

  if (!profile) {
    return null;
  }

  const [member] = await db
    .select({
      role: members.role,
      isActive: members.isActive,
    })
    .from(members)
    .where(eq(members.profileId, user.id))
    .limit(1);

  // Default role is author if no member record exists
  const role = member?.role || "author";

  return {
    id: profile.id,
    email: profile.email,
    role,
    fullName: profile.fullName,
    avatarUrl: profile.avatarUrl,
  };
}

/**
 * Check if user has required role
 */
export function hasRole(userRole: UserRole, requiredRole: UserRole): boolean {
  const roleHierarchy: Record<UserRole, number> = {
    admin: 4,
    editor: 3,
    author: 2,
    viewer: 1,
  };

  return roleHierarchy[userRole] >= roleHierarchy[requiredRole];
}

/**
 * Check if user can perform action
 */
export function canPerformAction(
  userRole: UserRole,
  action: "create" | "read" | "update" | "delete" | "publish"
): boolean {
  const permissions: Record<UserRole, Set<string>> = {
    admin: new Set(["create", "read", "update", "delete", "publish"]),
    editor: new Set(["create", "read", "update", "publish"]),
    author: new Set(["create", "read", "update"]),
    viewer: new Set(["read"]),
  };

  return permissions[userRole]?.has(action) || false;
}

/**
 * Require authentication
 */
export async function requireAuth(): Promise<AuthUser> {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  return user;
}

/**
 * Require specific role
 */
export async function requireRole(requiredRole: UserRole): Promise<AuthUser> {
  const user = await requireAuth();

  if (!hasRole(user.role, requiredRole)) {
    throw new Error("Forbidden: Insufficient permissions");
  }

  return user;
}
