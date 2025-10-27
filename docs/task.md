# Roadmap & Tiến độ dự án

Tài liệu quản lý công việc, roadmap và tiến độ cho website POMY PETSHOP.

## 1. Trạng thái hiện tại

- Kiến trúc Next.js 15 App Router hoàn chỉnh (layout, metadata, routes cơ bản).
- Bộ component UI chính đã có: Header, Footer, Hero, About, Services, FAQ, Stats, Contact, Testimonials, Gallery.
- SEO kỹ thuật tốt: Metadata, OG/Twitter, Structured Data, Sitemap/Robots.
- Tối ưu hiệu năng: Terser, splitChunks, Image optimization, headers cache ảnh.

## 2. Mốc (Milestones)

- M1: Hoàn thiện cấu trúc & SEO nền tảng — Done
- M2: Hoàn thiện nội dung trang dịch vụ chi tiết — Planned
- M3: Form liên hệ có backend xử lý & gửi mail — Planned
- M4: Tối ưu Lighthouse & a11y nâng cao — Planned
- M5: Triển khai analytics dashboard & theo dõi chuyển đổi — Planned

## 3. Backlog chi tiết

### Nội dung & Trang

- [ ] Trang chi tiết từng dịch vụ (SEO content, structured data Service).
- [ ] Bảng giá minh bạch, CTA rõ ràng.
- [ ] Blog/Articles (SEO hub) với phân loại, tags.

### Tính năng

- [ ] API route xử lý form liên hệ (reCAPTCHA V3, rate-limit).
- [ ] Tích hợp email (Resend/SendGrid) hoặc gửi về Facebook/Zalo.
- [ ] Tối ưu ảnh (tạo preset, lazyload nâng cao, LQIP/blur placeholder).

### SEO & Analytics

- [ ] Kiểm tra structured data với Rich Results Test; sửa cảnh báo/note.
- [ ] Thêm Breadcrumb schema cho các trang con.
- [ ] Theo dõi sự kiện (CTA click, form submit) qua Vercel Analytics/GA4.

### Hiệu năng & A11y

- [ ] Kiểm tra CLS/LCP/TTI thực tế; tối ưu thứ tự tải.
- [ ] Kiểm tra contrast màu, focus ring, keyboard nav.
- [ ] Tối ưu critical CSS & preload assets cần thiết.

## 4. Quy ước & Tiêu chuẩn

- Code: TypeScript strict, ESLint + Prettier.
- Import alias: `@/*` trỏ `src/*`.
- CSS: Tailwind utilities, tránh CSS tùy biến nếu không cần.
- Component: tách nhỏ, stateless khi có thể; SSR-friendly.
- Commit: thông điệp rõ ràng theo tác vụ (feat/fix/docs/chore/refactor).

## 5. Tiến độ (Kanban gợi ý)

- Todo:
  - Trang dịch vụ chi tiết (3 trang).
  - API gửi mail cho form liên hệ.
  - GA4 events cho CTA.
- In Progress:
  - (điền khi bắt đầu mỗi task)
- Done:
  - Thiết lập cấu hình Next/Tailwind/TS/ESLint.
  - Thêm metadata/SEO cơ bản.

## 6. Rủi ro & Giảm thiểu

- Thiếu nội dung hình ảnh: Thu thập nội dung trước khi tối ưu SEO on-page.
- Tải ảnh chậm: Dùng Next/Image, thiết lập kích thước phù hợp, CDN Vercel.
- SPAM form: reCAPTCHA + rate-limit + honeypot.

## 7. Liên kết tham chiếu

- Mã nguồn: `src/app`, `src/components`, `src/shared`.
- Cấu hình: `next.config.ts`, `tsconfig.json`, `tailwind.config.ts`, `eslint.config.mjs`.
- SEO schemas: `src/shared/schema.ts`.
