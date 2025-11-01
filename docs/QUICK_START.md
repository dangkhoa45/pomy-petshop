# POMY PETSHOP CMS - Quick Start Guide

## 🚀 Triển khai nhanh trong 10 phút

### Bước 1: Clone và Install (2 phút)

```bash
# Clone repository (nếu có)
git clone <repo-url>
cd pomy-petshop

# Install dependencies
pnpm install
```

### Bước 2: Setup Supabase (3 phút)

1. Tạo project tại [supabase.com](https://supabase.com)
2. Vào **Settings > API** và copy:
   - Project URL
   - Anon key
   - Service role key
3. Tạo storage bucket `blog-images` (Settings > Storage, chọn Public)

### Bước 3: Configure Environment (1 phút)

```bash
# Copy và điền thông tin
cp .env.example .env.local
```

Sửa file `.env.local`:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
DATABASE_URL=postgresql://postgres:[PASSWORD]@db.xxx.supabase.co:5432/postgres
NEXT_PUBLIC_SITE_URL=http://localhost:3000
VERCEL_REVALIDATE_TOKEN=your-secret-token-here
```

### Bước 4: Setup Database (2 phút)

```bash
# Push schema to database
pnpm db:push

# Seed initial data
pnpm db:seed
```

### Bước 5: Tạo Admin User (2 phút)

Vào Supabase Dashboard > Authentication > Users > Add User:

- Email: admin@pomypetshop.com
- Password: (tự chọn)
- Copy User ID

Vào SQL Editor và chạy:

```sql
-- Thay YOUR_USER_ID bằng ID vừa copy
INSERT INTO profiles (id, email, full_name)
VALUES ('YOUR_USER_ID', 'admin@pomypetshop.com', 'Admin');

INSERT INTO members (profile_id, role, is_active)
VALUES ('YOUR_USER_ID', 'admin', true);
```

### Bước 6: Chạy Development Server

```bash
pnpm dev
```

Truy cập:

- 🏠 Trang chủ: http://localhost:3000
- 📝 Admin: http://localhost:3000/admin
- 📰 Blog: http://localhost:3000/blog
- 🔐 Login: http://localhost:3000/auth/login

## ✅ Checklist Setup

- [ ] Đã install dependencies
- [ ] Đã tạo Supabase project
- [ ] Đã tạo storage bucket `blog-images`
- [ ] Đã setup `.env.local`
- [ ] Đã chạy `pnpm db:push`
- [ ] Đã chạy `pnpm db:seed`
- [ ] Đã tạo admin user
- [ ] Đã test login thành công

## 📝 Tạo bài viết đầu tiên

1. Login vào `/admin` với tài khoản admin
2. Click "Tạo bài mới"
3. Nhập tiêu đề: "Chào mừng đến với POMY Blog"
4. Nội dung mẫu:

```markdown
# Chào mừng đến với POMY PETSHOP Blog

Đây là bài viết đầu tiên trên blog của chúng tôi!

## Về chúng tôi

POMY PETSHOP chuyên cung cấp dịch vụ chăm sóc và làm đẹp cho thú cưng tại Sóc Trăng.

### Dịch vụ của chúng tôi:

- 🛁 Tắm rửa và vệ sinh
- ✂️ Cắt tỉa lông chuyên nghiệp
- 💅 Spa và làm đẹp
- 🏥 Kiểm tra sức khỏe

**Liên hệ ngay** để được tư vấn!
```

5. Điền SEO:

   - SEO Title: "Chào mừng - POMY PETSHOP Blog"
   - Meta Description: "Khám phá blog chăm sóc thú cưng của POMY PETSHOP với nhiều kiến thức hữu ích"

6. Click "Xuất bản"
7. Xem tại `/blog`

## 🎨 Customization

### Thay đổi màu sắc

Sửa `tailwind.config.ts`:

```typescript
theme: {
  extend: {
    colors: {
      primary: '#yourcolor',
      secondary: '#yourcolor',
    }
  }
}
```

### Thêm logo

1. Thêm file `logo.png` vào `/public`
2. Sửa `AdminNavbar.tsx` và `blog/layout.tsx`

### Thay đổi font

Sửa `app/layout.tsx`:

```typescript
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["vietnamese"] });
```

## 🚢 Deploy lên Production

### Deploy với Vercel

1. Push code lên GitHub
2. Import project vào [Vercel](https://vercel.com)
3. Set environment variables (copy từ `.env.local`)
4. Deploy!

### Post-deployment

1. Update `NEXT_PUBLIC_SITE_URL` với domain thật
2. Configure custom domain
3. Setup monitoring
4. Test production login

## 🔧 Maintenance Commands

```bash
# View database với Drizzle Studio
pnpm db:studio

# Generate new migration
pnpm db:generate

# Run migration
pnpm db:migrate

# Lint code
pnpm lint

# Build for production
pnpm build
```

## 📚 Documentation

- **Full Documentation**: [docs/CMS_README.md](./CMS_README.md)
- **Migration Guide**: [docs/MIGRATION_GUIDE.md](./MIGRATION_GUIDE.md)
- **API Reference**: Xem trong CMS_README.md

## ❓ Troubleshooting

### Không đăng nhập được

- Check Supabase credentials trong `.env.local`
- Verify user đã được tạo trong `profiles` và `members`
- Clear cookies và thử lại

### Database error

- Check `DATABASE_URL` format
- Verify đã chạy `pnpm db:push`
- Check Supabase database có online không

### Build error

```bash
rm -rf .next
pnpm build
```

## 🆘 Cần giúp đỡ?

1. Check [CMS_README.md](./CMS_README.md) để biết chi tiết
2. Review code comments
3. Check console logs cho errors

## 🎉 Hoàn thành!

Bạn đã setup xong hệ thống CMS/Blog cho POMY PETSHOP!

**Next steps:**

- [ ] Tạo thêm categories và tags
- [ ] Upload logo và images
- [ ] Tùy chỉnh design
- [ ] Viết nội dung blog
- [ ] Setup custom domain
- [ ] Integrate analytics

Happy blogging! 🐾
