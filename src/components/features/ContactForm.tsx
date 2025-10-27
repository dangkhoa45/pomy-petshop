"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { BUSINESS_INFO } from "@/shared/constants";

interface FormData {
  fullName: string;
  facebook: string;
  phone: string;
  message: string;
}

const formVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    facebook: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validatePhone = (phone: string): boolean => {
    const phoneRegex = /^[0-9]{9,11}$/;
    return phoneRegex.test(phone);
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    if (
      !formData.fullName ||
      !formData.facebook ||
      !formData.phone ||
      !formData.message
    ) {
      setErrorMessage("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    if (!validatePhone(formData.phone)) {
      setErrorMessage("Số điện thoại không hợp lệ! Vui lòng nhập từ 9-11 số.");
      return;
    }

    setErrorMessage("");
    setIsSubmitted(true);

    setFormData({ fullName: "", facebook: "", phone: "", message: "" });
  };

  return (
    <section className="bg-transparent text-gray-700 body-font pt-0 pb-20">
      <div className="container mx-auto px-5 flex flex-wrap items-center">
        <motion.div
          className="lg:w-3/5 md:w-1/2 pr-0 mb-10 md:mb-0"
          initial="hidden"
          whileInView="visible"
          variants={formVariant}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2 className="text-4xl font-extrabold text-pink-500 mb-6">
            Liên Hệ Với Chúng Tôi
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed mb-4 max-w-xl">
            Chúng tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn. Hãy để lại thông
            tin, và đội ngũ của chúng tôi sẽ liên lạc lại trong thời gian sớm
            nhất.
          </p>
          <p className="text-base text-gray-500 pb-2">
            <a href={`mailto:${BUSINESS_INFO.email}`}>
              📧 Email: {BUSINESS_INFO.email}
            </a>
          </p>
          <p className="text-base text-gray-500">
            <a href={`tel:${BUSINESS_INFO.phone.replace(/\s+/g, "")}`}>
              📞 Hotline: {BUSINESS_INFO.phone}
            </a>
          </p>
        </motion.div>

        <motion.div
          className="w-full lg:w-2/6 md:w-1/2 bg-white shadow-lg rounded-lg p-8"
          initial="hidden"
          whileInView="visible"
          variants={formVariant}
          viewport={{ once: true, amount: 0.3 }}
        >
          {errorMessage && (
            <p className="text-red-500 text-sm m-4 text-center bg-green-200 p-3 font-bold">
              {errorMessage}
            </p>
          )}
          <h2 className="text-2xl font-bold text-gray-900 mb-5">
            Đăng Ký Ngay
          </h2>

          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label
                htmlFor="fullName"
                className="block text-sm text-gray-600 font-medium pb-2"
              >
                Họ và Tên
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Nhập họ và tên"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-3 px-4 transition-all duration-200"
              />
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="facebook"
                className="block text-sm text-gray-600 font-medium pb-2"
              >
                Link Facebook
              </label>
              <input
                type="url"
                id="facebook"
                name="facebook"
                value={formData.facebook}
                onChange={handleChange}
                placeholder="Nhập link Facebook"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-3 px-4 transition-all duration-200"
              />
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="phone"
                className="block text-sm text-gray-600 font-medium pb-2"
              >
                Số Điện Thoại
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Nhập số điện thoại"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-3 px-4 transition-all duration-200"
              />
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="block text-sm text-gray-600 font-medium pb-2"
              >
                Tin Nhắn
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Nhập tin nhắn của bạn"
                className="w-full bg-gray-100 rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-3 px-4 transition-all duration-200 h-32 resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full text-white bg-pink-500 py-3 px-6 rounded-lg hover:bg-pink-600 transition-all duration-300 shadow-lg"
            >
              Gửi Ngay
            </button>
          </form>

          {isSubmitted && (
            <p className="text-green-500 text-sm mt-4 text-center">
              Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi trong thời gian sớm
              nhất.
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
