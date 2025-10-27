"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import data from "@/data/services/service-cards.json";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface Service {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}

const services: Service[] = data as Service[];

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
                    priority={service.id === 1}
                    quality={80}
                    loading={service.id === 1 ? undefined : "lazy"}
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
            className="relative w-[80%] h-[90%] bg-gradient-to-r from-pink-100 to-green-100 overflow-hidden rounded-lg"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
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
              className="w-full h-full"
            >
              {services.map((service) => (
                <SwiperSlide key={service.id}>
                  <div className="flex flex-wrap h-full">
                    <div className="md:w-1/2 w-[400px] h-[420px] md:h-full relative ">
                      <Image
                        src={service.image}
                        alt={service.title}
                        layout="fill"
                        className="rounded-t-lg md:rounded-l-lg md:rounded-t-none object-fill md:object-contain"
                        priority={service.id === 1}
                        quality={80}
                        loading={service.id === 1 ? undefined : "lazy"}
                      />
                    </div>

                    <div className="md:relative bg-transparent w-full md:w-1/2 h-auto p-6 md:p-8 flex flex-col justify-center">
                      <h2 className="text-xl md:text-2xl font-bold text-pink-600 mb-4">
                        {service.subtitle}
                      </h2>
                      <p className="text-gray-600 text-sm md:text-base leading-relaxed">
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
