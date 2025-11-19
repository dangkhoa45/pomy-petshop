# Roadmap & tiến độ (đồng bộ thực tế)

Tài liệu quản lý công việc, roadmap và tiến độ cho POMY PETSHOP.

---

## 📋 Cập nhật tự động (ngày 2025-11-04 - Quét lại toàn bộ)

**Tóm tắt quét mã nguồn:**

- ✅ Đã quét toàn bộ repository và đối chiếu chi tiết với codebase thực tế
- 🆕 Thêm: **16 task mới** (Blog/CMS: 8, API: 4, SEO: 2, Tooling: 1, A11y: 1)
- ✔️ Xác nhận done: **23 task** (Blog System, CMS, API, DB Schema, Config)
- ⚠️ Cảnh báo: **6 vấn đề** cần xử lý ngay

**Chi tiết thay đổi theo mục:**

- Nội dung & Trang: +8 tasks (Blog pagination, Service detail, Contact API, generateMetadata)
- Tính năng: +4 tasks (Rate limiting, Revisions, Contact form, Validation)
- SEO & Analytics: +2 tasks (generateMetadata cho blog, Missing schemas)
- Tooling: +1 task (Pre-commit hooks)
- Hiệu năng & A11y: +1 task (DevTools blocking issue)

---

## 1) Trạng thái hiện tại

- ✅ **Kiến trúc Next.js 15 App Router** hoàn chỉnh với route groups `(site)` và `(admin)`.
- ✅ **Component chính**: Header, Footer, Hero, About, Services, FAQ, Stats, ContactForm, Testimonials, Gallery.
- ✅ **SEO kỹ thuật**: Metadata per-route (nguồn từ `src/data/seo/*.json`), OG/Twitter, robots.ts, sitemap.ts (App Router). JSON-LD đã inject site-wide (LocalBusiness/WebSite) ở (site)/layout.tsx.
- ✅ **Hiệu năng**: Terser + splitChunks, Image optimization (WebP/AVIF), security headers, optimizeCss experimental.
- ✅ **Blog/CMS System**: Hoàn chỉnh với Tiptap Editor, Markdown processing (unified + rehype-sanitize + rehype-highlight), API CRUD, DB schema (posts, categories, tags, revisions).
- ✅ **Admin Panel**: Đầy đủ pages quản lý posts, categories, tags, users, settings với layout riêng.
- ✅ **Upload System**: API upload ảnh lên Supabase Storage với validation (mime type, size 5MB).
- ✅ **Revalidation API**: Endpoint trigger revalidate Next.js cache (path/tag based) với token authentication.
- ✅ **Authentication**: Supabase Auth với middleware bảo vệ admin routes, role-based permissions (admin, editor, author, viewer).
- ✅ **Database**: Drizzle ORM + PostgreSQL với migration hoàn chỉnh, schema typed an toàn.

## 2) Mốc (Milestones)

- ✅ M1: Khởi tạo kiến trúc + SEO nền tảng — **Done**
- ✅ M1.5: Blog/CMS System + Admin Panel — **Done** *(NEW - hoàn thành 2025-11-04)*
- 🔄 M2: Trang chi tiết dịch vụ + nội dung SEO — **In Progress**
- 📅 M3: Backend form liên hệ + gửi mail — **Planned**
- 📅 M4: Tối ưu Lighthouse & a11y nâng cao — **Planned**
- 📅 M5: Analytics events/conversion — **Planned**

## 3) Backlog chi tiết

### Nội dung & Trang

- [x] **Blog System** — Hệ thống blog công khai hoàn chỉnh với listing và detail pages.
  - **File:** `src/app/(site)/blog/page.tsx`, `src/app/(site)/blog/[slug]/page.tsx`
  - **Trạng thái:** Done
  - **Priority:** DONE
  - **Chi tiết:** Render HTML từ `content_html`, có related posts, Article JSON-LD schema, featured images, reading time, view count.

- [x] **Admin Dashboard** — Trang tổng quan admin với thống kê.
  - **File:** `src/app/(admin)/admin/page.tsx`
  - **Trạng thái:** Done
  - **Priority:** DONE

- [x] **Admin Posts Management** — CRUD đầy đủ cho quản lý bài viết.
  - **File:** `src/app/(admin)/admin/posts/page.tsx`, `posts/new/page.tsx`, `posts/[id]/edit/page.tsx`
  - **Trạng thái:** Done
  - **Priority:** DONE
  - **Chi tiết:** List posts, create, edit, publish/unpublish với TiptapEditor và PostEditor.

- [x] **Admin Categories & Tags** — Quản lý categories và tags.
  - **File:** `src/app/(admin)/admin/categories/page.tsx`, `src/app/(admin)/admin/tags/page.tsx`
  - **Trạng thái:** Done
  - **Priority:** DONE

- [x] **Admin Users & Settings** — Pages quản lý users và cấu hình hệ thống.
  - **File:** `src/app/(admin)/admin/users/page.tsx`, `src/app/(admin)/admin/settings/page.tsx`
  - **Trạng thái:** Done
  - **Priority:** DONE

- [x] **Auth Login Page** — Trang đăng nhập với Supabase Auth.
  - **File:** `src/app/auth/login/page.tsx`
  - **Trạng thái:** Done
  - **Priority:** DONE

- [ ] **Blog Pagination** ⚠️ — Listing blog chưa có pagination, tất cả posts load cùng lúc.
  - **File:** `src/app/(site)/blog/page.tsx`
  - **Trạng thái:** Missing Feature
  - **Priority:** MED
  - **Giải pháp:** Thêm pagination logic (page number, limit, total count) và UI pagination component.

