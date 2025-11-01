"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Blog post error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="max-w-md">
        <h2 className="text-3xl font-bold text-red-600 mb-4">
          Lỗi tải bài viết
        </h2>
        <p className="text-gray-600 mb-6">
          {error.message ||
            "Không thể tải nội dung bài viết. Vui lòng thử lại sau."}
        </p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => reset()}
            className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors duration-200 font-medium"
          >
            Thử lại
          </button>
          <Link
            href="/blog"
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200 font-medium"
          >
            Quay lại blog
          </Link>
        </div>
      </div>
    </div>
  );
}
