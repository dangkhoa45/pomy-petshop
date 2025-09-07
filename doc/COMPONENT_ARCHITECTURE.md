# Component Architecture Documentation - Pomy Petshop

## Component Hierarchy

### Layout Components
```
├── RootLayout (app/layout.tsx)
│   ├── Header
│   ├── Main Content (children)
│   └── Footer
```

### Page Components
```
├── HomePage (app/page.tsx)
│   ├── HeroSection
│   ├── AboutSection
│   ├── ServiceSection
│   ├── QuestionSection
│   ├── StatisticSection
│   ├── ContactForm
│   ├── TestimonialSection
│   └── GallerySection
│
├── AboutPage (app/about/page.tsx)
│   ├── AboutSecondary
│   ├── ServiceSection
│   ├── StatisticSecondary
│   ├── QuestionSection
│   └── TestimonialSection
│
├── ServicesPage (app/services/page.tsx)
│   ├── FeatureService
│   ├── ServiceList
│   ├── PricingServiceSPA
│   ├── PricingServiceHotel
│   ├── QuestionService
│   └── CTA-SPA
│
└── ContactPage (app/contact/page.tsx)
    ├── ContactSection
    └── OurTeamSection
```

## Component Specifications

### Header Component

#### Props Interface
```typescript
// No props - self-contained component
interface HeaderProps {}
```

#### State Management
```typescript
const [isScrolled, setIsScrolled] = useState<boolean>(false);
const pathname = usePathname();
```

#### Key Features
- **Sticky Navigation**: Responds to scroll position
- **Active Link Detection**: Highlights current page
- **Responsive Logo**: Size changes on scroll
- **Contact Information**: Phone and email integration
- **Social Media Links**: Facebook integration

#### Animation Variants
```typescript
const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, staggerChildren: 0.2 },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
```

### HeroSection Component

#### Props Interface
```typescript
interface HeroImage {
  id: number;
  image: string;
  alt: string;
}
```

#### Data Structure
```typescript
const HeroImages: HeroImage[] = [
  {
    id: 1,
    image: "/images/cua-hang-pomy-petshop-1.jpg",
    alt: "cat-tia-ve-sinh-khach-san-thu-cung",
  },
  // ... additional images
];
```

#### Key Features
- **Image Slider**: Auto-playing carousel với Swiper
- **Dual CTA Buttons**: Primary và secondary actions
- **Responsive Typography**: Mobile-optimized text sizes
- **Performance Optimization**: Priority loading for first image

#### Animation Patterns
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

### ServiceSection Component

#### Props Interface
```typescript
interface Service {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  image: string;
}
```

#### State Management
```typescript
const [selectedServiceIndex, setSelectedServiceIndex] = useState<number | null>(null);
```

#### Key Features
- **Service Grid**: Responsive grid layout
- **Modal Popup**: Detailed service view
- **Image Optimization**: Lazy loading và quality control
- **Interactive Cards**: Hover effects và click handlers

### AboutSection Component

#### Animation Variants
```typescript
const textVariant = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};
```

#### Key Features
- **Split Layout**: Text và image columns
- **CTA Integration**: Route to about page
- **Gradient Background**: Visual depth
- **Scroll Animations**: Intersection Observer based

### ContactForm Component

#### Form Structure
```typescript
interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}
```

#### Validation Logic
```typescript
const validateForm = (data: FormData): boolean => {
  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Phone validation
  const phoneRegex = /^[0-9]{10,11}$/;
  
  return (
    data.name.trim() !== '' &&
    emailRegex.test(data.email) &&
    phoneRegex.test(data.phone) &&
    data.service !== '' &&
    data.message.trim() !== ''
  );
};
```

#### Key Features
- **Form Validation**: Client-side validation
- **Service Selection**: Dropdown với predefined options
- **Responsive Design**: Mobile-optimized layout
- **Accessibility**: Proper labels và ARIA attributes

### GallerySection Component

#### Image Grid
```typescript
interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: 'shop' | 'service' | 'hotel';
}
```

#### Key Features
- **Masonry Layout**: Responsive image grid
- **Lightbox Modal**: Full-size image viewing
- **Category Filtering**: Filter by image type
- **Lazy Loading**: Performance optimization

### TestimonialSection Component

#### Data Structure
```typescript
interface Testimonial {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  comment: string;
  service: string;
  date: string;
}
```

#### Key Features
- **Carousel Display**: Rotating testimonials
- **Star Ratings**: Visual rating display
- **Social Proof**: Customer validation
- **Auto-rotation**: Timed carousel progression

### StatisticSection Component

#### Metrics Structure
```typescript
interface Statistic {
  id: number;
  value: number;
  label: string;
  icon: ReactElement;
  suffix?: string;
}
```

#### Counter Animation
```typescript
const useCountUp = (end: number, duration: number = 2000) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      setCount(prev => {
        if (prev >= end) {
          clearInterval(timer);
          return end;
        }
        return Math.min(prev + increment, end);
      });
    }, 16);
    
    return () => clearInterval(timer);
  }, [end, duration]);
  
  return Math.floor(count);
};
```