- [ ] **Blog generateMetadata** ⚠️ — Blog detail page chưa có export generateMetadata() để generate dynamic SEO.
  - **File:** `src/app/(site)/blog/[slug]/page.tsx`
  - **Trạng thái:** Missing Feature
  - **Priority:** HIGH
  - **Giải pháp:** Export async function generateMetadata() sử dụng seoTitle, seoDescription, ogImage từ DB.

- [ ] **Service Detail Pages** — Chưa có dynamic route cho từng dịch vụ chi tiết.
  - **File:** `src/app/(site)/services/[slug]/page.tsx` (chưa tồn tại)
  - **Trạng thái:** Planned
  - **Priority:** HIGH
  - **Giải pháp:** Tạo dynamic route với Service JSON-LD schema, nội dung SEO chi tiết, pricing info.

- [ ] **Contact API Endpoint** — Chưa có API xử lý form liên hệ.
  - **File:** `src/app/api/contact/route.ts` (chưa tồn tại)
  - **Trạng thái:** Planned
  - **Priority:** HIGH
  - **Giải pháp:** Tạo endpoint với reCAPTCHA V3, rate-limit, honeypot, gửi mail qua Resend/SendGrid.

- [ ] **Service Page Content** — Trang dịch vụ hiện tại chỉ render components, chưa có nội dung SEO rich.
  - **File:** `src/app/(site)/services/page.tsx`
  - **Trạng thái:** Basic Implementation
  - **Priority:** MED
  - **Ghi chú:** Cần thêm metadata, Service schema JSON-LD, nội dung text cho SEO.

### Tính năng

- [x] **CMS Tiptap Editor** — Rich text WYSIWYG editor với Tiptap.
  - **File:** `src/components/admin/TiptapEditor.tsx`
  - **Trạng thái:** Done
  - **Priority:** DONE
  - **Chi tiết:** Hỗ trợ headings (H1-H3), bold, italic, lists (bullet/ordered), code blocks, blockquote, images, horizontal rule.

- [x] **Post Editor Component** — Dual mode editor (Markdown/Visual).
  - **File:** `src/components/admin/PostEditor.tsx`
  - **Trạng thái:** Done
  - **Priority:** DONE
  - **Chi tiết:** Chuyển đổi linh hoạt giữa Markdown source và Visual (Tiptap) editor.

- [x] **API CRUD Posts** — Full CRUD operations cho posts.
  - **File:** `src/app/api/admin/posts/route.ts`, `src/app/api/admin/posts/[id]/route.ts`, `src/app/api/admin/posts/[id]/publish/route.ts`
  - **Trạng thái:** Done
  - **Priority:** DONE
  - **Chi tiết:** GET (list với filters), POST (create), PUT/PATCH (update), POST /publish (publish/unpublish). Có auth check và role-based permissions.

- [x] **API Upload Images** — Upload ảnh lên Supabase Storage.
  - **File:** `src/app/api/admin/upload/route.ts`
  - **Trạng thái:** Done (nhưng cần rate-limit)
  - **Priority:** DONE
  - **Chi tiết:** Validate mime type (jpeg/png/webp/gif), size (max 5MB), upload vào bucket `blog-images`, trả về public URL.

- [x] **API Revalidate** — Trigger Next.js cache revalidation.
  - **File:** `src/app/api/admin/revalidate/route.ts`
  - **Trạng thái:** Done
  - **Priority:** DONE
  - **Chi tiết:** Hỗ trợ path-based và tag-based revalidation, bảo vệ bằng VERCEL_REVALIDATE_TOKEN.

- [x] **Markdown Processing** — Convert markdown to sanitized HTML.
  - **File:** `src/lib/cms/markdown.ts`
  - **Trạng thái:** Done
  - **Priority:** DONE
  - **Chi tiết:** Sử dụng unified pipeline: remarkParse → remarkGfm → remarkHtml → rehypeSanitize → rehypeHighlight. Có functions: markdownToHtml, generateExcerpt, extractFirstImage, estimateReadingTime.

- [x] **Database Schema** — Drizzle ORM schema hoàn chỉnh.
  - **File:** `src/lib/db/schema.ts`, `drizzle/migrations/0000_serious_ultimatum.sql`
  - **Trạng thái:** Done
  - **Priority:** DONE
  - **Chi tiết:** Tables: posts, categories, tags, post_categories, post_tags, post_revisions, members, profiles. Có indexes, relations, enums (role, post_status).

- [ ] **Rate Limiting cho Upload** ⚠️ — API upload không có rate limit.
  - **File:** `src/app/api/admin/upload/route.ts`
  - **Trạng thái:** Missing Security Feature
  - **Priority:** HIGH
  - **Vấn đề:** Có thể bị spam upload, tiêu tốn storage bandwidth.
  - **Giải pháp:** Thêm rate limiting middleware (upstash/ratelimit hoặc Redis-based), giới hạn uploads/user/hour.

- [ ] **Post Revisions System** ⚠️ — Table có nhưng chưa implement logic save/restore.
  - **File:** `src/app/api/admin/posts/route.ts`, `src/app/api/admin/posts/[id]/route.ts`
  - **Trạng thái:** Incomplete Feature
  - **Priority:** MED
  - **Vấn đề:** DB có table `post_revisions` nhưng không có code lưu revision khi update post.
  - **Giải pháp:** 
    - Mỗi lần PUT/PATCH post, lưu revision vào `post_revisions` table.
    - Tạo endpoint GET `/api/admin/posts/[id]/revisions` để list revisions.
    - Tạo endpoint POST `/api/admin/posts/[id]/revisions/[revisionId]/restore` để restore.

