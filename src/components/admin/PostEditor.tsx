"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FiEye, FiSave } from "react-icons/fi";

import { generateSlug } from "@/lib/cms/slug";

interface PostEditorProps {
  postId?: string;
  initialData?: {
    title: string;
    slug: string;
    excerpt?: string;
    contentMarkdown: string;
    status: "draft" | "published" | "archived";
    seoTitle?: string;
    seoDescription?: string;
    featuredImage?: string;
    categoryIds?: string[];
    tagIds?: string[];
  };
}

export default function PostEditor({ postId, initialData }: PostEditorProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState(initialData?.title || "");
  const [slug, setSlug] = useState(initialData?.slug || "");
  const [content, setContent] = useState(initialData?.contentMarkdown || "");
  const [excerpt, setExcerpt] = useState(initialData?.excerpt || "");
  const [seoTitle, setSeoTitle] = useState(initialData?.seoTitle || "");
  const [seoDescription, setSeoDescription] = useState(
    initialData?.seoDescription || ""
  );
  const [featuredImage, setFeaturedImage] = useState(
    initialData?.featuredImage || ""
  );
  const [mode, setMode] = useState<"write" | "preview">("write");

  // Auto-generate slug from title
  useEffect(() => {
    if (title && !postId) {
      setSlug(generateSlug(title));
    }
  }, [title, postId]);

  const handleSave = async (status: "draft" | "published", silent = false) => {
    if (!title || !content) {
      alert("Vui lòng nhập tiêu đề và nội dung");
      return;
    }

    setLoading(true);

    try {
      const data = {
        title,
        slug,
        excerpt: excerpt || undefined,
        contentMarkdown: content,
        status,
        seoTitle: seoTitle || undefined,
        seoDescription: seoDescription || undefined,
        featuredImage: featuredImage || undefined,
      };

      const url = postId ? `/api/admin/posts/${postId}` : "/api/admin/posts";
      const method = postId ? "PUT" : "POST";

      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to save post");
      }

      if (!silent) {
        alert(
          status === "published" ? "Bài viết đã được xuất bản!" : "Đã lưu nháp"
        );
        router.push("/admin/posts");
        router.refresh();
      }
    } catch (error) {
      console.error("Error saving post:", error);
      if (!silent) {
        alert(error instanceof Error ? error.message : "Có lỗi xảy ra");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Toolbar */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 flex items-center justify-between">
        <div className="flex gap-2">
          <button
            onClick={() => setMode("write")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              mode === "write"
                ? "bg-blue-100 text-blue-700 font-semibold"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            Soạn thảo
          </button>
          <button
            onClick={() => setMode("preview")}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              mode === "preview"
                ? "bg-blue-100 text-blue-700 font-semibold"
                : "text-gray-600 hover:bg-gray-100"
            }`}
          >
            <FiEye className="inline w-4 h-4 mr-1" />
            Xem trước
          </button>
        </div>

        <div className="flex gap-2">
          <button
            onClick={() => handleSave("draft")}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-gray-700 font-medium rounded-lg hover:bg-gray-50 disabled:opacity-50 transition-colors"
          >
            <FiSave className="w-4 h-4" />
            Lưu nháp
          </button>
          <button
            onClick={() => handleSave("published")}
            disabled={loading}
            className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 disabled:opacity-50 transition-colors"
          >
            {loading ? "Đang lưu..." : "Xuất bản"}
          </button>
        </div>
      </div>

      {/* Editor */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-4">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-4">
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Tiêu đề bài viết..."
              className="w-full text-3xl font-heading font-bold text-gray-900 border-none focus:outline-none focus:ring-0 placeholder:text-gray-400"
            />

            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              placeholder="slug-bai-viet"
              className="w-full text-sm text-gray-500 font-mono border-none focus:outline-none focus:ring-0 placeholder:text-gray-400"
            />

            <div className="border-t pt-4">
              {mode === "write" ? (
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="Viết nội dung bằng Markdown..."
                  className="w-full h-[500px] font-mono text-sm border border-gray-300 rounded-lg p-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <div
                  className="prose max-w-none p-4 border border-gray-300 rounded-lg min-h-[500px]"
                  dangerouslySetInnerHTML={{
                    __html: content.replace(/\n/g, "<br/>"),
                  }}
                />
              )}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="space-y-4">
          {/* SEO Settings */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 space-y-3">
            <h3 className="font-heading font-semibold text-gray-900 text-base">
              SEO
            </h3>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                SEO Title
              </label>
              <input
                type="text"
                value={seoTitle}
                onChange={(e) => setSeoTitle(e.target.value)}
                placeholder="Tiêu đề SEO (60 ký tự)"
                maxLength={60}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="mt-1 text-xs text-gray-500">{seoTitle.length}/60</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Meta Description
              </label>
              <textarea
                value={seoDescription}
                onChange={(e) => setSeoDescription(e.target.value)}
                placeholder="Mô tả SEO (160 ký tự)"
                maxLength={160}
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <p className="mt-1 text-xs text-gray-500">
                {seoDescription.length}/160
              </p>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Featured Image URL
              </label>
              <input
                type="url"
                value={featuredImage}
                onChange={(e) => setFeaturedImage(e.target.value)}
                placeholder="https://..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Excerpt */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 space-y-3">
            <h3 className="font-heading font-semibold text-gray-900 text-base">
              Trích dẫn
            </h3>
            <textarea
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
              placeholder="Tóm tắt ngắn gọn..."
              rows={4}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Markdown Cheat Sheet */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4 space-y-2">
            <h3 className="font-heading font-semibold text-gray-900 text-sm">
              Markdown Quick Guide
            </h3>
            <div className="text-xs space-y-1 text-gray-600 font-mono">
              <p># Heading 1</p>
              <p>## Heading 2</p>
              <p>**bold**</p>
              <p>*italic*</p>
              <p>[link](url)</p>
              <p>![image](url)</p>
              <p>- List item</p>
              <p>```code```</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
