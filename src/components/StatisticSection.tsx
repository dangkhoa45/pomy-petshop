"use client";
import { motion } from "framer-motion";
import { useState } from "react";

function StatisticSection() {
  const [stats, setStats] = useState({
    petsCared: 0,
    happyClients: 0,
    dailyBookings: 0,
    hotelRooms: 0,
  });

  const animateNumber = (target: number, key: string) => {
    let start = 0;
    const step = Math.ceil(target / 50);
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
    animateNumber(2700, "petsCared");
    animateNumber(1300, "happyClients");
    animateNumber(74, "dailyBookings");
    animateNumber(46, "hotelRooms");
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

  return (
    <section className="bg-transparent text-gray-700 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-extrabold title-font mb-4 text-pink-500">
            Thành Tựu Của Chúng Tôi
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-600">
            Chúng tôi đã mang lại sự hài lòng cho hàng nghìn khách hàng và thú
            cưng bằng dịch vụ tận tâm, chuyên nghiệp.
          </p>
        </div>

        <motion.div
          className="flex flex-wrap -m-4 text-center"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          onViewportEnter={handleAnimationStart}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div
            className="p-4 md:w-1/4 sm:w-1/2 w-full"
            variants={cardVariant}
          >
            <div className="border-2 border-pink-500 px-6 py-8 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="text-pink-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M8 17l4 4 4-4m-4-5v9"></path>
                <path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
              </svg>
              <h2 className="title-font font-extrabold text-4xl text-pink-500">
                {stats.petsCared}+
              </h2>
              <p className="leading-relaxed text-lg text-gray-600">
                Thú cưng được chăm sóc
              </p>
            </div>
          </motion.div>

          <motion.div
            className="p-4 md:w-1/4 sm:w-1/2 w-full"
            variants={cardVariant}
          >
            <div className="border-2 border-pink-500 px-6 py-8 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="text-pink-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
                <circle cx="9" cy="7" r="4"></circle>
                <path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
              </svg>
              <h2 className="title-font font-extrabold text-4xl text-pink-500">
                {stats.happyClients}+
              </h2>
              <p className="leading-relaxed text-lg text-gray-600">
                Khách hàng hài lòng
              </p>
            </div>
          </motion.div>

          <motion.div
            className="p-4 md:w-1/4 sm:w-1/2 w-full"
            variants={cardVariant}
          >
            <div className="border-2 border-pink-500 px-6 py-8 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="text-pink-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M3 18v-6a9 9 0 0118 0v6"></path>
                <path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
              </svg>
              <h2 className="title-font font-extrabold text-4xl text-pink-500">
                {stats.dailyBookings}+
              </h2>
              <p className="leading-relaxed text-lg text-gray-600">
                Lượt đặt lịch hàng ngày
              </p>
            </div>
          </motion.div>

          <motion.div
            className="p-4 md:w-1/4 sm:w-1/2 w-full"
            variants={cardVariant}
          >
            <div className="border-2 border-pink-500 px-6 py-8 rounded-lg shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="text-pink-500 w-12 h-12 mb-3 inline-block"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <h2 className="title-font font-extrabold text-4xl text-pink-500">
                {stats.hotelRooms}+
              </h2>
              <p className="leading-relaxed text-lg text-gray-600">
                Phòng khách sạn thú cưng
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default StatisticSection;
