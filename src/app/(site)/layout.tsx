import { type Metadata } from "next";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import { Footer, Header } from "@/components/layout";
import siteMeta from "@/data/seo/site-metadata.json";
import { SITE_URL } from "@/shared/constants";
import {
  generateLocalBusinessSchema,
  generateWebsiteSchema,
} from "@/shared/schema-generators";

import "../globals.css";

/**
 * Metadata configuration for the public website
 * Includes SEO, Open Graph, Twitter cards, and structured data
 */
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

/**
 * Root layout for public website (site)
 * Includes header, footer, and JSON-LD structured data for SEO
 */
export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>): React.JSX.Element {
  return (
    <html lang="vi">
      <body className="flex flex-col min-h-screen bg-gray-50">
        {/* Header navigation */}
        <Header aria-label="Pomy Petshop Header" />

        {/* JSON-LD schemas for SEO */}
        <Script
          id="ld-local-business"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateLocalBusinessSchema()),
          }}
        />
        <Script
          id="ld-website"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(generateWebsiteSchema()),
          }}
        />

        {/* Main content area */}
        <main className="flex-grow" role="main" aria-labelledby="main-content">
          {children}
          <Analytics />
          <SpeedInsights />
        </main>

        {/* Footer section */}
        <Footer aria-label="Pomy Petshop Footer" />
      </body>
    </html>
  );
}
