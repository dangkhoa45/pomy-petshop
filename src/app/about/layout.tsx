import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "POMY PETSHOP - GIỚI THIỆU",
  description:
    "Khám phá POMY PETSHOP - nơi mang đến dịch vụ chăm sóc và sản phẩm chất lượng dành riêng cho thú cưng tại 31 Phú Lợi, Sóc Trăng. Tận tâm, chuyên nghiệp, và yêu thương thú cưng của bạn như chính bạn!",
  openGraph: {
    title: "POMY PETSHOP - GIỚI THIỆU",
    description:
      "POMY PETSHOP - Giới thiệu về cửa hàng thú cưng hàng đầu tại 31 Phú Lợi, Sóc Trăng. Nơi cung cấp các dịch vụ như cắt tỉa, vệ sinh và khách sạn thú cưng với chất lượng tốt nhất.",
    url: "https://pomypetshopsoctrang.com",
    siteName: "POMY PETSHOP",
    images: [
      {
        url: "https://pomypetshopsoctrang.com/images/pomy-petshop-1.jpg",
        width: 1200,
        height: 630,
        alt: "Giới thiệu POMY PETSHOP - Nơi yêu thương thú cưng",
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
