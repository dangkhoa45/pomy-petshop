import Link from "next/link";
import Image from "next/image";
import { db } from "@/lib/db";
import { posts } from "@/lib/db/schema";
import { eq, desc } from "drizzle-orm";
import { Metadata } from "next";

export const dynamic = "force-dynamic"; // Always fetch at runtime

export const metadata: Metadata = {
  title: "Blog - POMY PETSHOP",
  description:
    "Kiến thức và hướng dẫn chăm sóc thú cưng toàn diện từ POMY PETSHOP",
};

async function getPublishedPosts() {
  return await db
    .select()
    .from(posts)
    .where(eq(posts.status, "published"))
    .orderBy(desc(posts.publishedAt));
}

export default async function BlogPage() {
  const publishedPosts = await getPublishedPosts();

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog</h1>
          <p className="text-lg text-gray-600">
            Kiến thức và hướng dẫn chăm sóc thú cưng toàn diện
          </p>
        </div>

        {/* Posts Grid */}
        {publishedPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">Chưa có bài viết nào được xuất bản</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publishedPosts.map((post) => (
              <article
                key={post.id}
                className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              >
                {post.featuredImage && (
                  <div className="aspect-video w-full overflow-hidden relative">
                    <Image
                      src={post.featuredImage}
                      alt={post.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                  </div>
                )}

                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  {post.excerpt && (
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                  )}

                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <time dateTime={post.publishedAt?.toISOString()}>
                      {post.publishedAt &&
                        new Date(post.publishedAt).toLocaleDateString("vi-VN", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                    </time>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-700 font-medium"
                    >
                      Đọc thêm →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