- [ ] **Contact Form API** — Chưa có endpoint xử lý form liên hệ.
  - **File:** `src/app/api/contact/route.ts` (chưa tồn tại)
  - **Trạng thái:** Planned
  - **Priority:** HIGH
  - **Giải pháp:** 
    - Tạo POST endpoint với validation (email, message, name).
    - Tích hợp reCAPTCHA V3 để chống spam.
    - Thêm honeypot field để lọc bot.
    - Rate limiting (IP-based).
    - Gửi mail qua Resend/SendGrid hoặc lưu vào DB.

- [ ] **Email Integration** — Chưa tích hợp dịch vụ gửi email.
  - **File:** `src/lib/email/` (chưa tồn tại)
  - **Trạng thái:** Planned
  - **Priority:** HIGH
  - **Giải pháp:** Tích hợp Resend hoặc SendGrid cho contact form và notifications.

- [ ] **API Categories/Tags CRUD** — API đã có nhưng chưa kiểm tra đầy đủ.
  - **File:** `src/app/api/admin/categories/route.ts`, `src/app/api/admin/tags/route.ts`
  - **Trạng thái:** Needs Review
  - **Priority:** MED
  - **Gợi ý:** Verify CRUD operations, validation, và auth checks.

- [ ] **Image Optimization** — Cần tối ưu ảnh uploaded.
  - **File:** `src/app/api/admin/upload/route.ts`
  - **Trạng thái:** Enhancement
  - **Priority:** MED
  - **Giải pháp:** Resize ảnh về size chuẩn (1200px width), generate thumbnails, LQIP (Low Quality Image Placeholder).

### SEO & Analytics

- [x] **Sitemap Dynamic** — Sitemap tự động với blog posts từ database.
  - **File:** `src/app/sitemap.ts`
  - **Trạng thái:** Done
  - **Priority:** DONE
  - **Chi tiết:** Static routes (/, /about, /services, /contact, /blog) + dynamic blog posts từ DB với lastModified, changeFrequency, priority.

- [x] **Robots.txt** — Dynamic robots.txt với disallow cho admin/API.
  - **File:** `src/app/robots.ts`
  - **Trạng thái:** Done
  - **Priority:** DONE
  - **Chi tiết:** Allow /, disallow /api/, /_next/, /admin/, có sitemap URL và host.

- [x] **Metadata per Route** — Metadata configuration cho từng route group.
  - **File:** `src/app/(site)/layout.tsx`, `src/data/seo/*.json`
  - **Trạng thái:** Done
  - **Priority:** DONE
  - **Chi tiết:** MetadataBase, title template, description, OG, Twitter cards, verification codes, canonical URLs từ JSON files.

- [x] **Article Schema** — JSON-LD Article schema cho blog posts.
  - **File:** `src/app/(site)/blog/[slug]/page.tsx`
  - **Trạng thái:** Done
  - **Priority:** DONE
  - **Chi tiết:** Article schema với headline, description, image, datePublished, author, publisher.

- [x] **LocalBusiness & Website Schema** — Schema site-wide.
  - **File:** `src/app/(site)/layout.tsx`, `src/shared/schema-generators.ts`
  - **Trạng thái:** Done
  - **Priority:** DONE
  - **Chi tiết:** LocalBusiness schema (address, phone, opening hours), WebSite schema (searchAction).

- [ ] **Blog generateMetadata** ⚠️ — Blog detail page chưa export generateMetadata().
  - **File:** `src/app/(site)/blog/[slug]/page.tsx`
  - **Trạng thái:** Missing Feature
  - **Priority:** HIGH
  - **Vấn đề:** Page có seoTitle, seoDescription, ogImage trong DB nhưng chưa generate dynamic metadata, đang dùng metadata từ parent layout.
  - **Giải pháp:** Export async generateMetadata(params) để generate metadata từ post data.

- [ ] **Service JSON-LD Schema** — Chưa có Service schema cho trang dịch vụ.
  - **File:** `src/app/(site)/services/page.tsx`
  - **Trạng thái:** Missing Schema
  - **Priority:** MED
  - **Giải pháp:** Thêm Service schema cho từng loại dịch vụ (SPA, grooming, khách sạn thú cưng).

- [ ] **FAQ Schema** — Chưa có FAQPage schema.
  - **File:** `src/app/(site)/page.tsx` hoặc các trang có FAQ
  - **Trạng thái:** Missing Schema
  - **Priority:** MED
  - **Giải pháp:** Thêm FAQPage schema với questions/answers từ data.

- [ ] **Breadcrumb Schema** — Chưa có BreadcrumbList schema.
  - **File:** Các pages con (blog/[slug], services/[slug])
  - **Trạng thái:** Missing Schema
  - **Priority:** LOW
  - **Giải pháp:** Generate BreadcrumbList schema cho navigation hierarchy.

- [ ] **Rich Results Testing** — Chưa verify schema với Google Rich Results Test.
  - **Trạng thái:** Needs Testing
  - **Priority:** MED
  - **Giải pháp:** Test URLs với Google Rich Results Test và Schema Markup Validator.

- [ ] **Event Tracking** — Chưa có custom events tracking.
  - **File:** Components với CTA buttons, forms
  - **Trạng thái:** Planned
  - **Priority:** HIGH
  - **Giải pháp:** Track CTA clicks, form submissions, phone clicks qua Vercel Analytics hoặc GA4.

