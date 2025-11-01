# POMY PETSHOP - Website & CMS

Đây là mã nguồn cho website giới thiệu dịch vụ thú cưng **POMY PETSHOP** tại Sóc Trăng, được xây dựng trên nền tảng **Next.js 15 (App Router)** và **TypeScript**.

Dự án bao gồm hai thành phần chính:

1.  **Trang Marketing**: Giao diện giới thiệu dịch vụ, thông tin cửa hàng, được tối ưu SEO và trải nghiệm người dùng.
2.  **Hệ thống CMS/Blog**: Panel quản trị nội dung (`/admin`) để quản lý bài viết, tin tức, và các nội dung động khác.

---

## ✨ Tính năng nổi bật

<details>
<summary><strong>🌐 Trang Marketing</strong></summary>

- **Tối ưu SEO**: Tự động tạo `sitemap.xml`, `robots.txt`, metadata cho từng trang và dữ liệu có cấu trúc (JSON-LD) cho `LocalBusiness`, `WebSite`, `Service`, `FAQ`.
- **Hiệu năng cao**: Tối ưu hình ảnh với Next/Image (WebP/AVIF), code-splitting, và lazy-loading.
- **Giao diện hiện đại**: Xây dựng với Tailwind CSS và các hoạt ảnh tinh tế bằng Framer Motion.
- **Quản lý nội dung tập trung**: Toàn bộ nội dung tĩnh được quản lý qua các file JSON trong `src/data`, giúp dễ dàng chỉnh sửa mà không cần can thiệp vào code.
- **Bảo mật**: Tích hợp các security headers cần thiết.

</details>

<details>
<summary><strong>✍️ Hệ thống CMS & Blog</strong></summary>

- **Admin Panel riêng biệt**: Giao diện quản trị tại `/admin` được bảo vệ bằng xác thực.
- **Quản lý bài viết**: Soạn thảo nội dung bằng Markdown (hỗ trợ GFM), tự động tạo slug, quản lý trạng thái (nháp, xuất bản).
- **Xác thực & Phân quyền**: Sử dụng Supabase Auth với các vai trò (admin, editor, author).
- **Cơ sở dữ liệu**: Dùng Drizzle ORM với PostgreSQL, cung cấp schema rõ ràng và an toàn.
- **Tải ảnh**: Tích hợp upload ảnh trực tiếp lên Supabase Storage.
- **Tối ưu cho Blog**: Trang blog public (`/blog`) được tối ưu SEO, tự động cập nhật sitemap và metadata.

</details>

---

## 🚀 Công nghệ sử dụng

- **Framework**: Next.js 15, React 19
- **Ngôn ngữ**: TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **Backend & DB**: Supabase (Auth, Storage), Drizzle ORM, PostgreSQL
- **SEO**: Next.js Metadata API, JSON-LD
- **Analytics**: Vercel Analytics & Speed Insights

---

## 📂 Cấu trúc dự án

Dự án được cấu trúc theo các thư mục chức năng chính để dễ dàng bảo trì và mở rộng.

```text
.
├── docs/              # Tài liệu chi tiết về yêu cầu, thiết kế, stack, và CMS.
├── drizzle/           # Chứa các file migration của Drizzle ORM.
├── public/            # Tài nguyên tĩnh (hình ảnh, icons).
├── src/
│   ├── app/           # App Router: Chứa các route, layout, và trang của ứng dụng.
│   │   ├── admin/     # Các route cho trang quản trị (CMS).
│   │   ├── api/       # API routes cho các tác vụ backend.
│   │   └── blog/      # Route cho trang blog public.
│   ├── components/    # Các component React tái sử dụng.
│   ├── data/          # Nguồn dữ liệu tĩnh (JSON) cho nội dung website.
│   ├── lib/           # Chứa logic nghiệp vụ (auth, db, cms).
│   └── shared/        # Các hằng số, kiểu dữ liệu, và tiện ích dùng chung.
├── next.config.ts     # Cấu hình Next.js.
├── tailwind.config.ts # Cấu hình Tailwind CSS.
└── package.json       # Quản lý script và các gói phụ thuộc.
```

---

## 🏁 Bắt đầu nhanh

### Yêu cầu

- Node.js (v18 trở lên)
- `pnpm` (khuyến khích)

### Các bước cài đặt

1.  **Clone repository:**

    ```bash
    git clone https://github.com/dangkhoa45/pomy-petshop.git
    cd pomy-petshop
    ```

2.  **Cài đặt các gói phụ thuộc:**

    ```bash
    pnpm install
    ```

3.  **Thiết lập biến môi trường:**
    Tạo file `.env.local` ở thư mục gốc và điền các thông tin cần thiết. Xem file `.env.example` (nếu có) hoặc [hướng dẫn chi tiết về CMS](./docs/CMS_README.md#1-environment-variables) để biết các biến cần thiết.

    ```env
    # Supabase
    NEXT_PUBLIC_SUPABASE_URL=...
    NEXT_PUBLIC_SUPABASE_ANON_KEY=...
    SUPABASE_SERVICE_ROLE_KEY=...

    # Database (PostgreSQL)
    DATABASE_URL=...

    # Site
    NEXT_PUBLIC_SITE_URL=http://localhost:3000
    ```

4.  **Chạy Database Migration:**

    ```bash
    # Áp dụng schema vào database
    pnpm db:push
    # Hoặc nếu bạn dùng migration file
    # pnpm db:migrate
    ```

5.  **Chạy server development:**
    ```bash
    pnpm dev
    ```
    - Website: [http://localhost:3000](http://localhost:3000)
    - Admin Panel: [http://localhost:3000/admin](http://localhost:3000/admin)

---

## 📚 Tài liệu dự án

Toàn bộ tài liệu chi tiết về các khía cạnh của dự án được lưu trong thư mục `docs/`:

- **[📄 Yêu cầu & Mục tiêu](./docs/requirements.md)**: Mô tả các yêu cầu chức năng và phi chức năng.
- **[🎨 Thiết kế & UI](./docs/design.md)**: Hướng dẫn về màu sắc, font chữ, và component.
- **[🏗️ Công nghệ & Stack](./docs/stack.md)**: Danh sách các công nghệ và thư viện sử dụng.
- **[🗃️ Kiến trúc dữ liệu](./docs/data.md)**: Quy tắc tổ chức và sử dụng dữ liệu từ `src/data`.
- **[📝 Hướng dẫn CMS](./docs/CMS_README.md)**: Tài liệu đầy đủ nhất về hệ thống CMS/Blog.
- **[🗺️ Roadmap & Tác vụ](./docs/task.md)**: Kế hoạch phát triển và các công việc cần làm.

```

```
