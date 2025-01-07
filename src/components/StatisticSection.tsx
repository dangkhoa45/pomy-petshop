"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import CalendarIcon from "../../public/icons/CalendarIcon";
import EventIcon from "../../public/icons/EventIcon";
import PetsCared from "../../public/icons/PetsCared";
import StartIcon from "../../public/icons/StartIcon";

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
    animateNumber(1000, "petsCared");
    animateNumber(800, "happyClients");
    animateNumber(100, "dailyBookings");
    animateNumber(500, "hotelRooms");
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
    <section className="bg-transparent text-gray-700 body-font">
      <div className="container px-3 md:px-5 py-8 mx-auto">
        <motion.div
          variants={textVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col text-center w-full mb-[40px]"
        >
          <h1 className="sm:text-4xl text-3xl font-extrabold title-font mb-4 text-pink-500">
            Thành Tựu Của Chúng Tôi
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-lg text-gray-600">
            Chúng tôi đã mang lại sự hài lòng cho hàng nghìn khách hàng và thú
            cưng bằng dịch vụ tận tâm, chuyên nghiệp.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 md:gap-4 text-center"
          variants={containerVariant}
          initial="hidden"
          whileInView="visible"
          onViewportEnter={handleAnimationStart}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.div className="p-4" variants={cardVariant}>
            <div className="bg-white border-2 border-pink-500 px-6 py-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <PetsCared />
              <h2 className="title-font font-extrabold text-3xl md:text-4xl text-pink-500">
                {stats.petsCared}+
              </h2>
              <p className="leading-relaxed text-sm md:text-lg text-gray-600 p-1">
                Thú cưng đã chăm sóc
              </p>
            </div>
          </motion.div>

          <motion.div className="p-4" variants={cardVariant}>
            <div className="bg-white border-2 border-pink-500 px-6 py-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <StartIcon />
              <h2 className="title-font font-extrabold text-3xl md:text-4xl text-pink-500">
                {stats.happyClients}+
              </h2>
              <p className="leading-relaxed text-sm md:text-lg text-gray-600 p-1">
                Số lượng đánh giá 5 sao
              </p>
            </div>
          </motion.div>

          <motion.div className="p-4" variants={cardVariant}>
            <div className="bg-white border-2 border-pink-500 px-6 py-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CalendarIcon />
              <h2 className="title-font font-extrabold text-3xl md:text-4xl text-pink-500">
                {stats.dailyBookings}+
              </h2>
              <p className="leading-relaxed text-sm md:text-lg text-gray-600 p-1">
                Đặt lịch hàng ngày
              </p>
            </div>
          </motion.div>

          <motion.div className="p-4" variants={cardVariant}>
            <div className="bg-white border-2 border-pink-500 px-6 py-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <EventIcon />
              <h2 className="title-font font-extrabold text-3xl md:text-4xl text-pink-500">
                {stats.hotelRooms}+
              </h2>
              <p className="leading-relaxed text-sm md:text-lg text-gray-600 p-1">
                Sự kiện cho thú cưng
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default StatisticSection;
