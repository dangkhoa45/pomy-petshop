import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "POMY PETSHOP - DỊCH VỤ",
  description:
    "Khám phá dịch vụ chất lượng tại POMY PETSHOP - 31 Phú Lợi, Sóc Trăng. Chuyên cắt tỉa lông, vệ sinh, khách sạn thú cưng và nhiều dịch vụ khác dành cho bé yêu của bạn!",
  openGraph: {
    title: "POMY PETSHOP - DỊCH VỤ",
    description:
      "POMY PETSHOP - Cửa hàng thú cưng tại Sóc Trăng. Dịch vụ cắt tỉa, vệ sinh và khách sạn thú cưng uy tín, tận tâm và chuyên nghiệp.",
    url: "https://pomypetshopsoctrang.com/services",
    siteName: "POMY PETSHOP",
    images: [
      {
        url: "https://pomypetshopsoctrang.com/images/services-banner.jpg",
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
      "Dịch vụ cắt tỉa lông, vệ sinh và khách sạn thú cưng tại POMY PETSHOP, Sóc Trăng. Tận tâm, chuyên nghiệp, và yêu thương thú cưng của bạn!",
    images: ["https://pomypetshopsoctrang.com/images/services-banner.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function SerivceLayout({
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
        <meta property="og:url" content="https://pomypetshopsoctrang.com/services" />
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
