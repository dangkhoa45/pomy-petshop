"use client";
import { useState } from "react";

function ContactSection() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <section className="text-gray-600 body-font relative">
      <div className="md:absolute md:inset-0 relative w-full h-64 lg:h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d251614.56590602727!2d105.68246306370904!3d9.810194529754948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31a053003293b1ad%3A0x5faaec4d5b0ae7c!2sPOMY%20Petshop!5e0!3m2!1svi!2s!4v1736144668602!5m2!1svi!2s"
          width="100%"
          height="100%"
          style={{ filter: " contrast(1.2) opacity(0.6)" }}
          frameBorder="0"
          marginHeight={0}
          marginWidth={0}
          scrolling="no"
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Địa chỉ Pomy Petshop"
        ></iframe>
      </div>

      {/* Layout Cho Thiết Bị Lớn */}
      <div className="hidden md:block container px-5 py-24 mx-auto">
        <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
          <h2 className="text-gray-900 text-lg mb-1 font-semibold title-font">
            Liên Hệ Với Chúng Tôi
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Hãy để lại thông tin và chúng tôi sẽ liên hệ lại với bạn trong thời
            gian sớm nhất.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-sm text-gray-600"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Nhập email của bạn"
              />
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="message"
                className="leading-7 text-sm text-gray-600"
              >
                Tin Nhắn
              </label>
              <textarea
                id="message"
                name="message"
                required
                className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
                placeholder="Nhập nội dung tin nhắn"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg transition-all"
            >
              Gửi Tin Nhắn
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-3">
            Cảm ơn bạn đã tin tưởng chúng tôi!
          </p>
        </div>
      </div>

      {/* Layout Cho Điện Thoại */}
      <div className="block md:hidden container px-5 py-16 mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-gray-900 text-lg mb-1 font-semibold title-font">
            Liên Hệ Với Chúng Tôi
          </h2>
          <p className="leading-relaxed mb-5 text-gray-600">
            Hãy để lại thông tin và chúng tôi sẽ liên hệ lại với bạn trong thời
            gian sớm nhất.
          </p>

          {formSubmitted ? (
            <div className="text-center text-pink-500 font-medium">
              Cảm ơn bạn đã liên hệ! Chúng tôi sẽ phản hồi sớm nhất.
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="relative mb-4">
                <label
                  htmlFor="email"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-2 px-4 leading-8 transition-colors duration-200 ease-in-out"
                  placeholder="Nhập email của bạn"
                />
              </div>
              <div className="relative mb-4">
                <label
                  htmlFor="message"
                  className="leading-7 text-sm text-gray-600"
                >
                  Tin Nhắn
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 h-32 text-base outline-none text-gray-700 py-2 px-4 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  placeholder="Nhập nội dung tin nhắn"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-pink-500 border-0 py-2 px-6 focus:outline-none hover:bg-pink-600 rounded text-lg transition-all"
              >
                Gửi Tin Nhắn
              </button>
            </form>
          )}

          <p className="text-xs text-gray-500 mt-3">
            Chúng tôi luôn sẵn sàng lắng nghe ý kiến và phản hồi từ bạn.
          </p>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
