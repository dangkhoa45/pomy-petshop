"use client";

import { motion } from "framer-motion";
import Image from "next/image";

function HeroSection() {
  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
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

  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="bg-transparent text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <motion.div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.h1
            className="title-font sm:text-5xl text-4xl mb-6 font-extrabold text-pink-500 font-poppins"
            variants={textVariant}
          >
            Dịch Vụ Chăm Sóc
            <br className="hidden lg:inline-block" />
            Thú Cưng Hoàn Hảo
          </motion.h1>
          <motion.p
            className="mb-8 leading-relaxed text-lg text-gray-600"
            variants={textVariant}
            transition={{ delay: 0.3 }}
          >
            Chúng tôi cung cấp các dịch vụ cắt tỉa, vệ sinh, và khách sạn thú
            cưng chuyên nghiệp, giúp thú cưng của bạn luôn khỏe mạnh và đáng
            yêu. Hãy để chúng tôi chăm sóc người bạn bốn chân của bạn.
          </motion.p>
          <motion.div
            className="flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={buttonVariant}
          >
            <motion.button
              className="inline-flex text-white bg-pink-500 border-0 py-3 px-8 focus:outline-none hover:bg-pink-600 rounded-full text-lg shadow-md transition-all font-poppins"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#FF7CA3",
                boxShadow: "0px 10px 20px rgba(255, 122, 163, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Đặt Lịch Ngay
            </motion.button>
            <motion.button
              className="ml-4 inline-flex text-pink-500 bg-white border border-pink-500 py-3 px-8 focus:outline-none hover:bg-pink-50 rounded-full text-lg shadow-md transition-all font-poppins"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#FFE4EC",
                boxShadow: "0px 10px 20px rgba(255, 122, 163, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Tìm Hiểu Thêm
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          variants={imageVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image
            className="object-cover object-center rounded-lg shadow-lg"
            alt="hero"
            src="https://dummyimage.com/720x600"
            width={720}
            height={600}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
