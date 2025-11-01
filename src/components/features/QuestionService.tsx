"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import data from "@/data/services/faq/question-service.json";

function QuestionService() {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-12 mb-2 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <motion.h1
            className="title-font text-2xl md:text-3xl mb-8 text-pink-600 font-extrabold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            {data.heading}
          </motion.h1>

          {data.items.map((item, idx) => (
            <div
              className="flex flex-col mb-10 lg:items-start items-center"
              key={idx}
            >
              <motion.div
                className="flex-grow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: idx === 0 ? 0.4 : idx === 2 ? 0.2 : 0,
                }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <h2 className="text-pink-600 text-lg title-font font-medium mb-1">
                  {item.title}
                </h2>
                <p className="leading-relaxed text-base">{item.body}</p>
              </motion.div>
            </div>
          ))}
        </div>

        <motion.div
          className="relative w-[300px] h-[300px] md:w-[512px] md:h-[512px] flex items-center justify-center cursor-pointer"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Image
            className="object-cover object-center rounded-lg shadow-lg"
            alt={data.image.alt}
            src={data.image.src}
            layout="fill"
            objectFit="cover"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default QuestionService;
