import Link from "next/link";
import { db } from "@/lib/db";
import { posts } from "@/lib/db/schema";
import { desc } from "drizzle-orm";
import { FiPlus } from "react-icons/fi";
import PostsTable from "@/components/admin/PostsTable";

async function getPosts() {
  return await db.select().from(posts).orderBy(desc(posts.updatedAt));
}

export default async function PostsListPage() {
  const allPosts = await getPosts();

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-heading font-bold text-gray-900 tracking-tight">
            Bài viết
          </h1>
          <p className="mt-2 text-gray-600 text-sm">
            Quản lý tất cả bài viết blog
          </p>
        </div>
        <Link
          href="/admin/posts/new"
          className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          <FiPlus className="w-5 h-5" />
          Tạo bài mới
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200">
        <PostsTable posts={allPosts} />
      </div>
    </div>
  );
}
