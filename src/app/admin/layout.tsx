import { redirect } from "next/navigation";

import AdminNavbar from "@/components/admin/AdminNavbar";
import AdminSidebar from "@/components/admin/AdminSidebar";
import { getCurrentUser } from "@/lib/auth";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const user = await getCurrentUser();

  if (!user) {
    redirect("/auth/login");
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <AdminNavbar user={user} />
      <div className="flex">
        <AdminSidebar role={user.role} />
        <main className="flex-1 p-8 ml-64">{children}</main>
      </div>
    </div>
  );
}
