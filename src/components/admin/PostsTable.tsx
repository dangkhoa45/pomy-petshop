"use client";

import Link from "next/link";
import { useState } from "react";
import { FiEdit2, FiEye, FiTrash2 } from "react-icons/fi";

import type { Post } from "@/lib/db/schema";

interface PostsTableProps {
  posts: Post[];
}

export default function PostsTable({ posts: initialPosts }: PostsTableProps) {
  const [posts, setPosts] = useState(initialPosts);
  const [filter, setFilter] = useState<"all" | "draft" | "published">("all");

  const filteredPosts = posts.filter((post) => {
    if (filter === "all") return true;
    return post.status === filter;
  });

  const handleDelete = async (id: string) => {
    if (!confirm("Bạn có chắc muốn xóa bài viết này?")) return;

    try {
      const response = await fetch(`/api/admin/posts/${id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        setPosts(posts.filter((p) => p.id !== id));
      } else {
        alert("Không thể xóa bài viết");
      }
    } catch (error) {
      console.error("Error deleting post:", error);
      alert("Có lỗi xảy ra");
    }
  };

  return (
    <div>
      {/* Filters */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex gap-2">
          {(["all", "draft", "published"] as const).map((status) => (
            <button
              key={status}
              onClick={() => setFilter(status)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                filter === status
                  ? "bg-blue-100 text-blue-700 font-semibold"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {status === "all"
                ? "Tất cả"
                : status === "draft"
                ? "Nháp"
                : "Đã xuất bản"}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Tiêu đề
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Trạng thái
              </th>
              <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Cập nhật
              </th>
              <th className="px-6 py-3 text-right text-xs font-semibold text-gray-600 uppercase tracking-wider">
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredPosts.length === 0 ? (
              <tr>
                <td colSpan={4} className="px-6 py-8 text-center text-gray-500">
                  Không có bài viết nào
                </td>
              </tr>
            ) : (
              filteredPosts.map((post) => (
                <tr
                  key={post.id}
                  className="hover:bg-gray-50 transition-colors"
                >
                  <td className="px-6 py-4">
                    <div className="text-sm font-semibold text-gray-900">
                      {post.title}
                    </div>
                    <div className="text-sm text-gray-500 font-mono">
                      {post.slug}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
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
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(post.updatedAt).toLocaleDateString("vi-VN")}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end gap-2">
                      {post.status === "published" && (
                        <Link
                          href={`/blog/${post.slug}`}
                          target="_blank"
                          className="text-gray-600 hover:text-gray-900"
                        >
                          <FiEye className="w-4 h-4" />
                        </Link>
                      )}
                      <Link
                        href={`/admin/posts/${post.id}/edit`}
                        className="text-blue-600 hover:text-blue-900"
                      >
                        <FiEdit2 className="w-4 h-4" />
                      </Link>
                      <button
                        onClick={() => handleDelete(post.id)}
                        className="text-red-600 hover:text-red-900"
                      >
                        <FiTrash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
