"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

function ServiceSection() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-8">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <span className="sm:text-md text-sm font-bold title-font mb-2 text-green-600">Cắt Tỉa, Vệ Sinh, Khách Sạn Thú Cưng</span>
            <h1 className="sm:text-3xl text-2xl font-extrabold title-font mb-2 text-pink-600">
              Dịch vụ chúng tôi cung cấp
            </h1>
            <div className="h-1 w-20 bg-pink-500 rounded"></div>
          </div>
          <div className="bg-gradient-to-r from-white to-pink-200 rounded-lg lg:w-1/2 w-full leading-relaxed p-3">
            <p className=" text-gray-600">
              Dịch vụ tại Pomy Petshop bao gồm cắt tỉa, vệ sinh, khách sạn dành
              cho thú cưng. Với đội ngũ chăm sốc chuyên nghiệm và trang thiết bị
              hiện đại, chúng tôi cam kết mang lại sự chăm sốc tận tâm và chất
              lượng cao cho thú cưng của bạn.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg" onClick={() => setIsOpen(true)}>
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/images/pomy-service-1.jpg"
                alt="content"
                width={720}
                height={400}
              />
              <h3 className="tracking-widest text-pink-500 text-xs font-medium title-font">
                Khách sạn thú cưng
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Dịch vụ trong giữ thú cưng
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="/images/pomy-service-2.jpg"
                alt="content"
                width={720}
                height={400}
              />
              <h3 className="tracking-widest text-pink-500 text-xs font-medium title-font">
                Cắt tỉa
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Dịch vụ cắt tỉa thú cưng
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
          <div className="xl:w-1/3 md:w-1/2 p-4">
            <div className="bg-gray-100 p-6 rounded-lg">
              <Image
                className="h-40 rounded w-full object-cover object-center mb-6"
                src="https://dummyimage.com/722x402"
                alt="content"
                width={720}
                height={400}
              />
              <h3 className="tracking-widest text-pink-500 text-xs font-medium title-font">
                Vệ sinh
              </h3>
              <h2 className="text-lg text-gray-900 font-medium title-font mb-4">
                Dịch vụ vệ sinh
              </h2>
              <p className="leading-relaxed text-base">
                Fingerstache flexitarian street art 8-bit waistcoat. Distillery
                hexagon disrupt edison bulbche.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    {isOpen && (
      <div
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
        onClick={() => setIsOpen(false)}
      >
        <motion.div
          className="relative w-[80%] h-[80%] bg-gradient-to-r from-pink-300 to-white rounded-lg overflow-hidden"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            className="object-cover"
            alt="pomy-petshop"
            src="/images/pomy-service-1.jpg"
            layout="fill"
            objectFit="contain"
          />
        </motion.div>
      </div>
    )}
    </>
  );
}

export default ServiceSection;
