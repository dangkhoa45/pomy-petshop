# Design System - Pomy Petshop

## Overview
Design system cho Pomy Petshop được xây dựng với mục tiêu tạo ra trải nghiệm người dùng nhất quán, thân thiện và chuyên nghiệp cho cửa hàng thú cưng.

## Brand Identity

### Brand Values
- **Yêu thương**: Tình yêu dành cho thú cưng
- **Chuyên nghiệp**: Dịch vụ chất lượng cao
- **Đáng tin cậy**: An toàn và uy tín
- **Thân thiện**: Gần gũi với khách hàng

### Brand Personality
- Vui tươi và năng động
- Chăm sóc và tỉ mỉ
- Hiện đại nhưng gần gũi
- Chuyên nghiệp và đáng tin cậy

## Color Palette

### Primary Colors
```css
--color-primary: #ec4899;        /* Pink 500 - Bright Pink */
--color-primary-hover: #db2777;  /* Pink 600 - Darker Pink */
--color-primary-light: #f9a8d4;  /* Pink 300 - Light Pink */
--color-primary-lighter: #fce7f3; /* Pink 100 - Very Light Pink */
```

### Secondary Colors
```css
--color-secondary: #10b981;      /* Green 500 - Emerald */
--color-secondary-hover: #059669; /* Green 600 - Darker Emerald */
--color-secondary-light: #6ee7b7; /* Green 300 - Light Emerald */
--color-secondary-lighter: #d1fae5; /* Green 100 - Very Light Green */
```

### Neutral Colors
```css
--color-background: #f9fafb;     /* Gray 50 - Background */
--color-text: #374151;           /* Gray 700 - Primary Text */
--color-text-light: #6b7280;     /* Gray 500 - Secondary Text */
--color-text-lighter: #9ca3af;   /* Gray 400 - Tertiary Text */
--color-border: #e5e7eb;         /* Gray 200 - Borders */
--color-white: #ffffff;          /* Pure White */
```

### Semantic Colors
```css
--color-success: #10b981;        /* Green 500 */
--color-warning: #f59e0b;        /* Amber 500 */
--color-error: #ef4444;          /* Red 500 */
--color-info: #3b82f6;           /* Blue 500 */
```

### Usage Guidelines

#### Primary Pink (#ec4899)
- **CTA Buttons**: Main action buttons
- **Links**: Navigation và text links
- **Highlights**: Important information
- **Branding**: Logo accents và brand elements

#### Secondary Green (#10b981)
- **Success States**: Completed actions
- **Nature Elements**: Pet-related content
- **Accent Color**: Supporting elements
- **Category Tags**: Service categorization

#### Gradients
```css
/* Main gradient - used for backgrounds */
background: linear-gradient(to right, #d1fae5, #fce7f3); /* green-100 to pink-200 */

/* Header gradient */
background: linear-gradient(to right, #d1fae5, #f9a8d4); /* green-100 to pink-300 */

/* Card gradient */
background: linear-gradient(to bottom left, #ffffff, #fce7f3); /* white to pink-200 */
```

## Typography

### Font Families
```css
--font-heading: "Gluten", "Arial", sans-serif;
--font-body: "Gluten", "Roboto", sans-serif;
--font-secondary: "Pacifico", "Comic Sans MS", cursive;
```

### Font Sizes & Hierarchy

#### Desktop
```css
/* Headings */
h1: 3rem (48px) - font-weight: 700 (bold)
h2: 2.25rem (36px) - font-weight: 600 (semibold)
h3: 1.875rem (30px) - font-weight: 500 (medium)
h4: 1.5rem (24px) - font-weight: 500 (medium)
h5: 1.25rem (20px) - font-weight: 500 (medium)
h6: 1.125rem (18px) - font-weight: 500 (medium)

/* Body Text */
body-large: 1.125rem (18px) - line-height: 1.75
body-base: 1rem (16px) - line-height: 1.5
body-small: 0.875rem (14px) - line-height: 1.25
body-xs: 0.75rem (12px) - line-height: 1.25
```

