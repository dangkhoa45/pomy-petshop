"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface Post {
  id: number;
  title: string;
  slug: string;
  excerpt: string | null;
  featuredImage: string | null;
  publishedAt: string | null;
  category?: string | null;
  viewCount: number;
}

export default function BlogPage() {
  const [publishedPosts, setPublishedPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("/api/blog/posts");
        if (response.ok) {
          const data = await response.json();
          setPublishedPosts(data);
        }
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchPosts();
  }, []);

  const formatDate = (date: string | null) => {
    if (!date) return "";
    return new Date(date).toLocaleDateString("vi-VN", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-pink-200 font-sans">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-4 tracking-tight">
            Blog chia sẻ kinh nghiệm chăm sóc thú cưng{" "}
            <span className="inline-block">🐾</span>
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed font-sans">
            Cập nhật những bài viết mới nhất về chăm sóc, huấn luyện và dinh
            dưỡng thú cưng từ đội ngũ{" "}
            <span className="text-pink-600 font-semibold">Pomy Petshop</span>.
          </p>
        </header>

        {/* Posts Grid */}
        {isLoading ? (
          <div className="text-center py-12 font-sans">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600"></div>
            <p className="mt-4 text-gray-600 font-medium">
              Đang tải bài viết...
            </p>
          </div>
        ) : publishedPosts.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-2xl shadow-sm font-sans">
            <p className="text-gray-500 text-lg font-medium">
              Chưa có bài viết nào được xuất bản
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publishedPosts.map((post) => (
              <article
                key={post.id}
                className="group rounded-2xl overflow-hidden shadow-sm border border-white/50 bg-white hover:shadow-xl transition-all duration-300"
              >
                {/* Featured Image */}
                {post.featuredImage ? (
                  <Link href={`/blog/${post.slug}`}>
                    <div className="aspect-video w-full overflow-hidden relative bg-gradient-to-br from-pink-100 to-blue-100">
                      <Image
                        src={post.featuredImage}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                  </Link>
                ) : (
                  <div className="aspect-video w-full bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 flex items-center justify-center">
                    <span className="text-6xl opacity-30">🐾</span>
                  </div>
                )}

                {/* Content */}
                <div className="p-6">
                  {/* Category Badge */}
                  {post.category && (
                    <span className="inline-block text-xs font-medium text-pink-600 bg-pink-50 px-3 py-1 rounded-full mb-3">
                      {post.category}
                    </span>
                  )}

                  {/* Title */}
                  <h2 className="text-xl font-heading font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-pink-600 transition-colors duration-300 tracking-tight">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  {/* Excerpt */}
                  {post.excerpt && (
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed font-sans">
                      {post.excerpt}
                    </p>
                  )}

                  {/* Footer */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100 font-sans">
                    <div className="flex flex-col gap-1">
                      <time
                        dateTime={post.publishedAt || undefined}
                        className="text-xs text-gray-500 font-medium"
                      >
                        {formatDate(post.publishedAt)}
                      </time>
                      <span className="text-xs text-gray-400">
                        {post.viewCount} lượt xem
                      </span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-sm font-semibold text-pink-600 hover:text-pink-700 group-hover:translate-x-1 transition-all duration-300"
                    >
                      Đọc thêm
                      <svg
                        className="ml-1 w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
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
