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
    "telephone": "+84-xxx-xxx-xxxx",
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
  "telephone": "+84-xxx-xxx-xxxx",
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
  "currenciesAccepted": "VND"
};
