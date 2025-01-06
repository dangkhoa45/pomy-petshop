"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  const textVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const buttonVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.8 },
    },
  };

  return (
    <section className="bg-green-50 text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <motion.div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
          variants={imageVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image
            className="object-cover object-center rounded-lg shadow-lg"
            alt="About Us"
            src="https://dummyimage.com/720x600"
            width={720}
            height={600}
          />
        </motion.div>

        <motion.div
          className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h1 className="title-font sm:text-5xl text-4xl mb-6 font-extrabold text-pink-500">
            Chúng Tôi Là Ai?
          </h1>
          <p className="mb-8 leading-relaxed text-lg text-gray-600">
            Chúng tôi là đội ngũ chuyên gia tận tâm cung cấp các dịch vụ chăm
            sóc thú cưng như cắt tỉa, vệ sinh, và khách sạn thú cưng. Với trang
            thiết bị hiện đại và kinh nghiệm dày dặn, chúng tôi cam kết mang đến
            sự thoải mái và an tâm nhất cho bạn và người bạn bốn chân của mình.
          </p>
          <motion.div
            className="flex justify-center"
            variants={buttonVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.button
              className="inline-flex text-white bg-pink-500 border-0 py-3 px-8 focus:outline-none hover:bg-pink-600 rounded-full text-lg shadow-md transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Tìm Hiểu Thêm
            </motion.button>
            <motion.button
              className="ml-4 inline-flex text-pink-500 bg-white border border-pink-500 py-3 px-8 focus:outline-none hover:bg-pink-50 rounded-full text-lg shadow-md transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              Dịch Vụ Của Chúng Tôi
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
