"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FiHome,
  FiFileText,
  FiFolder,
  FiTag,
  FiSettings,
  FiUsers,
} from "react-icons/fi";

interface AdminSidebarProps {
  role: string;
}

const navigation = [
  { name: "Dashboard", href: "/admin", icon: FiHome },
  { name: "Bài viết", href: "/admin/posts", icon: FiFileText },
  { name: "Chuyên mục", href: "/admin/categories", icon: FiFolder },
  { name: "Thẻ", href: "/admin/tags", icon: FiTag },
  { name: "Người dùng", href: "/admin/users", icon: FiUsers, adminOnly: true },
  {
    name: "Cài đặt",
    href: "/admin/settings",
    icon: FiSettings,
    adminOnly: true,
  },
];

export default function AdminSidebar({ role }: AdminSidebarProps) {
  const pathname = usePathname();

  const filteredNavigation = navigation.filter(
    (item) => !item.adminOnly || role === "admin"
  );

  return (
    <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-white border-r border-gray-200 overflow-y-auto">
      <nav className="p-4 space-y-1">
        {filteredNavigation.map((item) => {
          const Icon = item.icon;
          const isActive =
            pathname === item.href || pathname?.startsWith(item.href + "/");

          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-blue-50 text-blue-700 font-semibold"
                  : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              <span className="leading-tight">{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
