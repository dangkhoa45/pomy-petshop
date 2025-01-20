"use client"
import { motion } from "framer-motion";
import Image from "next/image";

function PricingService() {
  return (
    <section className="text-gray-600 body-font">
      <motion.div
        className="container px-5 py-8 mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="flex flex-col text-center w-full mb-8"
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

        <motion.div
          className="lg:w-2/3 w-full mx-auto overflow-auto"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <Image
            className="h-full rounded w-full object-cover object-center mb-6"
            src={"/images/pomy-service-1.jpg"}
            alt={"Dịch vụ cắt tỉa thú cưng và vệ sinh Pomy Petshop"}
            width={720}
            height={600}
            objectFit="contain"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default PricingService;
