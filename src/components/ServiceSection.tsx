"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

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
      "Đội ngũ chuyên nghiệp cùng trang thiết bị hiện đại sẽ mang lại trải nghiệm khách sạn thoải mái nhất cho thú cưng của bạn.",
    image: "/images/pomy-service-1.jpg",
  },
  {
    id: 2,
    title: "Cắt tỉa",
    subtitle: "Dịch vụ cắt tỉa thú cưng",
    description:
      "Đảm bảo thú cưng của bạn luôn xinh đẹp với các kiểu cắt tỉa thời trang và phù hợp.",
    image: "/images/pomy-service-2.jpg",
  },
  {
    id: 3,
    title: "Vệ sinh",
    subtitle: "Dịch vụ vệ sinh",
    description:
      "Chăm sóc sức khỏe và vệ sinh toàn diện cho thú cưng của bạn với quy trình chuyên nghiệp.",
    image: "/images/pomy-service-3.jpg",
  },
];

function ServiceSection() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap w-full mb-8"
          >
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <span className="sm:text-md text-sm font-bold title-font mb-2 text-green-600">
                Cắt Tỉa, Vệ Sinh, Khách Sạn Thú Cưng
              </span>
              <h1 className="sm:text-3xl text-2xl font-extrabold title-font mb-2 text-pink-600">
                Dịch vụ chúng tôi cung cấp
              </h1>
              <div className="h-1 w-20 bg-pink-500 rounded"></div>
            </div>
            <p className="lg:w-1/2 w-full leading-relaxed text-gray-600 bg-gradient-to-r from-white to-pink-200 rounded-lg p-4">
              Dịch vụ tại <span className="font-bold text-pink-600"> Pomy Petshop </span>bao gồm cắt tỉa, vệ sinh, khách sạn dành
              cho thú cưng. Với đội ngũ chăm sóc chuyên nghiệp và trang thiết bị
              hiện đại, chúng tôi cam kết mang lại sự chăm sóc tận tâm và chất
              lượng cao cho thú cưng của bạn.
            </p>
          </motion.div>
          <div className="flex flex-wrap -m-4">
            {services.map((service) => (
              <motion.div
                key={service.id}
                className="xl:w-1/3 md:w-1/2 p-4 "
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedService(service)}
              >
                <div className="bg-gradient-to-bl from-white to-pink-200 p-6 rounded-lg cursor-pointer h-[370px]">
                  <Image
                    className="h-40 rounded w-full object-cover object-center mb-6"
                    src={service.image}
                    alt={service.title}
                    width={720}
                    height={400}
                  />
                  <h3 className="tracking-widest text-pink-500 text-xs font-medium title-font">
                    {service.title}
                  </h3>
                  <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                    {service.subtitle}
                  </h2>
                  <p className="leading-relaxed text-base">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {selectedService && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setSelectedService(null)}
        >
          <motion.div
            className="relative w-[80%] h-[80%] bg-gradient-to-r from-pink-300 to-white rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              className="object-cover"
              alt={selectedService.title}
              src={selectedService.image}
              layout="fill"
              objectFit="contain"
            />
            <div className="absolute bottom-0 p-4 bg-white bg-opacity-80 w-full">
              <h2 className="text-xl font-bold text-pink-600">
                {selectedService.title}
              </h2>
              <p className="text-gray-600">{selectedService.description}</p>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
}

export default ServiceSection;
