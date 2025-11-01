import type { Metadata } from "next";
import "./globals.css";

/**
 * Root layout metadata
 * This is a minimal root layout - actual layouts are defined in route groups
 */
export const metadata: Metadata = {
  title: "Pomy Petshop Sóc Trăng",
  description: "Chăm sóc thú cưng chuyên nghiệp tại Sóc Trăng",
};

/**
 * Root Layout
 * Minimal layout that wraps all route groups
 * Actual layouts are implemented in (site) and (admin) route groups
 */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <html lang="vi">
      <body className="flex flex-col min-h-screen bg-gray-50">{children}</body>
    </html>
  );
}
