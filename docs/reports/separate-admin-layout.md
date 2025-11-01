# Separate AdminLayout from PublicLayout

Date: 2025-10-28

Branch: feature/separate-admin-layout (from testing)

## Summary

- Isolated Admin layout from Public layout.
- Ensured all admin routes (`/admin/*`) render with `AdminLayout` and are protected via middleware with Supabase session.
- Public layout (`src/app/layout.tsx`) renders only public header/footer and SEO public schemas.
- Standardized admin login route to `/admin/login` with a wrapper page.
- Verified blog routes use the public layout and kept container/style consistent with other public pages.

## Changes

- Updated `src/lib/supabase/middleware.ts` to redirect unauthenticated admin access to `/admin/login`.
- Updated `src/app/admin/layout.tsx` to redirect to `/admin/login` when unauthenticated.
- Added `src/app/admin/login/page.tsx` as a thin wrapper around the existing auth login page to place login under the admin route group.
- No changes required to `src/app/layout.tsx` (already public-only) and blog pages' routing (already under `/blog`).

## Auth & Middleware

- Middleware `middleware.ts` continues to delegate to `updateSession`.
- `updateSession` now enforces auth for any path starting with `/admin` and redirects to `/admin/login` when `supabase.auth.getUser()` is falsy.

## Testing

Executed locally on Windows (PowerShell):

- pnpm install — PASS
- pnpm lint — PASS (no warnings/errors)
- pnpm exec tsc --noEmit — PASS
- pnpm build — PASS (Next.js 15.1.0)

## Impact

- Routes: `/admin/*` protected and consistently rendered with admin UI; login now at `/admin/login`.
- Public: No behavioral changes; SEO JSON-LD remains under public layout only.
- Styles: No breaking style changes; public/blog pages continue using existing containers.

## How to verify

1. Open `/admin` while not signed in → expect redirect to `/admin/login`.
2. Sign in at `/admin/login` → expect redirect to `/admin` dashboard.
3. Navigate public pages: `/`, `/about`, `/blog` → verify public header/footer and SEO schemas.
4. Visit `/blog/[slug]` for a published post → renders Article content and JSON-LD.

## CI/CD

- After PR creation, preview deployment should be created by the hosting provider (e.g., Vercel) on the PR. No production changes expected until merge.

## Notes / Follow-ups

- If you prefer keeping `/auth/login` as canonical login, add a redirect from `/auth/login` → `/admin/login` or keep both for convenience.
- Consider extracting a shared AdminTopbar if `AdminNavbar` grows beyond top-nav concerns.
