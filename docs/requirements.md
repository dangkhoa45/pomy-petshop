# Yêu cầu và Mục tiêu sản phẩm

Tài liệu mô tả mục tiêu, phạm vi và yêu cầu của website POMY PETSHOP dựa trên việc phân tích mã nguồn hiện tại.

## 1. Mục tiêu tổng quát

- Xây dựng website giới thiệu cửa hàng thú cưng POMY PETSHOP tại Sóc Trăng.
- Tối ưu SEO và hiệu năng để tăng khả năng tìm kiếm tự nhiên và trải nghiệm người dùng.
- Cung cấp thông tin dịch vụ: Cắt tỉa, Vệ sinh, Vaccine, Khách sạn thú cưng.
- Tăng chuyển đổi liên hệ/đặt lịch qua form và thông tin liên hệ rõ ràng.

## 2. Phạm vi tính năng chính

- Trang chủ với các section: Hero, Giới thiệu, Dịch vụ, Câu hỏi thường gặp, Thống kê, Liên hệ, Đánh giá, Thư viện hình.
- Trang Giới thiệu (about): Thông tin cửa hàng, sứ mệnh, đội ngũ.
- Trang Dịch vụ (services): Liệt kê dịch vụ chính, nội dung mô tả và lợi ích.
- Trang Liên hệ (contact): Thông tin liên hệ, bản đồ Google Maps, form liên hệ.
- Điều hướng cố định: Header/Footer với liên kết tới các trang chính.
- Tối ưu SEO kỹ thuật: Metadata, OpenGraph, Twitter, Structured Data (Schema.org), Robots, Sitemap.

## 3. Yêu cầu chức năng (Functional)

- Điều hướng trang bằng App Router của Next.js 15 (src/app).
- Hiển thị nội dung tĩnh (SSG) với metadata đầy đủ ở `src/app/layout.tsx`.
- Component SEO bổ sung dùng `next/head` với structured data (`src/components/SEO.tsx`).
- Tải ảnh tối ưu qua Next Image (đã cấu hình domain allowlist trong `next.config.ts`).
- Biểu mẫu liên hệ UX tốt (client-side validation cơ bản, thông tin liên hệ rõ ràng).
- Tự động tạo sitemap và robots (next-sitemap, `app/robots.ts`, `app/sitemap.ts`).
- Chia tách bundle và minify JS ở production (Terser + splitChunks).

## 4. Yêu cầu phi chức năng (Non-functional)

- SEO: metadata, canonical, Hreflang, OpenGraph, Twitter, Schema.org (Organization, PetStore, Service, FAQ, Breadcrumb).
- Hiệu năng: tối ưu ảnh (WebP/AVIF), splitChunks, drop console, cache headers cho ảnh, tối ưu CSS.
- Bảo mật header: X-Frame-Options, X-Content-Type-Options, X-XSS-Protection, Referrer-Policy.
- Khả năng truy cập (a11y): dùng semantic HTML, landmark roles, aria-label cho Header/Footer, `lang="vi"`.
- Responsive: Breakpoints Tailwind sm/md/lg/xl, giao diện chạy tốt trên mobile-first.
- Theo dõi: @vercel/analytics, @vercel/speed-insights.
- Chất lượng mã: TypeScript strict, ESLint (next/core-web-vitals, next/typescript), Prettier.

## 5. Ràng buộc & giả định

- Hosting/Deploy trên Vercel (tối ưu cho Next.js).
- Dữ liệu nội dung hiện tĩnh, chưa tích hợp CMS hay API đặt lịch.
- Form liên hệ hiện chỉ hiển thị; nếu cần gửi mail cần bổ sung API route/3rd-party.

## 6. Tiêu chí hoàn thành (DoD)

- Build production thành công, không lỗi TypeScript.
- Lighthouse tối thiểu: Performance ≥ 85, Accessibility ≥ 90, Best Practices ≥ 90, SEO ≥ 95.
- Sitemap/robots hợp lệ, không lỗi cấu hình.
- Metadata/OG/Twitter/Schema xuất hiện đúng theo trang.
- Giao diện responsive, không vỡ layout ở các breakpoint chuẩn.

## 7. Hướng mở rộng (Backlog)

- Trang chi tiết từng dịch vụ (service detail pages) kèm bảng giá.
- API route để xử lý form liên hệ và gửi email/Zalo/Facebook.
- Tích hợp CMS (Contentful/Strapi/Notion) quản lý nội dung.
- Blog/SEO content hub (bài viết chăm sóc thú cưng).
- i18n đa ngôn ngữ (vi, en) hoàn chỉnh (đã có metadata alternates).
