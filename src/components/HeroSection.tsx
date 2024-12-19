import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

function HeroSection() {
  return (
    <section className="relative bg-indigo-50 w-screen h-screen">
      <div
        className="absolute inset-0 h-3/4"
        style={{
          backgroundImage: "url('/images/bg-pomy-1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.9)",
        }}
      />

      <div className="relative container mx-auto flex flex-col justify-between h-full">
        <div className="flex flex-col items-start justify-center h-full px-8 w-full sm:w-2/5  ">
          <p className="mb-4 text-lg sm:text-xl text-red-500 uppercase tracking-wide">
            <b>Cắt tỉa, vệ sinh, khách sạn thú cưng</b>
          </p>
          <h1 className="text-4xl sm:text-6xl font-bold text-indigo-600 leading-snug">
            Chăm Sóc Toàn Diện Cho Thú Cưng
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-700 leading-relaxed">
            Với nhiều năm kinh nghiệm trong ngành thú y, POMY petshop tự hào là
            địa chỉ tin cậy của nhiều chủ nuôi thú cưng.
          </p>
          <button className="flex gap-3 justify-center items-center mt-6 px-6 py-3 bg-red-600 text-white rounded-full text-lg hover:bg-red-700 shadow-lg transition-all">
            Đặt lịch ngay <FaArrowRight />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 px-8">
          {/* Card 1 */}
          <div className="bg-white bg-opacity-70 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden hover:scale-105 transform transition-all duration-300">
            <Image
              src="/images/dog-2.png"
              alt="Dog Supplies"
              className="object-cover bg-indigo-300"
              layout="responsive"
              width={300} 
              height={250} 
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                Đồ dùng cho bé chó
              </h3>
              <p className="mt-2 text-gray-600 text-base leading-relaxed">
                Thực phẩm & Đồ chơi, Đồ dùng cao cấp
              </p>
              <button className="mt-4 px-5 py-3 bg-indigo-600 text-white rounded-full text-base font-medium hover:bg-indigo-700 transition-all">
                Xem ngay
              </button>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white bg-opacity-70 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden hover:scale-105 transform transition-all duration-300">
            <Image
              src="/images/cat-1.png"
              alt="Cat Supplies"
              className="object-cover bg-pink-300"
              layout="responsive"
              width={300}
              height={250}
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                Đồ dùng cho bé mèo
              </h3>
              <p className="mt-2 text-gray-600 text-base leading-relaxed">
                Thực phẩm & Đồ chơi, Đồ dùng cao cấp
              </p>
              <button className="mt-4 px-5 py-3 bg-indigo-600 text-white rounded-full text-base font-medium hover:bg-indigo-700 transition-all">
                Xem ngay
              </button>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white bg-opacity-70 backdrop-blur-lg rounded-2xl shadow-xl overflow-hidden hover:scale-105 transform transition-all duration-300">
            <Image
              src="/images/pomy-11.png"
              alt="Other Supplies"
              className="object-cover bg-orange-300"
              layout="responsive"
              width={300}
              height={250}
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-gray-800">
                Đồ dùng khác
              </h3>
              <p className="mt-2 text-gray-600 text-base leading-relaxed">
                Thực phẩm & Đồ chơi, Đồ dùng cao cấp
              </p>
              <button className="mt-4 px-5 py-3 bg-indigo-600 text-white rounded-full text-base font-medium hover:bg-indigo-700 transition-all">
                Xem ngay
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
