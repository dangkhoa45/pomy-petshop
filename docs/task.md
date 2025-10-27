# Roadmap & tiến độ (đồng bộ thực tế)

Tài liệu quản lý công việc, roadmap và tiến độ cho POMY PETSHOP.

## 1) Trạng thái hiện tại

- Kiến trúc Next.js 15 App Router hoàn chỉnh (layout, metadata, các route cơ bản).
- Component chính: Header, Footer, Hero, About, Services, FAQ, Stats, ContactForm, Testimonials, Gallery.
- SEO kỹ thuật: Metadata per-route (nguồn từ `src/data/seo/*.json`), OG/Twitter, robots, sitemap (App Router). JSON-LD đã inject site-wide (LocalBusiness/WebSite) ở RootLayout.
- Hiệu năng: Terser + splitChunks, Image optimization, headers cache ảnh, optimizeCss.

## 2) Mốc (Milestones)

- M1: Khởi tạo kiến trúc + SEO nền tảng — Done
- M2: Trang chi tiết dịch vụ + nội dung SEO — Planned
- M3: Backend form liên hệ + gửi mail — Planned
- M4: Tối ưu Lighthouse & a11y nâng cao — Planned
- M5: Analytics events/conversion — Planned

## 3) Backlog chi tiết

### Nội dung & Trang

- [ ] Trang chi tiết từng dịch vụ (SEO content, Service schema).
- [ ] Bảng giá chi tiết; CTA rõ ràng.
- [ ] Blog/Articles (content hub) khi có nội dung.

### Tính năng

- [ ] API route xử lý form liên hệ (reCAPTCHA V3, rate-limit, honeypot).
- [ ] Tích hợp email (Resend/SendGrid) hoặc kênh Facebook/Zalo.
- [ ] Tối ưu ảnh (preset size, blur placeholder/LQIP).

### SEO & Analytics

- [ ] Inject JSON-LD bổ sung (Service/FAQ/Breadcrumb) ở các trang tương ứng. (LocalBusiness/WebSite đã có ở RootLayout.)
- [ ] Kiểm tra Rich Results; xử lý cảnh báo.
- [ ] Theo dõi sự kiện (CTA click, form submit) qua Vercel Analytics/GA4.
- [ ] Cân nhắc bật script `next-sitemap` (build-time) hoặc giữ App Router approach hiện tại.

### Hiệu năng & A11y

- [ ] Theo dõi CLS/LCP/TTI; tối ưu thứ tự tải.
- [ ] Rà soát contrast, focus ring, keyboard nav.
- [ ] Tối ưu critical CSS; preload assets cần thiết.
- [ ] Xem xét bỏ chặn right-click/devtools để không ảnh hưởng a11y/UX.

### Tooling

- [ ] Thêm Prettier config thống nhất format.
- [ ] Cân nhắc bật `@tailwindcss/typography` trong `tailwind.config.ts` nếu dùng prose.

## 4) Quy ước & Tiêu chuẩn

- Code: TypeScript strict, ESLint (flat config) đang áp dụng.
- Import alias: `@/*` -> `src/*`.
- CSS: Tailwind utilities là chính; hạn chế CSS thuần ngoài `globals.css`.
- Component: tách nhỏ, stateless khi có thể; thân thiện SSR/SSG.
- Commit: chuẩn hoá theo feat/fix/docs/chore/refactor.

## 5) Tiến độ (Kanban gợi ý)

- Todo:
  - Trang dịch vụ chi tiết.
  - API gửi mail cho form liên hệ.
  - GA4/Vercel events cho CTA.
  - Inject JSON-LD schema.
- In Progress:
  - (cập nhật khi bắt đầu công việc)
- Done:
  - Cấu hình Next/Tailwind/TS/ESLint.
  - Metadata/SEO cơ bản (App Router sitemap/robots).

## 6) Rủi ro & Giảm thiểu

- Thiếu nội dung hình ảnh: chuẩn bị nội dung trước khi tối ưu SEO on-page.
- Tải ảnh chậm: dùng Next/Image + kích thước hợp lý + CDN Vercel.
- SPAM form: reCAPTCHA + rate-limit + honeypot.
- A11y bị ảnh hưởng bởi chặn phím/chuột: chỉ bật trong môi trường demo nếu thật sự cần.

## 7) Liên kết tham chiếu

- Mã nguồn: `src/app`, `src/components`, `src/shared`.
- Cấu hình: `next.config.ts`, `tsconfig.json`, `tailwind.config.ts`, `eslint.config.mjs`.
- SEO schemas: `src/shared/schema.ts`, `src/shared/schema-generators.ts`. Metadata JSON: `src/data/seo/`. Data guide: `docs/data.md`.
