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
        // Modern professional fonts for admin CMS
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        heading: ["var(--font-heading)", "sans-serif"],
        // Legacy fonts for public site
        body: ["var(--font-body)", "sans-serif"],
        secondary: ["var(--font-secondary)", "cursive"],
      },
      letterSpacing: {
        tighter: "-0.02em",
        tight: "-0.01em",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
} satisfies Config;
