import { db } from "@/lib/db";
import { posts } from "@/lib/db/schema";
import { eq, desc, count } from "drizzle-orm";
import { FiFileText, FiEdit, FiCheckCircle } from "react-icons/fi";
import Link from "next/link";

async function getDashboardStats() {
  const [totalPosts] = await db.select({ count: count() }).from(posts);

  const [draftPosts] = await db
    .select({ count: count() })
    .from(posts)
    .where(eq(posts.status, "draft"));

  const [publishedPosts] = await db
    .select({ count: count() })
    .from(posts)
    .where(eq(posts.status, "published"));

  const recentPosts = await db
    .select()
    .from(posts)
    .orderBy(desc(posts.updatedAt))
    .limit(5);

  return {
    total: totalPosts.count,
    draft: draftPosts.count,
    published: publishedPosts.count,
    recent: recentPosts,
  };
}

export default async function AdminDashboard() {
  const stats = await getDashboardStats();

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-heading font-bold text-gray-900 tracking-tight">
          Dashboard
        </h1>
        <p className="mt-2 text-gray-600 text-sm">Tổng quan hệ thống CMS</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Tổng bài viết"
          value={stats.total}
          icon={FiFileText}
          color="blue"
        />
        <StatCard
          title="Bài nháp"
          value={stats.draft}
          icon={FiEdit}
          color="yellow"
        />
        <StatCard
          title="Đã xuất bản"
          value={stats.published}
          icon={FiCheckCircle}
          color="green"
        />
      </div>

      {/* Recent Posts */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-lg font-heading font-semibold text-gray-900">
            Bài viết mới nhất
          </h2>
          <Link
            href="/admin/posts"
            className="text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            Xem tất cả
          </Link>
        </div>
        <div className="divide-y divide-gray-200">
          {stats.recent.length === 0 ? (
            <div className="px-6 py-8 text-center text-gray-500">
              Chưa có bài viết nào
            </div>
          ) : (
            stats.recent.map((post) => (
              <Link
                key={post.id}
                href={`/admin/posts/${post.id}/edit`}
                className="block px-6 py-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-gray-900 truncate">
                      {post.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Cập nhật:{" "}
                      {new Date(post.updatedAt).toLocaleDateString("vi-VN")}
                    </p>
                  </div>
                  <span
                    className={`ml-4 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      post.status === "published"
                        ? "bg-green-100 text-green-800"
                        : post.status === "draft"
                        ? "bg-yellow-100 text-yellow-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    {post.status === "published"
                      ? "Đã xuất bản"
                      : post.status === "draft"
                      ? "Nháp"
                      : "Lưu trữ"}
                  </span>
                </div>
              </Link>
            ))
          )}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h2 className="text-lg font-heading font-semibold text-gray-900 mb-4">
          Thao tác nhanh
        </h2>
        <div className="flex gap-4">
          <Link
            href="/admin/posts/new"
            className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
          >
            Tạo bài viết mới
          </Link>
          <Link
            href="/admin/categories"
            className="px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 transition-colors"
          >
            Quản lý chuyên mục
          </Link>
        </div>
      </div>
    </div>
  );
}

interface StatCardProps {
  title: string;
  value: number;
  icon: React.ElementType;
  color: "blue" | "yellow" | "green";
}

function StatCard({ title, value, icon: Icon, color }: StatCardProps) {
  const colorClasses = {
    blue: "bg-blue-100 text-blue-600",
    yellow: "bg-yellow-100 text-yellow-600",
    green: "bg-green-100 text-green-600",
  };

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-medium text-gray-600">{title}</p>
          <p className="mt-2 text-3xl font-heading font-bold text-gray-900 tracking-tight">
            {value}
          </p>
        </div>
        <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
}