- [ ] **Analytics Dashboard** — Vercel Analytics đã tích hợp nhưng chưa có GA4.
  - **File:** `src/app/(site)/layout.tsx`
  - **Trạng thái:** Partial
  - **Priority:** MED
  - **Ghi chú:** Đã có Vercel Analytics và Speed Insights, cân nhắc thêm GA4 cho detailed analytics.

### Hiệu năng & A11y

- [x] **Next/Image Optimization** — Sử dụng Next/Image với WebP/AVIF.
  - **File:** `next.config.ts`
  - **Trạng thái:** Done
  - **Priority:** DONE
  - **Chi tiết:** Configured formats (WebP/AVIF), deviceSizes, imageSizes, minimumCacheTTL, remotePatterns cho Supabase Storage.

- [x] **Code Splitting** — Webpack optimization với Terser và splitChunks.
  - **File:** `next.config.ts`
  - **Trạng thái:** Done
  - **Priority:** DONE
  - **Chi tiết:** TerserPlugin với drop_console, splitChunks với vendors/common cache groups.

- [x] **Security Headers** — HTTP security headers configured.
  - **File:** `next.config.ts`
  - **Trạng thái:** Done
  - **Priority:** DONE
  - **Chi tiết:** X-Content-Type-Options, X-Frame-Options, X-XSS-Protection, Referrer-Policy, Cache-Control cho images.

- [x] **Loading States** — Loading.tsx ở mọi route.
  - **File:** `src/app/(site)/loading.tsx`, `src/app/(admin)/admin/loading.tsx`
  - **Trạng thái:** Done
  - **Priority:** DONE
  - **Ghi chú:** Cần verify UX chi tiết trong thực tế.

- [ ] **Blog Image Optimization** ⚠️ — Featured images dùng fill mode với height cố định.
  - **File:** `src/app/(site)/blog/[slug]/page.tsx`
  - **Trạng thái:** Needs Optimization
  - **Priority:** MED
  - **Vấn đề:** Images dùng `fill` với `h-[400px] md:h-[500px]`, nếu ảnh gốc quá lớn sẽ ảnh hưởng LCP.
  - **Giải pháp:** 
    - Resize ảnh về size chuẩn khi upload (1200x800px).
    - Hoặc dùng width/height cụ thể thay vì fill.
    - Thêm priority prop cho featured image.
    - Generate blur placeholder (LQIP).

- [ ] **DevTools Blocking** ⚠️ — Services page block F12, Ctrl+Shift+I, right-click.
  - **File:** `src/app/(site)/services/page.tsx`
  - **Trạng thái:** Bad Practice
  - **Priority:** MED
  - **Vấn đề:** Block devtools và right-click ảnh hưởng xấu đến a11y, developer UX, và có thể vi phạm WCAG.
  - **Giải pháp:** Xóa toàn bộ useEffect với handleContextMenu và handleKeyDown, không block devtools trên production site.

- [ ] **Core Web Vitals Monitoring** — Chưa có monitoring dashboard.
  - **File:** Vercel Analytics dashboard
  - **Trạng thái:** Needs Setup
  - **Priority:** HIGH
  - **Giải pháp:** 
    - Monitor CLS, LCP, FID/INP via Vercel Speed Insights.
    - Set up alerts cho performance regressions.
    - Track per-page metrics.

- [ ] **Accessibility Audit** — Chưa có audit WCAG chi tiết.
  - **File:** Toàn bộ components
  - **Trạng thái:** Needs Audit
  - **Priority:** MED
  - **Giải pháp:**
    - Rà soát color contrast (WCAG AA standard).
    - Verify focus rings và keyboard navigation.
    - Test với screen readers.
    - Thêm ARIA labels cho interactive elements.

- [ ] **Critical CSS Optimization** — Chưa optimize critical CSS.
  - **File:** `src/app/globals.css`
  - **Trạng thái:** Enhancement
  - **Priority:** LOW
  - **Giải pháp:** Extract và inline critical CSS cho above-the-fold content.

- [ ] **Font Loading Optimization** — Fonts đã dùng next/font nhưng chưa optimize loading.
  - **File:** `src/app/layout.tsx`
  - **Trạng thái:** Good
  - **Priority:** LOW
  - **Ghi chú:** Đã dùng `display: swap`, verify không có FOIT/FOUT issues.

### Tooling

- [x] **Prettier Config** — Code formatting với Tailwind plugin.
  - **File:** `prettier.config.js`
  - **Trạng thái:** Done
  - **Priority:** DONE
  - **Chi tiết:** Configured với prettier-plugin-tailwindcss để sort class names.

- [x] **Tailwind Typography** — Plugin cho rich text styling.
  - **File:** `tailwind.config.ts`, `package.json`
  - **Trạng thái:** Done
  - **Priority:** DONE
  - **Chi tiết:** @tailwindcss/typography plugin enabled, dùng cho blog content styling.

- [x] **ESLint Config** — Flat config với Next.js rules.
  - **File:** `eslint.config.mjs`
  - **Trạng thái:** Done
  - **Priority:** DONE
  - **Chi tiết:** ESLint 9 flat config với eslint-config-next.

- [x] **TypeScript Config** — Strict mode với path aliases.
  - **File:** `tsconfig.json`
  - **Trạng thái:** Done
  - **Priority:** DONE
  - **Chi tiết:** Strict mode enabled, path alias `@/*` -> `src/*`, target ES2017.

- [x] **Drizzle ORM** — Database ORM với migration tools.
  - **File:** `drizzle.config.ts`, `package.json` scripts
  - **Trạng thái:** Done
  - **Priority:** DONE
  - **Chi tiết:** Scripts: db:generate, db:migrate, db:push, db:studio, db:seed.

