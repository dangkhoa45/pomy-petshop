import Image from "next/image";

function HeroSection() {
  return (
    <section className="bg-green-50 text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-5xl text-4xl mb-6 font-extrabold text-pink-500">
            Dịch Vụ Chăm Sóc
            <br className="hidden lg:inline-block" />
            Thú Cưng Hoàn Hảo
          </h1>
          <p className="mb-8 leading-relaxed text-lg text-gray-600">
            Chúng tôi cung cấp các dịch vụ cắt tỉa, vệ sinh, và khách sạn thú
            cưng chuyên nghiệp, giúp thú cưng của bạn luôn khỏe mạnh và đáng
            yêu. Hãy để chúng tôi chăm sóc người bạn bốn chân của bạn.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-pink-500 border-0 py-3 px-8 focus:outline-none hover:bg-pink-600 rounded-full text-lg shadow-md transition-all">
              Đặt Lịch Ngay
            </button>
            <button className="ml-4 inline-flex text-pink-500 bg-white border border-pink-500 py-3 px-8 focus:outline-none hover:bg-pink-50 rounded-full text-lg shadow-md transition-all">
              Tìm Hiểu Thêm
            </button>
          </div>
        </div>

        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            className="object-cover object-center rounded-lg shadow-lg"
            alt="hero"
            src="https://dummyimage.com/720x600" 
            width={720}
            height={600}
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
