# POMY PETSHOP CMS/Blog System

## 📋 Tổng quan

Hệ thống CMS/Blog hoàn chỉnh cho POMY PETSHOP, được xây dựng với Next.js 15, React 19, TypeScript, Supabase Auth, Drizzle ORM, và PostgreSQL. Hệ thống cho phép quản lý nội dung blog, bài viết tin tức và hướng dẫn chăm sóc thú cưng với giao diện admin riêng biệt và tối ưu SEO toàn diện.

## 🏗️ Kiến trúc hệ thống

### Tech Stack

- **Frontend**: Next.js 15 (App Router), React 19, TypeScript (strict mode)
- **Styling**: Tailwind CSS, Headless UI components
- **Authentication**: Supabase Auth SSR
- **Database**: PostgreSQL with Drizzle ORM
- **Content**: Markdown-based with HTML caching
- **Deployment**: Vercel (recommended)

### Cấu trúc thư mục

```
src/
├── app/
│   ├── admin/                 # Admin panel routes
│   │   ├── layout.tsx        # Admin layout với auth
│   │   ├── page.tsx          # Dashboard
│   │   └── posts/            # Post management
│   ├── api/admin/            # Admin API endpoints
│   │   ├── posts/           # CRUD posts
│   │   ├── categories/      # Categories management
│   │   ├── tags/            # Tags management
│   │   ├── upload/          # Image upload
│   │   └── revalidate/      # Cache revalidation
│   ├── auth/                # Authentication pages
│   │   └── login/           # Login page
│   ├── blog/                # Public blog
│   │   ├── page.tsx         # Blog listing
│   │   └── [slug]/          # Blog post detail
│   ├── layout.tsx           # Root layout
│   ├── sitemap.ts          # Dynamic sitemap
│   └── robots.ts           # Robots.txt
├── components/
│   └── admin/              # Admin UI components
├── lib/
│   ├── auth/              # Auth utilities
│   ├── cms/               # CMS utilities (markdown, slug, SEO)
│   ├── db/                # Database schema & connection
│   │   ├── schema.ts      # Drizzle schema
│   │   ├── index.ts       # DB client
│   │   └── seed.ts        # Seed data
│   └── supabase/          # Supabase clients
└── shared/                # Shared constants & types
```

## 📊 Database Schema

### Tables

#### `profiles`

Liên kết với Supabase Auth users

- `id` (uuid, PK): Supabase user ID
- `email` (varchar, unique)
- `full_name` (varchar)
- `avatar_url` (text)
- `created_at`, `updated_at`

#### `members`

Quản lý roles và permissions

- `id` (uuid, PK)
- `profile_id` (uuid, FK → profiles)
- `role` (enum: admin, editor, author, viewer)
- `bio` (text)
- `is_active` (boolean)
- `created_at`, `updated_at`

#### `posts`

Bài viết blog

- `id` (uuid, PK)
- `title`, `slug` (unique)
- `excerpt`, `content_markdown`, `content_html`
- `featured_image`
- `status` (enum: draft, published, archived)
- `published_at`
- `seo_title`, `seo_description`, `og_image`
- `author_id` (FK → profiles)
- `view_count`
- `created_at`, `updated_at`

#### `categories`

Chuyên mục bài viết

- `id` (uuid, PK)
- `name`, `slug` (unique)
- `description`
- `created_at`, `updated_at`

#### `tags`

Thẻ bài viết

- `id` (uuid, PK)
- `name`, `slug` (unique)
- `created_at`

#### `post_categories` & `post_tags`

Junction tables cho many-to-many relationships

#### `post_revisions`

Lưu lịch sử chỉnh sửa

- `id`, `post_id`, `title`, `content_markdown`
- `created_by`, `created_at`

### Relationships

```
profiles 1──1 members
profiles 1──* posts (as author)
profiles 1──* post_revisions (as creator)
posts *──* categories (through post_categories)
posts *──* tags (through post_tags)
posts 1──* post_revisions
```

## 🚀 Setup & Installation

### 1. Environment Variables

Tạo file `.env.local`:

```bash
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key

# Database
DATABASE_URL=postgresql://user:password@host:5432/database

# Site
NEXT_PUBLIC_SITE_URL=https://yourdomain.com

# Vercel Revalidation
VERCEL_REVALIDATE_TOKEN=your-secret-token

# SEO
OG_DEFAULT_IMAGE=https://yourdomain.com/og-default.jpg
```

### 2. Install Dependencies

```bash
pnpm install
```

### 3. Setup Supabase

