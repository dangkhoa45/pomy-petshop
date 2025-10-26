import { SITE_URL } from "@/shared/constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "POMY PETSHOP - GIỚI THIỆU",
  description:
    "Khám phá POMY PETSHOP - nơi mang đến dịch vụ chăm sóc và sản phẩm chất lượng dành riêng cho thú cưng tại 31 Phú Lợi, Sóc Trăng. Tận tâm, chuyên nghiệp, và yêu thương thú cưng của bạn như chính bạn!",
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
    "xổ giun chó mèo Sóc Trăng ",
    "cat tia poodle Soc Trang ",
    "tam meo Soc Trang",
    "tam cho Soc Trang",
    "vaccine chó mèo Sóc Trăng",
    "hotel chó mèo Sóc Trăng",
    "khách sạn chó mèo Sóc Trăng ",
    "lưu trú chó mèo Sóc Trăng",
    "quần áo chó mèo Sóc Trăng",
    "phụ kiện đồ chơi chó mèo Sóc Trăng",
  ],
  openGraph: {
    title: "POMY PETSHOP - GIỚI THIỆU",
    description:
      "POMY PETSHOP - Giới thiệu về cửa hàng thú cưng hàng đầu tại 31 Phú Lợi, Sóc Trăng. Nơi cung cấp các dịch vụ như cắt tỉa, vệ sinh và khách sạn thú cưng với chất lượng tốt nhất.",
    url: `${SITE_URL}/about`,
    siteName: "POMY PETSHOP",
    images: [
      {
        url: "/images/pomy-petshop-logo.jpg",
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
      "Dịch vụ cắt tỉa, vệ sinh và khách sạn thú cưng tại POMY PETSHOP.",
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
      "max-snippet": -2,
      "max-image-preview": "large",
      "max-video-preview": -2,
    },
  },
  alternates: {
    canonical: `${SITE_URL}/about`,
  },
  verification: {
    google:
      "google-site-verification=w_erDInrT5fGiLu7Ft-JEfRKvADe4xeYOyN9zx_73kw",
  },
  facebook: {
    appId: "2422218498121617",
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
