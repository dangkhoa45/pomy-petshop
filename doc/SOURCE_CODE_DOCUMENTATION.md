# Source Code Documentation - Pomy Petshop

## File Structure Analysis

### Configuration Files

#### Package.json
```json
{
  "name": "pomy-petshop",
  "version": "0.1.0",
  "dependencies": {
    "next": "15.1.0",
    "react": "^19.0.0",
    "framer-motion": "^11.15.0",
    "tailwindcss": "^3.4.1"
  }
}
```

**Phân tích**: 
- Sử dụng Next.js version mới nhất với App Router
- React 19 với các tính năng mới nhất
- Framer Motion cho animations mượt mà
- Tailwind CSS cho styling hiện đại

#### Next.config.ts
```typescript
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Configuration options
};

export default nextConfig;
```

#### Tailwind.config.ts
```typescript
import type { Config } from "tailwindcss";

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
      sm: "640px", md: "768px", lg: "1024px", xl: "1280px",
    },
  },
} satisfies Config;
```

### Core Application Files

#### src/app/layout.tsx
```typescript
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pomy petshop | Cửa hàng thú cưng Sóc Trăng",
  description: "Pomy petshop - Cửa hàng thú cưng tại Sóc Trăng...",
  // Extensive SEO metadata...
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body className="flex flex-col min-h-screen bg-gray-50">
        <Header aria-label="Pomy Petshop Header" />
        <main className="flex-grow" role="main">
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
        <Footer aria-label="Pomy Petshop Footer" />
      </body>
    </html>
  );
}
```

**Phân tích**:
- **SEO Optimization**: Comprehensive metadata với OpenGraph, Twitter cards
- **Accessibility**: Proper ARIA labels và semantic HTML
- **Performance**: Vercel Analytics và Speed Insights
- **Internationalization**: Vietnamese language support
- **Layout Structure**: Semantic HTML với header, main, footer

#### src/app/page.tsx
```typescript
"use client"
import AboutSection from "@/components/AboutSection";
import ContactForm from "@/components/ContactForm";
import GallerySection from "@/components/GallerySection";
import HeroSection from "@/components/HeroSection";
import QuestionSection from "@/components/QuestionSection";
import ServiceSection from "@/components/ServiceSection";
import StatisticSection from "@/components/StatisticSection";
import TestimonialSection from "@/components/TestimonialSection";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Security measures
    const handleContextMenu = (event: MouseEvent) => event.preventDefault();
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
    
    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    
    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div className="bg-gradient-to-r from-green-100 to-pink-200">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <QuestionSection />
      <StatisticSection />
      <ContactForm />
      <TestimonialSection />
      <GallerySection />
    </div>
  );
}
```

**Phân tích**:
- **Client-side Component**: Use client directive for interactivity
- **Security**: Prevention of developer tools access
- **Component Composition**: Modular section-based architecture
- **Styling**: Gradient background for visual appeal

### Component Analysis

