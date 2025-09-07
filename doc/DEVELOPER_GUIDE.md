# Developer Guide - Pomy Petshop

## Getting Started

### Prerequisites
- **Node.js**: Version 18.x hoặc cao hơn
- **pnpm**: Package manager (recommended)
- **Git**: Version control
- **VS Code**: Recommended IDE với extensions

### Required VS Code Extensions
```json
{
  "recommendations": [
    "bradlc.vscode-tailwindcss",
    "esbenp.prettier-vscode",
    "ms-vscode.vscode-typescript-next",
    "ms-vscode.vscode-eslint",
    "formulahendry.auto-rename-tag",
    "christian-kohler.path-intellisense",
    "ms-vscode.vscode-json"
  ]
}
```

### Environment Setup

#### 1. Clone Repository
```bash
git clone https://github.com/dangkhoa45/pomy-petshop.git
cd pomy-petshop
```

#### 2. Install Dependencies
```bash
# Using pnpm (recommended)
pnpm install

# Using npm
npm install

# Using yarn
yarn install
```

#### 3. Environment Variables
Tạo file `.env.local` trong root directory:
```env
# Next.js
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Analytics (optional)
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id

# Google Services (future implementation)
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_maps_api_key
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your_ga_id

# Email Service (future implementation)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password

# Database (future implementation)
DATABASE_URL=postgresql://username:password@localhost:5432/pomy_petshop
```

#### 4. Start Development Server
```bash
pnpm dev
```