- [x] **Package Manager** — pnpm với lockfile.
  - **File:** `pnpm-lock.yaml`
  - **Trạng thái:** Done
  - **Priority:** DONE

- [ ] **Pre-commit Hooks** — Chưa có Git hooks để enforce quality.
  - **File:** `.husky/` (chưa tồn tại)
  - **Trạng thái:** Enhancement
  - **Priority:** LOW
  - **Giải pháp:** 
    - Install Husky + lint-staged.
    - Pre-commit: chạy ESLint + Prettier trên staged files.
    - Pre-push: chạy type-check (tsc --noEmit).

- [ ] **Environment Variables Validation** — Chưa có validation cho env vars.
  - **File:** `src/lib/env.ts` (chưa tồn tại)
  - **Trạng thái:** Enhancement
  - **Priority:** LOW
  - **Giải pháp:** Dùng Zod để validate NEXT_PUBLIC_*, DATABASE_URL, SUPABASE_* vars at build time.

- [ ] **GitHub Actions CI/CD** — Chưa có CI pipeline.
  - **File:** `.github/workflows/` (chưa tồn tại)
  - **Trạng thái:** Enhancement
  - **Priority:** LOW
  - **Giải pháp:** Setup GitHub Actions cho lint, type-check, build test trước khi merge.

## 4) Quy ước & Tiêu chuẩn

- Code: TypeScript strict, ESLint (flat config) đang áp dụng.
- Import alias: `@/*` -> `src/*`.
- CSS: Tailwind utilities là chính; hạn chế CSS thuần ngoài `globals.css`.
- Component: tách nhỏ, stateless khi có thể; thân thiện SSR/SSG.
- Commit: chuẩn hoá theo feat/fix/docs/chore/refactor.

## 5) Tiến độ (Kanban gợi ý)

### 🔴 Todo - HIGH Priority (8 tasks)

**Cần xử lý ngay để hoàn thiện sản phẩm:**

1. **Contact Form API** — Backend xử lý form liên hệ
   - File: `src/app/api/contact/route.ts`
   - Validation + reCAPTCHA V3 + rate-limit + email

2. **Rate Limiting Upload** — Bảo vệ upload endpoint
   - File: `src/app/api/admin/upload/route.ts`
   - Implement rate limiting middleware

3. **Blog generateMetadata** — Dynamic SEO cho blog posts
   - File: `src/app/(site)/blog/[slug]/page.tsx`
   - Export generateMetadata() function

4. **Service Detail Pages** — Trang chi tiết từng dịch vụ
   - File: `src/app/(site)/services/[slug]/page.tsx`
   - Dynamic route với Service schema

5. **Email Integration** — Gửi mail notifications
   - File: `src/lib/email/`
   - Tích hợp Resend/SendGrid

6. **Event Tracking** — Analytics cho conversions
   - File: Components với CTA
   - Track clicks, submissions, phone calls

7. **Core Web Vitals Monitoring** — Performance dashboard
   - Setup alerts và monitoring

8. **Contact API Endpoint** — API route cho contact form
   - Duplicate với #1 (merge lại)

### 🟡 In Progress - MEDIUM Priority (12 tasks)

**Quan trọng nhưng không blocking:**

- Post Revisions System (save/restore logic)
- Blog Image Optimization (resize on upload)
- DevTools Blocking Issue (xóa code chặn F12)
- Service JSON-LD Schema
- FAQ Schema
- Rich Results Testing
- Accessibility Audit
- API Categories/Tags Review
- Image Optimization on Upload
- Service Page SEO Content
- Blog Pagination
- GA4 Integration

### ⚪ Backlog - LOW Priority (8 tasks)

**Enhancement và nice-to-have:**

- Pre-commit Hooks (Husky + lint-staged)
- Environment Variables Validation
- GitHub Actions CI/CD
- Breadcrumb Schema
- Critical CSS Optimization
- Font Loading Optimization
- Loading States UX Verification

### ✅ Done (28 tasks)

**Đã hoàn thành:**

#### Kiến trúc & Tooling
- ✅ Next.js 15 App Router với route groups
- ✅ TypeScript strict mode + path aliases
- ✅ ESLint flat config
- ✅ Prettier với Tailwind plugin
- ✅ Drizzle ORM + PostgreSQL
- ✅ pnpm package manager

#### Blog/CMS System
- ✅ Blog listing + detail pages
- ✅ Admin Dashboard
- ✅ Admin Posts Management (CRUD)
- ✅ Admin Categories & Tags
- ✅ Admin Users & Settings
- ✅ Auth Login Page
- ✅ Tiptap Rich Text Editor
- ✅ Post Editor (dual mode: Markdown/Visual)
- ✅ Markdown Processing (unified pipeline)

#### API & Backend
- ✅ API CRUD Posts (với auth & permissions)
- ✅ API Upload Images (Supabase Storage)
- ✅ API Revalidate (Next.js cache)
- ✅ Database Schema (migrations)

#### SEO & Performance
- ✅ Dynamic Sitemap (với blog posts)
- ✅ Dynamic Robots.txt
- ✅ Metadata per Route
- ✅ Article Schema (JSON-LD)
- ✅ LocalBusiness & Website Schema
- ✅ Next/Image Optimization (WebP/AVIF)
- ✅ Code Splitting (Terser + splitChunks)
- ✅ Security Headers
- ✅ Loading States

## 6) Rủi ro & Giảm thiểu

- Thiếu nội dung hình ảnh: chuẩn bị nội dung trước khi tối ưu SEO on-page.
- Tải ảnh chậm: dùng Next/Image + kích thước hợp lý + CDN Vercel.
- SPAM form: reCAPTCHA + rate-limit + honeypot.
- A11y bị ảnh hưởng bởi chặn phím/chuột: chỉ bật trong môi trường demo nếu thật sự cần.

