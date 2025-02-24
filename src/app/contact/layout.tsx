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
        url: "https://pomypetshopsoctrang.com/images/cua-hang-pomy-petshop-1.jpg",
        width: 1200,
        height: 630,
        alt: "Liên hệ POMY PETSHOP",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "POMY PETSHOP - LIÊN HỆ",
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
  ],
};

export default function ContactLayout({
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
