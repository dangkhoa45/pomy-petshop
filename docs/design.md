# Hướng dẫn thiết kế giao diện (Design Guide)

Tài liệu tổng hợp quy tắc thiết kế UI cho website POMY PETSHOP nhằm đảm bảo tính nhất quán, dễ mở rộng và tối ưu trải nghiệm.

## 1. Nguyên tắc tổng quát

- Mobile-first: ưu tiên tối ưu trên màn hình nhỏ, mở rộng dần tới sm/md/lg/xl.
- Đơn giản, tập trung chuyển đổi: CTA rõ ràng (gọi điện, nhắn Facebook, đi tới Liên hệ).
- Nội dung thị giác mạnh: ảnh chất lượng tốt, kích thước tối ưu qua Next/Image.
- Khả năng truy cập: contrast đủ, focus rõ, có aria-label/role với landmark.

## 2. Lưới & Breakpoints

Sử dụng Tailwind CSS, breakpoints trong `tailwind.config.ts`:

- sm: 640px
- md: 768px
- lg: 1024px
- xl: 1280px

Layout gợi ý:

- Container tối đa 1280px, padding x phù hợp (px-4/px-6), auto margin x.
- Section có khoảng cách dọc đều (py-12/py-16), tiêu đề rõ ràng.

## 3. Màu sắc & Typography

- Nền tổng thể nhạt: `bg-gray-50`, gradient nhẹ ở hero `from-green-100 to-pink-200` (đang dùng thực tế trên các trang).
- Văn bản: màu xám đậm `text-gray-800`/`text-gray-900`.
- Điểm nhấn: xanh lá/hồng, dùng tiết chế cho CTA/hover.
- Font (theo code hiện tại trong `globals.css`):
  - Heading: `font-heading` -> biến CSS `--font-heading` (mặc định "Gluten").
  - Body: `font-body` -> biến CSS `--font-body` (mặc định "Gluten").
  - Secondary/decorative: `--font-secondary` ("Pacifico").
  - Lưu ý: `@fontsource/poppins` có cài nhưng chưa dùng; nếu đổi font về Poppins cần chuẩn hoá lại biến.

## 4. Components & Patterns

- Header/Footer: có aria-label; Header sticky nếu cần; menu đơn giản 4 mục.
- HeroSection: headline mạnh, subheadline ngắn, CTA liên hệ; ảnh minh hoạ nhẹ.
- AboutSection: nêu giá trị cốt lõi, hình thật cửa hàng (nếu có).
- ServiceSection: thẻ dịch vụ, icon minh hoạ; CTA xem chi tiết/đặt lịch.
- QuestionSection (FAQ): kết hợp FAQ schema để SEO.
- StatisticSection: số liệu nổi bật, tăng trust.
- ContactForm: trường cơ bản, lỗi validation rõ; đặt cạnh thông tin liên hệ.
- TestimonialSection: slider nhận xét (Swiper) có dots/auto-play nhẹ.
- GallerySection: lưới ảnh tối ưu, lazyload.

Nguyên tắc dựng component:

- Tách nhỏ, stateless khi có thể; tránh logic nặng trong client components.
- Props rõ ràng; tránh `any`.
- Class Tailwind giữ ngắn gọn, tái sử dụng qua component.

## 5. Hình ảnh

- Dùng Next/Image, chỉ rõ `width`/`height` hoặc `fill` + container tương ứng.
- Định dạng WebP/AVIF đã bật trong `next.config.ts`.
- Thiết lập `priority` cho ảnh hero quan trọng; `loading="lazy"` cho phần dưới.
- Tối ưu SEO: `alt` mô tả đúng nội dung; domain ngoài (i.pravatar.cc) đã được allowlist.

## 6. SEO On-page

- Heading hierarchy: 1 H1/trang, tiếp theo H2/H3 logic.
- Meta title/description ngắn gọn, có từ khoá địa phương (Sóc Trăng).
- Liên kết nội bộ giữa các trang dịch vụ.
- Structured data: ĐÃ inject JSON-LD ở RootLayout cho LocalBusiness (PetStore) và WebSite thông qua `<script type="application/ld+json">` (xem `src/app/layout.tsx`). Có sẵn generator cho Service/FAQ/Breadcrumb trong `src/shared/schema-generators.ts`; có thể inject bổ sung tại layout của route tương ứng khi cần.

## 7. Accessibility (a11y)

- Đảm bảo focus ring hiển thị rõ khi điều hướng bằng keyboard.
- Màu sắc đạt WCAG AA cho text/CTA.
- Nút/Link có aria-label khi nội dung chưa rõ ràng.
- Form có label, aria-invalid, thông báo lỗi rõ.

## 8. Tương tác & Animation

- Dùng Framer Motion nhẹ nhàng: fade/slide khi scroll tới; tránh lạm dụng.
- Thời gian transition ngắn (150–250ms), easing mượt.
- Tránh animation liên tục gây mệt mắt; tắt trên `prefers-reduced-motion` nếu cần.
- Slider sử dụng Swiper ở Hero và Gallery; Testimonials dùng custom slider + `react-swipeable`.

## 9. Ví dụ style Tailwind chung

- Titles: `text-2xl md:text-3xl font-bold text-gray-900`.
- Body: `text-gray-700 leading-7`.
- CTA button: `inline-flex items-center px-5 py-3 rounded-lg bg-green-600 text-white hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600`.

## 10. Kiểm thử hiển thị

- Kiểm tra trên Chrome, Safari, Firefox (desktop/mobile).
- Kiểm tra thực tế trên thiết bị Android/iOS phổ biến.
- Dùng Lighthouse/Axe để rà soát performance & a11y.
- Lưu ý: Nếu có logic chặn right-click và một số tổ hợp phím (F12, Ctrl+Shift+I/C, Ctrl+U), cân nhắc tắt khi kiểm thử a11y để không ảnh hưởng trải nghiệm.

## 11. Dữ liệu UI (data-driven)

- Nội dung UI đã được chuyển hoá sang JSON theo nhóm mục đích tại `src/data/*` (seo, business, services, content, about, contact, statistics).
- Component chỉ đọc dữ liệu từ JSON (không hard-code), giúp bảo trì và tái sử dụng dễ dàng.
- Quy ước và chi tiết xem thêm: `docs/data.md`.
