"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BiLogoGmail } from "react-icons/bi";
import {
  FaAngleRight,
  FaFacebook,
  FaHome,
  FaInstagram,
  FaPhoneAlt,
  FaTelegram,
} from "react-icons/fa";
import { SiZalo } from "react-icons/si";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-green-100 to-pink-300  text-gray-300">
      <div className="container px-5 py-16 mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-4"
        >
          <motion.a className="flex items-center text-white">
            <Image
              src="/images/logo.jpg"
              alt="POMY PETSHOP Logo"
              className="w-12 h-12 rounded-full"
              width={48}
              height={48}
            />
            <span className="ml-3 text-2xl text-pink-400 font-extrabold">
              POMY PETSHOP
            </span>
          </motion.a>
          <p className="text-sm text-pink-500 font-semibold flex items-center">
            Cắt Tỉa, Vệ Sinh, Khách Sạn Thú Cưng.
          </p>
          <p className="text-gray-600 text-sm italic">
            Với đội ngũ bác sĩ thú y giàu kinh nghiệm và trang thiết bị hiện
            đại, chúng tôi cam kết mang đến những dịch vụ y tế chất lượng cao,
            từ khám chữa bệnh, tiêm phòng, đến tư vấn dinh dưỡng và chăm sóc
            hàng ngày.
          </p>
          <div className="flex space-x-8">
            <a
              href="https://www.facebook.com/cuahangthucungPOMY"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 text-gray-600 hover:animate-bounce"
            >
              <FaFacebook />
            </a>
            <a
              href="https://zalo.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 text-gray-600 hover:animate-bounce "
            >
              <SiZalo />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 text-gray-600 hover:animate-bounce"
            >
              <FaInstagram />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pink-500 text-gray-600 hover:animate-bounce"
            >
              <FaTelegram />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-semibold text-pink-300">Về chúng tôi</h3>
          <ul className="list-none space-y-2">
            <li className="flex items-center text-gray-500 hover:text-pink-500 transition duration-300">
              <FaAngleRight className="mr-2" />
              <Link href="/">Trang chủ</Link>
            </li>
            <li className="flex items-center text-gray-500 hover:text-pink-500 transition duration-300">
              <FaAngleRight className="mr-2" />
              <Link href="/about">Giới thiệu</Link>
            </li>
            <li className="flex items-center text-gray-500 hover:text-pink-500 transition duration-300">
              <FaAngleRight className="mr-2" />
              <Link href="/services">Dịch vụ</Link>
            </li>
            <li className="flex items-center text-gray-500 hover:text-pink-500 transition duration-300">
              <FaAngleRight className="mr-2" />
              <Link href="/contact">Liên hệ</Link>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-semibold text-pink-300">
            Dịch vụ nổi bật
          </h3>
          <ul className="list-none space-y-2">
            <li className="flex items-center text-gray-500 hover:text-pink-500 transition duration-300 italic">
              <FaAngleRight className="mr-2" />{" "}
              <Link href="/services">Cắt tỉa lông</Link>
            </li>
            <li className="flex items-center text-gray-500 hover:text-pink-500 transition duration-300 italic">
              <FaAngleRight className="mr-2" />{" "}
              <Link href="/services">Vệ sinh toàn thân</Link>
            </li>
            <li className="flex items-center text-gray-500 hover:text-pink-500 transition duration-300 italic">
              <FaAngleRight className="mr-2" />{" "}
              <Link href="/services">Khách sạn thú cưng</Link>
            </li>
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-4"
        >
          <h3 className="text-lg font-semibold text-pink-300">Liên hệ</h3>
          <p className="text-sm hover:text-pink-500 text-gray-500 flex items-center italic">
            <FaHome className="mr-2" />
            <Link href="https://maps.app.goo.gl/g8ENXpPKNb9vrRET9">
              31 Phú Lợi, Phường 2, Sóc Trăng,{" "}
              <br className="hidden lg:block" /> TP Sóc Trăng, Việt Nam.
            </Link>
          </p>
          <p className="text-sm hover:text-pink-500 text-gray-500 flex items-center italic">
            <FaPhoneAlt className="mr-2" />
            <Link href="tel:0708039333">070 803 9333</Link>
          </p>
          <p className=" text-sm hover:text-pink-500 text-gray-500 flex items-center italic">
            <BiLogoGmail className="mr-2" />
            <Link href="mailto:tust3000@gmail.com">tust3000@gmail.com</Link>
          </p>
        </motion.div>
      </div>

      <div className="bg-gradient-to-r from-green-100 to-pink-200 p-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between m-1">
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
            className="text-gray-600 text-sm text-center sm:text-right "
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