Mở [http://localhost:3000](http://localhost:3000) để xem ứng dụng.

## Project Structure

### File Organization
```
pomy-petshop/
├── .next/                 # Next.js build output (auto-generated)
├── .git/                  # Git repository
├── doc/                   # Documentation files
├── public/                # Static assets
│   ├── images/           # Image assets
│   ├── icons/            # Custom icons
│   ├── favicon.ico       # Site favicon
│   ├── robots.txt        # Search engine instructions
│   └── sitemap.xml       # Site structure
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── about/        # About page
│   │   ├── contact/      # Contact page
│   │   ├── services/     # Services page
│   │   ├── globals.css   # Global styles
│   │   ├── layout.tsx    # Root layout
│   │   └── page.tsx      # Homepage
│   ├── components/       # React components
│   └── shared/           # Shared utilities
├── node_modules/         # Dependencies (auto-generated)
├── package.json          # Project dependencies
├── pnpm-lock.yaml        # Lock file
├── next.config.ts        # Next.js configuration
├── tailwind.config.ts    # Tailwind CSS configuration
├── tsconfig.json         # TypeScript configuration
├── eslint.config.mjs     # ESLint configuration
├── postcss.config.mjs    # PostCSS configuration
└── README.md             # Project README
```

### Component Organization
```
src/components/
├── Layout Components
│   ├── Header.tsx        # Site header với navigation
│   └── Footer.tsx        # Site footer với links
├── Page Sections
│   ├── HeroSection.tsx   # Hero banner
│   ├── AboutSection.tsx  # About content
│   ├── ServiceSection.tsx # Services display
│   ├── ContactForm.tsx   # Contact form
│   ├── GallerySection.tsx # Image gallery
│   ├── TestimonialSection.tsx # Customer reviews
│   └── StatisticSection.tsx # Statistics display
├── Specialized Components
│   ├── AboutSecondary.tsx # About page specific
│   ├── ContactSection.tsx # Contact page specific
│   ├── FeatureSection.tsx # Feature highlights
│   ├── OurTeamSection.tsx # Team display
│   └── Pricing*.tsx      # Pricing components
└── Shared Components
    └── (future implementation)
```

## Development Workflow

### Branch Strategy
```bash
# Main branches
main            # Production ready code
develop         # Development integration

# Feature branches
feature/[name]  # New features
bugfix/[name]   # Bug fixes
hotfix/[name]   # Critical production fixes
```

### Commit Convention
```bash
# Format: type(scope): description
feat(component): add new service card animation
fix(header): resolve mobile navigation issue
docs(readme): update installation instructions
style(global): format CSS according to guidelines
refactor(api): optimize data fetching logic
test(component): add unit tests for contact form
chore(deps): update dependencies to latest versions
```

### Development Process

#### 1. Create Feature Branch
```bash
git checkout -b feature/service-booking-form
```

#### 2. Development Cycle
```bash
# Start development server
pnpm dev

# Make changes
# Test locally
# Commit changes
git add .
git commit -m "feat(booking): add service booking form"

# Push to remote
git push origin feature/service-booking-form
```

#### 3. Pull Request Process
1. Create PR từ feature branch to develop
2. Code review
3. Merge to develop
4. Test on staging
5. Merge to main for production

## Code Standards

### TypeScript Guidelines

#### Type Definitions
```typescript
// Prefer interfaces over types for object shapes
interface User {
  id: string;
  name: string;
  email: string;
}

// Use types for unions và primitives
type Status = 'pending' | 'completed' | 'cancelled';
type Theme = 'light' | 'dark';

// Generic types
interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
}
```

#### Component Props
```typescript
// Always define props interface
interface ButtonProps {
  variant: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
}

// Use default parameters
const Button: React.FC<ButtonProps> = ({
  variant,
  size = 'md',
  disabled = false,
  children,
  onClick,
}) => {
  // Component implementation
};
```

### Component Guidelines

#### Component Structure
```typescript
"use client"  // Add if component uses client-side features

// Imports - grouped và sorted
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

// Interfaces
interface ComponentProps {
  // Props definition
}

// Component implementation
function ComponentName({ prop1, prop2 }: ComponentProps) {
  // State
  const [state, setState] = useState(initialValue);

  // Effects
  useEffect(() => {
    // Side effects
  }, [dependencies]);

  // Event handlers
  const handleClick = () => {
    // Handler logic
  };

  // Render
  return (
    <motion.div>
      {/* JSX content */}
    </motion.div>
  );
}

export default ComponentName;
```

#### Naming Conventions
```typescript
// Components - PascalCase
export default function ServiceCard() {}

// Functions - camelCase
const handleSubmit = () => {};

// Constants - SCREAMING_SNAKE_CASE
const API_ENDPOINTS = {
  USERS: '/api/users',
  SERVICES: '/api/services',
};

// Files
ServiceCard.tsx          // Components
useApiClient.ts          // Custom hooks
constants.ts             // Constants
types.ts                 // Type definitions
```

### CSS/Styling Guidelines

#### Tailwind Classes Organization
```tsx
// Organize classes logically
<div className="
  // Layout
  flex flex-col items-center justify-center
  // Spacing
  p-6 m-4
  // Sizing
  w-full h-64
  // Colors
  bg-white text-gray-900
  // Border
  border border-gray-200 rounded-lg
  // Effects
  shadow-lg hover:shadow-xl
  // Animation
  transition-all duration-300
  // Responsive
  md:flex-row md:p-8
">
```

#### Custom CSS
```css
/* Use CSS variables for consistency */
.custom-component {
  background-color: var(--color-primary);
  font-family: var(--font-heading);
}

/* BEM naming for custom classes */
.service-card {}
.service-card__header {}
.service-card__content {}
.service-card--featured {}
```

## Performance Guidelines

### Image Optimization
```typescript
import Image from 'next/image';

// Always use Next.js Image component
<Image
  src="/images/example.jpg"
  alt="Descriptive alt text"
  width={500}
  height={300}
  priority={isAboveTheFold}  // For critical images
  quality={80}               // Optimize quality
  loading={isAboveTheFold ? undefined : "lazy"}
  placeholder="blur"         // Optional blur placeholder
  blurDataURL="data:image/..."  // Base64 blur
/>
```

### Code Splitting
```typescript
// Dynamic imports for large components
import dynamic from 'next/dynamic';

const HeavyComponent = dynamic(() => import('./HeavyComponent'), {
  loading: () => <p>Loading...</p>,
  ssr: false, // Disable SSR nếu cần thiết
});
```

### Bundle Analysis
```bash
# Analyze bundle size
pnpm build
pnpm analyze  # If analyze script is configured

# Or use Next.js bundle analyzer
npm install --save-dev @next/bundle-analyzer
```

## Testing Guidelines

### Test Structure
```typescript
// Component.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { jest } from '@jest/globals';
import Component from './Component';

describe('Component', () => {
  beforeEach(() => {
    // Setup
  });

  afterEach(() => {
    // Cleanup
  });

  it('should render correctly', () => {
    render(<Component />);
    expect(screen.getByText('Expected Text')).toBeInTheDocument();
  });

  it('should handle user interaction', () => {
    const mockHandler = jest.fn();
    render(<Component onAction={mockHandler} />);
    
    fireEvent.click(screen.getByRole('button'));
    expect(mockHandler).toHaveBeenCalledTimes(1);
  });
});
```

### Testing Commands
```bash
# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests với coverage
pnpm test:coverage

# Run specific test file
pnpm test Component.test.tsx
```

## Build & Deployment

### Build Process
```bash
# Development build
pnpm dev

# Production build
pnpm build

# Start production server locally
pnpm start

# Lint code
pnpm lint

# Type check
pnpm type-check  # If configured
```

### Deployment to Vercel

#### Automatic Deployment
1. Push to `main` branch
2. Vercel automatically builds và deploys
3. Check deployment status trong Vercel dashboard

#### Manual Deployment
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

### Environment Configuration

#### Development
```env
NODE_ENV=development
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

#### Production
```env
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://pomypetshopsoctrang.com
```

## Debugging

### Debug Tools

#### Next.js Debug Mode
```bash
NODE_OPTIONS='--inspect' pnpm dev
```

#### React Developer Tools
- Install React DevTools browser extension
- Inspect component state và props
- Profile performance

#### Network Debugging
```typescript
// Log API calls
const apiCall = async (url: string) => {
  console.log(`API Call: ${url}`);
  const response = await fetch(url);
  console.log(`Response: ${response.status}`);
  return response;
};
```

### Common Issues

#### Build Errors
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
rm -rf node_modules pnpm-lock.yaml
pnpm install

# Type check
pnpm tsc --noEmit
```

#### Styling Issues
```bash
# Regenerate Tailwind CSS
pnpm dev  # Tailwind rebuilds automatically
```

## Contributing

### Code Review Checklist
- [ ] Code follows TypeScript best practices
- [ ] Components are properly typed
- [ ] Responsive design implemented
- [ ] Accessibility standards met
- [ ] Performance optimizations applied
- [ ] Tests written (if applicable)
- [ ] Documentation updated

### Pull Request Template
```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Breaking change
- [ ] Documentation update

## Testing
- [ ] Tested locally
- [ ] Responsive design verified
- [ ] Cross-browser testing completed

## Screenshots
Include screenshots of changes

## Checklist
- [ ] Code follows style guidelines
- [ ] Self-review completed
- [ ] Documentation updated
```

## Resources

### Documentation
- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Framer Motion Documentation](https://www.framer.com/motion/)

### Tools
- [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)
- [React DevTools](https://react.dev/learn/react-developer-tools)
- [Vercel CLI](https://vercel.com/docs/cli)

### Learning Resources
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Next.js Learn Course](https://nextjs.org/learn)
- [React Patterns](https://reactpatterns.com)

## Support

### Getting Help
1. Check existing documentation
2. Search through GitHub issues
3. Create new issue với detailed description
4. Join community discussions

### Contact
- **Email**: tust3000@gmail.com
- **Facebook**: [Pomy Petshop](https://www.facebook.com/PetshopPomy)
- **Phone**: 070 803 9333
