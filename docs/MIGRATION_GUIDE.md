# Database Migration Guide

## Quick Start

### 1. Setup Environment

Copy `.env.example` to `.env.local` and fill in your database credentials:

```bash
cp .env.example .env.local
```

### 2. Generate Migration

```bash
pnpm db:generate
```

This creates migration files in `drizzle/migrations/`.

### 3. Run Migration

```bash
pnpm db:migrate
```

Or push schema directly (for development):

```bash
pnpm db:push
```

### 4. Seed Initial Data

```bash
pnpm db:seed
```

This creates default categories and tags.

## Manual Setup

If you need to setup database manually:

### Create Tables

```sql
-- Create enums
CREATE TYPE role AS ENUM ('admin', 'editor', 'author', 'viewer');
CREATE TYPE post_status AS ENUM ('draft', 'published', 'archived');

-- Create profiles table
CREATE TABLE profiles (
  id UUID PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  full_name VARCHAR(255),
  avatar_url TEXT,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- Create members table
CREATE TABLE members (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  profile_id UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  role role DEFAULT 'author' NOT NULL,
  bio TEXT,
  is_active BOOLEAN DEFAULT true NOT NULL,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW() NOT NULL,
  UNIQUE(profile_id)
);

-- Create categories table
CREATE TABLE categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(100) NOT NULL,
  slug VARCHAR(100) NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- Create tags table
CREATE TABLE tags (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name VARCHAR(50) NOT NULL,
  slug VARCHAR(50) NOT NULL UNIQUE,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- Create posts table
CREATE TABLE posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  excerpt TEXT,
  content_markdown TEXT NOT NULL,
  content_html TEXT,
  featured_image TEXT,
  status post_status DEFAULT 'draft' NOT NULL,
  published_at TIMESTAMP,
  seo_title VARCHAR(60),
  seo_description VARCHAR(160),
  og_image TEXT,
  author_id UUID REFERENCES profiles(id) ON DELETE SET NULL,
  view_count INTEGER DEFAULT 0 NOT NULL,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
  updated_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- Create junction tables
CREATE TABLE post_categories (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  category_id UUID NOT NULL REFERENCES categories(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
  UNIQUE(post_id, category_id)
);

CREATE TABLE post_tags (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  tag_id UUID NOT NULL REFERENCES tags(id) ON DELETE CASCADE,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL,
  UNIQUE(post_id, tag_id)
);

-- Create revisions table
CREATE TABLE post_revisions (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  post_id UUID NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  title VARCHAR(255) NOT NULL,
  content_markdown TEXT NOT NULL,
  created_by UUID REFERENCES profiles(id) ON DELETE SET NULL,
  created_at TIMESTAMP DEFAULT NOW() NOT NULL
);

-- Create indexes
CREATE INDEX profiles_email_idx ON profiles(email);
CREATE INDEX members_profile_id_idx ON members(profile_id);
CREATE INDEX members_role_idx ON members(role);
CREATE INDEX categories_slug_idx ON categories(slug);
CREATE INDEX tags_slug_idx ON tags(slug);
CREATE INDEX posts_slug_idx ON posts(slug);
CREATE INDEX posts_status_idx ON posts(status);
CREATE INDEX posts_author_id_idx ON posts(author_id);
CREATE INDEX posts_published_at_idx ON posts(published_at);
CREATE INDEX post_categories_post_id_idx ON post_categories(post_id);
CREATE INDEX post_categories_category_id_idx ON post_categories(category_id);
CREATE INDEX post_tags_post_id_idx ON post_tags(post_id);
CREATE INDEX post_tags_tag_id_idx ON post_tags(tag_id);
CREATE INDEX post_revisions_post_id_idx ON post_revisions(post_id);
CREATE INDEX post_revisions_created_at_idx ON post_revisions(created_at);
```

### Seed Data

```sql
-- Insert default categories
INSERT INTO categories (name, slug, description) VALUES
  ('Chăm sóc thú cưng', 'cham-soc-thu-cung', 'Hướng dẫn chăm sóc thú cưng toàn diện'),
  ('Dinh dưỡng', 'dinh-duong', 'Kiến thức về dinh dưỡng cho thú cưng'),
  ('Sức khỏe', 'suc-khoe', 'Thông tin về sức khỏe và bệnh tật'),
  ('Huấn luyện', 'huan-luyen', 'Mẹo và kỹ thuật huấn luyện thú cưng'),
  ('Làm đẹp', 'lam-dep', 'Dịch vụ spa và làm đẹp cho thú cưng');

-- Insert default tags
INSERT INTO tags (name, slug) VALUES
  ('chó', 'cho'),
  ('mèo', 'meo'),
  ('thỏ', 'tho'),
  ('hamster', 'hamster'),
  ('chăm sóc', 'cham-soc'),
  ('tắm rửa', 'tam-rua'),
  ('cắt tỉa', 'cat-tia'),
  ('khám bệnh', 'kham-benh'),
  ('tiêm phòng', 'tiem-phong'),
  ('thức ăn', 'thuc-an');
```

## Troubleshooting

### Connection Error

Check your `DATABASE_URL` format:

```
postgresql://username:password@host:port/database
```

For Supabase:

```
postgresql://postgres:[PASSWORD]@db.[PROJECT_REF].supabase.co:5432/postgres
```

### Permission Denied

Make sure your database user has necessary permissions:

```sql
GRANT ALL PRIVILEGES ON DATABASE your_database TO your_user;
```

### Migration Failed

Reset and try again:

```bash
# Drop all tables (⚠️ WARNING: This deletes all data)
pnpm db:push --force

# Or manually drop tables and recreate
```

## Drizzle Studio

View and edit your database with Drizzle Studio:

```bash
pnpm db:studio
```

Opens at `https://local.drizzle.studio`