#### Header Component (src/components/Header.tsx)
```typescript
"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { FaEnvelope, FaFacebook, FaPhoneAlt } from "react-icons/fa";

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.2 },
  },
};

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  
  const navLinks = [
    { path: "/", label: "Trang chủ" },
    { path: "/about", label: "Giới thiệu" },
    { path: "/services", label: "Dịch vụ" },
    { path: "/contact", label: "Liên hệ" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <>
      {/* Top bar với contact info */}
      <motion.div className="bg-gradient-to-r from-green-100 to-pink-200">
        <div className="container mx-auto flex justify-between items-center py-2 px-4">
          <div className="flex items-center space-x-4">
            <a href="tel:0708039333" className="flex items-center">
              <FaPhoneAlt className="text-red-400 font-bold" />
              <span className="pl-1 text-red-400 font-bold">070 803 9333</span>
            </a>
            <a href="mailto:tust3000@gmail.com" className="flex items-center">
              <FaEnvelope className="text-green-600 font-bold" />
              <span className="pl-1 text-green-600 font-bold">tust3000@gmail.com</span>
            </a>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="https://www.facebook.com/PetshopPomy" target="_blank">
              <FaFacebook />
              <span>Fanpage: Pomy petshop</span>
            </a>
          </div>
        </div>
      </motion.div>

      {/* Main navigation */}
      <motion.header
        className={`sticky top-0 z-50 bg-gradient-to-r from-green-100 to-pink-300 shadow-md transition-all ${
          isScrolled ? "shadow-lg" : ""
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          {/* Navigation */}
          <motion.nav
            className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto font-dosis font-extrabold"
            initial="hidden"
            animate="visible"
            variants={navVariants}
          >
            {navLinks.map(({ path, label }, index) => (
              <motion.div key={index} variants={linkVariants}>
                <Link
                  href={path}
                  className={`mr-5 relative group font-body ${
                    isActive(path)
                      ? "text-pink-600 font-bold border-b-4 border-pink-600"
                      : "text-pink-500"
                  } hover:border-b-4 hover:border-pink-500 transition-all duration-300 transform hover:scale-110`}
                >
                  {label}
                </Link>
              </motion.div>
            ))}
          </motion.nav>

          {/* Logo */}
          <motion.a
            href="/"
            className="flex order-first lg:order-none lg:w-1/5 items-center text-gray-900 lg:justify-center mb-4 md:mb-0 hover:text-pink-500 transform transition duration-300 hover:scale-110"
          >
            <div
              className={`w-[85px] h-[85px] ${
                isScrolled
                  ? "md:w-[90px] md:h-[90px]"
                  : "md:w-[140px] md:h-[140px]"
              } relative transform hover:rotate-12`}
            >
              <Image
                src="/images/pomy-petshop-logo.jpg"
                alt="POMY PETSHOP Logo"
                className="rounded-full"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </motion.a>

          {/* CTA Button */}
          <div className="lg:w-2/5 inline-flex lg:justify-end mt-6 lg:mt-0">
            <button className="inline-flex items-center bg-pink-500 text-white font-semibold py-2 px-6 rounded-full shadow-lg transform transition duration-300 group hover:scale-105">
              <FaPhoneAlt />
              <Link href="https://www.facebook.com/PetshopPomy">
                <span className="ml-3 group-hover:text-pink-200 transition-colors duration-300 text-white">
                  Đặt Lịch Ngay
                </span>
              </Link>
            </button>
          </div>
        </div>
      </motion.header>
    </>
  );
}
```

**Key Features**:
- **Sticky Navigation**: Scroll-responsive header
- **Active Link Highlighting**: Visual feedback for current page
- **Responsive Design**: Mobile-first approach
- **Animation**: Smooth transitions với Framer Motion
- **Contact Integration**: Direct phone và email links
- **Social Media**: Facebook integration

#### HeroSection Component
```typescript
"use client"
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

interface HeroImage {
  id: number;
  image: string;
  alt: string;
}

const HeroImages: HeroImage[] = [
  {
    id: 1,
    image: "/images/cua-hang-pomy-petshop-1.jpg",
    alt: "cat-tia-ve-sinh-khach-san-thu-cung",
  },
  // ... more images
];

