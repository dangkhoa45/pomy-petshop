import type { Metadata } from "next";
import { redirect } from "next/navigation";

import AdminNavbar from "@/components/admin/AdminNavbar";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { getCurrentUser } from "@/lib/auth";

/**
 * Admin layout metadata
 * Prevents indexing and sets admin-specific title
 */
export const metadata: Metadata = {
  title: {
    default: "Pomy Admin",
    template: "%s | Pomy Admin",
  },
  description: "Hệ thống quản trị nội dung Pomy Petshop",
  robots: {
    index: false,
    follow: false,
  },
};

/**
 * Admin Layout Component
 * Provides authentication check, navbar, and sidebar navigation
 * Independent from public site layout
 */
export default async function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): Promise<React.JSX.Element> {
  // Authentication check - redirect if not logged in
  const user = await getCurrentUser();

  if (!user) {
    redirect("/auth/login");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top navigation bar */}
      <AdminNavbar user={user} />

      <div className="flex">
        {/* Sidebar navigation - fixed on desktop, toggleable on mobile */}
        <AdminSidebar role={user.role} />

        {/* Main content area */}
        <main className="flex-1 p-8 ml-64 mt-16">
          {children}
        </main>
      </div>
    </div>
  );
}