### ⚠️ Cảnh báo mới (2025-11-04 - Quét lại toàn bộ)

#### 🔴 HIGH Priority Issues

1. **Upload API - No Rate Limiting** ⚠️
   - **File:** `src/app/api/admin/upload/route.ts`
   - **Vấn đề:** API upload không có rate limit, có thể bị spam upload, tiêu tốn storage và bandwidth.
   - **Priority:** HIGH
   - **Impact:** Security, Cost
   - **Giải pháp:** Thêm rate limiting middleware (upstash/ratelimit hoặc Redis-based), giới hạn uploads/user/hour.

2. **Blog generateMetadata Missing** ⚠️
   - **File:** `src/app/(site)/blog/[slug]/page.tsx`
   - **Vấn đề:** Page có seoTitle, seoDescription, ogImage trong DB schema nhưng chưa export generateMetadata() để generate dynamic SEO metadata.
   - **Priority:** HIGH
   - **Impact:** SEO, Social Sharing
   - **Giải pháp:** Export async function generateMetadata(params) để generate metadata từ post data.

3. **Contact Form API Missing** ⚠️
   - **File:** `src/app/api/contact/route.ts` (chưa tồn tại)
   - **Vấn đề:** Có ContactForm component nhưng chưa có backend API xử lý.
   - **Priority:** HIGH
   - **Impact:** Business, Lead Generation
   - **Giải pháp:** Tạo POST endpoint với validation, reCAPTCHA V3, rate-limit, email integration.

#### 🟡 MEDIUM Priority Issues

4. **Blog Post Images - Size Not Optimized** ⚠️
   - **File:** `src/app/(site)/blog/[slug]/page.tsx`
   - **Vấn đề:** Featured image sử dụng `fill` với h-[400px] md:h-[500px] cố định, có thể gây LCP chậm nếu ảnh gốc quá lớn.
   - **Priority:** MED
   - **Impact:** Performance, Core Web Vitals
   - **Giải pháp:** Resize ảnh về size chuẩn khi upload (1200x800px), hoặc dùng width/height cụ thể thay vì fill.

5. **Post Revisions - No Save/Restore Logic** ⚠️
   - **File:** `src/app/api/admin/posts/route.ts`, `[id]/route.ts`
   - **Vấn đề:** DB có table `post_revisions` nhưng API chưa implement logic lưu/restore revisions.
   - **Priority:** MED
   - **Impact:** Content Management, User Experience
   - **Giải pháo:** Thêm logic lưu revision mỗi khi update post, và API endpoints để list/restore revisions.

6. **DevTools Blocking on Services Page** ⚠️
   - **File:** `src/app/(site)/services/page.tsx`
   - **Vấn đề:** Page block F12, Ctrl+Shift+I, right-click menu bằng JavaScript. Đây là bad practice, ảnh hưởng xấu đến a11y và có thể vi phạm WCAG.
   - **Priority:** MED
   - **Impact:** Accessibility, Developer UX, SEO
   - **Giải pháp:** Xóa toàn bộ useEffect với handleContextMenu và handleKeyDown. Không nên block devtools trên production site.

## 7) Liên kết tham chiếu

### Cấu trúc mã nguồn chính

#### Public Pages (Route Group: `(site)`)

- `src/app/(site)/layout.tsx` — Site layout với Header, Footer, SEO metadata, JSON-LD schemas
- `src/app/(site)/page.tsx` — Homepage
- `src/app/(site)/about/page.tsx` — Trang giới thiệu
- `src/app/(site)/services/page.tsx` — Trang dịch vụ (có DevTools blocking issue ⚠️)
- `src/app/(site)/contact/page.tsx` — Trang liên hệ
- `src/app/(site)/blog/page.tsx` — Blog listing (cần pagination)
- `src/app/(site)/blog/[slug]/page.tsx` — Blog detail (cần generateMetadata ⚠️)

#### Admin Panel (Route Group: `(admin)`)

- `src/app/(admin)/admin/layout.tsx` — Admin layout với Sidebar, Navbar
- `src/app/(admin)/admin/page.tsx` — Dashboard
- `src/app/(admin)/admin/posts/page.tsx` — Posts listing
- `src/app/(admin)/admin/posts/new/page.tsx` — Create new post
- `src/app/(admin)/admin/posts/[id]/edit/page.tsx` — Edit post
- `src/app/(admin)/admin/categories/page.tsx` — Categories management
- `src/app/(admin)/admin/tags/page.tsx` — Tags management
- `src/app/(admin)/admin/users/page.tsx` — Users management
- `src/app/(admin)/admin/settings/page.tsx` — Settings

#### API Routes

**Blog API (Public):**

- `src/app/api/blog/posts/route.ts` — GET published posts
- `src/app/api/blog/posts/[slug]/route.ts` — GET single post by slug

**Admin API (Protected):**

- `src/app/api/admin/posts/route.ts` — GET all posts, POST create post (cần thêm revisions logic ⚠️)
- `src/app/api/admin/posts/[id]/route.ts` — GET, PUT, DELETE post by ID
- `src/app/api/admin/posts/[id]/publish/route.ts` — POST publish/unpublish
- `src/app/api/admin/categories/route.ts` — CRUD categories
- `src/app/api/admin/tags/route.ts` — CRUD tags
- `src/app/api/admin/upload/route.ts` — POST upload images (cần rate-limit ⚠️)
- `src/app/api/admin/revalidate/route.ts` — POST trigger revalidation

