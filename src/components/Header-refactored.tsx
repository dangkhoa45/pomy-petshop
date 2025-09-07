"use client"  

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaEnvelope, FaFacebook, FaPhoneAlt } from "react-icons/fa";
import { navVariants, linkVariants } from "@/shared/animations";
import { BUSINESS_INFO, NAV_LINKS } from "@/shared/constants";
import type { NavLink } from "@/shared/types";

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string): boolean => pathname === path;

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
              href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}
              className="flex items-center space-x-1 text-gray-600 hover:text-pink-500"
            >
              <FaPhoneAlt className="text-red-400 font-bold" />
              <span className="pl-1 text-red-400 font-bold">{BUSINESS_INFO.phone}</span>
            </a>
            <span className="text-gray-600">|</span>
            <a
              href={`mailto:${BUSINESS_INFO.email}`}
              className="flex items-center space-x-1 text-gray-600 hover:text-pink-600"
            >
              <FaEnvelope className="text-green-600 font-bold" />
              <span className="pl-1 text-green-600 font-bold">
                {BUSINESS_INFO.email}
              </span>
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href={BUSINESS_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-500 hover:text-pink-900 flex items-center space-x-2"
            >
              <FaFacebook />
              <span>Fanpage: {BUSINESS_INFO.name}</span>
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
            {NAV_LINKS.map(({ path, label }: NavLink, index: number) => (
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
                src={BUSINESS_INFO.logo}
                alt={`${BUSINESS_INFO.name} Logo`}
                className="rounded-full"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div className="flex flex-col">
              <span className="md:hidden ml-3 text-3xl font-extrabold text-pink-700">
                {BUSINESS_INFO.name}
              </span>
              <span className="md:hidden ml-3 text-sm font-extrabold text-green-600">
                {BUSINESS_INFO.tagline}
              </span>
            </div>
          </motion.a>

          <div className="lg:w-2/5 inline-flex lg:justify-end mt-6 lg:mt-0">
            <button className="inline-flex items-center bg-pink-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg transform transition duration-300 group hover:scale-105">
              <FaPhoneAlt />
              <Link href={BUSINESS_INFO.facebook}>
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
