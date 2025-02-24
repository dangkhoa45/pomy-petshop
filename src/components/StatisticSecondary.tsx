"use client"

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

function StatisticSecondary() {
  const [stats, setStats] = useState({
    petsCared: 0,
    happyClients: 0,
    servicesOffered: 0,
    yearsExperience: 0,
  });

  const animateNumber = (target: number, key: string) => {
    let start = 0;
    const step = target < 50 ? 1 : Math.ceil(target / 50);
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        clearInterval(interval);
        setStats((prev) => ({ ...prev, [key]: target }));
      } else {
        setStats((prev) => ({ ...prev, [key]: start }));
      }
    }, 30);
  };

  const handleAnimationStart = () => {
    animateNumber(1000, "petsCared");
    animateNumber(800, "happyClients");
    animateNumber(100, "servicesOffered");
    animateNumber(500, "yearsExperience");
  };

  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const textVariant = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-8 mx-auto flex flex-wrap">
        <div className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <motion.div
            className="w-full sm:p-4 px-4 mb-2"
            variants={textVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
          >
            <h1 className="sm:text-4xl text-3xl font-extrabold title-font mb-4 text-pink-500">
              Thành Tựu Của Chúng Tôi
            </h1>
            <p className="leading-relaxed text-lg text-gray-600">
              Chúng tôi tự hào đã mang lại sự hài lòng và chăm sóc tận tình cho
              hàng nghìn khách hàng và thú cưng.
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap"
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            onViewportEnter={handleAnimationStart}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.div
              className="sm:w-1/2 lg:w-1/4 w-1/2 p-4"
              variants={cardVariant}
            >
              <h2 className="title-font font-extrabold text-2xl text-pink-500">
                {stats.petsCared}+
              </h2>
              <p className="leading-relaxed text-sm md:text-md text-gray-600">
                Thú cưng đã chăm sóc
              </p>
            </motion.div>
            <motion.div
              className="sm:w-1/2 lg:w-1/4 w-1/2 p-4"
              variants={cardVariant}
            >
              <h2 className="title-font font-extrabold text-2xl text-pink-500">
                {stats.happyClients}+
              </h2>
              <p className="leading-relaxed text-sm md:text-md text-gray-600">
                Số lượng đánh giá 5 sao
              </p>
            </motion.div>
            <motion.div
              className="sm:w-1/2 lg:w-1/4 w-1/2 p-4"
              variants={cardVariant}
            >
              <h2 className="title-font font-extrabold text-2xl text-pink-500">
                {stats.servicesOffered}+
              </h2>
              <p className="leading-relaxed text-sm md:text-md text-gray-600">
                {" "}
                Đặt lịch hàng ngày
              </p>
            </motion.div>
            <motion.div
              className="sm:w-1/2 lg:w-1/4 w-1/2 p-4"
              variants={cardVariant}
            >
              <h2 className="title-font font-extrabold text-2xl text-pink-500">
                {stats.yearsExperience}+
              </h2>
              <p className="leading-relaxed text-sm md:text-md text-gray-600">
                Sự kiện cho thú cưng
              </p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0"
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image
            className="object-cover object-center w-full h-full"
            src="/images/pomy-petshop-12.jpeg"
            alt="cat-tia-ve-sinh-khach-san-thu-cung"
            width={600}
            height={300}
            layout="responsive"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default StatisticSecondary;
