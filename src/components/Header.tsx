"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaTelegram,
} from "react-icons/fa";
import { SiZalo } from "react-icons/si";

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.2 },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Header() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-gradient-to-r from-green-100 to-pink-200 text-white text-sm"
      >
        <div className="container mx-auto flex justify-between items-center py-2 px-4">
          <div className="flex items-center space-x-4">
            <a
              href="tel:0708039333"
              className="flex items-center space-x-1 hover:text-pink-500 text-gray-600"
            >
              <FaPhoneAlt /> <span className="pl-1">070 803 9333</span>
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="mailto:tust3000@gmail.com"
              className="flex items-center space-x-1 hover:text-pink-600 text-gray-600"
            >
              <FaEnvelope /> <span>tust3000@gmail.com</span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://www.facebook.com/cuahangthucungPOMY"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 text-gray-600"
            >
              <FaFacebook />
            </a>
            <a
              href="https://zalo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 text-gray-600"
            >
              <SiZalo />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 text-gray-600"
            >
              <FaInstagram />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 text-gray-600"
            >
              <FaTelegram />
            </a>
          </div>
        </div>
      </motion.div>

      <motion.header
        className="text-gray-300 body-font bg-gradient-to-r from-green-100 to-pink-300 sticky top-0 z-50 shadow-md"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <motion.nav
            className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto font-dosis font-extrabold"
            initial="hidden"
            animate="visible"
            variants={navVariants}
          >
            <motion.div variants={linkVariants}>
              <Link
                href="/"
                className={`mr-5 relative group font-body ${
                  isActive("/")
                    ? "text-pink-600 font-bold border-b-4 border-pink-600"
                    : "text-pink-500"
                } hover:border-b-4 hover:border-pink-500 transition-all duration-300 transform hover:scale-110 font-extrabold text-lg`}
              >
                Trang chủ
              </Link>
            </motion.div>

            <motion.div variants={linkVariants}>
              <Link
                href="/about"
                className={`mr-5 relative group font-body ${
                  isActive("/about")
                    ? "text-pink-600 font-bold border-b-4 border-pink-600"
                    : "text-pink-500"
                } hover:border-b-4 hover:border-pink-500 transition-all duration-300 transform hover:scale-110 font-extrabold text-lg`}
              >
                Giới thiệu
              </Link>
            </motion.div>

            <motion.div variants={linkVariants}>
              <Link
                href="/services"
                className={`mr-5 relative group font-body ${
                  isActive("/services")
                    ? "text-pink-600 font-bold border-b-4 border-pink-600"
                    : "text-pink-500"
                } hover:border-b-4 hover:border-pink-500 transition-all duration-300 transform hover:scale-110 font-extrabold text-lg`}
              >
                Dịch vụ
              </Link>
            </motion.div>

            <motion.div variants={linkVariants}>
              <Link
                href="/contact"
                className={`relative group font-body ${
                  isActive("/contact")
                    ? "text-pink-600 font-bold border-b-4 border-pink-600"
                    : "text-pink-500"
                } hover:border-b-4 hover:border-pink-500 transition-all duration-300 transform hover:scale-110 font-extrabold text-lg`}
              >
                Liên hệ
              </Link>
            </motion.div>
          </motion.nav>

          <motion.a
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0 hover:text-pink-500 transition duration-300 transform hover:scale-110"
          >
            <Image
              src="/images/logo.jpg"
              alt="POMY PETSHOP Logo"
              className="w-[85px] h-[85px] rounded-full transform transition duration-500 hover:rotate-12"
              width={85}
              height={85}
            />
          </motion.a>

          <div className="lg:w-2/5 inline-flex lg:justify-end mt-6 lg:mt-0">
            <button className="animate-bounce inline-flex items-center bg-pink-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform group">
              <FaPhoneAlt />
              <span className="ml-3 group-hover:text-pink-200 transition-colors duration-300">
                Đặt SPA - Hotel
              </span>
            </button>
          </div>
        </div>
      </motion.header>
    </>
  );
}
