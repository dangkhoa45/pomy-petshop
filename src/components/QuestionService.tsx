"use client";
import { motion } from "framer-motion";
import Image from "next/image";

function QuestionService() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-12 mb-8 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <motion.h1
            className="title-font text-3xl mb-8 text-pink-600 font-extrabold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Tại sao nên tắm spa cho chó mèo định kỳ và thường xuyên
          </motion.h1>

          <div className="flex flex-col mb-10 lg:items-start items-center">
            <motion.div
              className="flex-grow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h2 className="text-pink-600 text-lg title-font font-medium mb-1">
                1. Giữ bộ lông và da luôn sạch sẽ
              </h2>
              <p className="leading-relaxed text-base">
                Đa số các bạn chó mèo đều thích chạy nhảy chơi đùa nên lông
                thường bám bẩn, việc tắm thường xuyên sẽ giúp loại bỏ bụi bẩn,
                mùi hôi khó chịu trên da và lông chó mèo.
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
              <h2 className="text-pink-600 text-lg title-font font-medium mb-1">
                2. Phòng chống ký sinh trùng và các bệnh ngoài da
              </h2>
              <p className="leading-relaxed text-base">
                Khí hậu ở nước ta là nóng ẩm, đây là điều kiện thích hợp để vi
                khuẩn và các loài ký sinh như ve, rận, bọ chét phát triển trên
                cơ thể chó mèo. Vì vậy, việc tắm rửa để giữ bộ lông sạch thoáng
                là rất cần thiết để phòng tránh ve rận ký sinh trên da các bé.
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
              <h2 className="text-pink-600 text-lg title-font font-medium mb-1">
                3. Giảm tình trạng rụng lông và phòng các bệnh về đường ruột
              </h2>
              <p className="leading-relaxed text-base">
                Khi tắm cho chó mèo, bộ lông sẽ được chải chuốt để loại bỏ những
                phần lông thừa bị xơ, rối, tránh tình trạng lông rơi khắp nhà.
                Việc này giúp hạn chế cho chó mèo vô tình liếm hay ăn phải, lâu
                ngày sẽ tích tụ trong ruột gây rối loạn đường ruột rất nguy
                hiểm.
              </p>
            </motion.div>
          </div>
        </div>

        <motion.div
          className="relative w-[300px] h-[300px] md:w-[512px] md:h-[512px] flex items-center justify-center cursor-pointer"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image
            className="object-cover object-center rounded-lg shadow-lg"
            alt="pomy-petshop-careful"
            src="/images/pomy-petshop-13.jpg"
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default QuestionService;
