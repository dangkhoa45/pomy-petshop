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
        url: "https://pomypetshopsoctrang.com/images/cua-hang-pomy-petshop-1.jpg",
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
    images: ["https://pomypetshopsoctrang.com/images/cua-hang-pomy-petshop-1.jpg"],
  },
  icons: {
    icon: "https://pomypetshopsoctrang.com/favicon.ico",
    shortcut: "https://pomypetshopsoctrang.com/favicon.ico",
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