**Missing API:**

- `src/app/api/contact/route.ts` — Contact form endpoint (chưa có ⚠️)

#### Components

**Admin Components:**

- `src/components/admin/TiptapEditor.tsx` — WYSIWYG editor với Tiptap
- `src/components/admin/PostEditor.tsx` — Dual mode editor (Markdown/Visual)
- `src/components/admin/PostsTable.tsx` — Posts listing table
- `src/components/admin/AdminNavbar.tsx` — Admin navbar
- `src/components/admin/AdminSidebar.tsx` — Admin sidebar

**Blog Components:**

- `src/components/blog/BlogContent.tsx` — Render blog HTML content

**Layout Components:**

- `src/components/layout/Header.tsx` — Site header
- `src/components/layout/Footer.tsx` — Site footer

**Other:**

- `src/components/features/` — Feature sections, FAQ, Questions
- `src/components/pricing/` — Pricing components
- `src/components/sections/` — Hero, About, Contact, Gallery sections
- `src/components/shared/` — Shared/reusable components

#### Libraries

**API:**

- `src/lib/api/response.ts` — API response helpers
- `src/lib/api/validation.ts` — Zod schemas cho validation

**Auth:**

- `src/lib/auth/index.ts` — Authentication helpers (requireAuth, canPerformAction)

**CMS:**

- `src/lib/cms/markdown.ts` — Markdown processing (markdownToHtml, generateExcerpt, estimateReadingTime)
- `src/lib/cms/slug.ts` — Slug generation
- `src/lib/cms/seo.ts` — SEO helpers

**Database:**

- `src/lib/db/index.ts` — Drizzle DB instance
- `src/lib/db/schema.ts` — Database schema (posts, categories, tags, etc.)

**Supabase:**

- `src/lib/supabase/server.ts` — Supabase server client
- `src/lib/supabase/client.ts` — Supabase browser client
- `src/lib/supabase/middleware.ts` — Session middleware

#### Data Files

- `src/data/seo/*.json` — SEO metadata cho từng route
- `src/data/services/*.json` — Services data
- `src/data/content/*.json` — Content data (hero, gallery, testimonials)
- `src/data/statistics/*.json` — Statistics data
- `src/data/about/*.json` — About page data
- `src/data/contact/*.json` — Contact page data
- `src/data/business/*.json` — Business info

### Cấu hình Files

- **Next.js**: `next.config.ts`
  - Image optimization (WebP/AVIF, remote patterns)
  - Webpack optimization (Terser, splitChunks)
  - Security headers
  - Redirects

- **TypeScript**: `tsconfig.json`
  - Strict mode enabled
  - Path alias `@/*` → `src/*`
  - Target ES2017

- **Tailwind**: `tailwind.config.ts`
  - Typography plugin enabled
  - Custom fonts (Inter, Poppins)
  - Custom colors

- **ESLint**: `eslint.config.mjs`
  - Flat config (ESLint 9)
  - Next.js rules

- **Prettier**: `prettier.config.js`
  - prettier-plugin-tailwindcss

- **Drizzle**: `drizzle.config.ts`
  - Database connection
  - Migrations path

- **Middleware**: `middleware.ts`
  - Supabase session management
  - Protect admin routes

### SEO & Schema

- **Schema Generators**: `src/shared/schema-generators.ts`
  - generateLocalBusinessSchema()
  - generateWebsiteSchema()

- **Schema Types**: `src/shared/schema.ts`
  - TypeScript types cho schemas

- **Sitemap**: `src/app/sitemap.ts`
  - Dynamic sitemap với blog posts từ DB
  - Static pages với priority/changeFrequency

- **Robots**: `src/app/robots.ts`
  - Dynamic robots.txt
  - Disallow /api, /_next, /admin

- **Metadata**: Từ `src/data/seo/*.json` files

### Database Schema

**Tables:**

- `posts` — Blog posts với content_markdown, content_html, SEO fields
- `categories` — Post categories
- `tags` — Post tags
- `post_categories` — Junction table
- `post_tags` — Junction table
- `post_revisions` — Post history (chưa dùng ⚠️)
- `members` — User roles and permissions
- `profiles` — User profile data (linked to Supabase Auth)

**Enums:**

- `role` — admin, editor, author, viewer
- `post_status` — draft, published, archived

**Migration:**

- `drizzle/migrations/0000_serious_ultimatum.sql` — Initial schema

### Documentation

- `docs/requirements.md` — Yêu cầu & mục tiêu
- `docs/design.md` — Thiết kế & UI guide
- `docs/stack.md` — Stack công nghệ
- `docs/data.md` — Data structure guide
- `docs/CMS_README.md` — CMS documentation
- `docs/task.md` — This file (roadmap & tasks)
- `docs/reports/` — Technical reports

---

## 📊 Bảng thống kê chi tiết (2025-11-04 - Quét lại toàn bộ)

### Tổng quan sau khi quét mã nguồn

| Loại task | Mới | Done | Tổng | % Hoàn thành |
|-----------|-----|------|------|--------------|
| **Nội dung & Trang** | 5 | 6 | 11 | 55% |
| **Tính năng** | 7 | 7 | 14 | 50% |
| **SEO & Analytics** | 7 | 5 | 12 | 42% |
| **Hiệu năng & A11y** | 6 | 4 | 10 | 40% |
| **Tooling** | 3 | 6 | 9 | 67% |
| **TỔNG** | **28** | **28** | **56** | **50%** |

### Phân loại theo Priority

