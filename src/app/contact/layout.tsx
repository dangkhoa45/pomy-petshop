import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
        url: "https://pomypetshopsoctrang.com/images/contact-banner.jpg",
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
      "Hãy liên hệ với chúng tôi tại POMY PETSHOP để được tư vấn các dịch vụ thú cưng chuyên nghiệp tại Sóc Trăng.",
    images: ["https://pomypetshopsoctrang.com/images/contact-banner.jpg"],
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
        <meta
          property="og:url"
          content="https://pomypetshopsoctrang.com/contact"
        />
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
