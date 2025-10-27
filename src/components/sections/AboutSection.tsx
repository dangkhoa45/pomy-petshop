"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { fadeInRight, scaleIn, buttonVariant } from "@/shared/animations";
import data from "@/data/about/about-section.json";

export default function AboutSection() {
  const router = useRouter();

  return (
    <section className="bg-transparent text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
        <motion.div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0"
          variants={scaleIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-gradient-to-tl from-green-100 to-pink-200 relative hide md:block md:w-[512px] md:h-[512px]"
          >
            <Image
              className="object-cover object-center rounded-lg shadow-lg"
              alt={data.image.alt}
              src={data.image.src}
              width={512}
              height={512}
              style={{ objectFit: "cover" }}
              quality={80}
              loading="lazy"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center"
          variants={fadeInRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
        >
          <h2 className="title-font sm:text-5xl text-4xl mb-6 font-extrabold text-pink-500">
            {data.title}
          </h2>
          <p className="mb-8 leading-relaxed text-lg text-gray-600">
            {data.paragraph}
          </p>
          <motion.div
            className="flex justify-center"
            variants={buttonVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.button
              className="inline-flex text-white bg-pink-500 border-0 py-3 px-8 focus:outline-none hover:bg-pink-600 rounded-full text-lg shadow-md transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                router.push("/about");
              }}
            >
              {data.buttons.primary}
            </motion.button>
            <motion.button
              className="ml-4 inline-flex text-pink-500 bg-white border border-pink-500 py-3 px-8 focus:outline-none hover:bg-pink-50 rounded-full text-lg shadow-md transition-all"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                router.push("/services");
              }}
            >
              {data.buttons.secondary}
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
