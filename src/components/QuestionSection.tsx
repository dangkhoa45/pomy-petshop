"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

function QuestionSection() {
  const [isOpen, setIsOpen] = useState(false);
  const imageVariant = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, delay: 0.4 },
    },
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-12 mb-8 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <motion.span
            className="title-font sm:text-2xl text-2xl mb-1 text-green-500 font-extrabold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Lý do
          </motion.span>

          <motion.h1
            className="title-font sm:text-4xl text-3xl mb-2 text-pink-600 font-extrabold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Tại sao nên chọn <br className="md:hidden" /> POMY Petshop?
          </motion.h1>

          <motion.span
            className="title-font text-lg mb-5 text-gray-600 font-extrabold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Chúng tôi cam kết mang lại sự chăm sóc tốt nhất cho thú cưng của
            bạn.
          </motion.span>

          <div className="flex flex-col mb-10 lg:items-start items-center">
            <motion.div
              className="flex-grow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h2 className="text-pink-600 text-lg title-font font-semibold mb-1">
                Chăm sóc tận tâm và chu đáo
              </h2>
              <p className="leading-relaxed text-base">
                <span className="text-pink-600 font-dosis font-bold">
                  <a
                    href="https://www.facebook.com/cuahangthucungPOMY"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline"
                  >
                    Pomy Petshop{" "}
                  </a>
                </span>
                luôn đặt sức khỏe và hạnh phúc của thú cưng lên hàng đầu, mang
                đến sự yên tâm và tin tưởng tuyệt đối cho bạn.
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col mb-10 lg:items-start items-center">
            <motion.div
              className="flex-grow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h2 className="text-pink-600 text-lg title-font font-semibold mb-1">
                Đội ngũ giàu kinh nghiệm
              </h2>
              <p className="leading-relaxed text-base">
                Với đội ngũ bác sĩ thú y chuyên nghiệp và tận tâm, chúng tôi cam
                kết mang lại sự chăm sóc tốt nhất cho thú cưng của bạn.
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col mb-0 md:mb-10 lg:items-start items-center">
            <motion.div
              className="flex-grow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h2 className="text-pink-600 text-lg title-font font-semibold mb-1">
                Trang thiết bị hiện đại
              </h2>
              <p className="leading-relaxed text-base">
                Phòng khám được trang bị các thiết bị y tế tiên tiến, đảm bảo
                chẩn đoán chính xác và điều trị hiệu quả.
              </p>
            </motion.div>
          </div>
        </div>
        <motion.div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          variants={imageVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          onClick={() => setIsOpen(true)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative w-[300px] h-[300px] md:w-[512px] md:h-[512px] flex items-center justify-center cursor-pointer"
          >
            <Image
              className="object-cover object-center rounded-lg shadow-lg"
              alt="pomy-petshop"
              src="/images/pomy-petshop-1.jpg"
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        </motion.div>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="relative w-[80%] h-[80%] bg-gradient-to-r from-pink-300 to-white rounded-lg overflow-hidden"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <Image
                className="object-cover"
                alt="pomy-petshop"
                src="/images/pomy-petshop-1.jpg"
                layout="fill"
                objectFit="contain"
              />
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
}

export default QuestionSection;
