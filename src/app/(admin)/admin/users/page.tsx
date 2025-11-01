import type { Metadata } from "next";
import { FiUsers } from "react-icons/fi";

/**
 * Users page metadata
 */
export const metadata: Metadata = {
  title: "Người dùng",
  robots: {
    index: false,
    follow: false,
  },
};

/**
 * Admin Users Page
 * Manage system users and permissions
 */
export default function UsersPage(): React.JSX.Element {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-heading font-bold text-gray-900 tracking-tight">
          Người dùng
        </h1>
        <p className="mt-2 text-gray-600 text-sm">
          Quản lý người dùng và phân quyền hệ thống
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-12 text-center">
        <div className="flex justify-center mb-4">
          <div className="p-4 bg-blue-100 text-blue-600 rounded-full">
            <FiUsers className="w-8 h-8" />
          </div>
        </div>
        <h2 className="text-xl font-heading font-semibold text-gray-900 mb-2">
          Trang quản lý người dùng
        </h2>
        <p className="text-gray-600">
          Tính năng đang được phát triển. Sẽ sớm ra mắt!
        </p>
      </div>
    </div>
  );
}
