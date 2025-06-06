"use client"  

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaEnvelope, FaFacebook, FaPhoneAlt } from "react-icons/fa";

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

type NavLink = {
  path: string;
  label: string;
};

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string): boolean => pathname === path;

  const navLinks: NavLink[] = [
    { path: "/", label: "Trang chủ" },
    { path: "/about", label: "Giới thiệu" },
    { path: "/services", label: "Dịch vụ" },
    { path: "/contact", label: "Liên hệ" },
  ];

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
              className="flex items-center space-x-1 text-gray-600 hover:text-pink-500"
            >
              <FaPhoneAlt className="text-red-400 font-bold" />
              <span className="pl-1 text-red-400 font-bold">070 803 9333</span>
            </a>
            <span className="text-gray-600">|</span>
            <a
              href="mailto:tust3000@gmail.com"
              className="flex items-center space-x-1 text-gray-600 hover:text-pink-600"
            >
              <FaEnvelope className="text-green-600 font-bold" />
              <span className="pl-1 text-green-600 font-bold">
                tust3000@gmail.com
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://www.facebook.com/PetshopPomy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-900 flex items-center space-x-2"
            >
              <FaFacebook />
              <span>Fanpage: Pomy petshop</span>
            </a>
          </div>
        </div>
      </motion.div>

      <motion.header
        className={`sticky top-0 z-50 bg-gradient-to-r from-green-100 to-pink-300 shadow-md transition-all ${
          isScrolled ? "shadow-lg" : ""
        }`}
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
            {navLinks.map(({ path, label }: NavLink, index: number) => (
              <motion.div key={index} variants={linkVariants}>
                <Link
                  href={path}
                  className={`mr-5 relative group font-body ${
                    isActive(path)
                      ? "text-pink-600 font-bold border-b-4 border-pink-600"
                      : "text-pink-500"
                  } hover:border-b-4 hover:border-pink-500 transition-all duration-300 transform hover:scale-110 text-sm md:text-lg`}
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          <motion.a
            href="/"
            className="flex order-first lg:order-none lg:w-1/5 items-center text-gray-900 lg:justify-center mb-4 md:mb-0 hover:text-pink-500 transform transition duration-300 hover:scale-110"
          >
            <div
              className={`w-[85px] h-[85px] ${
                isScrolled
                  ? "md:w-[90px] md:h-[90px]"
                  : "md:w-[140px] md:h-[140px]"
              } relative transform hover:rotate-12`}
            >
              <Image
                src="/images/pomy-petshop-logo.jpg"
                alt="POMY PETSHOP Logo"
                className="rounded-full"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="md:hidden ml-3 text-3xl font-extrabold text-pink-700">
                POMY Petshop
              </span>
              <span className="md:hidden ml-3 text-sm font-extrabold text-green-600">
                Cắt Tỉa, Vệ Sinh, Khách Sạn Thú Cưng
              </span>
            </div>
          </motion.a>

          <div className="lg:w-2/5 inline-flex lg:justify-end mt-6 lg:mt-0">
            <button className="inline-flex items-center bg-pink-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg transform transition duration-300 group hover:scale-105">
              <FaPhoneAlt />
              <Link href="https://www.facebook.com/PetshopPomy">
                <span className="ml-3 group-hover:text-pink-200 transition-colors duration-300 text-white">
                  Đặt SPA - Hotel
                </span>
              </Link>
            </button>
          </div>
        </div>
      </motion.header>
    </>
  );
}