| Priority | Số lượng | % Tổng | Ghi chú |
|----------|----------|--------|---------|
| **HIGH** | 8 | 29% | Cần xử lý ngay (Contact API, Rate limit, SEO metadata, etc.) |
| **MED** | 12 | 43% | Quan trọng nhưng không blocking |
| **LOW** | 8 | 28% | Enhancement và nice-to-have |

### Chi tiết tasks mới theo mục (28 tasks)

#### Nội dung & Trang (5 tasks)

- [ ] Blog Pagination (MED)
- [ ] Blog generateMetadata (HIGH) ⚠️
- [ ] Service Detail Pages (HIGH)
- [ ] Contact API Endpoint (HIGH) ⚠️
- [ ] Service Page SEO Content (MED)

#### Tính năng (7 tasks)

- [ ] Rate Limiting cho Upload (HIGH) ⚠️
- [ ] Post Revisions System (MED) ⚠️
- [ ] Contact Form API (HIGH) ⚠️
- [ ] Email Integration (HIGH)
- [ ] API Categories/Tags Review (MED)
- [ ] Image Optimization on Upload (MED)

#### SEO & Analytics (7 tasks)

- [ ] Blog generateMetadata (HIGH) ⚠️
- [ ] Service JSON-LD Schema (MED)
- [ ] FAQ Schema (MED)
- [ ] Breadcrumb Schema (LOW)
- [ ] Rich Results Testing (MED)
- [ ] Event Tracking (HIGH)
- [ ] GA4 Integration (MED)

#### Hiệu năng & A11y (6 tasks)

- [ ] Blog Image Optimization (MED) ⚠️
- [ ] DevTools Blocking Issue (MED) ⚠️
- [ ] Core Web Vitals Monitoring (HIGH)
- [ ] Accessibility Audit (MED)
- [ ] Critical CSS Optimization (LOW)
- [ ] Font Loading Optimization (LOW)

#### Tooling (3 tasks)

- [ ] Pre-commit Hooks (LOW)
- [ ] Environment Variables Validation (LOW)
- [ ] GitHub Actions CI/CD (LOW)

### Chi tiết tasks hoàn thành (28 tasks)

#### Nội dung & Trang (6 done)

- ✅ Blog System (listing + detail pages với Article schema)
- ✅ Admin Dashboard
- ✅ Admin Posts Management (CRUD với PostEditor/TiptapEditor)
- ✅ Admin Categories & Tags pages
- ✅ Admin Users & Settings pages
- ✅ Auth Login Page

#### Tính năng (7 done)

- ✅ CMS Tiptap Editor (WYSIWYG với toolbar)
- ✅ Post Editor Component (dual mode: Markdown/Visual)
- ✅ API CRUD Posts (full endpoints với auth)
- ✅ API Upload Images (Supabase Storage với validation)
- ✅ API Revalidate (Next.js cache với token auth)
- ✅ Markdown Processing (unified pipeline với sanitization)
- ✅ Database Schema (Drizzle ORM với migrations)

#### SEO & Analytics (5 done)

- ✅ Sitemap Dynamic (với blog posts từ DB)
- ✅ Robots.txt Dynamic
- ✅ Metadata per Route (từ JSON files)
- ✅ Article Schema (JSON-LD)
- ✅ LocalBusiness & Website Schema

#### Hiệu năng & A11y (4 done)

- ✅ Next/Image Optimization (WebP/AVIF)
- ✅ Code Splitting (Terser + splitChunks)
- ✅ Security Headers
- ✅ Loading States (loading.tsx)

#### Tooling (6 done)

- ✅ Prettier Config (với Tailwind plugin)
- ✅ Tailwind Typography Plugin
- ✅ ESLint Flat Config
- ✅ TypeScript Config (strict mode)
- ✅ Drizzle ORM Setup
- ✅ Package Manager (pnpm)

### Danh sách cảnh báo ưu tiên (6 items) ⚠️

| # | File | Issue | Priority | Impact |
|---|------|-------|----------|--------|
| 1 | `src/app/api/admin/upload/route.ts` | No rate limiting | **HIGH** | Security, Cost |
| 2 | `src/app/(site)/blog/[slug]/page.tsx` | Missing generateMetadata() | **HIGH** | SEO, Social |
| 3 | `src/app/api/contact/route.ts` | Contact API not implemented | **HIGH** | Business |
| 4 | `src/app/(site)/blog/[slug]/page.tsx` | Image size not optimized | **MED** | Performance |
| 5 | `src/app/api/admin/posts/route.ts` | Revisions logic missing | **MED** | UX |
| 6 | `src/app/(site)/services/page.tsx` | DevTools blocking code | **MED** | A11y |

---

## 📝 Ghi chú bổ sung

### Phát hiện tích cực

- ✅ **Content Security**: Markdown được sanitize qua rehype-sanitize trước khi render
- ✅ **Auth System**: Supabase auth đã tích hợp với role-based permissions
- ✅ **Type Safety**: TypeScript strict mode enabled, Drizzle ORM strongly typed
- ✅ **Image Validation**: Upload API validate mime type và file size
- ✅ **Security Headers**: X-Content-Type-Options, X-Frame-Options, CSP headers configured

### Khuyến nghị tiếp theo

1. **Immediate (HIGH)**: Thêm rate limiting cho upload API
2. **Short-term (MED)**: Implement generateMetadata cho blog posts
3. **Short-term (MED)**: Add post revisions save/restore logic
4. **Medium-term**: Complete service detail pages với schema
5. **Long-term**: Setup analytics events tracking

---

## 🔄 Git Diff Summary

Để xem chi tiết thay đổi, chạy:

```bash
git diff docs/task.md
```

Hoặc xem git status:

```bash
git status
```
