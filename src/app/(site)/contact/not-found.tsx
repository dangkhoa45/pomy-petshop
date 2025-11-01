import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
      <div className="max-w-lg">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Không tìm thấy trang
        </h1>
        <p className="text-gray-500 mb-8">
          Trang liên hệ bạn đang tìm kiếm không tồn tại.
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/contact"
            className="px-6 py-3 bg-pink-500 text-white rounded-lg hover:bg-pink-600 transition-colors duration-200 font-medium"
          >
            Liên hệ
          </Link>
          <Link
            href="/"
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors duration-200 font-medium"
          >
            Trang chủ
          </Link>
        </div>
      </div>
    </div>
  );
}
