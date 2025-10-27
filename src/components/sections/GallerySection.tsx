"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import gallery from "@/data/content/gallery-images.json";

export interface GalleryImage {
  src: string;
  alt: string;
}
export const galleryImages: GalleryImage[] = gallery as GalleryImage[];

const GallerySection: React.FC = () => {
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
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-12 mx-auto">
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-4 text-pink-500">
            Bộ Sưu Tập Hình Ảnh
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-700">
            Xem lại những khoảnh khắc và không gian tuyệt vời qua bộ sưu tập ảnh
            của chúng tôi.
          </p>
        </div>

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
                  priority={index === 0}
                  quality={80}
                  loading={index === 0 ? undefined : "lazy"}
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
              quality={80}
              loading="lazy"
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
    </section>
  );
};

export default GallerySection;
