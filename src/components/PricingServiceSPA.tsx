"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

function PricingServiceSPA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <section className="text-gray-600 body-font">
      <motion.div
        className="container px-5 py-8 mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="flex flex-col text-center w-full my-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-xl md:text-2xl font-semibold title-font mb-2 text-pink-600">
            Bảng giá dịch vụ tắm vệ sinh, cạo cắt và tỉa lông cho chó mèo
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Bảng giá đã bao gồm đầy đủ các quy trình spa tại{" "}
            <span className="text-pink-600 font-bold">POMY petshop</span>. Dịch
            vụ có thể phát sinh thêm phụ phí theo yêu cầu thêm của Khách hàng.
          </p>
        </motion.div>

        <div className="md:flex w-full h-full">
          <motion.div
            className="md:w-2/3"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="md:text-xl text-lg text-pink-600 font-bold mb-2 md:mb-4">
              Chăm sóc bé yêu toàn diện tại POMY Petshop!
            </h2>
            <div className="space-y-6 text-gray-700">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h3 className="text-lg font-semibold text-pink-400">
                  1. Kiểm tra và tắm vệ sinh sạch sẽ
                </h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    Bé yêu sẽ được kiểm tra da và lông kỹ lưỡng, giúp phát hiện
                    sớm các vấn đề như viêm da, nấm hay ký sinh trùng.
                  </li>
                  <li>
                    Tắm thư giãn với sữa tắm an toàn, giúp làm sạch mọi vết bẩn
                    và mang lại cảm giác sảng khoái.
                  </li>
                  <li>
                    Vệ sinh chuyên sâu những vùng nhạy cảm như hậu môn và tuyến
                    mùi để bé luôn thơm tho, dễ chịu.
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h3 className="text-lg font-semibold text-pink-400">
                  2. Sấy khô và vệ sinh chi tiết
                </h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    Sấy khô toàn bộ lông, giúp bé không chỉ sạch mà còn có bộ
                    lông mềm mượt như nhung.
                  </li>
                  <li>
                    Làm sạch kỹ lưỡng tai và lòng bàn chân, loại bỏ bụi bẩn và
                    vi khuẩn để bé luôn khỏe mạnh.
                  </li>
                  <li>
                    Cắt tỉa móng cẩn thận, vừa an toàn vừa giúp bé tự tin tung
                    tăng khắp nơi.
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                <h3 className="text-lg font-semibold text-pink-400">
                  3. Cắt tỉa lông – Bé yêu, phong cách yêu!
                </h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    Chải chuốt, gỡ rối những phần lông khó chịu để bé thoải mái
                    hơn.
                  </li>
                  <li>
                    Tạo kiểu lông theo ý thích, từ dễ thương đáng yêu đến phong
                    cách cá tính, giúp bé &quot;nổi bật trong mọi ánh
                    nhìn&quot;.
                  </li>
                  <li>
                    Vệ sinh vùng nhạy cảm, đảm bảo bé luôn gọn gàng, sạch sẽ và
                    tự tin.
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <h3 className="text-lg font-semibold text-pink-400">
                  4. Dưỡng lông – Hoàn hảo từng sợi lông
                </h3>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    Thoa kem dưỡng đặc biệt để lông của bé mềm mại, óng ả và
                    khỏe mạnh.
                  </li>
                  <li>
                    Xịt nước hoa cao cấp dành riêng cho thú cưng, mang đến hương
                    thơm dễ chịu kéo dài cả tuần.
                  </li>
                  <li>
                    Dịch vụ nhuộm lông độc đáo theo yêu cầu, tạo nét riêng cho
                    bé yêu.
                  </li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 mx-auto overflow-auto relative w-[380px] h-[780px]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Image
              className="rounded-lg shadow-lg object-cover object-center mb-6 cursor-pointer hover:shadow-2xl transition-all duration-300"
              src={"/images/pomy-service-1.jpg"}
              alt={"Dịch vụ cắt tỉa thú cưng và vệ sinh Pomy Petshop"}
              layout="fill"
              objectFit="contain"
              onClick={toggleModal}
            />
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={toggleModal}
          >
            <motion.div
              className="bg-white rounded-lg shadow-lg p-6 w-[90%] md:w-[600px] relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 hover:scale-110 transition-transform duration-200"
                onClick={toggleModal}
              >
                ✖
              </button>
              <Image
                className="rounded-lg object-cover object-center"
                src={"/images/pomy-service-1.jpg"}
                alt={"Dịch vụ cắt tỉa thú cưng và vệ sinh Pomy Petshop"}
                layout="responsive"
                width={600}
                height={400}
              />
              <p className="mt-4 text-center text-gray-700">
                Hình ảnh dịch vụ cắt tỉa và vệ sinh tại{" "}
                <span className="text-pink-600">POMY petshop</span>
                <br/> <span className="text-green-600">31 Phú Lợi - Sóc Trăng</span>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default PricingServiceSPA;
