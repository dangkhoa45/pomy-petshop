// Site URL Configuration
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://pomypetshopsoctrang.com";

// Centralized data imports (JSON)
import business from "@/data/business.json";
import navLinks from "@/data/nav-links.json";
import statistics from "@/data/statistics.json";
import services from "@/data/services.json";

// Business Information Constants (from JSON)
export const BUSINESS_INFO = business as {
  name: string;
  phone: string;
  email: string;
  address: string;
  facebook: string;
  mapsUrl: string;
  tagline: string;
  logo: string;
};

// Navigation Links
export const NAV_LINKS = navLinks as ReadonlyArray<{
  path: string;
  label: string;
}>;

// Statistics Data
export const STATISTICS = statistics as ReadonlyArray<{
  key: string;
  value: number;
  label: string;
  icon: string;
}>;

// Services List
export const SERVICES = services as ReadonlyArray<string>;

// Social Media (derive from business/facebook for backward-compat if needed)
export const SOCIAL_MEDIA = {
  facebook: {
    url: BUSINESS_INFO.facebook,
    name: `Fanpage: ${BUSINESS_INFO.name}`,
  },
} as const;
