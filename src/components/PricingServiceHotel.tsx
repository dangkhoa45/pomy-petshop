"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface ImageObject {
  src: string;
  alt: string;
}

const images: ImageObject[] = [
  {
    src: "/images/pomy-petshop-hotel.jpeg",
    alt: "Dịch vụ khách sạn thú cưng tại Pomy Petshop",
  },
  {
    src: "/images/pomy-petshop-khach-san-1.jpeg",
    alt: "Phòng khách sạn cho thú cưng 1",
  },
  {
    src: "/images/pomy-petshop-khach-san-2.jpeg",
    alt: "Phòng khách sạn cho thú cưng 2",
  },
  {
    src: "/images/pomy-petshop-khach-san-3.jpeg",
    alt: "Phòng khách sạn cho thú cưng 3",
  },
];

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
              images={images}
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
      Bảng giá dịch vụ khách sạn cho chó mèo
    </h1>
    <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
      Đảm bảo thú cưng của bạn có không gian thoải mái, sạch sẽ và an toàn nhất.
      Chúng tôi chăm sóc bé yêu như chính gia đình của bạn!
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
    whileHover={{ scale: 1.05 }} // Hover effect for main image
    onClick={() => openModal(0)}
  >
    <div className="relative w-[400px] h-[640px] m-2">
      <Image
        className="rounded-lg shadow-lg object-cover object-center mb-6 transition-transform duration-300"
        src="/images/pomy-petshop-hotel.jpeg"
        alt="Dịch vụ khách sạn thú cưng tại Pomy Petshop"
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
      Khách sạn thú cưng tại POMY Petshop
    </h2>
    <div className="space-y-4">
      <p>
        Tại <span className="text-pink-600 font-semibold">POMY Petshop</span>,
        chúng tôi tự hào mang đến dịch vụ khách sạn thú cưng cao cấp, nơi bé yêu
        của bạn được tận hưởng một không gian nghỉ dưỡng hiện đại, tiện nghi và
        đầy đủ tiêu chuẩn an toàn.
      </p>
      <ServiceHighlights />
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      {images.slice(1).map((image, index) => (
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
    <li>
      <strong className="font-semibold text-green-600">
        Phòng nghỉ riêng biệt:
      </strong>{" "}
      Được vệ sinh sạch sẽ mỗi ngày, đảm bảo không gian thoáng mát và an toàn
      tuyệt đối.
    </li>
    <li>
      <strong className="font-semibold text-green-600">
        Chế độ dinh dưỡng cá nhân hóa:
      </strong>{" "}
      Chúng tôi cung cấp thực đơn đặc biệt phù hợp với từng giống chó mèo, đảm
      bảo sức khỏe và khẩu vị của từng bé.
    </li>
    <li>
      <strong className="font-semibold text-green-600">
        Hoạt động giải trí:
      </strong>{" "}
      Bé được tham gia các hoạt động vui chơi, vận động và giao lưu hàng ngày,
      giúp bé không chỉ khỏe mạnh mà còn luôn vui vẻ.
    </li>
    <li>
      <strong className="font-semibold text-green-600">
        Chăm sóc sức khỏe toàn diện:
      </strong>{" "}
      Đội ngũ nhân viên luôn theo dõi sức khỏe của bé, đảm bảo bé yêu được chăm
      sóc kịp thời và chu đáo.
    </li>
    <li>
      <strong className="font-semibold text-green-600">Camera giám sát:</strong>{" "}
      Dịch vụ cung cấp tùy chọn giám sát trực tuyến, giúp bạn yên tâm theo dõi
      bé yêu mọi lúc, mọi nơi.
    </li>
  </ul>
);

const Modal: React.FC<{
  images: ImageObject[];
  selectedImageIndex: number;
  closeModal: () => void;
}> = ({ images, selectedImageIndex, closeModal }) => (
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
        {images.map((image, index) => (
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
