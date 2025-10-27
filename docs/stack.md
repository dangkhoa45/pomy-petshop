# Công nghệ và Thư viện sử dụng

Tổng hợp công nghệ, thư viện và cấu hình chính được dùng trong dự án, kèm vai trò và ghi chú triển khai.

## 1. Nền tảng & Framework

- Next.js 15 (App Router) — Khung React SSR/SSG tiên tiến, thư mục `src/app`.
- React 19 — UI library với tính năng mới (useEffect, client components, …).
- TypeScript 5 — Kiểu tĩnh nâng cao, `strict: true` đảm bảo chất lượng mã.

## 2. Styling & UI

- Tailwind CSS 3.4 — Utility-first CSS, cấu hình tại `tailwind.config.ts` và `postcss.config.mjs`.
- @fontsource/poppins — Nạp font Poppins qua npm, thuận tiện kiểm soát FOIT/FOUT.
- React Icons — Bộ biểu tượng linh hoạt.
- Framer Motion — Animation mượt mà cho các section.

## 3. Ảnh & Tối ưu hoá

- Next/Image — Tối ưu ảnh tự động (WebP/AVIF), cấu hình domain/size trong `next.config.ts`.
- Cache-Control headers cho `/images/*` (1 năm, immutable).

## 4. SEO & Analytics

- next-sitemap — Tạo sitemap và robots tự động (scripts `postbuild`/`sitemap`).
- Structured Data (Schema.org) — `src/shared/schema.ts` (Organization, PetStore, Service, FAQ, Breadcrumb).
- @vercel/analytics, @vercel/speed-insights — Theo dõi hiệu năng/traffic trên Vercel.
- Component `SEO.tsx` — Thiết lập thẻ meta OG/Twitter/Robots, preload ảnh, ld+json.

## 5. Chất lượng mã

- ESLint 9 + `eslint-config-next` — Quy tắc `next/core-web-vitals`, `next/typescript` (Flat Config).
- TypeScript strict — Không phát sinh output (`noEmit`), dùng `moduleResolution: bundler`.
- Prettier — Định dạng thống nhất (file `.prettierrc` trong docs làm chuẩn đề xuất).

## 6. Build & Hiệu năng

- TerserPlugin — Nén, loại bỏ `console.*`, `debugger` ở production.
- SplitChunks — Tách vendor/common để giảm TTI.
- Experimental: `optimizeCss`, `optimizePackageImports` cho `framer-motion`, `swiper`.

## 7. Thư viện khác

- Swiper — Slider trình chiếu, kèm typings.
- react-swipeable — Cử chỉ vuốt cho mobile.
- react-typical — Hiệu ứng typing nhẹ.

## 8. Scripts npm

- `dev`: chạy dev server Next.js.
- `build`: build production.
- `start`: chạy server production.
- `lint`: chạy ESLint.
- `postbuild`/`sitemap`: tạo sitemap/robots với cấu hình `next-sitemap.config.ts`.

## 9. Cấu hình chính

- `next.config.ts`:
  - Images: domains, formats, sizes, cache TTL.
  - Compiler: removeConsole ở production.
  - Headers bảo mật + cache ảnh.
  - Webpack: Terser + splitChunks chỉ bật ở client production.
  - Redirects: /home, /index -> /.
- `tsconfig.json`:
  - `strict: true`, `jsx: preserve`, `paths: { "@/*": "./src/*" }`.
- `tailwind.config.ts`:
  - `content` trỏ tới `src/app`, `src/components`, `src/pages`.
  - Mở rộng `fontFamily` thông qua CSS variables.

## 10. Môi trường triển khai

- Khuyến nghị deploy trên Vercel (Next.js native).
- Node >= 18 LTS.
- Trình quản lý gói: pnpm (khuyến nghị từ README).
