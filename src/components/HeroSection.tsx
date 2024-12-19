import Image from "next/image";

function HeroSection() {
  return (
    <section className="relative bg-indigo-50 w-screen h-screen">

      <div
        className="absolute inset-0 h-3/4"
        style={{
          backgroundImage: "url('/images/hero-pet.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      <div className="relative container mx-auto flex flex-col justify-between h-full">
        <div className="text-center mt-10">
          <h1 className="text-4xl sm:text-6xl font-bold text-gray-800">
            Save 50% Off
          </h1>
          <p className="mt-4 text-lg sm:text-xl text-gray-600">
            Happy Pet, Happy You
          </p>
          <button className="mt-6 px-6 py-3 bg-indigo-600 text-white rounded-full text-lg hover:bg-indigo-700 transition-all">
            Shop Now
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/dog-supplies.jpg"
              alt="Dog Supplies"
              className="w-full h-48 object-cover"
              width={500}
              height={500}
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Dog Supplies
              </h3>
              <p className="text-gray-600">Food & Toys, Premium Supplies</p>
              <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-full text-sm hover:bg-indigo-700 transition-all">
                Shop Now
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/cat-supplies.jpg"
              alt="Cat Supplies"
              className="w-full h-48 object-cover"
              width={500}
              height={500}
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Cat Supplies
              </h3>
              <p className="text-gray-600">Food & Toys, Premium Supplies</p>
              <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-full text-sm hover:bg-indigo-700 transition-all">
                Shop Now
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <Image
              src="/images/other-supplies.jpg"
              alt="Other Supplies"
              className="w-full h-48 object-cover"
              width={500}
              height={500}
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold text-gray-800">
                Other Utensils
              </h3>
              <p className="text-gray-600">Food & Toys, Premium Supplies</p>
              <button className="mt-4 px-4 py-2 bg-indigo-600 text-white rounded-full text-sm hover:bg-indigo-700 transition-all">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
