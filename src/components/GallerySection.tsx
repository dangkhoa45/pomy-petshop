"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";

interface GalleryImage {
  src: string;
  alt: string;
}

const galleryImages: GalleryImage[] = [
  {
    src: "/images/pomy-petshop-4.jpeg",
    alt: "cat-tia-ve-sinh-khach-san-thu-cung",
  },
  {
    src: "/images/pomy-petshop-5.jpeg",
    alt: "cat-tia-ve-sinh-khach-san-thu-cung",
  },
  {
    src: "/images/pomy-petshop-6.jpeg",
    alt: "cat-tia-ve-sinh-khach-san-thu-cung",
  },
  {
    src: "/images/pomy-petshop-7.jpeg",
    alt: "cat-tia-ve-sinh-khach-san-thu-cung",
  },
  {
    src: "/images/pomy-petshop-8.jpeg",
    alt: "cat-tia-ve-sinh-khach-san-thu-cung",
  },
  {
    src: "/images/pomy-petshop-9.jpeg",
    alt: "cat-tia-ve-sinh-khach-san-thu-cung",
  },
  {
    src: "/images/pomy-petshop-10.jpeg",
    alt: "cat-tia-ve-sinh-khach-san-thu-cung",
  },
  {
    src: "/images/pomy-petshop-11.jpeg",
    alt: "cat-tia-ve-sinh-khach-san-thu-cung",
  },
];

const GallerySection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

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

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-md cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedImage(image)}
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
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            className="relative bg-white rounded-lg overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={800}
              height={500}
              className="rounded-lg"
            />
            <button
              className="absolute top-4 right-4 text-white bg-[#393939] hover:bg-gray-600 rounded-full p-2"
              onClick={() => setSelectedImage(null)}
            >
              <FaTimes size={8} />
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
