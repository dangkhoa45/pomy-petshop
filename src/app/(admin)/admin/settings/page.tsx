import type { Metadata } from "next";

/**
 * Settings page metadata
 */
export const metadata: Metadata = {
  title: "Cài đặt",
  robots: {
    index: false,
    follow: false,
  },
};

/**
 * Admin Settings Page
 * Placeholder for system settings management
 */
export default function SettingsPage(): React.JSX.Element {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Cài đặt hệ thống</h1>
        <p className="mt-2 text-gray-600">
          Quản lý cấu hình và tùy chỉnh hệ thống CMS
        </p>
      </div>

      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Cài đặt chung
        </h2>
        <p className="text-gray-600">Trang này đang được phát triển...</p>
      </div>
    </div>
  );
}
