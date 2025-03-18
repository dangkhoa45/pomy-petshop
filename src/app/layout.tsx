import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pomy petshop | Cửa hàng thú cưng Sóc Trăng ",
  description:
    "Pomy petshop - Cửa hàng thú cưng tại Sóc Trăng. Dịch vụ cắt tỉa, vệ sinh, khách sạn cho thú cưng. Uy tín - Chất lượng - Giá tốt.",
  keywords: [
    "pomypetshop",
    "pomypetshopsoctrang",
    "petshop",
    "petshopsoctrang",
    "thucung",
    "thucungsoctrang",
    "thucungpomy",
    "thucungpomysoctrang",
    "POMY Petshop",
    "Cửa Hàng Thú Cưng Pomy Sóc Trăng",
    "Cửa Hàng Thú Cưng Sóc Trăng",
    "petshop Sóc Trăng",
    "cua hang thu cung Soc Trang",
    "xổ giun chó mèo Sóc Trăng",
    "cat tia poodle Soc Trang",
    "tam meo Soc Trang",
    "tam cho Soc Trang",
    "vaccine chó mèo Sóc Trăng",
    "hotel chó mèo Sóc Trăng",
    "khách sạn chó mèo Sóc Trăng",
    "lưu trú chó mèo Sóc Trăng",
    "quần áo chó mèo Sóc Trăng",
    "phụ kiện đồ chơi chó mèo Sóc Trăng",
  ],
  openGraph: {
    title:
      "Pomy petshop | Cửa hàng thú cưng Sóc Trăng - Tắm - Cắt Tỉa, Vaccine, Khách Sạn Thú Cưng",
    description:
      "Cửa hàng thú cưng Pomy pet shop uy tín tại Sóc Trăng. Dịch vụ cắt tỉa, vệ sinh và khách sạn thú cưng chuyên nghiệp.",
    url: "https://pomypetshopsoctrang.com",
    siteName:
      "Pomy petshop | Cửa hàng thú cưng Sóc Trăng - Tắm - Cắt Tỉa, Vaccine, Khách Sạn Thú Cưng",
    images: [
      {
        url: "/images/pomy-petshop-logo.jpg",
        width: 1200,
        height: 630,
        alt: "Pomy Petshop - Dịch vụ thú cưng tại Sóc Trăng",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Pomy petshop | Cửa hàng thú cưng Sóc Trăng - Tắm - Cắt Tỉa, Vaccine, Khách Sạn Thú Cưng",
    description:
      "Dịch vụ cắt tỉa, vệ sinh và khách sạn thú cưng tại Pomy Petshop.",
    images: ["/images/pomy-petshop-logo.jpg"],
  },
  icons: {
    icon: "/pomy-petshop.png",
    shortcut: "/pomy-petshop.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: "https://pomypetshopsoctrang.com",
    languages: {
      "vi-VN": "https://pomypetshopsoctrang.com/vi",
      "en-US": "https://pomypetshopsoctrang.com/en",
    },
  },
  verification: {
    google:
      "google-site-verification=w_erDInrT5fGiLu7Ft-JEfRKvADe4xeYOyN9zx_73kw",
  },
  facebook: {
    appId: "2422218498121617",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="flex flex-col min-h-screen bg-gray-50">
        <Header aria-label="Pomy Petshop Header" />
        <main className="flex-grow" role="main" aria-labelledby="main-content">
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
        <Footer aria-label="Pomy Petshop Footer" />
      </body>
    </html>
  );
}
