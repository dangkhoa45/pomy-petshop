"use client";
import { motion } from "framer-motion";
import Image from "next/image";

function QuestionSection() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 pb-24 pt-8 md:flex-row flex-col items-center">
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
            className="title-font text-lg mb-1 text-gray-600 font-extrabold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Chúng tôi cam kết mang lại sự chăm sóc tốt nhất cho thú cưng của
            bạn.
          </motion.span>

          <div className="flex flex-col mt-6 mb-10 lg:items-start items-center">
            <motion.div
              className="flex-grow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h2 className="text-pink-600 text-lg title-font font-semibold mb-3">
                Đội ngũ giàu kinh nghiệm
              </h2>
              <p className="leading-relaxed text-base">
                Với đội ngũ bác sĩ thú y chuyên nghiệp và tận tâm, chúng tôi cam
                kết mang lại sự chăm sóc tốt nhất cho thú cưng của bạn.
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col mb-10 lg:items-start items-center">
            <motion.div
              className="flex-grow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h2 className="text-pink-600 text-lg title-font font-semibold mb-3">
                Trang thiết bị hiện đại
              </h2>
              <p className="leading-relaxed text-base">
                Phòng khám được trang bị các thiết bị y tế tiên tiến, đảm bảo
                chẩn đoán chính xác và điều trị hiệu quả.
              </p>
            </motion.div>
          </div>

          <div className="flex flex-col mb-10 lg:items-start items-center">
            <motion.div
              className="flex-grow"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true, amount: 0.5 }}
            >
              <h2 className="text-pink-600 text-lg title-font font-semibold mb-3">
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
        </div>

        <motion.div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image
            className="object-cover object-center rounded"
            alt="pomy-petshop-careful"
            src="/images/pomy-petshop-3.jpg"
            width={720}
            height={600}
          />
        </motion.div>
      </div>
    </section>
  );
}

export default QuestionSection;
