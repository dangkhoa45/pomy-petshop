"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface HeroImage {
  id: number;
  image: string;
  alt: string;
}

const HeroImages: HeroImage[] = [
  {
    id: 1,
    image: "/images/cua-hang-pomy-petshop-1.jpg",
    alt: "cat-tia-ve-sinh-khach-san-thu-cung",
  },
  {
    id: 2,
    image: "/images/cua-hang-pomy-petshop-2.jpg",
    alt: "cat-tia-ve-sinh-khach-san-thu-cung",
  },
  {
    id: 3,
    image: "/images/cua-hang-pomy-petshop-3.jpg",
    alt: "cat-tia-ve-sinh-khach-san-thu-cung",
  },
  {
    id: 4,
    image: "/images/cua-hang-pomy-petshop-4.jpg",
    alt: "cat-tia-ve-sinh-khach-san-thu-cung",
  },
  {
    id: 5,
    image: "/images/cua-hang-pomy-petshop-5.jpg",
    alt: "cat-tia-ve-sinh-khach-san-thu-cung",
  },
];

function HeroSection() {
  const router = useRouter();

  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.2 },
    },
  };

  const buttonVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.8 },
    },
  };

  return (
    <section className="bg-transparent text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
        <motion.div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-3 md:mb-0 items-center text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            variants={textVariant}
            className="sm:text-md text-sm font-bold title-font mb-6 text-green-600"
          >
            Cắt Tỉa, Vệ Sinh, Khách Sạn Thú Cưng
          </motion.span>
          <motion.h1
            className="title-font sm:text-5xl text-4xl mb-6 font-extrabold text-pink-500 font-heading"
            variants={textVariant}
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          >
            Dịch Vụ Chăm Sóc
            <br className="hidden lg:inline-block" />
            Thú Cưng Hoàn Hảo
          </motion.h1>
          <motion.p
            className="mb-8 leading-relaxed text-lg text-gray-600"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1, transition: { duration: 0.5 } },
            }}
            transition={{ delay: 0.3 }}
            viewport={{ once: true, amount: 0.8 }}
          >
            <span className="text-pink-500 font-bold">POMY PETSHOP</span> ở đây
            chúng tôi cung cấp các dịch vụ cắt tỉa, vệ sinh, và khách sạn thú
            cưng chuyên nghiệp, giúp thú cưng của bạn luôn khỏe mạnh và đáng
            yêu. Hãy để chúng tôi chăm sóc người bạn bốn chân của bạn.
          </motion.p>
          <motion.div
            className="justify-center hidden md:flex"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={buttonVariant}
          >
            <motion.button
              className="inline-flex text-white bg-pink-500 border-0 py-3 px-8 focus:outline-none hover:bg-pink-600 rounded-full text-lg shadow-md transition-all font-poppins"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#FF7CA3",
                boxShadow: "0px 10px 20px rgba(255, 122, 163, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                router.push("https://www.facebook.com/PetshopPomy")
              }
            >
              Đặt Lịch Ngay
            </motion.button>
            <motion.button
              className="ml-4 inline-flex text-pink-500 bg-white border border-pink-500 py-3 px-8 focus:outline-none hover:bg-pink-50 rounded-full text-lg shadow-md transition-all font-poppins"
              whileHover={{
                scale: 1.1,
                backgroundColor: "#FFE4EC",
                boxShadow: "0px 10px 20px rgba(255, 122, 163, 0.2)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/services")}
            >
              Tìm Hiểu Thêm
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Swiper
            grabCursor={true}
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="w-full h-[300px] md:h-[512px] mySwiper"
          >
            {HeroImages.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image.image}
                  alt={image.alt}
                  layout="intrinsic"
                  width={500}
                  height={300}
                  priority={index === 0}
                  quality={80}
                  loading={index === 0 ? undefined : "lazy"}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}

export default HeroSection;