### Footer Component

#### Social Integration
```typescript
useEffect(() => {
  const fbScript = document.createElement("script");
  fbScript.async = true;
  fbScript.defer = true;
  fbScript.crossOrigin = "anonymous";
  fbScript.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v15.0";
  document.body.appendChild(fbScript);

  return () => {
    document.body.removeChild(fbScript);
  };
}, []);
```

#### Key Features
- **Company Information**: Address, phone, email
- **Social Media Integration**: Facebook embed
- **Quick Links**: Navigation shortcuts
- **Copyright Information**: Legal footer

## Shared Patterns

### Animation Hooks

#### useScrollAnimation
```typescript
const useScrollAnimation = () => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};
```

### Common Variants

#### Container Variants
```typescript
const containerVariant = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};
```

#### Card Variants
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

### Image Optimization Pattern

```typescript
<Image
  src={imageSrc}
  alt={imageAlt}
  width={width}
  height={height}
  priority={isPriority}
  quality={80}
  loading={isPriority ? undefined : "lazy"}
  className="object-cover"
/>
```

## Security Patterns

### Developer Tools Prevention
```typescript
useEffect(() => {
  const handleContextMenu = (event: MouseEvent) => event.preventDefault();
  const handleKeyDown = (event: KeyboardEvent) => {
    if (
      event.key === "F12" ||
      (event.ctrlKey && event.shiftKey && event.key === "I") ||
      (event.ctrlKey && event.shiftKey && event.key === "C") ||
      (event.ctrlKey && event.key === "U")
    ) {
      event.preventDefault();
    }
  };

  document.addEventListener("contextmenu", handleContextMenu);
  document.addEventListener("keydown", handleKeyDown);

  return () => {
    document.removeEventListener("contextmenu", handleContextMenu);
    document.removeEventListener("keydown", handleKeyDown);
  };
}, []);
```

## Performance Patterns

### Lazy Loading Implementation
```typescript
const [isLoaded, setIsLoaded] = useState(false);

const handleImageLoad = useCallback(() => {
  setIsLoaded(true);
}, []);

return (
  <div className={`transition-opacity duration-300 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
    <Image
      onLoad={handleImageLoad}
      // ... other props
    />
  </div>
);
```

### Debounced Scroll Handler
```typescript
const useDebounceScroll = (callback: () => void, delay: number) => {
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const handleScroll = () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      timeoutRef.current = setTimeout(callback, delay);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [callback, delay]);
};
```

## Error Handling Patterns

### Image Fallback
```typescript
const [imageError, setImageError] = useState(false);

const handleImageError = useCallback(() => {
  setImageError(true);
}, []);

return (
  <>
    {!imageError ? (
      <Image
        src={imageSrc}
        alt={imageAlt}
        onError={handleImageError}
        // ... other props
      />
    ) : (
      <div className="bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500">Image not available</span>
      </div>
    )}
  </>
);
```

### Form Error Handling
```typescript
const [errors, setErrors] = useState<Record<string, string>>({});

const validateField = (name: string, value: string): string => {
  switch (name) {
    case 'email':
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) 
        ? '' 
        : 'Email không hợp lệ';
    case 'phone':
      return /^[0-9]{10,11}$/.test(value) 
        ? '' 
        : 'Số điện thoại không hợp lệ';
    default:
      return value.trim() ? '' : 'Trường này không được để trống';
  }
};
```

## Testing Patterns

### Component Testing
```typescript
// Example test structure
describe('HeroSection', () => {
  it('renders hero content correctly', () => {
    render(<HeroSection />);
    expect(screen.getByText('Dịch Vụ Chăm Sóc')).toBeInTheDocument();
  });

  it('handles CTA button clicks', () => {
    const mockRouter = { push: jest.fn() };
    jest.mock('next/navigation', () => ({
      useRouter: () => mockRouter,
    }));

    render(<HeroSection />);
    fireEvent.click(screen.getByText('Đặt Lịch Ngay'));
    expect(mockRouter.push).toHaveBeenCalledWith('/contact');
  });
});
```

## Accessibility Patterns

### ARIA Implementation
```typescript
<section 
  role="main" 
  aria-labelledby="hero-title"
  aria-describedby="hero-description"
>
  <h1 id="hero-title">Dịch Vụ Chăm Sóc Thú Cưng</h1>
  <p id="hero-description">Chuyên nghiệp và đáng tin cậy</p>
</section>
```

### Keyboard Navigation
```typescript
const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault();
    handleClick();
  }
};

return (
  <div
    role="button"
    tabIndex={0}
    onKeyDown={handleKeyDown}
    onClick={handleClick}
    className="focus:outline-none focus:ring-2 focus:ring-pink-500"
  >
    {content}
  </div>
);
```
