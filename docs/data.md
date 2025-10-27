# Kiến trúc dữ liệu (src/data)

Tài liệu mô tả cách tổ chức dữ liệu JSON, quy ước đặt tên, và cách các component/routes tiêu thụ dữ liệu. Mục tiêu: tách nội dung ra khỏi mã nguồn UI để dễ bảo trì, tái sử dụng và đồng bộ SEO.

## 1) Mục tiêu và nguyên tắc

- Phân nhóm theo MỤC ĐÍCH sử dụng, không theo component cụ thể.
- Không để JSON ở root `src/data` (đã clean); mọi dữ liệu nằm trong các thư mục con.
- Tên file rõ nghĩa, không viết tắt khó hiểu; tiếng Anh hoặc tiếng Việt không dấu đều được, ưu tiên nhất quán.
- Dữ liệu là nguồn SỰ THẬT duy nhất cho UI và SEO; tránh hard-code trong component.

## 2) Cấu trúc thư mục

```text
src/data/
├─ seo/                     # Metadata site-level & per-route
│  ├─ site-metadata.json    # Metadata chung cho toàn site
│  ├─ meta-about.json       # Metadata cho /about
│  ├─ meta-services.json    # Metadata cho /services
│  └─ meta-contact.json     # Metadata cho /contact
├─ business/                # Thông tin doanh nghiệp & điều hướng
│  ├─ business.json         # Tên, logo, địa chỉ, email, phone, facebook, mapsUrl, tagline
│  └─ nav-links.json        # Danh sách liên kết Header/Footer
├─ services/                # Dịch vụ và nội dung liên quan
│  ├─ services.json         # Danh sách tên dịch vụ
│  ├─ service-cards.json    # Dữ liệu thẻ dịch vụ dùng ở trang chủ/giới thiệu
│  ├─ pricing/              # Bảng giá dịch vụ
│  │  ├─ pricing-spa.json
│  │  └─ pricing-hotel.json
│  ├─ features/             # Nội dung mô tả/hình minh hoạ dịch vụ
│  │  └─ feature-service.json
│  └─ faq/                  # Câu hỏi thường gặp theo dịch vụ
│     └─ question-service.json
├─ content/                 # Nội dung trình bày UI (không gắn đặc thù 1 dịch vụ)
│  ├─ hero-images.json
│  ├─ gallery-images.json
│  ├─ testimonials.json
│  ├─ question-section.json
│  └─ cta/
│     └─ cta-spa.json
├─ about/
│  ├─ about-section.json
│  └─ about-secondary.json
├─ contact/
│  └─ contact-section.json
└─ statistics/
   ├─ statistics.json
   └─ statistics-secondary.json
```

## 3) Tiêu thụ dữ liệu trong mã nguồn

- Metadata site-wide: `src/app/layout.tsx` import từ `src/data/seo/site-metadata.json`.
- Metadata per-route: `src/app/{about,services,contact}/layout.tsx` import từ `src/data/seo/meta-*.json` và tính `url/canonical` dựa trên `SITE_URL`.
- Thông tin doanh nghiệp & điều hướng: `src/shared/constants.ts` import từ `src/data/business/*` và expose `BUSINESS_INFO`, `NAV_LINKS`, `SOCIAL_MEDIA`, `SITE_URL`.
- Sections/Components đọc dữ liệu từ các nhóm tương ứng:
  - Hero/Gallery/Testimonials/CTA/QuestionSection: `src/data/content/*`.
  - Service cards, pricing, feature service, FAQ theo dịch vụ: `src/data/services/*`.
  - About/Contact sections: `src/data/{about,contact}/*`.
  - Statistic sections: `src/data/statistics/*`.

## 4) Kiểu dữ liệu gợi ý (TypeScript)

Sử dụng type an toàn ở nơi tiêu thụ. Ví dụ:

- NAV_LINKS: `ReadonlyArray<{ path: string; label: string }>`
- STATISTICS: `ReadonlyArray<{ key: string; value: number; label: string; icon: string }>`
- BUSINESS_INFO: `{ name; phone; email; address; facebook; mapsUrl; tagline; logo }`
- Metadata JSON theo chuẩn Next.js Metadata (các field: title/description/keywords/openGraph/twitter/icons/robots/verification/facebook, v.v.)

## 5) Quy ước & best practices

- Không dùng `any`: nếu cần, định nghĩa interface nhẹ tại file component hoặc tạo type chung khi nhiều nơi dùng.
- Giữ camelCase cho khoá JSON; string cố gắng không chứa HTML để tránh XSS (render dạng text).
- Ảnh: dùng đường dẫn `/images/...` (public) hoặc domain đã allowlist trong `next.config.ts`.
- Không lặp dữ liệu giữa file: nếu cần tham chiếu chéo, cân nhắc tách thành nguồn chung (vd: BUSINESS_INFO).

## 6) Thêm mới dữ liệu

1. Chọn thư mục theo mục đích (seo/business/services/content/about/contact/statistics).
2. Tạo file JSON tên rõ nghĩa (vd: `pricing-grooming.json`).
3. Import vào component/layout cần dùng qua alias `@/data/...`.
4. Nếu cấu trúc mới, khai báo type tương ứng trong component.
5. Chạy lint/build để xác nhận không lỗi.

## 7) JSON-LD & SEO

- JSON-LD site-wide (LocalBusiness/PetStore, WebSite) được inject trong `src/app/layout.tsx` thông qua `src/shared/schema-generators.ts`.
- Có thể bổ sung JSON-LD Service/FAQ tại `app/services/layout.tsx` hoặc các route khác khi cần; đọc dữ liệu từ `src/data/services/*` để tạo schema.

## 8) Dọn dẹp & kiểm soát trùng lặp

- Không để file JSON tại root `src/data` (đã xoá các file cũ trùng lặp).
- PR review: nếu phát hiện JSON mới ở root, di chuyển vào nhóm phù hợp trước khi merge.
- Có thể bổ sung rule CI kiểm tra `src/data/*.json` là rỗng.

## 9) Liên kết hữu ích

- Constants: `src/shared/constants.ts`
- Schema generators: `src/shared/schema-generators.ts`
- Metadata: `src/app/layout.tsx`, `src/app/{about,services,contact}/layout.tsx`
- Cấu hình: `next.config.ts`, `tsconfig.json`
