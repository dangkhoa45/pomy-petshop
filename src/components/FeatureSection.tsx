"use client";

import { motion } from "framer-motion";

export default function FeatureSection() {
  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="bg-transparent text-gray-700 body-font py-20">
      <div className="container px-5 mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h1 className="sm:text-4xl text-3xl font-extrabold text-pink-500 mb-6">
            Dịch Vụ Nổi Bật
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Chúng tôi cung cấp các dịch vụ thú cưng hàng đầu với chất lượng tốt
            nhất, đảm bảo sự hài lòng cho cả bạn và thú cưng của bạn.
          </p>
          <div className="mt-6 flex justify-center">
            <div className="w-16 h-1 rounded-full bg-pink-500"></div>
          </div>
        </div>

        {/* Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Card 1 */}
          <motion.div
            className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
            variants={cardVariant}
          >
            <div className="w-20 h-20 mx-auto bg-pink-100 text-pink-500 rounded-full flex items-center justify-center mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M12 12c4.418 0 8 3.134 8 7H4c0-3.866 3.582-7 8-7z" />
                <path d="M12 8a4 4 0 100-8 4 4 0 000 8z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Cắt Tỉa Thú Cưng
            </h2>
            <p className="text-lg text-gray-600 mb-5">
              Dịch vụ cắt tỉa lông chuyên nghiệp giúp thú cưng của bạn luôn sạch
              và đẹp mắt.
            </p>
            <a className="text-pink-500 inline-flex items-center font-medium">
              Tìm Hiểu Thêm
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
            variants={cardVariant}
          >
            <div className="w-20 h-20 mx-auto bg-pink-100 text-pink-500 rounded-full flex items-center justify-center mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M20 12h-8a4 4 0 100 8h8a4 4 0 100-8z" />
                <path d="M12 4v4M16 4v4M8 4v4" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Dịch Vụ Vệ Sinh
            </h2>
            <p className="text-lg text-gray-600 mb-5">
              Giữ vệ sinh sạch sẽ cho thú cưng với các sản phẩm và dịch vụ tốt
              nhất.
            </p>
            <a className="text-pink-500 inline-flex items-center font-medium">
              Tìm Hiểu Thêm
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            className="p-8 bg-white rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 text-center"
            variants={cardVariant}
          >
            <div className="w-20 h-20 mx-auto bg-pink-100 text-pink-500 rounded-full flex items-center justify-center mb-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-10 h-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3 12l9 9 9-9M9 21V12M15 21V12" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">
              Khách Sạn Thú Cưng
            </h2>
            <p className="text-lg text-gray-600 mb-5">
              Dịch vụ lưu trú an toàn, thoải mái cho thú cưng của bạn khi bạn đi
              xa.
            </p>
            <a className="text-pink-500 inline-flex items-center font-medium">
              Tìm Hiểu Thêm
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
