"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaTelegram,
} from "react-icons/fa";

import { SiZalo } from "react-icons/si";

export default function Header() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="bg-green-200 text-white text-sm"
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
        className="text-gray-300 body-font bg-white sticky top-0 z-50 shadow-md"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto font-dosis font-extrabold">
            <Link
              className="mr-5 relative group font-body  border-pink-500 text-pink-500 hover:text-pink-500 transition duration-300 transform hover:scale-110 font-extrabold text-lg"
              href="/"
            >
              Trang chủ{" "}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              className="mr-5 relative group font-body text-pink-500 hover:text-pink-500 transition duration-300 transform hover:scale-110 font-extrabold text-lg"
              href="/about"
            >
              Giới thiệu{" "}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              className="mr-5 relative group font-body text-pink-500 hover:text-pink-500 transition duration-300 transform hover:scale-110 font-extrabold text-lg"
              href="/services"
            >
              Dịch vụ{" "}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              className="relative group font-body text-pink-500 hover:text-pink-500 transition duration-300 transform hover:scale-110 font-extrabold text-lg"
              href="/contact"
            >
              Liên hệ{" "}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
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

          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0 mt-5 lg:mt-0">
            <button className="animate-bounce inline-flex items-center bg-pink-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform group">
              <FaPhoneAlt />
              <span className="ml-2 group-hover:text-pink-200 transition-colors duration-300">
                Đặt SPA - Hotel
              </span>
            </button>
          </div>
        </div>
      </motion.header>
    </>
  );
}
