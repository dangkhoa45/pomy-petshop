"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-green-100 to-pink-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <motion.header
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-heading font-bold text-gray-800 mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Blog chia sẻ kinh nghiệm chăm sóc thú cưng{" "}
            <span className="inline-block">🐾</span>
          </motion.h1>
          <motion.p
            className="text-lg text-gray-600 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Cập nhật những bài viết mới nhất về chăm sóc, huấn luyện và dinh
            dưỡng thú cưng từ đội ngũ{" "}
            <span className="text-pink-600 font-semibold">Pomy Petshop</span>.
          </motion.p>
        </motion.header>

        {/* Posts Grid */}
        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-pink-600"></div>
            <p className="mt-4 text-gray-600">Đang tải bài viết...</p>
          </div>
        ) : publishedPosts.length === 0 ? (
          <motion.div
            className="text-center py-12 bg-white rounded-2xl shadow-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <p className="text-gray-500 text-lg">
              Chưa có bài viết nào được xuất bản
            </p>
          </motion.div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {publishedPosts.map((post) => (
              <motion.article
                key={post.id}
                variants={cardVariants}
                className="group rounded-2xl overflow-hidden shadow-sm border border-white/50 bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
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
                  <h2 className="text-xl font-heading font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-pink-600 transition-colors duration-300">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>

                  {/* Excerpt */}
                  {post.excerpt && (
                    <p className="text-sm text-gray-600 mb-4 line-clamp-3 leading-relaxed">
                      {post.excerpt}
                    </p>
                  )}

                  {/* Footer */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                    <div className="flex flex-col gap-1">
                      <time
                        dateTime={post.publishedAt || undefined}
                        className="text-xs text-gray-500"
                      >
                        {formatDate(post.publishedAt)}
                      </time>
                      <span className="text-xs text-gray-400">
                        {post.viewCount} lượt xem
                      </span>
                    </div>
                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex items-center text-sm font-medium text-pink-600 hover:text-pink-700 group-hover:translate-x-1 transition-all duration-300"
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
              </motion.article>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
