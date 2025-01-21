import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "POMY PETSHOP - TRANG CHỦ",
  description:
    "Pomy Petshop - Cửa hàng thú cưng hàng uy tín, cung cấp các dịch vụ cắt tỉa, vệ sinh và khách sạn thú cưng tại 31 Phú Lợi, Sóc Trăng. Dịch vụ cắt tỉa, vệ sinh và khách sạn thú cưng chuyên nghiệp, kết hợp với các sản phẩm chất lượng, đảm bảo mang lại sự hài lòng cho thú cưng của bạn!",
  openGraph: {
    title: "POMY PETSHOP - TRANG CHỦ",
    description:
      "Pomy Petshop - Cửa hàng thú cưng hàng uy tín, cung cấp các dịch vụ cắt tỉa, vệ sinh và khách sạn thú cưng tại 31 Phú Lợi, Sóc Trăng. Dịch vụ cắt tỉa, vệ sinh và khách sạn thú cưng chuyên nghiệp, kết hợp với các sản phẩm chất lượng, đảm bảo mang lại sự hài lòng cho thú cưng của bạn!",
    url: "https://pomypetshopsoctrang.com",
    siteName: "POMY PETSHOP",
    images: [
      {
        url: "/images/pomy-petshop-1.jpg",
        width: 1200,
        height: 630,
        alt: "POMY PETSHOP - Cửa hàng thú cưng hàng uy tín, cung cấp các dịch vụ cắt tỉa, vệ sinh và khách sạn thú cưng tại 31 Phú Lợi, Sóc Trăng",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "POMY PETSHOP - TRANG CHỦ",
    description:
      "Khám phá dịch vụ và sản phẩm dành cho thú cưng tại POMY PETSHOP. Cắt tỉa, vệ sinh, khách sạn thú cưng chuyên nghiệp.",
    images: ["/images/pomy-petshop-1.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:title" content={metadata.title as string} />
        <meta
          property="og:description"
          content={metadata.description as string}
        />
        <meta property="og:image" content="/images/og-image.jpg" />
        <meta property="og:url" content="https://pomypetshopsoctrang.com" />
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
          <Analytics />
          <SpeedInsights />
        </main>

        <Footer aria-label="Pomy Petshop Footer" />
      </body>
    </html>
  );
}
