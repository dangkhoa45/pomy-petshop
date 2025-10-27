"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";
import Typical from "react-typical";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { galleryImages } from "../sections/GallerySection";

const FeatureService = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const handleNextImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (prevIndex) => ((prevIndex as number) + 1) % galleryImages.length
      );
    }
  };

  const handlePrevImage = () => {
    if (selectedIndex !== null) {
      setSelectedIndex(
        (prevIndex) =>
          ((prevIndex as number) - 1 + galleryImages.length) %
          galleryImages.length
      );
    }
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNextImage,
    onSwipedRight: handlePrevImage,
    trackMouse: true,
  });

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-gray-600 body-font"
    >
      <div className="container px-5 py-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <h1 className="title-font text-xl md:text-2xl mb-6 font-medium text-pink-600 font-poppins">
            Dịch vụ spa - hotel chuyên nghiệp cho thú cưng tại
            <br />
            <span className="text-2xl md:text-4xl font-bold">
              <Typical
                steps={["POMY Petshop", 1500, "31 Phú Lợi - Sóc Trăng", 1500]}
                loop={Infinity}
                wrapper="span"
              />
            </span>
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Chúng tôi cung cấp các dịch vụ cắt tỉa, vệ sinh, và khách sạn thú
            cưng chuyên nghiệp, giúp thú cưng của bạn luôn khỏe mạnh và đáng
            yêu. Hãy để chúng tôi chăm sóc người bạn bốn chân của bạn.
          </p>
        </motion.div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
          autoplay={{ delay: 3000 }}
          navigation
          className="gallery-swiper"
        >
          {galleryImages.map((image, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedIndex(index)}
              >
                <Image
                  alt={image.alt}
                  src={image.src}
                  layout="responsive"
                  width={500}
                  height={300}
                  className="object-cover"
                />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedIndex(null)}
        >
          <motion.div
            className="relative bg-white rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
            {...swipeHandlers}
          >
            <Image
              src={galleryImages[selectedIndex].src}
              alt={galleryImages[selectedIndex].alt}
              width={800}
              height={500}
              className="rounded-lg"
            />
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-pink-600 rounded-full p-2"
              onClick={handlePrevImage}
            >
              <FaChevronLeft size={20} />
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2  text-pink-600 rounded-full p-2"
              onClick={handleNextImage}
            >
              <FaChevronRight size={20} />
            </button>
          </motion.div>
        </div>
      )}
    </motion.section>
  );
};

export default FeatureService;
