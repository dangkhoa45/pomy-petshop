import type { NextConfig } from "next";

// Dynamically include Supabase Storage host for next/image
const imageDomains = [
  "dummyimage.com",
  "i.pravatar.cc",
  "pomypetshopsoctrang.com",
];

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
let supabaseHostname: string | undefined;

try {
  if (supabaseUrl) {
    const host = new URL(supabaseUrl).hostname;
    supabaseHostname = host;
    if (host && !imageDomains.includes(host)) imageDomains.push(host);
  }
} catch {
  // ignore if env is missing or invalid
}

const nextConfig: NextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    // Add quality 80 to fix Next.js warnings
    qualities: [75, 80, 90],
    remotePatterns: [
      // Allow common image domains
      {
        protocol: "https",
        hostname: "dummyimage.com",
      },
      {
        protocol: "https", 
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "pomypetshopsoctrang.com",
      },
      // Supabase storage
      ...(supabaseHostname
        ? [
            {
              protocol: "https" as const,
              hostname: supabaseHostname,
              pathname: "/storage/v1/object/public/**",
            },
          ]
        : []),
    ],
  },

  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },

  // Turbopack configuration for Next.js 16
  turbopack: {},

  // Disable powered-by header for security and cleaner headers
  poweredByHeader: false,
  
  experimental: {
    optimizeCss: true,
    optimizePackageImports: [
      "framer-motion", 
      "swiper",
      "react-icons",
      "date-fns",
      "marked",
      "nanoid",
      "unified",
      "rehype-sanitize"
    ],
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      {
        source: "/images/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/api/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "no-store, must-revalidate",
          },
        ],
      },
    ];
  },

  // Webpack config removed - Turbopack handles optimization automatically
  // In Next.js 16, Turbopack provides built-in optimizations including:
  // - Tree shaking
  // - Code splitting  
  // - Console removal in production
  // - Modern bundling with better performance

  async redirects() {
    return [
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      {
        source: "/index",
        destination: "/",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
