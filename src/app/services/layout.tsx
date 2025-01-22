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
