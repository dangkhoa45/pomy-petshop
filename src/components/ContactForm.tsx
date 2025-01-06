"use client";

import { motion } from "framer-motion";

export default function ContactForm() {
  const formVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-green-50 text-gray-700 body-font py-20">
      <div className="container mx-auto px-5 flex flex-wrap items-center">
        <motion.div
          className="lg:w-3/5 md:w-1/2 pr-0 mb-10 md:mb-0"
          initial="hidden"
          whileInView="visible"
          variants={formVariant}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h1 className="text-4xl font-extrabold text-pink-500 mb-6">
            Liên Hệ Với Chúng Tôi
          </h1>
          <p className="text-lg text-gray-600 leading-relaxed">
            Nếu bạn có bất kỳ câu hỏi nào về dịch vụ hoặc muốn đặt lịch, đừng
            ngần ngại liên hệ với chúng tôi. Đội ngũ của chúng tôi sẵn sàng hỗ
            trợ bạn!
          </p>
        </motion.div>

        <motion.div
          className="lg:w-2/6 md:w-1/2 bg-white shadow-lg rounded-lg p-8"
          initial="hidden"
          whileInView="visible"
          variants={formVariant}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-5">Đăng Ký</h2>

          <div className="relative mb-4">
            <label
              htmlFor="full-name"
              className="block text-sm text-gray-600 font-medium"
            >
              Họ và Tên
            </label>
            <input
              type="text"
              id="full-name"
              name="full-name"
              placeholder="Nhập họ và tên"
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-3 px-4 transition-all duration-200"
            />
          </div>

          <div className="relative mb-4">
            <label
              htmlFor="email"
              className="block text-sm text-gray-600 font-medium"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Nhập email của bạn"
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-3 px-4 transition-all duration-200"
            />
          </div>

          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="block text-sm text-gray-600 font-medium"
            >
              Tin Nhắn
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Nhập tin nhắn của bạn"
              className="w-full bg-gray-100 rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-3 px-4 transition-all duration-200 h-32 resize-none"
            ></textarea>
          </div>

          <button className="w-full text-white bg-pink-500 py-3 px-6 rounded-lg hover:bg-pink-600 transition-all duration-300 shadow-lg">
            Gửi Ngay
          </button>
          <p className="text-xs text-gray-500 mt-3 text-center">
            Chúng tôi sẽ liên hệ lại với bạn trong thời gian sớm nhất.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
