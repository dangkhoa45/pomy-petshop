import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="max-w-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-3">
          Không tìm thấy trang
        </h1>
        <p className="text-gray-500 mb-8">
          Trang quản lý bài viết bạn đang tìm kiếm không tồn tại.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/admin/posts"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            Danh sách bài viết
          </Link>
          <Link
            href="/admin"
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200 font-medium"
          >
            Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}