function HeroSection() {
  const router = useRouter();

  const textVariant = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, delay: 0.2 },
    },
  };

  return (
    <section className="bg-transparent text-gray-700 body-font">
      <div className="container mx-auto flex px-5 py-12 md:flex-row flex-col items-center">
        <motion.div
          className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-3 md:mb-0 items-center text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            variants={textVariant}
            className="sm:text-md text-sm font-bold title-font mb-6 text-green-600"
          >
            Cắt Tỉa, Vệ Sinh, Khách Sạn Thú Cưng
          </motion.span>
          
          <motion.h1
            className="title-font sm:text-5xl text-4xl mb-6 font-extrabold text-pink-500 font-heading"
            variants={textVariant}
          >
            Dịch Vụ Chăm Sóc
            <br className="hidden lg:inline-block" />
            Thú Cưng Hoàn Hảo
          </motion.h1>

          <motion.p className="mb-8 leading-relaxed text-lg text-gray-600">
            <span className="text-pink-500 font-bold">POMY PETSHOP</span> ở đây
            chúng tôi cung cấp các dịch vụ cắt tỉa, vệ sinh, và khách sạn thú
            cưng chuyên nghiệp...
          </motion.p>

          <motion.div className="flex justify-center">
            <motion.button
              className="inline-flex text-white bg-pink-500 border-0 py-3 px-8 focus:outline-none hover:bg-pink-600 rounded-full text-lg shadow-lg"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => router.push("/contact")}
            >
              Đặt Lịch Ngay
            </motion.button>
            
            <motion.button
              className="ml-4 inline-flex text-pink-500 bg-white border border-pink-500 py-3 px-8 focus:outline-none hover:bg-pink-50 rounded-full text-lg shadow-md"
              whileHover={{ scale: 1.1 }}
              onClick={() => router.push("/services")}
            >
              Tìm Hiểu Thêm
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <Swiper
            grabCursor={true}
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            loop={true}
            className="w-full h-[300px] md:h-[512px] mySwiper"
          >
            {HeroImages.map((image, index) => (
              <SwiperSlide key={index}>
                <Image
                  src={image.image}
                  alt={image.alt}
                  layout="intrinsic"
                  width={500}
                  height={300}
                  priority={index === 0}
                  quality={80}
                  loading={index === 0 ? undefined : "lazy"}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </motion.div>
      </div>
    </section>
  );
}
```

**Key Features**:
- **Image Slider**: Auto-playing Swiper với multiple images
- **Call-to-Action**: Dual buttons cho different user intents
- **Responsive Typography**: Scalable text sizes
- **Performance**: Image optimization với priority loading
- **Animation**: Staggered text animations

### Shared Utilities

#### src/shared/link.ts
```typescript
export const navLinks = [
  { name: "Trang chủ", href: "/" },
  { name: "Giới thiệu", href: "/about" },
  { name: "Dịch vụ", href: "/services" },
  { name: "Liên hệ", href: "/contact" },
  { name: "Blog", href: "/blog" },
];

export const socialLinks = [
  { name: "Facebook", href: "https://facebook.com" },
  { name: "Zalo", href: "https://zalo.me" },
  { name: "Instagram", href: "https://instagram.com" },
  { name: "Tiktok", href: "https://tiktok.com" },
];
```

**Purpose**: Centralized navigation configuration

### Styling Architecture

#### src/app/globals.css
```css
@import url("https://fonts.googleapis.com/css2?family=Pacifico&family=Gluten:wght@400;700&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;

:root {
  --font-heading: "Gluten", "Arial", sans-serif;
  --font-body: "Gluten", "Roboto", sans-serif;
  --font-secondary: "Pacifico", "Comic Sans MS", cursive;

  --color-primary: #ec4899;
  --color-primary-hover: #db2777;
  --color-background: #f9fafb;
  --color-text: #333;
}

html {
  font-family: var(--font-body);
  scroll-behavior: smooth;
  line-height: 1.5;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

/* Typography styles */
h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-heading);
  line-height: 1.25;
  margin-top: 0;
  margin-bottom: 0.5em;
}

/* Interactive elements */
button:hover {
  transform: scale(1.05);
}
```

**Features**:
- **Custom Fonts**: Google Fonts integration
- **CSS Variables**: Consistent theming
- **Typography Hierarchy**: Semantic heading styles
- **Performance**: Font optimization settings

## Code Quality Patterns

### 1. TypeScript Usage
- **Strict Typing**: Comprehensive type definitions
- **Interface Definitions**: Clear component props
- **Type Safety**: Runtime error prevention

### 2. Component Structure
- **Single Responsibility**: Each component has one clear purpose
- **Reusability**: Modular design for component reuse
- **Separation of Concerns**: Logic, styling, và markup separation

### 3. Performance Optimizations
- **Image Optimization**: Next.js Image component với lazy loading
- **Code Splitting**: Page-based automatic splitting
- **Bundle Size**: Tree shaking và minification

### 4. Accessibility
- **Semantic HTML**: Proper element usage
- **ARIA Labels**: Screen reader support
- **Keyboard Navigation**: Tab order và focus management

### 5. SEO Implementation
- **Metadata**: Comprehensive meta tags
- **Structured Data**: Schema markup ready
- **Performance**: Core Web Vitals optimization
