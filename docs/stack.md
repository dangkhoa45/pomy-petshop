# Công nghệ và thư viện đang dùng (actual)

Tổng hợp công nghệ, thư viện và cấu hình dự án theo trạng thái mã nguồn hiện tại.

## 1) Nền tảng & Framework

- Next.js 15.1 (App Router) — cấu trúc tại `src/app` với `layout.tsx`, `page.tsx` cho các route: `/`, `/about`, `/services`, `/contact`.
- React 19 — sử dụng client components và hooks.
- TypeScript 5 — thiết lập strict, noEmit, moduleResolution: bundler.

## 2) Styling & UI

- Tailwind CSS 3.4 — cấu hình ở `tailwind.config.ts`, PostCSS ở `postcss.config.mjs`.
- Font đang dùng thực tế: Google Fonts import trong `globals.css` với "Gluten" (heading/body) và "Pacifico" (secondary). Các biến CSS: `--font-heading`, `--font-body`, `--font-secondary`.
- React Icons — bộ biểu tượng.
- Framer Motion — animation cho Header, sections, buttons.
- Ghi chú: Gói `@tailwindcss/typography` đã cài nhưng chưa khai báo trong `tailwind.config.ts` (plugins trống).
- Gói `@fontsource/poppins` có trong dependencies nhưng không được sử dụng (không thấy import).

## 3) Ảnh & tối ưu hoá

- Next/Image — bật định dạng WebP/AVIF, cấu hình domain: `dummyimage.com`, `i.pravatar.cc`, `pomypetshopsoctrang.com` trong `next.config.ts`.
- Cache-Control cho đường dẫn `/images/*`: `public, max-age=31536000, immutable`.

## 4) SEO & Analytics

- Metadata chuẩn hoá trong `src/app/layout.tsx` và các `layout.tsx` của route con (title, description, OG, Twitter, robots, alternates, verification, facebook appId).
- Sitemap và robots dùng App Router: `src/app/sitemap.ts`, `src/app/robots.ts` (không phụ thuộc script bên ngoài).
- Schema.org JSON-LD đã soạn sẵn ở `src/shared/schema.ts` và `src/shared/schema-generators.ts` nhưng CHƯA được inject vào trang nào.
- @vercel/analytics và @vercel/speed-insights được render trong `RootLayout`.
- Ghi chú: Có file cấu hình `next-sitemap.config.{js,ts}` nhưng hiện KHÔNG có npm script để chạy tạo file tĩnh; đang ưu tiên cách của App Router.

## 5) Chất lượng mã

- ESLint 9 + `eslint-config-next` (Flat config) — dùng các rules `next/core-web-vitals`, `next/typescript` trong `eslint.config.mjs`.
- TypeScript strict, alias: `@/*` -> `src/*`, `@public/*` -> `public/*` trong `tsconfig.json`.
- Chưa phát hiện cấu hình Prettier trong repo.

## 6) Build & hiệu năng

- `next.config.ts` bật `experimental.optimizeCss` và `optimizePackageImports` cho `framer-motion`, `swiper`.
- Webpack ở client production: dùng `terser-webpack-plugin` với `drop_console`, `drop_debugger`, `pure_funcs`, và cấu hình `splitChunks` (tách `vendors`/`common`).
- Compiler `removeConsole` ở production.

## 7) Thư viện thành phần

- Swiper — dùng trong `HeroSection` và `GallerySection`.
- react-swipeable — điều khiển vuốt trong `TestimonialSection`, `GallerySection`.
- react-typical — ĐÃ cài, chưa thấy sử dụng trong code hiện tại.

## 8) Scripts npm (thực tế trong package.json)

- `dev`: chạy Next dev
- `build`: build production
- `start`: chạy server production
- `lint`: chạy ESLint
- Không có `postbuild` hay `sitemap` cho `next-sitemap`.

## 9) Cấu hình chính

- `next.config.ts`: Images, headers bảo mật, cache ảnh, `terser` + `splitChunks`, redirects `/home` và `/index` -> `/`.
- `tsconfig.json`: strict, jsx preserve, alias paths.
- `tailwind.config.ts`: content trỏ `src/app`, `src/components`, `src/pages`; mở rộng `fontFamily` đọc từ CSS variables; screens sm/md/lg/xl.

## 10) Môi trường triển khai

- Node >= 18 LTS (khuyến nghị cho Next 15).
- Triển khai đề xuất: Vercel.
- Trình quản lý gói: pnpm (có lockfile `pnpm-lock.yaml`).
