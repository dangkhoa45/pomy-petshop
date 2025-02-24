import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "POMY PETSHOP - DỊCH VỤ",
  description:
    "Khám phá dịch vụ chất lượng tại POMY PETSHOP - 31 Phú Lợi, Sóc Trăng. Chuyên cắt tỉa lông, vệ sinh, khách sạn thú cưng và nhiều dịch vụ khác dành cho bé yêu của bạn!",
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
    "xổ giun chó mèo Sóc Trăng ( chính)",
    "cat tia poodle Soc Trang ( chính)",
    "tam meo Soc Trang",
    "tam cho Soc Trang",
    "vaccine chó mèo Sóc Trăng",
    "hotel chó mèo Sóc Trăng",
    "khách sạn chó mèo Sóc Trăng ( chính)",
    "lưu trú chó mèo Sóc Trăng",
    "quần áo chó mèo Sóc Trăng",
    "phụ kiện đồ chơi chó mèo Sóc Trăng",
  ],
  openGraph: {
    title: "POMY PETSHOP - DỊCH VỤ",
    description:
      "POMY PETSHOP - Cửa hàng thú cưng tại Sóc Trăng. Dịch vụ cắt tỉa, vệ sinh và khách sạn thú cưng uy tín, tận tâm và chuyên nghiệp.",
    url: "https://pomypetshopsoctrang.com/services",
    siteName: "POMY PETSHOP",
    images: [
      {
        url: "/images/cua-hang-pomy-petshop-1.jpg",
        width: 1200,
        height: 630,
        alt: "POMY PETSHOP - Dịch vụ thú cưng chuyên nghiệp",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "POMY PETSHOP - DỊCH VỤ",
    description:
      "Dịch vụ cắt tỉa, vệ sinh và khách sạn thú cưng tại POMY PETSHOP.",
    images: [
      "https://pomypetshopsoctrang.com/images/cua-hang-pomy-petshop-1.jpg",
    ],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
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

export default function ServiceLayout({
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
