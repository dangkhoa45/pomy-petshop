import type { Metadata } from "next";
import { FiFolder } from "react-icons/fi";

/**
 * Categories page metadata
 */
export const metadata: Metadata = {
  title: "Chuyên mục",
  robots: {
    index: false,
    follow: false,
  },
};

/**
 * Admin Categories Page
 * Manage blog post categories
 */
export default function CategoriesPage(): React.JSX.Element {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-heading font-bold text-gray-900 tracking-tight">
          Chuyên mục
        </h1>
        <p className="mt-2 text-gray-600 text-sm">
          Quản lý các chuyên mục blog
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-blue-100 text-blue-600 rounded-full">
            <FiFolder className="w-8 h-8" />
          </div>
        </div>
        <h2 className="text-xl font-heading font-semibold text-gray-900 mb-2">
          Trang quản lý chuyên mục
        </h2>
        <p className="text-gray-600">
          Tính năng đang được phát triển. Sẽ sớm ra mắt!
        </p>
      </div>
    </div>
  );
}
