"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { useSwipeable } from "react-swipeable";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  message: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Nguyễn Thị Mai",
    role: "Chủ nhân của Bông (Cún Cưng)",
    message:
      "Tôi thật sự hài lòng với dịch vụ tại Pomy Petshop. Các bạn nhân viên rất tận tâm và chuyên nghiệp. Bông nhà tôi luôn vui vẻ và sạch sẽ mỗi khi trở về. Cảm ơn các bạn rất nhiều!",
    image: `https://i.pravatar.cc/150?img=1`,
  },
  {
    id: 2,
    name: "Phạm Văn Tú",
    role: "Chủ nhân của Miu (Mèo Cưng)",
    message:
      "Dịch vụ ở đây rất tuyệt vời! Miu nhà tôi thường rất nhát người, nhưng các bạn đã chăm sóc rất nhẹ nhàng và chu đáo. Tôi sẽ giới thiệu Pomy Petshop cho tất cả bạn bè của mình.",
    image: `https://i.pravatar.cc/150?img=2`,
  },
  {
    id: 3,
    name: "Lê Minh Huy",
    role: "Chủ nhân của Béo (Cún Cưng)",
    message:
      "Pomy Petshop không chỉ là nơi chăm sóc thú cưng mà còn là nơi tôi hoàn toàn tin tưởng. Đội ngũ rất nhiệt tình, tư vấn cẩn thận. Béo nhà tôi lúc nào cũng sạch sẽ và thơm tho. Rất đáng để trải nghiệm!",
    image: `https://i.pravatar.cc/150?img=3`,
  },
  {
    id: 4,
    name: "Trần Thị Hoa",
    role: "Chủ nhân của Mimi (Mèo Cưng)",
    message:
      "Mimi rất kén chọn nhưng khi đến Pomy Petshop, tôi cảm thấy yên tâm vì cách chăm sóc chu đáo. Mỗi lần trở về, Mimi đều vui vẻ hơn. Cảm ơn các bạn rất nhiều!",
    image: `https://i.pravatar.cc/150?img=4`,
  },
  {
    id: 5,
    name: "Hoàng Văn Sơn",
    role: "Chủ nhân của Lu (Chó Pug)",
    message:
      "Tôi đã thử nhiều nơi nhưng Pomy Petshop là địa chỉ duy nhất mà tôi hoàn toàn tin tưởng. Lu luôn sạch sẽ và thơm tho khi tôi đón về.",
    image: `https://i.pravatar.cc/150?img=5`,
  },
];

function TestimonialSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(3);

  const updateItemsToShow = () => {
    if (window.innerWidth >= 1024) {
      setItemsToShow(3);
    } else if (window.innerWidth >= 768) {
      setItemsToShow(2);
    } else {
      setItemsToShow(1);
    }
  };

  useEffect(() => {
    updateItemsToShow();
    window.addEventListener("resize", updateItemsToShow);
    return () => window.removeEventListener("resize", updateItemsToShow);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 >= testimonials.length ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    trackMouse: true,
  });

  return (
    <section className="text-gray-600 body-font bg-transparent">
      <div className="container px-5 py-12 mx-auto">
        <h1 className="text-4xl font-extrabold text-center text-pink-500 mb-12">
          Cảm Nhận Từ Khách Hàng
        </h1>

        <div {...handlers} className="relative">
          <div className="flex flex-wrap gap-8 justify-center">
            {testimonials
              .slice(currentIndex, currentIndex + itemsToShow)
              .concat(
                testimonials.slice(
                  0,
                  Math.max(
                    0,
                    itemsToShow - (testimonials.length - currentIndex)
                  )
                )
              )
              .map((testimonial) => (
                <motion.div
                  key={testimonial.id}
                  className="bg-white shadow-md rounded-lg p-6 max-w-sm md:w-1/2 lg:w-1/3 h-[360px]"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Image
                    alt={`Hình ảnh của ${testimonial.name}`}
                    className="w-20 h-20 mb-4 object-cover object-center rounded-full inline-block border-2 border-gray-200 bg-gray-100"
                    src={testimonial.image}
                    width={80}
                    height={80}
                    layout="intrinsic"
                    priority={testimonial.id === 1}
                    objectFit="cover"
                    quality={80}
                    loading={testimonial.id === 1 ? undefined : "lazy"}
                  />
                  <p className="leading-relaxed italic text-gray-600">
                    &quot;{testimonial.message}&quot;
                  </p>
                  <span className="inline-block h-1 w-10 rounded bg-pink-500 mt-4 mb-4"></span>
                  <h2 className="text-gray-900 font-semibold title-font tracking-wider text-sm">
                    {testimonial.name}
                  </h2>
                  <p className="text-gray-500">{testimonial.role}</p>
                </motion.div>
              ))}
          </div>

          <div className="flex justify-between items-center mt-8 mx-3">
            <button
              onClick={handlePrev}
              className="text-pink-500 hover:text-pink-700 transition text-3xl "
              aria-label="Trước"
            >
              <FiArrowLeft />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <div
                  key={index}
                  className={`w-2 h-2 rounded-full ${
                    currentIndex === index ? "bg-pink-500" : "bg-gray-300"
                  }`}
                ></div>
              ))}
            </div>
            <button
              onClick={handleNext}
              className="text-pink-500 hover:text-pink-700 transition text-3xl "
              aria-label="Tiếp"
            >
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialSection;
