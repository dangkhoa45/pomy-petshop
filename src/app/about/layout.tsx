import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
  twitter: {
    card: "summary_large_image",
    title: "POMY PETSHOP - GIỚI THIỆU",
    description:
      "POMY PETSHOP - Nơi cung cấp dịch vụ và sản phẩm dành riêng cho thú cưng. Khám phá ngay!",
    images: ["https://pomypetshopsoctrang.com/images/pomy-petshop-1.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function AboutPage({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content={metadata.title as string} />
        <meta
          property="og:description"
          content={metadata.description as string}
        />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://pomypetshopsoctrang.com/about" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title as string} />
        <meta
          name="twitter:description"
          content={metadata.description as string}
        />
        <meta name="twitter:image" content="/images/twitter-image.jpg" />
      </head>
      <body className="flex flex-col min-h-screen bg-gray-50">
        <Header aria-label="Pomy Petshop Header" />

        <main className="flex-grow" role="main" aria-labelledby="main-content">
          {children}
        </main>

        <Footer aria-label="Pomy Petshop Footer" />
      </body>
    </html>
  );
}