1. Tạo project trên [Supabase](https://supabase.com)
2. Lấy URL và keys từ Settings > API
3. Tạo storage bucket tên `blog-images` (public)

### 4. Database Migration

```bash
# Generate migration
pnpm db:generate

# Run migration
pnpm db:migrate

# Or push schema directly (development)
pnpm db:push

# Seed initial data
pnpm db:seed
```

### 5. Create First Admin User

Sau khi setup Supabase:

1. Đăng ký user qua Supabase Dashboard hoặc API
2. Thêm record vào `profiles` table với user ID
3. Thêm record vào `members` table với `role = 'admin'`

Hoặc chạy SQL:

```sql
-- Insert profile (thay USER_ID và EMAIL)
INSERT INTO profiles (id, email, full_name)
VALUES ('USER_ID', 'admin@pomypetshop.com', 'Admin');

-- Insert member with admin role
INSERT INTO members (profile_id, role, is_active)
VALUES ('USER_ID', 'admin', true);
```

### 6. Run Development Server

```bash
pnpm dev
```

Truy cập:

- Public site: http://localhost:3000
- Admin panel: http://localhost:3000/admin
- Blog: http://localhost:3000/blog

## 👤 User Roles & Permissions

### Role Hierarchy

1. **Admin** (cao nhất)
   - Full access to all features
   - Manage users, settings
   - Create, edit, delete, publish any post
2. **Editor**
   - Review and publish posts
   - Edit any post
   - Create own posts
3. **Author**
   - Create and edit own posts
   - Cannot publish (need approval)
4. **Viewer**
   - Read-only access

### Thêm Role Mới

1. Thêm vào enum trong `schema.ts`:

```typescript
export const roleEnum = pgEnum("role", [
  "admin",
  "editor",
  "author",
  "viewer",
  "new_role",
]);
```

2. Generate và chạy migration:

```bash
pnpm db:generate
pnpm db:migrate
```

3. Cập nhật logic trong `src/lib/auth/index.ts`:

```typescript
export function canPerformAction(userRole: UserRole, action: string): boolean {
  const permissions: Record<UserRole, Set<string>> = {
    // ... existing roles
    new_role: new Set(["read", "custom_action"]),
  };
  // ...
}
```

## ✍️ Content Management

### Tạo Bài Viết Mới

1. Truy cập `/admin/posts/new`
2. Nhập tiêu đề (slug tự động generate)
3. Viết nội dung bằng Markdown
4. Điền SEO metadata (optional)
5. Chọn "Lưu nháp" hoặc "Xuất bản"

### Markdown Support

Hệ thống hỗ trợ GitHub Flavored Markdown (GFM):

````markdown
# Heading 1

## Heading 2

**Bold text**
_Italic text_

[Link](https://example.com)
![Image](https://example.com/image.jpg)

- List item 1
- List item 2

1. Numbered list
2. Another item

`inline code`

​`javascript
const code = 'block';
​`

> Blockquote

| Table | Header |
| ----- | ------ |
| Cell  | Cell   |
````

### Auto-save

- Tự động lưu mỗi 30 giây
- Lưu vào `post_revisions` khi cập nhật
- Có thể restore từ revisions (future feature)

### Image Upload

1. Click vào icon upload trong editor
2. Chọn file (JPEG, PNG, WebP, GIF - max 5MB)
3. Image tự động upload lên Supabase Storage
4. URL được insert vào markdown

## 🔒 Security

### Authentication

- Supabase Auth SSR cho server-side validation
- Middleware check auth cho `/admin/*` routes
- JWT tokens trong httpOnly cookies

### Authorization

- Role-based access control (RBAC)
- Permission checks trong API routes
- Author chỉ edit được bài của mình
- Admin/Editor có full access

### API Security

- Tất cả admin API require authentication
- Rate limiting (nên thêm với Vercel Edge Config)
- Input validation với Zod schemas
- SQL injection prevention với Drizzle ORM

### Content Security

- Markdown sanitization với rehype-sanitize
- Image URL validation
- XSS prevention trong rendered HTML

## 🎯 SEO Optimization

### On-Page SEO

- **Title & Description**: Custom SEO title (60 chars), meta description (160 chars)
- **URL Structure**: Clean slugs, canonical URLs
- **Headings**: Proper H1-H6 hierarchy
- **Images**: Alt text, lazy loading
- **Internal Linking**: Breadcrumbs, related posts

### Structured Data

- Article schema với đầy đủ metadata
- BreadcrumbList cho navigation
- Organization schema
- Được inject vào mỗi page

### Open Graph & Twitter Cards

- OG image 1200x630px
- Custom OG title & description
- Twitter card type: summary_large_image

### Performance

- HTML caching (pre-rendered từ markdown)
- Image optimization (Next.js Image component)
- Code splitting
- Static generation cho blog posts

### Dynamic Sitemap

- Auto-generate từ database
- Include all published posts
- Update frequency hints
- Priority settings

## 🔄 Deployment

### Vercel (Recommended)

1. Push code lên GitHub
2. Import project trên Vercel
3. Set environment variables
4. Deploy

### Environment Variables trên Vercel

Thêm tất cả variables từ `.env.local` vào Project Settings > Environment Variables.

### Database

Khuyến nghị dùng:

- **Supabase Database** (easiest)
- **Neon** (serverless Postgres)
- **Railway** (simple deployment)

### Post-Deployment

1. Setup custom domain
2. Configure OG image CDN
3. Add monitoring (Sentry, LogRocket)
4. Setup analytics

## 📝 API Reference

### Admin API Endpoints

#### Posts

```
GET    /api/admin/posts              # List posts
POST   /api/admin/posts              # Create post
GET    /api/admin/posts/:id          # Get post
PUT    /api/admin/posts/:id          # Update post
DELETE /api/admin/posts/:id          # Delete post
POST   /api/admin/posts/:id/publish  # Publish post
```

#### Categories & Tags

```
GET    /api/admin/categories         # List categories
POST   /api/admin/categories         # Create category
GET    /api/admin/tags               # List tags
POST   /api/admin/tags               # Create tag
```

#### Upload

```
POST   /api/admin/upload             # Upload image
```

#### Revalidation

```
POST   /api/admin/revalidate         # Trigger revalidation
```

### Request/Response Format

#### Create Post

```json
POST /api/admin/posts
{
  "title": "Bài viết mới",
  "slug": "bai-viet-moi",
  "excerpt": "Tóm tắt",
  "contentMarkdown": "# Content here",
  "status": "draft",
  "seoTitle": "SEO Title",
  "seoDescription": "SEO description",
  "featuredImage": "https://...",
  "categoryIds": ["uuid1", "uuid2"],
  "tagIds": ["uuid3", "uuid4"]
}
```

#### Response

```json
{
  "success": true,
  "data": {
    /* post object */
  },
  "message": "Post created successfully"
}
```

#### Error Response

```json
{
  "success": false,
  "error": "Error message"
}
```

## 🧪 Testing

### Run Tests

```bash
# Unit tests
pnpm test

# Watch mode
pnpm test:watch

# Coverage
pnpm test:coverage
```

### Test Structure

```
src/lib/cms/__tests__/
├── slug.test.ts
├── markdown.test.ts
└── seo.test.ts
```

## 🔧 Maintenance

### Database Backup

```bash
# Backup database
pg_dump $DATABASE_URL > backup.sql

# Restore
psql $DATABASE_URL < backup.sql
```

### Update Dependencies

```bash
pnpm update --interactive --latest
```

### Monitor Performance

- Check Vercel Analytics
- Monitor database query performance
- Review error logs

## 📚 Common Tasks

### Thêm Chuyên Mục Mới

```sql
INSERT INTO categories (name, slug, description)
VALUES ('Tên chuyên mục', 'slug', 'Mô tả');
```

### Thêm Thẻ Mới

```sql
INSERT INTO tags (name, slug)
VALUES ('Tên thẻ', 'slug');
```

### Xóa Bài Viết Cũ

```sql
DELETE FROM posts
WHERE status = 'archived'
AND updated_at < NOW() - INTERVAL '1 year';
```

### Reset View Count

```sql
UPDATE posts SET view_count = 0;
```

## 🐛 Troubleshooting

### Lỗi: "Unauthorized"

- Check Supabase credentials trong `.env.local`
- Verify user có record trong `members` table
- Clear cookies và đăng nhập lại

### Lỗi: "Database connection failed"

- Check `DATABASE_URL` format
- Verify database server đang chạy
- Check firewall/network settings

### Lỗi: "Image upload failed"

- Check Supabase Storage bucket `blog-images` tồn tại
- Verify bucket là public
- Check file size < 5MB

### Build Error: TypeScript

```bash
# Clear cache và rebuild
rm -rf .next
pnpm build
```

## 🚀 Future Enhancements (Phase 2)

- [ ] Advanced WYSIWYG editor với Tiptap
- [ ] Media library với drag & drop
- [ ] Bulk operations
- [ ] Advanced search & filters
- [ ] Comment system
- [ ] Multi-language support
- [ ] Newsletter integration
- [ ] Analytics dashboard
- [ ] Revision comparison & restore
- [ ] Draft preview links

## 📞 Support

Nếu cần hỗ trợ:

1. Check documentation này
2. Review code comments
3. Check GitHub Issues
4. Contact team lead

---

**Built with ❤️ for POMY PETSHOP**

Version: 1.0.0  
Last Updated: October 2025
