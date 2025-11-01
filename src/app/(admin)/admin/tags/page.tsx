import type { Metadata } from "next";
import { FiTag } from "react-icons/fi";

/**
 * Tags page metadata
 */
export const metadata: Metadata = {
  title: "Thẻ",
  robots: {
    index: false,
    follow: false,
  },
};

/**
 * Admin Tags Page
 * Manage blog post tags
 */
export default function TagsPage(): React.JSX.Element {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-heading font-bold text-gray-900 tracking-tight">
          Thẻ
        </h1>
        <p className="mt-2 text-gray-600 text-sm">
          Quản lý các thẻ tag cho bài viết
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-blue-100 text-blue-600 rounded-full">
            <FiTag className="w-8 h-8" />
          </div>
        </div>
        <h2 className="text-xl font-heading font-semibold text-gray-900 mb-2">
          Trang quản lý thẻ
        </h2>
        <p className="text-gray-600">
          Tính năng đang được phát triển. Sẽ sớm ra mắt!
        </p>
      </div>
    </div>
  );
}
