"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import pricingHotel from "@/data/services/pricing/pricing-hotel.json";

// images data comes from JSON; no local interface needed

const PricingServiceHotel: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const openModal = (index: number): void => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = (): void => {
    setIsModalOpen(false);
  };

  return (
    <section className="text-gray-600 body-font">
      <motion.div
        className="container px-5 py-8 mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <HeaderSection />

        <div className="md:flex w-full h-full">
          <HotelImage openModal={openModal} />
          <HotelDescription openModal={openModal} />
        </div>

        <AnimatePresence>
          {isModalOpen && (
            <Modal
              selectedImageIndex={selectedImageIndex}
              closeModal={closeModal}
            />
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

const HeaderSection: React.FC = () => (
  <motion.div
    className="flex flex-col text-center w-full my-8"
    initial={{ opacity: 0, y: -50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <h1 className="text-xl md:text-2xl font-semibold title-font mb-2 text-pink-600">
      {pricingHotel.header.title}
    </h1>
    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
      {pricingHotel.header.intro}
    </p>
  </motion.div>
);

const HotelImage: React.FC<{ openModal: (index: number) => void }> = ({
  openModal,
}) => (
  <motion.div
    className="md:w-1/2 mx-auto overflow-auto cursor-pointer"
    initial={{ scale: 0.9, opacity: 0 }}
    animate={{ scale: 1, opacity: 1 }}
    transition={{ duration: 1, ease: "easeOut" }}
    whileHover={{ scale: 1.05 }}
    onClick={() => openModal(0)}
  >
    <div className="relative w-[400px] h-[640px] m-2">
      <Image
        className="rounded-lg shadow-lg object-cover object-center mb-6 transition-transform duration-300"
        src={pricingHotel.images[0].src}
        alt={pricingHotel.images[0].alt}
        layout="fill"
        objectFit="cover"
      />
    </div>
  </motion.div>
);

interface HotelDescriptionProps {
  openModal: (index: number) => void;
}

const HotelDescription: React.FC<HotelDescriptionProps> = ({ openModal }) => (
  <motion.div
    className="md:w-2/3"
    initial={{ x: -100, opacity: 0 }}
    whileInView={{ x: 0, opacity: 1 }}
    viewport={{ once: true, amount: 0.5 }}
    transition={{ duration: 1, ease: "easeOut" }}
  >
    <h2 className="md:text-xl text-lg text-pink-600 font-bold mb-2 md:mb-4">
      {pricingHotel.title}
    </h2>
    <div className="space-y-4">
      {pricingHotel.paragraphs.map((para, idx) => (
        <p key={idx}>{para}</p>
      ))}
      <ServiceHighlights />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      {pricingHotel.images.slice(1).map((image, index) => (
        <motion.div
          key={index}
          className="relative w-full h-[200px] rounded-lg shadow-md overflow-hidden cursor-pointer"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          onClick={() => openModal(index + 1)}
        >
          <Image
            src={image.src}
            alt={image.alt}
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const ServiceHighlights = () => (
  <ul className="list-disc ml-6 space-y-2">
    {pricingHotel.highlights.map((h, idx) => (
      <li key={idx}>
        <strong className="font-semibold text-green-600">{h.title}</strong>{" "}
        {h.body}
      </li>
    ))}
  </ul>
);

const Modal: React.FC<{
  selectedImageIndex: number;
  closeModal: () => void;
}> = ({ selectedImageIndex, closeModal }) => (
  <motion.div
    className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    transition={{ duration: 0.3 }}
    onClick={closeModal}
  >
    <motion.div
      className="relative w-3/4 h-3/4 bg-white rounded-lg"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.8 }}
      transition={{ duration: 0.3 }}
      onClick={(e) => e.stopPropagation()}
    >
      <Swiper
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        modules={[Navigation, Pagination, Autoplay]}
        initialSlide={selectedImageIndex}
        className="w-full h-full"
      >
        {pricingHotel.images.map((image, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="relative w-full h-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                layout="fill"
                objectFit="contain"
              />
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </motion.div>
  </motion.div>
);

export default PricingServiceHotel;
