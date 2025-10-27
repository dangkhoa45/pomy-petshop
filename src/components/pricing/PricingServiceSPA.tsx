"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import pricingSpa from "@/data/services/pricing/pricing-spa.json";

function PricingServiceSPA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <section className="text-gray-600 body-font">
      <motion.div
        className="container px-5 py-8 mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="flex flex-col text-center w-full my-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h1 className="text-xl md:text-2xl font-semibold title-font mb-2 text-pink-600">
            {pricingSpa.header.title}
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            {pricingSpa.header.intro}
          </p>
        </motion.div>

        <div className="md:flex w-full h-full">
          <motion.div
            className="md:w-2/3"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h2 className="md:text-xl text-lg text-pink-600 font-bold mb-2 md:mb-4">
              Chăm sóc bé yêu toàn diện tại POMY Petshop!
            </h2>
            <div className="space-y-6 text-gray-700">
              {pricingSpa.sections.map((section, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: idx * 0.2 }}
                >
                  <h3 className="text-lg font-semibold text-pink-400">
                    {section.title}
                  </h3>
                  <ul className="list-disc ml-6 space-y-2">
                    {section.items.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="md:w-1/2 mx-auto overflow-auto relative w-[380px] h-[780px]"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.05 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <Image
              className="rounded-lg shadow-lg object-cover object-center mb-6 cursor-pointer hover:shadow-2xl transition-all duration-300"
              src={pricingSpa.image.src}
              alt={pricingSpa.image.alt}
              layout="fill"
              objectFit="contain"
              onClick={toggleModal}
            />
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={toggleModal}
          >
            <motion.div
              className="rounded-lg shadow-lg p-6 w-[90%] md:w-[600px] relative"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                className="rounded-lg object-cover object-center"
                src={pricingSpa.image.src}
                alt={pricingSpa.image.alt}
                layout="responsive"
                width={600}
                height={400}
              />
              <p className="mt-4 text-center text-gray-700">
                {pricingSpa.caption.line1}
                <br />
                <span className="text-green-600">
                  {pricingSpa.caption.line2}
                </span>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default PricingServiceSPA;
