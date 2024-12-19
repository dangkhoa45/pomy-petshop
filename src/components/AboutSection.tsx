import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="text-gray-600 body-font bg-gradient-to-b from-indigo-50 to-white">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-6 font-extrabold text-indigo-700">
            Về Chúng Tôi
          </h1>
          <p className="mb-8 leading-relaxed text-lg text-gray-700">
            POMY PETSHOP là điểm đến tin cậy cho thú cưng của bạn. Chúng tôi
            cung cấp dịch vụ chăm sóc, nuôi dưỡng và spa chuyên nghiệp với đội
            ngũ nhân viên tận tâm, yêu thương động vật. Mục tiêu của chúng tôi
            là mang đến cho thú cưng của bạn những trải nghiệm tuyệt vời và sức
            khỏe tốt nhất.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-600 border-0 py-3 px-8 focus:outline-none hover:bg-indigo-700 rounded-full text-lg transition-all duration-300">
              Liên Hệ Ngay
            </button>
            <button className="ml-4 inline-flex text-indigo-600 bg-white border border-indigo-600 py-3 px-8 focus:outline-none hover:bg-indigo-100 rounded-full text-lg transition-all duration-300">
              Xem Thêm
            </button>
          </div>
        </div>

        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded shadow-lg hover:scale-105 transition-transform duration-500"
            alt="Về chúng tôi"
            src="/images/about-petshop.jpg"
            width={720}
            height={600}
            priority
          />
        </div>
      </div>
    </section>
  );
}
