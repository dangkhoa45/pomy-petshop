## Project Overview

POMY PETSHOP là website giới thiệu dịch vụ thú cưng tại Sóc Trăng, xây dựng bằng Next.js 15 (App Router) và TypeScript. Giao diện sử dụng Tailwind CSS và hoạt ảnh với Framer Motion, hỗ trợ trình chiếu ảnh bằng Swiper. Nội dung được quản lý tập trung bằng các tệp JSON trong `src/data` (SEO, thông tin doanh nghiệp, danh mục dịch vụ, bảng giá, FAQ, hình ảnh, v.v.), giúp dễ bảo trì và mở rộng.

- Công nghệ chính: Next.js 15, React 19, TypeScript, Tailwind CSS, Framer Motion, Swiper, React Icons.
- Phân tích/đo hiệu năng: Vercel Analytics và Speed Insights được tích hợp trong layout.
- SEO & Sitemap: Sử dụng Next Metadata, chèn JSON-LD (LocalBusiness, WebSite, Service, FAQ, Article) qua `schema-generators`, cấu hình `robots.txt`/`sitemap.xml` động và `next-sitemap` để sinh sitemap mở rộng.
- Hiệu năng & bảo mật:
  - Tối ưu ảnh (WebP/AVIF), cấu hình domain ảnh, TTL cache dài.
  - Tối ưu build: Terser drop_console/mangle, splitChunks, optimizeCss, optimizePackageImports.
  - Header bảo mật: X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy.
  - Redirect cố định: `/home`, `/index` → `/`.
- Điều hướng & trang chính: Trang chủ `/`, Giới thiệu `/about`, Dịch vụ `/services`, Liên hệ `/contact`.
- Trải nghiệm người dùng: Nhiều section động (Hero, Gallery, Testimonial...), nền gradient, một số phím tắt/chuột phải bị vô hiệu trên các trang client để hạn chế thao tác ngoài ý muốn.

## Project Structure

Cấu trúc thư mục trọng tâm và chức năng chính của từng phần:

```
.
├─ eslint.config.mjs                  # Cấu hình ESLint
├─ next.config.ts                     # Cấu hình Next.js: ảnh, headers, tối ưu build, redirects
├─ next-sitemap.config.ts             # Cấu hình next-sitemap (sinh sitemap/robots.txt)
├─ postcss.config.mjs                 # Cấu hình PostCSS
├─ tailwind.config.ts                 # Cấu hình Tailwind CSS
├─ tsconfig.json                      # Cấu hình TypeScript
├─ package.json                       # Script và phụ thuộc dự án
├─ README.md                          # Tài liệu dự án (tổng quan & cấu trúc)
│
├─ docs/                              # Tài liệu nội bộ (yêu cầu, thiết kế, stack, tác vụ, dữ liệu)
│  ├─ requirements.md
│  ├─ design.md
│  ├─ stack.md
│  ├─ task.md
│  └─ data.md
│
├─ public/                            # Tài nguyên tĩnh (ảnh, icon, robots.txt)
│  ├─ robots.txt
│  ├─ icons/                          # Bộ icon SVG/TSX dùng trong UI
│  └─ images/                         # Ảnh logo/hình minh họa hiển thị trên site
│
├─ src/
│  ├─ app/                            # App Router: layout, stylesheet toàn cục, route trang
│  │  ├─ globals.css                  # CSS toàn cục
│  │  ├─ layout.tsx                   # Shell chính, header/footer, Analytics, Speed Insights, JSON-LD
│  │  ├─ page.tsx                     # Trang chủ (Hero, About, Services, FAQ, Stats, Contact, Testimonial, Gallery)
│  │  ├─ robots.ts                    # Cấu hình robots động
│  │  ├─ sitemap.ts                   # Cấu hình sitemap động
│  │  ├─ about/                       # Trang Giới thiệu
│  │  │  ├─ layout.tsx
│  │  │  └─ page.tsx
│  │  ├─ services/                    # Trang Dịch vụ (Feature, FAQ, CTA, Pricing SPA/Hotel)
│  │  │  ├─ layout.tsx
│  │  │  └─ page.tsx
│  │  └─ contact/                     # Trang Liên hệ
│  │     ├─ layout.tsx
│  │     └─ page.tsx
│  │
│  ├─ components/                     # Mảnh ghép UI tái sử dụng
│  │  ├─ layout/                      # Header, Footer, layout-related components
│  │  ├─ sections/                    # Các section cấp trang (Hero, About, Service, Stats, Testimonial, Gallery, Contact)
│  │  ├─ features/                    # Tính năng/khối nội dung (ContactForm, Question*, FeatureService)
│  │  ├─ pricing/                     # Bảng giá dịch vụ (SPA, Hotel)
│  │  └─ shared/                      # CTA và tiện ích UI chia sẻ
│  │
│  ├─ data/                           # Nội dung tĩnh dạng JSON (dễ chỉnh sửa/biên tập)
│  │  ├─ about/                       # Nội dung trang Giới thiệu
│  │  ├─ business/                    # Thông tin doanh nghiệp, menu điều hướng
│  │  ├─ contact/                     # Nội dung trang liên hệ
│  │  ├─ content/                     # Danh sách ảnh (hero, gallery), testimonials, câu hỏi thường gặp
│  │  ├─ seo/                         # Metadata site (title/description/OG/Twitter, robots...)
│  │  └─ services/                    # Thẻ dịch vụ, tính năng, FAQ dịch vụ, bảng giá
│  │
│  ├─ shared/                         # Hằng số, schema JSON-LD, kiểu dữ liệu, hooks & utils
│  │  ├─ constants.ts                 # SITE_URL, BUSINESS_INFO, NAV_LINKS, STATISTICS, SERVICES, SOCIAL_MEDIA
│  │  ├─ schema-generators.ts         # Hàm tạo JSON-LD (LocalBusiness, WebSite, Service, FAQ, Article)
│  │  ├─ schema.ts, types.ts          # Định nghĩa schema/kiểu dùng chung
│  │  ├─ animations.ts, utils.ts      # Tiện ích hoạt ảnh/hàm hỗ trợ
│  │  └─ hooks/useCountUp.ts          # Hook đếm số cho thống kê
│  │
│  └─ globals.d.ts                    # Khai báo kiểu toàn cục nếu có
│
└─ pnpm-lock.yaml                     # Khóa phụ thuộc (pnpm)
```