#### Mobile
```css
/* Responsive adjustments */
h1: 2.5rem (40px)
h2: 2rem (32px)
h3: 1.5rem (24px)
body-base: 0.875rem (14px)
```

### Typography Usage

#### Headings
- **H1**: Page titles, hero sections
- **H2**: Section headings
- **H3**: Subsection headings
- **H4-H6**: Component titles, card headers

#### Body Text
- **Large**: Important descriptions, introductory text
- **Base**: Main content, paragraphs
- **Small**: Supporting text, captions
- **XS**: Labels, tags, metadata

## Spacing System

### Scale
```css
/* Tailwind spacing scale */
0: 0px
1: 0.25rem (4px)
2: 0.5rem (8px)
3: 0.75rem (12px)
4: 1rem (16px)
5: 1.25rem (20px)
6: 1.5rem (24px)
8: 2rem (32px)
10: 2.5rem (40px)
12: 3rem (48px)
16: 4rem (64px)
20: 5rem (80px)
24: 6rem (96px)
```

### Usage Guidelines

#### Component Spacing
- **Button padding**: py-3 px-8 (12px 32px)
- **Card padding**: p-6 (24px) hoặc p-8 (32px)
- **Section padding**: py-12 px-5 (48px 20px)

#### Layout Spacing
- **Section gaps**: space-y-16 (64px)
- **Component gaps**: space-y-8 (32px)
- **Element gaps**: space-y-4 (16px)

## Components

### Buttons

#### Primary Button
```css
.btn-primary {
  background: #ec4899;
  color: white;
  padding: 0.75rem 2rem;
  border-radius: 9999px; /* full rounded */
  font-weight: 600;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.btn-primary:hover {
  background: #db2777;
  transform: scale(1.05);
}
```

#### Secondary Button
```css
.btn-secondary {
  background: white;
  color: #ec4899;
  border: 2px solid #ec4899;
  padding: 0.75rem 2rem;
  border-radius: 9999px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn-secondary:hover {
  background: #fce7f3;
  transform: scale(1.05);
}
```

### Cards

#### Service Card
```css
.service-card {
  background: linear-gradient(to bottom left, white, #fce7f3);
  padding: 1.5rem;
  border-radius: 0.5rem;
  height: 358px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
}

.service-card:hover {
  transform: scale(1.05);
  filter: brightness(1.2);
}
```

#### Team Member Card
```css
.team-card {
  padding: 1rem;
  display: flex;
  align-items: center;
  text-align: left;
}

.team-card img {
  width: 12rem;
  height: 12rem;
  border-radius: 0.5rem;
  object-fit: cover;
}
```

### Form Elements

#### Input Fields
```css
.form-input {
  width: 100%;
  padding: 0.75rem 1rem;
  border: 2px solid #e5e7eb;
  border-radius: 0.375rem;
  font-size: 1rem;
  transition: border-color 0.2s ease;
}

.form-input:focus {
  outline: none;
  border-color: #ec4899;
  box-shadow: 0 0 0 3px rgba(236, 72, 153, 0.1);
}
```

#### Labels
```css
.form-label {
  display: block;
  font-size: 0.875rem;
  font-weight: 500;
  color: #374151;
  margin-bottom: 0.5rem;
}
```

### Navigation

#### Main Navigation
```css
.nav-link {
  color: #ec4899;
  font-weight: 700;
  position: relative;
  transition: all 0.3s ease;
  transform-origin: center;
}

.nav-link:hover {
  border-bottom: 4px solid #ec4899;
  transform: scale(1.1);
}

.nav-link.active {
  color: #db2777;
  border-bottom: 4px solid #db2777;
  font-weight: 700;
}
```

## Layout System

