"use client"
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import Typical from "react-typical";

const FeatureService = () => {
  const services = [
    "Vệ sinh tai, nhổ lông tai",
    "Cắt móng, dũa móng",
    "Cạo lông bụng, vùng vệ sinh",
    "Tắm và dưỡng xả lông",
    "Tỉa gọn lông vùng mắt",
    "Thao dưỡng và thơm lông",
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const ServiceItem = ({ name }: { name: string }) => (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate="visible"
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="p-2 sm:w-1/2 w-full"
    >
      <div className="bg-gray-100 rounded flex p-4 h-full items-center hover:shadow-lg transition-shadow duration-300">
        <FaCheckCircle className="text-pink-500 w-6 h-6 flex-shrink-0 mr-4" />
        <span className="title-font font-medium">{name}</span>
      </div>
    </motion.div>
  );

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="text-gray-600 body-font"
    >
      <div className="container px-5 py-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-8"
        >
          <h1 className="title-font text-xl md:text-2xl mb-6 font-medium text-pink-500 font-poppins">
            Dịch vụ spa chuyên nghiệp cho thú cưng tại
            <br />
            <span className="text-2xl md:text-4xl pt-4 font-bold">
              <Typical
                steps={["POMY Petshop", 1000, "31 Phú Lợi - Sóc Trăng", 1000]}
                loop={Infinity}
                wrapper="span"
              />
            </span>
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            Chúng tôi cung cấp các dịch vụ cắt tỉa, vệ sinh, và khách sạn thú
            cưng chuyên nghiệp, giúp thú cưng của bạn luôn khỏe mạnh và đáng
            yêu. Hãy để chúng tôi chăm sóc người bạn bốn chân của bạn.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2"
        >
          {services.map((service, index) => (
            <ServiceItem key={index} name={service} />
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default FeatureService;
