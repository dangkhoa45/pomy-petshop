import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pomy petshop | Cửa hàng thú cưng Sóc Trăng ",
  description:
    "Pomy petshop - Cửa hàng thú cưng tại Sóc Trăng. Dịch vụ cắt tỉa, vệ sinh, khách sạn cho thú cưng. Uy tín - Chất lượng - Giá tốt.",
  openGraph: {
    title: "Pomy petshop | Cửa hàng thú cưng Sóc Trăng - Tắm - Cắt Tỉa, Vaccine, Khách Sạn Thú Cưng",
    description:
      "Cửa hàng thú cưng Pomy pet shop uy tín tại Sóc Trăng. Dịch vụ cắt tỉa, vệ sinh và khách sạn thú cưng chuyên nghiệp.",
    url: "https://pomypetshopsoctrang.com",
    siteName: "Pomy petshop | Cửa hàng thú cưng Sóc Trăng - Tắm - Cắt Tỉa, Vaccine, Khách Sạn Thú Cưng",
    images: [
      {
        url: "https://pomypetshopsoctrang.com/images/cua-hang-pomy-petshop-1.jpg",
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
    title: "Pomy petshop | Cửa hàng thú cưng Sóc Trăng - Tắm - Cắt Tỉa, Vaccine, Khách Sạn Thú Cưng",
    description:
      "Dịch vụ cắt tỉa, vệ sinh và khách sạn thú cưng tại Pomy Petshop.",
    images: ["/images/cua-hang-pomy-petshop-1.jpg"],
  },
  icons: {
    icon: "pomypetshopsoctrang.com/favicon.ico",
    shortcut: "pomypetshopsoctrang.com/favicon.ico",
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
      <head>
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "PetStore",
              name: "POMY Petshop",
              url: "https://pomypetshopsoctrang.com",
              logo: "https://pomypetshopsoctrang.com/favicon.ico",
              image: "https://pomypetshopsoctrang.com/images/cua-hang-pomy-petshop-1.jpg",
              address: {
                "@type": "PostalAddress",
                streetAddress: "31 Phú Lợi, Sóc Trăng, Thành Phố Sóc Trăng",
                addressLocality: "Sóc Trăng",
                addressRegion: "ST",
                postalCode: "96000",
                addressCountry: "VN",
              },
              openingHours: "Mo-Su 07:00-22:00",
              telephone: "+8470 803 9333",
            }),
          }}
        />
      </head>
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
