"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import cta from "@/data/cta-spa.json";
import { BUSINESS_INFO } from "@/shared/constants";

const CTA: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-pink-200 to-white py-8">
      <motion.div
        className="container mx-auto px-6 md:px-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-bold text-pink-600 mb-4">{cta.heading}</h2>
        <p className="text-gray-700 text-md md:text-xl mb-8">{cta.paragraph}</p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href={BUSINESS_INFO.facebook}
            className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-lg font-medium text-lg shadow-lg transform hover:scale-105 transition-transform"
          >
            {cta.buttonLabel}
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
