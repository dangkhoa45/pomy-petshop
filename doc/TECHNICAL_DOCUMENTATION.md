# Technical Documentation - Pomy Petshop

## Kiến Trúc Hệ Thống

### Technology Stack

#### Frontend
- **Framework**: Next.js 15.1.0 (App Router)
- **Language**: TypeScript 5.x
- **UI Library**: React 19.0.0
- **Styling**: Tailwind CSS 3.4.1
- **Animations**: Framer Motion 11.15.0
- **Icons**: React Icons 5.4.0
- **Slider**: Swiper 11.2.1

#### Build Tools
- **Package Manager**: pnpm
- **Bundler**: Webpack (built-in Next.js)
- **Code Quality**: ESLint, TypeScript
- **CSS Processing**: PostCSS

#### Analytics & Performance
- **Analytics**: Vercel Analytics 1.4.1
- **Performance**: Vercel Speed Insights 1.1.0
- **Font Optimization**: @fontsource/poppins

## Cấu Trúc Thư Mục

```
pomy-petshop/
├── public/                 # Static assets
│   ├── images/            # Images và photos
│   ├── icons/             # Custom icon components
│   ├── favicon.ico        # Favicon
│   ├── robots.txt         # Search engine instructions
│   └── sitemap.xml        # Site structure for SEO
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── layout.tsx     # Root layout
│   │   ├── page.tsx       # Homepage
│   │   ├── globals.css    # Global styles
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   └── services/      # Services page
│   ├── components/        # Reusable UI components
│   └── shared/            # Shared utilities và constants
├── doc/                   # Documentation
├── *.config.*             # Configuration files
└── package.json           # Dependencies và scripts
```

## Components Architecture

### Phân Loại Components

#### Layout Components
- **Header.tsx**: Navigation header với menu chính
- **Footer.tsx**: Footer với thông tin liên hệ và social media
- **Layout.tsx**: Root layout wrapper

#### Page Sections
- **HeroSection.tsx**: Banner chính với CTA
- **AboutSection.tsx**: Giới thiệu công ty
- **ServiceSection.tsx**: Hiển thị dịch vụ
- **TestimonialSection.tsx**: Đánh giá khách hàng
- **GallerySection.tsx**: Thư viện hình ảnh
- **ContactForm.tsx**: Form liên hệ
- **StatisticSection.tsx**: Thống kê số liệu
- **QuestionSection.tsx**: FAQ section

#### Specialized Components
- **AboutSecondary.tsx**: About page specific content
- **ContactSection.tsx**: Contact page specific content
- **FeatureSection.tsx**: Feature highlights
- **OurTeamSection.tsx**: Team members display
- **PricingServiceHotel.tsx**: Hotel service pricing
- **PricingServiceSPA.tsx**: SPA service pricing

### Component Patterns

#### 1. Functional Components with Hooks
```typescript
"use client"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function ComponentName() {
  const [state, setState] = useState(initialValue);
  
  useEffect(() => {
    // Side effects
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Content */}
    </motion.div>
  );
}
```

#### 2. Animation Variants Pattern
```typescript
const textVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay: 0.2 },
  },
};

const buttonVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.8 },
  },
};
```

## State Management

### Local State
- **useState**: Component-level state management
- **useEffect**: Side effects và lifecycle management
- **Custom Hooks**: Tái sử dụng logic giữa components

### Global State
- **Context API**: Chia sẻ state giữa components (chưa implement)
- **URL State**: Router-based state management

## Styling Architecture

### Tailwind CSS Configuration
```typescript
// tailwind.config.ts
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["var(--font-heading)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
    screens: {
      sm: "640px",
      md: "768px", 
      lg: "1024px",
      xl: "1280px",
    },
  },
};
```

### CSS Variables
```css
:root {
  --font-heading: "Gluten", "Arial", sans-serif;
  --font-body: "Gluten", "Roboto", sans-serif;
  --font-secondary: "Pacifico", "Comic Sans MS", cursive;
  
  --color-primary: #ec4899;
  --color-primary-hover: #db2777;
  --color-background: #f9fafb;
  --color-text: #333;
}
```

### Color Scheme
- **Primary**: Pink (#ec4899, #db2777)
- **Secondary**: Green (#10b981, #059669)
- **Background**: Light gradients (green-100 to pink-200)
- **Text**: Gray scale (#333, #666, #999)

## Performance Optimizations

### Image Optimization
```typescript
import Image from "next/image";

<Image
  src="/images/example.jpg"
  alt="Description"
  width={500}
  height={300}
  priority={isFirstImage}
  quality={80}
  loading={isFirstImage ? undefined : "lazy"}
/>
```

### Code Splitting
- **Dynamic Imports**: Lazy loading components
- **Page-based Splitting**: Automatic với Next.js App Router
- **Component-level Splitting**: Conditional rendering

### Bundle Optimization
- **Tree Shaking**: Unused code elimination
- **Minification**: Production build optimization
- **Compression**: Gzip/Brotli compression

## SEO Implementation

### Metadata Configuration
```typescript
export const metadata: Metadata = {
  title: "Pomy petshop | Cửa hàng thú cưng Sóc Trăng",
  description: "Pomy petshop - Cửa hàng thú cưng tại Sóc Trăng...",
  keywords: ["pomypetshop", "petshop", "thucung", ...],
  openGraph: {
    title: "...",
    description: "...",
    url: "https://pomypetshopsoctrang.com",
    images: ["/images/pomy-petshop-logo.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};
```

### Structured Data
- **JSON-LD**: Business information
- **Local Business**: Schema markup
- **Service**: Service descriptions

## Security Measures

### Client-side Protection
```typescript
useEffect(() => {
  const handleContextMenu = (event: MouseEvent) => event.preventDefault();
  document.addEventListener("contextmenu", handleContextMenu);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (
      event.key === "F12" ||
      (event.ctrlKey && event.shiftKey && event.key === "I") ||
      (event.ctrlKey && event.shiftKey && event.key === "C") ||
      (event.ctrlKey && event.key === "U")
    ) {
      event.preventDefault();
    }
  };
  document.addEventListener("keydown", handleKeyDown);

  return () => {
    document.removeEventListener("contextmenu", handleContextMenu);
    document.removeEventListener("keydown", handleKeyDown);
  };
}, []);
```

### Content Security
- **Input Validation**: Form validation
- **XSS Prevention**: React's built-in protection
- **CSRF Protection**: Next.js built-in features

## Build & Deployment

### Scripts
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build", 
    "start": "next start",
    "lint": "next lint",
    "postbuild": "next-sitemap"
  }
}
```

### Environment Configuration
- **Development**: Local server (localhost:3000)
- **Production**: Vercel deployment
- **Environment Variables**: .env.local (không có trong repo)

### CI/CD Pipeline
- **Vercel**: Automatic deployment từ Git
- **Build Optimization**: Automatic optimization
- **Performance Monitoring**: Built-in analytics

## Browser Support

### Target Browsers
- **Chrome**: Latest 2 versions
- **Firefox**: Latest 2 versions  
- **Safari**: Latest 2 versions
- **Edge**: Latest 2 versions

### Mobile Support
- **iOS Safari**: Latest 2 versions
- **Chrome Mobile**: Latest 2 versions
- **Samsung Internet**: Latest version

## Monitoring & Analytics

### Performance Metrics
- **Core Web Vitals**: LCP, FID, CLS
- **Speed Insights**: Real user metrics
- **Lighthouse Scores**: Regular audits

### User Analytics
- **Vercel Analytics**: Page views, user sessions
- **Goal Tracking**: Contact form submissions
- **A/B Testing**: Feature flags (future implementation)
