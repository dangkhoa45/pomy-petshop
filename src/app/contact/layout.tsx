import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "POMY PETSHOP - LIÊN HỆ",
  description:
    "Liên hệ với POMY PETSHOP tại 31 Phú Lợi, Sóc Trăng để được tư vấn về dịch vụ cắt tỉa, vệ sinh, và khách sạn thú cưng. Chúng tôi luôn sẵn sàng hỗ trợ bạn!",
  openGraph: {
    title: "POMY PETSHOP - LIÊN HỆ",
    description:
      "POMY PETSHOP - Nơi cung cấp các dịch vụ thú cưng chất lượng tại Sóc Trăng. Liên hệ ngay để được tư vấn và hỗ trợ tận tâm!",
    url: "https://pomypetshopsoctrang.com/contact",
    siteName: "POMY PETSHOP",
    images: [
      {
        url: "https://pomypetshopsoctrang.com/images/contact-banner.jpg",
        width: 1200,
        height: 630,
        alt: "Liên hệ POMY PETSHOP",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
};

export default function AboutPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <main className="flex-grow" role="main" aria-labelledby="main-content">
        {children}
      </main>
    </>
  );
}
