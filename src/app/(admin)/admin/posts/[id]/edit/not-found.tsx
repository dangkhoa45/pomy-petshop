import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <div className="max-w-lg">
        <h1 className="text-5xl font-bold text-gray-800 mb-3">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-3">
          Không tìm thấy bài viết
        </h2>
        <p className="text-gray-500 mb-8">
          Bài viết bạn muốn chỉnh sửa không tồn tại hoặc đã bị xóa.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/admin/posts/new"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200 font-medium"
          >
            Tạo bài viết mới
          </Link>
          <Link
            href="/admin/posts"
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200 font-medium"
          >
            Danh sách bài viết
          </Link>
        </div>
      </div>
    </div>
  );
}
