"use client"
import { motion } from "framer-motion";
import Link from "next/link";

const CTA: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-pink-200 to-white py-8">
      <motion.div
        className="container mx-auto px-6 md:px-12 text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className="text-2xl font-bold text-pink-600 mb-4">
          Đừng để bé yêu chờ đợi, hãy chăm sóc ngay hôm nay!
        </h2>
        <p className="text-gray-700 text-md md:text-xl mb-8">
          Đặt lịch ngay để bé yêu của bạn được chăm sóc tận tình tại{" "}
          <span className="font-semibold text-pink-500">POMY Petshop</span>.
          <br className="hidden md:block" /> Chúng tôi luôn sẵn sàng phục vụ bạn
          và bé yêu.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="https://www.facebook.com/cuahangthucungPOMY"
            className="bg-pink-600 hover:bg-pink-700 text-white py-3 px-6 rounded-lg font-medium text-lg shadow-lg transform hover:scale-105 transition-transform"
          >
            Liên hệ ngay với chúng tôi
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default CTA;
