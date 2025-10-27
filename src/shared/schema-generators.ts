// JSON-LD Schema Generator for various page types
import { BUSINESS_INFO, SITE_URL, SOCIAL_MEDIA } from "./constants";

export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["PetStore", "LocalBusiness"],
  "name": BUSINESS_INFO.name,
  "image": [
    `${SITE_URL}${BUSINESS_INFO.logo}`
  ],
  "url": SITE_URL,
  "telephone": BUSINESS_INFO.phone,
  "email": BUSINESS_INFO.email,
  "address": {
    "@type": "PostalAddress",
    "streetAddress": BUSINESS_INFO.address,
    "addressCountry": "VN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 9.6,
    "longitude": 105.97
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "08:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification", 
      "dayOfWeek": "Sunday",
      "opens": "08:00",
      "closes": "17:00"
    }
  ],
  "priceRange": "$$",
  "paymentAccepted": "Cash, Credit Card, Bank Transfer",
  "currenciesAccepted": "VND",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "127"
  },
  "review": [
    {
      "@type": "Review",
      "author": {
        "@type": "Person",
        "name": "Nguyễn Minh"
      },
      "reviewRating": {
        "@type": "Rating",
        "ratingValue": "5",
        "bestRating": "5"
      },
      "reviewBody": "Dịch vụ tuyệt vời, nhân viên chuyên nghiệp và tận tâm với thú cưng."
    }
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Dịch vụ thú cưng",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cắt tỉa lông thú cưng",
          "description": "Dịch vụ cắt tỉa lông chuyên nghiệp cho chó mèo với nhiều kiểu dáng"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Tắm vệ sinh thú cưng",
          "description": "Tắm rửa, vệ sinh toàn thân cho thú cưng với sản phẩm chuyên dụng"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Vaccine & chăm sóc sức khỏe",
          "description": "Tiêm vaccine, xổ giun và chăm sóc sức khỏe tổng quát cho thú cưng"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Khách sạn thú cưng",
          "description": "Dịch vụ lưu trú, chăm sóc thú cưng 24/7 khi chủ đi vắng"
        }
      }
    ]
  }
});

export const generateWebsiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": BUSINESS_INFO.name,
  "url": SITE_URL,
  "potentialAction": {
    "@type": "SearchAction",
    "target": `${SITE_URL}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string"
  },
  "sameAs": [
    SOCIAL_MEDIA.facebook.url
  ]
});

export const generateServiceSchema = (serviceName: string, description: string, price?: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "name": serviceName,
  "description": description,
  "provider": {
    "@type": "Organization",
    "name": BUSINESS_INFO.name,
    "url": SITE_URL
  },
  "areaServed": {
    "@type": "City",
    "name": "Sóc Trăng"
  },
  "serviceType": "Pet Care Service",
  ...(price && {
    "offers": {
      "@type": "Offer",
      "price": price,
      "priceCurrency": "VND"
    }
  })
});

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org", 
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
});

export const generateArticleSchema = (title: string, description: string, publishDate: string, image?: string) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": title,
  "description": description,
  "author": {
    "@type": "Organization",
    "name": "POMY PETSHOP"
  },
  "publisher": {
    "@type": "Organization",
    "name": "POMY PETSHOP",
    "logo": {
      "@type": "ImageObject",
      "url": `${SITE_URL}/images/pomy-petshop-logo.jpg`
    }
  },
  "datePublished": publishDate,
  "dateModified": publishDate,
  ...(image && {
    "image": {
      "@type": "ImageObject", 
      "url": image
    }
  })
});
