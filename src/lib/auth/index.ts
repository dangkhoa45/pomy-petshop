import { eq } from "drizzle-orm";

import { db } from "@/lib/db";
import { members, profiles } from "@/lib/db/schema";
import { createClient } from "@/lib/supabase/server";

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
  let [profile] = await db
    .select({
      id: profiles.id,
      email: profiles.email,
      fullName: profiles.fullName,
      avatarUrl: profiles.avatarUrl,
    })
    .from(profiles)
    .where(eq(profiles.id, user.id))
    .limit(1);

  // Auto-create profile if it doesn't exist
  if (!profile) {
    try {
      await db.insert(profiles).values({
        id: user.id,
        email: user.email || "",
        fullName: user.user_metadata?.full_name || null,
        avatarUrl: user.user_metadata?.avatar_url || null,
      });

      // Fetch the newly created profile
      [profile] = await db
        .select({
          id: profiles.id,
          email: profiles.email,
          fullName: profiles.fullName,
          avatarUrl: profiles.avatarUrl,
        })
        .from(profiles)
        .where(eq(profiles.id, user.id))
        .limit(1);
    } catch (error) {
      console.error("Error creating profile:", error);
      return null;
    }
  }

  if (!profile) {
    return null;
  }

  let [member] = await db
    .select({
      role: members.role,
      isActive: members.isActive,
    })
    .from(members)
    .where(eq(members.profileId, user.id))
    .limit(1);

  // Auto-create member record if it doesn't exist
  if (!member) {
    try {
      // First user becomes admin, others become author
      const existingMembersCount = await db
        .select()
        .from(members)
        .limit(1);
      
      const defaultRole = existingMembersCount.length === 0 ? "admin" : "author";

      await db.insert(members).values({
        profileId: user.id,
        role: defaultRole,
        isActive: true,
      });

      // Fetch the newly created member
      [member] = await db
        .select({
          role: members.role,
          isActive: members.isActive,
        })
        .from(members)
        .where(eq(members.profileId, user.id))
        .limit(1);
    } catch (error) {
      console.error("Error creating member:", error);
    }
  }

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
