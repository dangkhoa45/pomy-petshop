# Yêu cầu và mục tiêu (đồng bộ với mã nguồn)

Tài liệu mô tả mục tiêu, phạm vi và yêu cầu của POMY PETSHOP theo đúng trạng thái project hiện tại.

## 1) Mục tiêu tổng quát

- Website giới thiệu cửa hàng thú cưng POMY PETSHOP tại Sóc Trăng.
- Tối ưu SEO kỹ thuật và hiệu năng cơ bản; đảm bảo nội dung, điều hướng rõ ràng để tăng chuyển đổi liên hệ/đặt lịch.
- Cung cấp thông tin dịch vụ: Cắt tỉa, Vệ sinh, Khách sạn (Vaccine được nhắc trong schema, chưa có trang riêng).

## 2) Phạm vi tính năng (đang có)

- Trang chủ với các section: Hero, Giới thiệu, Dịch vụ, FAQ, Thống kê, Liên hệ (form), Đánh giá (testimonial), Thư viện ảnh.
- Trang About: tổng quan, dịch vụ tiêu biểu, thống kê, FAQ, testimonials.
- Trang Services: mô tả dịch vụ, Q&A, CTA, 2 bảng giá (SPA/Hotel).
- Trang Contact: thông tin liên hệ; form liên hệ client-side (chưa có xử lý backend gửi mail).
- Điều hướng Header/Footer, liên kết tới các trang chính và fanpage Facebook.
- SEO kỹ thuật: metadata cho từng route, OG/Twitter, robots, sitemap (App Router).

## 3) Yêu cầu chức năng (đã triển khai)

- App Router Next.js 15 tại `src/app` cho các route `/`, `/about`, `/services`, `/contact`.
- Metadata tập trung trong `src/app/layout.tsx` và từng `layout.tsx` của route con.
- Sitemap `app/sitemap.ts` và robots `app/robots.ts` trả về cấu trúc chuẩn Next (không dùng script ngoài).
- Tối ưu ảnh bằng Next/Image; domain allowlist cấu hình trong `next.config.ts`.
- Contact form phía client có validate cơ bản (độ dài/số điện thoại) và thông báo trạng thái.
- Phân mảnh bundle và nén JS ở production (Terser + splitChunks) qua `next.config.ts`.
- Analytics: @vercel/analytics và @vercel/speed-insights được nhúng ở RootLayout.

## 4) Yêu cầu phi chức năng

- SEO: metadata, canonical, OpenGraph, Twitter; JSON-LD schemas đã có sẵn trong `src/shared/schema*.ts` nhưng chưa được inject vào DOM.
- Hiệu năng: bật `optimizeCss`, `optimizePackageImports` (framer-motion, swiper), loại bỏ console/debugger, cache ảnh lâu dài.
- Header bảo mật: X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy.
- A11y: sử dụng ngôn ngữ `lang="vi"`, heading rõ ràng, aria-label cho Header/Footer; lưu ý hiện trang có chặn context menu và một số tổ hợp phím (ảnh hưởng UX/a11y — nên cân nhắc bỏ ở backlog).
- Responsive: Mobile-first, breakpoint Tailwind sm/md/lg/xl.
- Chất lượng mã: TypeScript strict + ESLint (flat config). Chưa cấu hình Prettier.

## 5) Ràng buộc & giả định

- Nội dung tĩnh, chưa có CMS hay API đặt lịch.
- Form liên hệ chưa tích hợp gửi mail; cần bổ sung API route/third-party nếu muốn hoạt động thực.
- Có cấu hình `next-sitemap.config.{js,ts}` nhưng hiện không có npm script chạy; sitemap/robots đang được phục vụ qua App Router.
- Triển khai mục tiêu: Vercel; Node >= 18.

## 6) Tiêu chí hoàn thành (Definition of Done)

- Build production không lỗi TypeScript; ESLint pass.
- Sitemap và robots hoạt động đúng tại `/sitemap.xml`, `/robots.txt` (App Router).
- OG/Twitter/robots/metadata hiển thị đúng trên mỗi trang theo layout.
- UI responsive, không vỡ layout ở breakpoint chính; form validate hoạt động.

## 7) Hướng mở rộng (Backlog ưu tiên)

- Trang chi tiết dịch vụ (service detail) + nội dung SEO, bảng giá chi tiết.
- API route xử lý form liên hệ, tích hợp Resend/SendGrid/Zalo/Facebook; chống spam (reCAPTCHA, rate-limit, honeypot).
- Inject JSON-LD schemas vào các trang (Organization/PetStore/Service/FAQ/Breadcrumb).
- Bật và cấu hình `next-sitemap` (script build) nếu muốn xuất file tĩnh song song với App Router, hoặc giữ nguyên cách hiện tại.
- i18n đa ngôn ngữ (vi, en) — đã có alternates/canonical cơ bản.
- Bổ sung Prettier và/hoặc áp dụng `@tailwindcss/typography` nơi cần thiết.
- Rà soát lại logic chặn right-click/devtools để không ảnh hưởng a11y/UX.
