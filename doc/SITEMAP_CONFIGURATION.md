# Sitemap Configuration Documentation

## Overview
This document describes the refactored sitemap configuration for the POMY PETSHOP website. The configuration has been updated to provide better SEO optimization, error-free generation, and comprehensive coverage of all site pages.

## Files Modified/Created

### 1. `next-sitemap.config.ts`
- **Purpose**: Main configuration file for sitemap generation
- **Changes**: 
  - Converted from JavaScript to TypeScript for better type safety
  - Added custom priority and changefreq for different page types
  - Enhanced robots.txt generation with proper disallow rules
  - Added exclusion patterns for unnecessary routes
  - Implemented custom transform function for better control

### 2. `src/app/layout.tsx`
- **Changes**: Added `metadataBase` to fix warning about resolving social images
- **Purpose**: Eliminates the warning about missing metadataBase in metadata export

### 3. Page-specific `layout.tsx` files
- **Files**: `src/app/about/layout.tsx`, `src/app/services/layout.tsx`, `src/app/contact/layout.tsx`
- **Changes**: 
  - Added `metadataBase` for consistent metadata resolution
  - Updated canonical URLs to be page-specific
  - Enhanced SEO metadata for each page

### 4. `src/app/sitemap.ts` (New)
- **Purpose**: Dynamic sitemap generation using Next.js 13+ built-in functionality
- **Benefits**: Provides alternative to next-sitemap package if needed

### 5. `src/app/robots.ts` (New)
- **Purpose**: Dynamic robots.txt generation using Next.js 13+ functionality
- **Benefits**: Provides programmatic control over robots directives

### 6. `src/shared/schema.ts` (New)
- **Purpose**: Structured data schemas for SEO enhancement
- **Contents**: Organization and business schemas for better search engine understanding

### 7. `src/components/SEO.tsx` (New)
- **Purpose**: Reusable SEO component for consistent metadata across pages
- **Features**: 
  - Open Graph and Twitter Card support
  - Structured data injection
  - Geographical metadata
  - Language and locale specifications

### 8. `package.json`
- **Changes**: 
  - Updated postbuild script to use TypeScript config
  - Added new sitemap script for manual generation

## Configuration Features

### Priority and Change Frequency
- **Homepage (/)**: Priority 1.0, Daily updates
- **Services (/services)**: Priority 0.9, Weekly updates
- **About (/about)**: Priority 0.8, Monthly updates
- **Contact (/contact)**: Priority 0.7, Monthly updates

### Excluded Routes
- `/api/*` - API routes
- `/_next/*` - Next.js internal routes
- `/admin/*` - Admin panel routes
- `/_vercel` - Vercel deployment routes
- `/404`, `/500` - Error pages

### Robots.txt Configuration
- **Allowed**: All content from root
- **Disallowed**: API routes, internal Next.js routes, admin areas
- **Sitemap reference**: Points to main sitemap.xml

## Usage

### Build-time Generation
```bash
npm run build
# Automatically generates sitemap after build
```

### Manual Generation
```bash
npm run sitemap
# Manually generates sitemap using the TypeScript config
```

### Development
The sitemap will be automatically generated during the build process and updated with the latest timestamps and page information.

## Benefits of Refactoring

1. **Error-free Generation**: Eliminated all warnings and errors in sitemap generation
2. **Better SEO**: Custom priorities and change frequencies for different page types
3. **Type Safety**: TypeScript configuration prevents configuration errors
4. **Comprehensive Coverage**: All pages properly included with appropriate metadata
5. **Enhanced Robots.txt**: Better control over crawler access
6. **Future-proof**: Both next-sitemap and native Next.js sitemap support
7. **Structured Data**: Enhanced search engine understanding with schema markup

## Monitoring and Maintenance

- Sitemap is automatically regenerated on each build
- Check `/sitemap.xml` and `/sitemap-0.xml` after deployment
- Verify robots.txt is properly configured at `/robots.txt`
- Monitor search console for any sitemap-related issues

## Environment Variables

The configuration supports an optional `SITE_URL` environment variable:
```bash
SITE_URL=https://pomypetshopsoctrang.com
```

If not set, it defaults to the production URL.
