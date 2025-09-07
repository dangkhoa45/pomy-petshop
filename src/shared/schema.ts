export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "POMY PETSHOP",
  "alternateName": "Pomy Petshop Sóc Trăng",
  "url": "https://pomypetshopsoctrang.com",
  "logo": "https://pomypetshopsoctrang.com/images/pomy-petshop-logo.jpg",
  "image": "https://pomypetshopsoctrang.com/images/pomy-petshop-logo.jpg",
  "description": "Cửa hàng thú cưng POMY PETSHOP tại Sóc Trăng - Dịch vụ cắt tỉa, vệ sinh, khách sạn thú cưng chuyên nghiệp",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "31 Phú Lợi",
    "addressLocality": "Sóc Trăng",
    "addressRegion": "Sóc Trăng",
    "addressCountry": "VN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+84-070-803-9333",
    "contactType": "customer service",
    "availableLanguage": "Vietnamese"
  },
  "sameAs": [
    "https://www.facebook.com/pomypetshopsoctrang",
    "https://pomypetshopsoctrang.com"
  ],
  "foundingDate": "2020",
  "numberOfEmployees": "5-10",
  "slogan": "Tận tâm - Chuyên nghiệp - Yêu thương thú cưng"
};

export const businessSchema = {
  "@context": "https://schema.org",
  "@type": "PetStore",
  "name": "POMY PETSHOP",
  "image": "https://pomypetshopsoctrang.com/images/pomy-petshop-logo.jpg",
  "url": "https://pomypetshopsoctrang.com",
  "telephone": "+84-070-803-9333",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "31 Phú Lợi",
    "addressLocality": "Sóc Trăng",
    "addressRegion": "Sóc Trăng",
    "postalCode": "95000",
    "addressCountry": "VN"
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday", 
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
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
  "servesCuisine": [],
  "paymentAccepted": "Cash, Credit Card",
  "currenciesAccepted": "VND",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Dịch vụ thú cưng",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cắt tỉa lông thú cưng",
          "description": "Dịch vụ cắt tỉa lông chuyên nghiệp cho chó mèo"
        }
      },
      {
        "@type": "Offer", 
        "itemOffered": {
          "@type": "Service",
          "name": "Tắm vệ sinh thú cưng",
          "description": "Tắm rửa, vệ sinh toàn thân cho thú cưng"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Khách sạn thú cưng",
          "description": "Dịch vụ lưu trú, chăm sóc thú cưng"
        }
      }
    ]
  }
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Dịch vụ chăm sóc thú cưng POMY PETSHOP",
  "description": "Dịch vụ cắt tỉa, vệ sinh, vaccine và khách sạn thú cưng tại Sóc Trăng",
  "provider": {
    "@type": "Organization",
    "name": "POMY PETSHOP"
  },
  "areaServed": {
    "@type": "City",
    "name": "Sóc Trăng"
  },
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Các dịch vụ thú cưng",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Cắt tỉa lông",
          "category": "Pet Grooming"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service", 
          "name": "Tắm vệ sinh",
          "category": "Pet Bathing"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Vaccine thú cưng", 
          "category": "Pet Healthcare"
        }
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Khách sạn thú cưng",
          "category": "Pet Boarding"
        }
      }
    ]
  }
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "POMY PETSHOP có những dịch vụ gì?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "POMY PETSHOP cung cấp các dịch vụ: cắt tỉa lông, tắm vệ sinh, vaccine, xổ giun và khách sạn thú cưng tại Sóc Trăng."
      }
    },
    {
      "@type": "Question", 
      "name": "Giờ hoạt động của POMY PETSHOP?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "POMY PETSHOP mở cửa từ 8:00-18:00 các ngày trong tuần, Chủ nhật 8:00-17:00."
      }
    },
    {
      "@type": "Question",
      "name": "POMY PETSHOP ở đâu?", 
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "POMY PETSHOP tại địa chỉ 31 Phú Lợi, Sóc Trăng. Liên hệ: 070 803 9333."
      }
    },
    {
      "@type": "Question",
      "name": "Chi phí dịch vụ như thế nào?",
      "acceptedAnswer": {
        "@type": "Answer", 
        "text": "Chi phí dịch vụ tại POMY PETSHOP phụ thuộc vào loại dịch vụ và kích thước thú cưng. Vui lòng liên hệ 070 803 9333 để được tư vấn giá cả cụ thể."
      }
    }
  ]
};

export const breadcrumbSchema = (breadcrumbs: { name: string; url: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": breadcrumbs.map((item, index) => ({
    "@type": "ListItem",
    "position": index + 1,
    "name": item.name,
    "item": item.url
  }))
});
