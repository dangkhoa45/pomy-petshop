"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Service {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const services: Service[] = [
  {
    id: 1,
    title: "Khách sạn thú cưng",
    subtitle: "Dịch vụ trông giữ thú cưng",
    description:
      "Mang đến sự thoải mái và yên tâm tối đa khi bạn vắng nhà. Dịch vụ khách sạn của chúng tôi được trang bị không gian hiện đại, sạch sẽ và thoáng mát, kèm theo đội ngũ chăm sóc tận tâm, chuyên nghiệp. Chúng tôi cam kết tạo ra một không gian như 'ngôi nhà thứ hai' cho thú cưng của bạn.",
    image: "/images/pomy-petshop-hotel.jpeg",
  },
  {
    id: 2,
    title: "Cắt tỉa",
    subtitle: "Dịch vụ cắt tỉa thú cưng",
    description:
      "Để thú cưng của bạn luôn tỏa sáng với những kiểu cắt tỉa đẹp mắt và phong cách nhất! Đội ngũ thợ lành nghề của chúng tôi sử dụng các kỹ thuật tiên tiến và dụng cụ hiện đại để tạo ra vẻ ngoài hoàn hảo, phù hợp với từng giống loài và cá tính riêng của thú cưng.",
    image: "/images/pomy-service-2.jpg",
  },
  {
    id: 3,
    title: "Vệ sinh",
    subtitle: "Dịch vụ vệ sinh",
    description:
      "Chăm sóc sức khỏe thú cưng không chỉ là trách nhiệm mà còn là niềm đam mê của chúng tôi. Dịch vụ vệ sinh của Pomy Petshop bao gồm tắm rửa, làm sạch lông, và các liệu pháp khử trùng chuyên sâu. Chúng tôi đảm bảo mang lại sự thoải mái và thư giãn tối ưu cho thú cưng của bạn.",
    image: "/images/pomy-service-3.jpg",
  },
  {
    id: 4,
    title: "tiêm vaccine, xổ giun",
    subtitle: "Dịch vụ tiêm vaccine, xổ giun",
    description:
      "Đừng để các bệnh tật tiềm ẩn làm ảnh hưởng đến sức khỏe thú cưng của bạn. Chúng tôi cung cấp các liệu trình tiêm vaccine và xổ giun chuyên nghiệp, đảm bảo an toàn tuyệt đối với quy trình đạt chuẩn. Hãy để chúng tôi đồng hành trong việc bảo vệ thú cưng của bạn khỏi các nguy cơ bệnh tật.",
    image: "/images/tiem-vaccine-cho-cho.jpg",
  },
];

function ServiceSection() {
  const [selectedServiceIndex, setSelectedServiceIndex] = useState<
    number | null
  >(null);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap w-full mb-8"
          >
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className=" text-3xl font-extrabold title-font my-2 text-pink-600">
                Dịch vụ chúng tôi cung cấp
              </h1>
              <div className="h-1 w-20 bg-pink-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-600 bg-gradient-to-r from-white to-pink-200 rounded-lg p-4">
              Dịch vụ tại
              <span className="font-bold text-pink-600"> Pomy Petshop </span>bao
              gồm cắt tỉa, vệ sinh, khách sạn dành cho thú cưng. Với đội ngũ
              chăm sóc chuyên nghiệp và trang thiết bị hiện đại, chúng tôi cam
              kết mang lại sự chăm sóc tận tâm và chất lượng cao cho thú cưng
              của bạn.
            </p>
          </motion.div>
          <div className="flex flex-wrap -m-4">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                className="xl:w-1/4 md:w-1/2 p-4"
                whileHover={{
                  scale: 1.05,
                }}
                style={{ filter: "brightness(1)" }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.filter = "brightness(1.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.filter = "brightness(1)";
                }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                onClick={() => setSelectedServiceIndex(index)}
              >
                <motion.div className="bg-gradient-to-bl from-white to-pink-200 p-6 rounded-lg cursor-pointer h-[358px] transition-transform duration-300">
                  <Image
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={service.image}
                    alt={service.title}
                    width={720}
                    height={400}
                  />
                  <h3 className="tracking-widest text-green-600 text-xs font-medium title-font">
                    {service.title}
                  </h3>
                  <h2 className="text-sm font-bold text-pink-600 title-font mb-1">
                    {service.subtitle}
                  </h2>
                  <p className="leading-relaxed text-sm line-clamp-3">
                    {service.description}
                  </p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {selectedServiceIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedServiceIndex(null)}
        >
          <motion.div
            className="relative w-[50%] h-[60%] bg-gradient-to-r from-pink-300 to-green-200 rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Swiper
              initialSlide={selectedServiceIndex}
              spaceBetween={50}
              slidesPerView={1}
              navigation={true}
              pagination={{ clickable: true }}
              modules={[Navigation, Pagination]}
              className="h-full"
            >
              {services.map((service) => (
                <SwiperSlide key={service.id}>
                  <div className="flex h-full">
                    <div className="w-1/2 h-full relative">
                      <Image
                        src={service.image}
                        alt={service.title}
                        layout="fill"
                        objectFit="contain"
                        className="rounded-l-lg"
                      />
                    </div>
                    <div className="w-1/2 h-full p-8 flex flex-col justify-center">
                      <h2 className="text-2xl font-bold text-pink-600 mb-4">
                        {service.subtitle}
                      </h2>
                      <p className="text-gray-600 text-base mb-6">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      )}
    </>
  );
}

export default ServiceSection;
