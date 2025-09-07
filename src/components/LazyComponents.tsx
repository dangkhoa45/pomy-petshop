import dynamic from 'next/dynamic';
import { Suspense } from 'react';

// Lazy load heavy components
export const LazyGallerySection = dynamic(() => import('./GallerySection'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg"></div>,
  ssr: false,
});

export const LazyTestimonialSection = dynamic(() => import('./TestimonialSection'), {
  loading: () => <div className="h-64 bg-gray-100 animate-pulse rounded-lg"></div>,
  ssr: true,
});

export const LazyContactForm = dynamic(() => import('./ContactForm'), {
  loading: () => <div className="h-96 bg-gray-100 animate-pulse rounded-lg"></div>,
  ssr: true,
});

// Loading skeleton component
export const ContentSkeleton = ({ height = "h-64" }: { height?: string }) => (
  <div className={`${height} bg-gray-200 animate-pulse rounded-lg flex items-center justify-center`}>
    <div className="text-gray-400">Đang tải...</div>
  </div>
);

// Wrap components with Suspense for better UX
export const SuspenseWrapper = ({ 
  children, 
  fallback 
}: { 
  children: React.ReactNode;
  fallback?: React.ReactNode;
}) => (
  <Suspense fallback={fallback || <ContentSkeleton />}>
    {children}
  </Suspense>
);
