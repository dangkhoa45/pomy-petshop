import Head from 'next/head';
import { 
  organizationSchema, 
  businessSchema, 
  serviceSchema, 
  faqSchema,
  breadcrumbSchema 
} from '@/shared/schema';

interface SEOProps {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  ogImage?: string;
  noindex?: boolean;
  schema?: any;
  additionalSchemas?: any[];
  keywords?: string[];
  pageType?: 'website' | 'article' | 'service';
  breadcrumbs?: { name: string; url: string }[];
}

export default function EnhancedSEO({
  title = "POMY PETSHOP | Cửa hàng thú cưng Sóc Trăng",
  description = "Pomy petshop - Cửa hàng thú cưng tại Sóc Trăng. Dịch vụ cắt tỉa, vệ sinh, khách sạn cho thú cưng. Uy tín - Chất lượng - Giá tốt.",
  canonicalUrl = "https://pomypetshopsoctrang.com",
  ogImage = "/images/pomy-petshop-logo.jpg",
  noindex = false,
  schema,
  additionalSchemas = [],
  keywords = [],
  pageType = 'website',
  breadcrumbs = [],
}: SEOProps) {
  const structuredData = schema || organizationSchema;
  
  // Combine all schemas
  const allSchemas = [
    structuredData,
    businessSchema,
    ...additionalSchemas
  ];

  // Add breadcrumb schema if breadcrumbs exist
  if (breadcrumbs.length > 0) {
    allSchemas.push(breadcrumbSchema(breadcrumbs));
  }

  // Generate keywords meta tag
  const metaKeywords = [
    'pomypetshop',
    'pomypetshopsoctrang', 
    'petshop soc trang',
    'thu cung soc trang',
    'cat tia thu cung',
    'vaccine cho meo',
    'khach san thu cung',
    ...keywords
  ].join(', ');

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={metaKeywords} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="canonical" href={canonicalUrl} />
      
      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`https://pomypetshopsoctrang.com${ogImage}`} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={pageType} />
      <meta property="og:site_name" content="POMY PETSHOP" />
      <meta property="og:locale" content="vi_VN" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`https://pomypetshopsoctrang.com${ogImage}`} />

      {/* Additional SEO Meta Tags */}
      <meta name="author" content="POMY PETSHOP" />
      <meta name="publisher" content="POMY PETSHOP" />
      <meta name="geo.region" content="VN-ST" />
      <meta name="geo.placename" content="Sóc Trăng" />
      <meta name="geo.position" content="9.6;105.97" />
      <meta name="ICBM" content="9.6, 105.97" />
      
      {/* Local Business Info */}
      <meta name="business:contact_data:street_address" content="31 Phú Lợi" />
      <meta name="business:contact_data:locality" content="Sóc Trăng" />
      <meta name="business:contact_data:region" content="Sóc Trăng" />
      <meta name="business:contact_data:postal_code" content="95000" />
      <meta name="business:contact_data:country_name" content="Vietnam" />
      
      {/* Language and Locale */}
      <meta httpEquiv="content-language" content="vi" />
      <link rel="alternate" hrefLang="vi" href={canonicalUrl} />
      
      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
      )}
      
      {/* Favicon and Icons */}
      <link rel="icon" href="/pomy-petshop.png" />
      <link rel="apple-touch-icon" href="/pomy-petshop.png" />
      <link rel="shortcut icon" href="/pomy-petshop.png" />
      
      {/* Preload Critical Resources */}
      <link rel="preload" href="/images/pomy-petshop-logo.jpg" as="image" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Structured Data */}
      {allSchemas.map((schemaData, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schemaData),
          }}
        />
      ))}
    </Head>
  );
}
