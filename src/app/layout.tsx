import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "POMY PETSHOP",
  description:
    "Pomy Petshop - Cửa hàng thú cưng uy tín, cung cấp dịch vụ cắt tỉa, vệ sinh và khách sạn thú cưng tại Sóc Trăng. Dịch vụ chuyên nghiệp, sản phẩm chất lượng, đảm bảo sự hài lòng cho thú cưng của bạn.",
  openGraph: {
    title: "POMY PETSHOP",
    description:
      "Cửa hàng thú cưng uy tín tại Sóc Trăng. Dịch vụ cắt tỉa, vệ sinh và khách sạn thú cưng chuyên nghiệp.",
    url: "https://pomypetshopsoctrang.com",
    siteName: "POMY PETSHOP",
    images: [
      {
        url: "/images/cua-hang-pomy-petshop-1.jpg",
        width: 1200,
        height: 630,
        alt: "POMY PETSHOP - Dịch vụ thú cưng tại Sóc Trăng",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "POMY PETSHOP",
    description:
      "Dịch vụ cắt tỉa, vệ sinh và khách sạn thú cưng tại POMY PETSHOP.",
    images: ["/images/cua-hang-pomy-petshop-1.jpg"],
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
