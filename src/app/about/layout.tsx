import { SITE_URL } from "@/shared/constants";
import type { Metadata } from "next";
import routeMeta from "@/data/seo/meta-about.json";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: routeMeta.title,
  description: routeMeta.description,
  keywords: routeMeta.keywords,
  openGraph: {
    title: routeMeta.openGraph.title,
    description: routeMeta.openGraph.description,
    url: `${SITE_URL}/about`,
    siteName: routeMeta.openGraph.siteName,
    images: routeMeta.openGraph.images,
    locale: routeMeta.openGraph.locale,
    type: routeMeta.openGraph.type as "website",
  },
  twitter: routeMeta.twitter,
  icons: routeMeta.icons,
  robots: routeMeta.robots as Metadata["robots"],
  alternates: { canonical: `${SITE_URL}/about` },
  verification: routeMeta.verification,
  facebook: routeMeta.facebook,
};

export default function AboutPage({
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
