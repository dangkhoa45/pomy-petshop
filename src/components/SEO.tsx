import Head from "next/head";
import { organizationSchema, businessSchema } from "@/shared/schema";

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  noindex?: boolean;
  schema?: Record<string, unknown>;
}

export default function SEO({
  title = "POMY PETSHOP | Cửa hàng thú cưng Sóc Trăng",
  description = "Pomy petshop - Cửa hàng thú cưng tại Sóc Trăng. Dịch vụ cắt tỉa, vệ sinh, khách sạn cho thú cưng. Uy tín - Chất lượng - Giá tốt.",
  canonicalUrl = "https://pomypetshopsoctrang.com",
  ogImage = "/images/pomy-petshop-logo.jpg",
  noindex = false,
  schema,
}: SEOProps) {
  const structuredData = schema || organizationSchema;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={`https://pomypetshopsoctrang.com${ogImage}`}
      />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="POMY PETSHOP" />
      <meta property="og:locale" content="vi_VN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content={`https://pomypetshopsoctrang.com${ogImage}`}
      />

      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow" />
      )}

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(businessSchema),
        }}
      />

      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content="VN-ST" />
      <meta name="geo.placename" content="Sóc Trăng" />
      <meta name="geo.position" content="9.6;105.97" />
      <meta name="ICBM" content="9.6, 105.97" />

      {/* Language and Locale */}
      <meta httpEquiv="content-language" content="vi" />
      <link rel="alternate" hrefLang="vi" href={canonicalUrl} />

      {/* Favicon and Icons */}
      <link rel="icon" href="/pomy-petshop.png" />
      <link rel="apple-touch-icon" href="/pomy-petshop.png" />

      {/* Preload Critical Resources */}
      <link rel="preload" href="/images/pomy-petshop-logo.jpg" as="image" />
    </Head>
  );
}