### Grid System
```css
/* Container */
.container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1.25rem;
}

/* Responsive grid */
.grid-responsive {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 768px) {
  .grid-responsive {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .grid-responsive {
    grid-template-columns: repeat(3, 1fr);
  }
}
```

### Breakpoints
```css
/* Tailwind breakpoints */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
```

## Animation & Motion

### Framer Motion Variants

#### Text Animations
```typescript
const textVariant = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, delay: 0.2 },
  },
};
```

#### Button Animations
```typescript
const buttonVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: 0.8 },
  },
};
```

#### Card Animations
```typescript
const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};
```

### Hover Effects
```css
/* Scale animation */
.hover-scale:hover {
  transform: scale(1.05);
  transition: transform 0.3s ease;
}

/* Glow effect */
.hover-glow:hover {
  box-shadow: 0px 10px 20px rgba(236, 72, 153, 0.2);
}

/* Brightness filter */
.hover-brighten:hover {
  filter: brightness(1.2);
}
```

## Iconography

### Icon Library
- **React Icons**: react-icons/fa (Font Awesome)
- **Custom Icons**: SVG icons trong /public/icons/

### Usage Guidelines

#### Sizes
```css
/* Standard sizes */
sm: 1rem (16px)
md: 1.25rem (20px)
lg: 1.5rem (24px)
xl: 2rem (32px)
```

#### Common Icons
- **Phone**: FaPhoneAlt
- **Email**: FaEnvelope
- **Facebook**: FaFacebook
- **Home**: FaHome
- **Star**: FaStar

## Image Guidelines

### Optimization
- **Format**: WebP preferably, fallback to JPG
- **Quality**: 80% for production
- **Loading**: Lazy loading except hero images
- **Responsive**: Multiple sizes for different screens

### Dimensions
```css
/* Logo */
Desktop: 140x140px
Mobile: 85x85px

/* Hero Images */
Desktop: 512x512px
Mobile: 300x300px

/* Service Cards */
Standard: 720x400px

/* Team Photos */
Standard: 200x200px (square)
```

## Accessibility

### Color Contrast
- **AA Standard**: Minimum 4.5:1 ratio
- **AAA Standard**: Preferred 7:1 ratio
- **Large Text**: Minimum 3:1 ratio

### Focus States
```css
.focus-visible {
  outline: 2px solid #ec4899;
  outline-offset: 2px;
}
```

### ARIA Labels
- **Navigation**: `aria-label="Main navigation"`
- **Buttons**: Descriptive aria-labels
- **Images**: Comprehensive alt text

## Responsive Design

### Mobile-First Approach
```css
/* Base styles for mobile */
.component {
  /* Mobile styles */
}

/* Tablet và up */
@media (min-width: 768px) {
  .component {
    /* Tablet styles */
  }
}

/* Desktop và up */
@media (min-width: 1024px) {
  .component {
    /* Desktop styles */
  }
}
```

### Component Behavior
- **Navigation**: Collapsible menu on mobile
- **Grid**: Single column on mobile, multi-column on desktop
- **Images**: Responsive sizing với aspect ratio maintained
- **Typography**: Scaled font sizes for readability

## Performance Considerations

### CSS Optimization
- **Tailwind Purge**: Remove unused styles
- **Critical CSS**: Inline critical styles
- **Compression**: Minify và compress CSS

### Animation Performance
- **GPU Acceleration**: Use transform properties
- **Reduced Motion**: Respect user preferences
- **Throttling**: Limit expensive animations

## Brand Applications

### Logo Usage
- **Minimum Size**: 60px width
- **Clear Space**: Equal to logo height
- **Backgrounds**: Ensure sufficient contrast

### Color Applications
- **Primary**: CTA buttons, links, highlights
- **Secondary**: Success states, nature elements
- **Neutral**: Text, backgrounds, borders

### Voice & Tone
- **Friendly**: Welcoming và approachable
- **Professional**: Competent và trustworthy
- **Caring**: Empathetic và understanding
- **Local**: Community-focused và personal
