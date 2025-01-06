"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTelegram } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-green-50 text-gray-300">
      <div className="container px-5 py-16 mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <a className="flex items-center text-white">
            <Image
              src="/images/logo.jpg"
              alt="POMY PETSHOP Logo"
              className="w-12 h-12 rounded-full"
              width={48}
              height={48}
            />
            <span className="ml-3 text-2xl text-pink-400 font-semibold">
              POMY PETSHOP
            </span>
          </a>
          <p className="text-gray-600 text-sm">
            31 Phú Lợi, Sóc Trăng, TPST <br />
            Cắt Tỉa, Vệ Sinh, Khách Sạn Thú Cưng.
          </p>
          <p className="text-gray-600 text-sm">
            Hotline: <Link href="tel:0708039333">070 803 9333</Link>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-semibold text-pink-300">Về chúng tôi</h3>
          <nav className="list-none space-y-2">
            <li>
              <Link
                className="text-gray-600 hover:text-pink-500 transition duration-300"
                href="/"
              >
                Trang chủ
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-600 hover:text-pink-500 transition duration-300"
                href="/about"
              >
                Giới thiệu
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-600 hover:text-pink-500 transition duration-300"
                href="/services"
              >
                Dịch vụ
              </Link>
            </li>
            <li>
              <Link
                className="text-gray-600 hover:text-pink-500 transition duration-300"
                href="/contact"
              >
                Liên hệ
              </Link>
            </li>
          </nav>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-semibold text-pink-300">Liên hệ</h3>
          <nav className="list-none space-y-2">
            <li>
              <a
                href="tel:0708039333"
                className="text-gray-600 hover:text-pink-500 transition duration-300 flex items-center"
              >
                070 803 9333
              </a>
            </li>
            <li>
              <a
                href="mailto:tust3000@gmail.com"
                className="text-gray-600 hover:text-pink-500 transition duration-300 flex items-center"
              >
                tust3000@gmail.com
              </a>
            </li>
          </nav>
          <div className="flex space-x-4">
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
              className="hover:text-pink-500 text-gray-600 "
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
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-semibold text-pink-300">Dịch vụ nổi bật</h3>
          <ul className="list-none space-y-2">
            <li className="text-gray-600 hover:text-pink-500 transition duration-300">
              <Link href="/services">Cắt tỉa lông</Link>
            </li>
            <li className="text-gray-600 hover:text-pink-500 transition duration-300">
              <Link href="/services">Vệ sinh toàn thân</Link>
            </li>
            <li className="text-gray-600 hover:text-pink-500 transition duration-300">
              <Link href="/services">Khách sạn thú cưng</Link>
            </li>
          </ul>
        </motion.div>
      </div>

      <div className="bg-green-200 py-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-600 text-sm text-center sm:text-left"
          >
            © 2025 POMY PETSHOP - All rights reserved.
          </motion.p>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gray-600 text-sm text-center sm:text-right"
          >
            Design by{" "}
            <a
              href="https://www.facebook.com/Khoai4145/"
              className="hover:text-pink-500 text-gray-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              @dangkhoa
            </a>
          </motion.span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
