"use client";

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Contact page error:", error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="max-w-md">
        <h2 className="text-3xl font-bold text-red-600 mb-4">
          Lỗi tải form liên hệ
        </h2>
        <p className="text-gray-600 mb-6">
          {error.message || "Không thể tải form liên hệ. Vui lòng thử lại sau."}
        </p>
        <button
          onClick={() => reset()}
          className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors duration-200 font-medium"
        >
          Thử lại
        </button>
      </div>
    </div>
  );
}
