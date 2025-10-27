import { Footer, Header } from "@/components/layout";
import { SITE_URL } from "@/shared/constants";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import siteMeta from "@/data/seo/site-metadata.json";
import {
  generateLocalBusinessSchema,
  generateWebsiteSchema,
} from "@/shared/schema-generators";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteMeta.title.default,
    template: siteMeta.title.template,
  },
  description: siteMeta.description,
  keywords: siteMeta.keywords,
  openGraph: {
    title: siteMeta.openGraph.title,
    description: siteMeta.openGraph.description,
    url: SITE_URL,
    siteName: siteMeta.openGraph.siteName,
    images: siteMeta.openGraph.images,
    locale: siteMeta.openGraph.locale,
    type: siteMeta.openGraph.type as "website",
  },
  twitter: siteMeta.twitter,
  icons: siteMeta.icons,
  robots: siteMeta.robots as Metadata["robots"],
  alternates: { canonical: SITE_URL },
  verification: siteMeta.verification,
  facebook: siteMeta.facebook,
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
        {/* JSON-LD schemas for SEO */}
        <Script id="ld-local-business" type="application/ld+json">
          {JSON.stringify(generateLocalBusinessSchema())}
        </Script>
        <Script id="ld-website" type="application/ld+json">
          {JSON.stringify(generateWebsiteSchema())}
        </Script>
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
