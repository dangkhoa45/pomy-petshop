import Image from "next/image";
import Link from "next/link";
import {
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaPhoneAlt,
  FaTelegram,
  FaTiktok,
} from "react-icons/fa";

export default function Header() {
  return (
    <>
      <div className="bg-pink-700 text-white text-sm">
        <div className="container mx-auto flex justify-between items-center py-2 px-4">
          <div className="flex items-center space-x-4">
            <a
              href="tel:0708039333"
              className="flex items-center space-x-1 hover:text-gray-300"
            >
              <FaPhoneAlt /> <span className="pl-1">070 803 9333</span>
            </a>
            <span>|</span>
            <a
              href="mailto:tust3000@gmail.com"
              className="flex items-center space-x-1 hover:text-gray-300"
            >
              <FaEnvelope /> <span>tust3000@gmail.com</span>
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaTiktok />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-300"
            >
              <FaTelegram />
            </a>
          </div>
        </div>
      </div>
      <header className="text-gray-300 body-font bg-white sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto font-dosis font-extrabold">
            <Link
              className="mr-5 relative group font-body text-gray-600 hover:text-pink-500 transition duration-300 transform hover:scale-110 font-extrabold text-lg"
              href="/"
            >
              Trang chủ{" "}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              className="mr-5 relative group font-body text-gray-600 hover:text-pink-500 transition duration-300 transform hover:scale-110 font-extrabold text-lg"
              href="/about"
            >
              Giới thiệu{" "}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              className="mr-5 relative group font-body text-gray-600 hover:text-pink-500 transition duration-300 transform hover:scale-110 font-extrabold text-lg"
              href="/services"
            >
              Dịch vụ{" "}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link
              className="relative group font-body text-gray-600 hover:text-pink-500 transition duration-300 transform hover:scale-110 font-extrabold text-lg"
              href="/contact"
            >
              Liên hệ{" "}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>
          <a className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-gray-900 lg:items-center lg:justify-center mb-4 md:mb-0 hover:text-pink-500 transition duration-300 transform hover:scale-110">
            <Image
              src="/images/logo.jpg"
              alt="POMY PETSHOP Logo"
              className="w-[85px] h-[85px] rounded-full transform transition duration-500 hover:rotate-12"
              width={85}
              height={85}
            />
          </a>

          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0 mt-5 lg:mt-0">
            <button className="animate-bounce inline-flex items-center bg-pink-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg transition-all duration-300 ease-in-out transform group">
              <FaPhoneAlt />
              <span className="ml-2 group-hover:text-pink-200 transition-colors duration-300">
                Đặt Lịch Khám
              </span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
