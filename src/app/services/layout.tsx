import Footer from "@/components/Footer";
import Header from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "POMY PETSHOP - DỊCH VỤ",
  description:
    "POMY PETSHOP - 31 Phú Lợi - Cắt Tỉa, Vệ Sinh, Khách Sạn Thú Cưng ",
};

export default function ServiceLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
