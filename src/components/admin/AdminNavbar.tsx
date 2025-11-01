"use client";

import { useRouter } from "next/navigation";
import { FiLogOut, FiUser } from "react-icons/fi";

import type { AuthUser } from "@/lib/auth";
import { createClient } from "@/lib/supabase/client";

interface AdminNavbarProps {
  user: AuthUser;
}

export default function AdminNavbar({ user }: AdminNavbarProps) {
  const router = useRouter();

  const handleLogout = async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/auth/login");
    router.refresh();
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white border-b border-gray-200 z-10 m-1">
      <div className="h-full px-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-heading font-bold text-gray-900 tracking-tight pt-4">
            POMY PETSHOP
          </h1>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-gray-100">
            <FiUser className="w-4 h-4 text-gray-600" />
            <div className="text-sm">
              <p className="font-medium text-gray-900">
                {user.fullName || user.email}
              </p>
              <p className="text-xs text-gray-500 capitalize font-normal">
                {user.role}
              </p>
            </div>
          </div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors"
          >
            <FiLogOut className="w-4 h-4" />
            Đăng xuất
          </button>
        </div>
      </div>
    </header>
  );
}
