"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaAngleRight, FaFacebook, FaHome, FaPhoneAlt } from "react-icons/fa";

import { BUSINESS_INFO, NAV_LINKS, SERVICES } from "@/shared/constants";

function Footer() {
  useEffect(() => {
    const fbScript = document.createElement("script");
    fbScript.async = true;
    fbScript.defer = true;
    fbScript.crossOrigin = "anonymous";
    fbScript.src =
      "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v15.0";
    document.body.appendChild(fbScript);

    return () => {
      // Check if script still exists before removing
      if (document.body.contains(fbScript)) {
        document.body.removeChild(fbScript);
      }
    };
  }, []);
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
              src={BUSINESS_INFO.logo}
              alt={`${BUSINESS_INFO.name} Logo`}
              className="w-[56px] h-[56px] md:w-16 md:h-16 rounded-full"
              width={64}
              height={64}
            />
            <span className="ml-3 text-2xl text-pink-600 font-extrabold">
              {BUSINESS_INFO.name}
            </span>
          </motion.a>
          <p className="text-md text-green-800 font-semibold flex items-center">
            {BUSINESS_INFO.tagline}
          </p>
          <p className="text-gray-600 text-md italic">
            Dịch vụ tại Pomy Petshop bao gồm cắt tỉa, vệ sinh, khách sạn dành
            cho thú cưng. Với đội ngũ chăm sóc chuyên nghiệp và trang thiết bị
            hiện đại, chúng tôi cam kết mang lại sự chăm sóc tận tâm và chất
            lượng cao cho thú cưng của bạn
          </p>
          <div className="flex flex-col space-y-3">
            <a
              href={BUSINESS_INFO.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className=" flex  space-x-2 hover:underline text-pink-600 hover:animate-bounce"
            >
              <FaFacebook className="w-6 h-6" />
              <span>Fanpage: {BUSINESS_INFO.name}</span>
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-3"
        >
          <h3 className="text-lg font-semibold text-pink-500">Về chúng tôi</h3>
          <ul className="list-none space-y-2">
            {NAV_LINKS.map(({ path, label }, index) => (
              <li key={index} className="flex items-center text-gray-600 hover:text-pink-500 transition duration-300">
                <FaAngleRight className="mr-2" />
                <Link href={path}>{label}</Link>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="space-y-3"
        >
          <h3 className="text-lg font-semibold text-pink-500">
            Dịch vụ nổi bật
          </h3>
          <ul className="list-none space-y-2">
            {SERVICES.map((service, index) => (
              <li key={index} className="flex items-center text-gray-600 hover:text-pink-500 transition duration-300 italic">
                <FaAngleRight className="mr-2" />{" "}
                <Link href="/services">{service}</Link>
              </li>
            ))}
          </ul>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="space-y-3"
        >
          <h3 className="text-lg font-semibold text-pink-500">Liên hệ</h3>
          <p className="text-sm hover:text-pink-500 text-gray-600 flex items-center italic">
            <FaHome className="mr-2" />
            <Link href={BUSINESS_INFO.mapsUrl}>
              {BUSINESS_INFO.address}
            </Link>
          </p>
          <p className="text-sm hover:text-pink-500 text-gray-600 flex items-center italic">
            <FaPhoneAlt className="mr-2" />
            <Link href={`tel:${BUSINESS_INFO.phone.replace(/\s/g, '')}`}>{BUSINESS_INFO.phone}</Link>
          </p>
          <p className=" text-sm hover:text-pink-500 text-gray-600 flex items-center italic">
            <BiLogoGmail className="mr-2" />
            <Link href={`mailto:${BUSINESS_INFO.email}`}>{BUSINESS_INFO.email}</Link>
          </p>
          <div
            className="fb-page"
            data-href={BUSINESS_INFO.facebook}
            data-tabs=""
            data-width="340"
            data-height="70"
            data-small-header="true"
            data-adapt-container-width="true"
            data-hide-cover="false"
            data-show-facepile="false"
          >
            <blockquote
              cite={BUSINESS_INFO.facebook}
              className="fb-xfbml-parse-ignore "
            >
              <a href={BUSINESS_INFO.facebook}>
                {BUSINESS_INFO.name} Fanpage
              </a>
            </blockquote>
          </div>
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
