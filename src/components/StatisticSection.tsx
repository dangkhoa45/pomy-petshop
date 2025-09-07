"use client"
import { motion } from "framer-motion";
import { useState } from "react";
import CalendarIcon from "../../public/icons/CalendarIcon";
import EventIcon from "../../public/icons/EventIcon";
import PetsCared from "../../public/icons/PetsCared";
import StartIcon from "../../public/icons/StartIcon";
import { fadeInUp, fadeInRight, staggerContainer } from "@/shared/animations";
import { STATISTICS } from "@/shared/constants";

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
    STATISTICS.forEach(({ key, value }) => {
      animateNumber(value, key);
    });
  };

  const getIconComponent = (iconName: string) => {
    const iconMap = {
      PetsCared: <PetsCared />,
      StartIcon: <StartIcon />,
      CalendarIcon: <CalendarIcon />,
      EventIcon: <EventIcon />,
    };
    return iconMap[iconName as keyof typeof iconMap] || null;
  };

  return (
    <section className="bg-transparent text-gray-700 body-font">
      <div className="container px-3 md:px-5 py-12 mx-auto">
        <motion.div
          variants={fadeInRight}
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
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          onViewportEnter={handleAnimationStart}
          viewport={{ once: true, amount: 0.3 }}
        >
          {STATISTICS.map(({ key, label, icon }) => (
            <motion.div key={key} className="p-4" variants={fadeInUp}>
              <div className="bg-white border-2 border-pink-500 h-[235px] px-6 py-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                {getIconComponent(icon)}
                <h2 className="title-font font-extrabold text-3xl md:text-4xl text-pink-500">
                  {stats[key as keyof typeof stats]}+
                </h2>
                <p className="leading-relaxed text-sm md:text-lg text-gray-600 p-1">
                  {label}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default StatisticSection;
