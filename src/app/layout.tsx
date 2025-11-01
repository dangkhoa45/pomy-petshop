import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

/**
 * Font configuration
 * Inter: Professional sans-serif for body text and UI elements
 * Poppins: Modern rounded font for headings and emphasis
 */
const inter = Inter({
  subsets: ["latin", "vietnamese"],
  display: "swap",
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
});

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
  weight: ["400", "500", "600", "700", "800"],
});

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
    <html lang="vi" className={`${inter.variable} ${poppins.variable}`}>
      <body className="flex flex-col min-h-screen bg-gray-50">{children}</body>
    </html>
  );
}
