// Error handling utilities
export const createErrorHandler = (componentName: string) => {
  return (error: Error, errorInfo?: Record<string, unknown>) => {
    console.error(`Error in ${componentName}:`, error);
    if (errorInfo) {
      console.error('Error info:', errorInfo);
    }
  };
};

// Safe script removal utility
export const safeRemoveScript = (script: HTMLScriptElement) => {
  try {
    if (document.body.contains(script)) {
      document.body.removeChild(script);
    }
  } catch (error) {
    console.warn('Failed to remove script:', error);
  }
};

// Validation utilities
export const validateEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePhone = (phone: string): boolean => {
  const phoneRegex = /^[\d\s\-\+\(\)]+$/;
  return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
};

// Image error handling
export const handleImageError = (fallbackSrc?: string) => {
  return (event: Event) => {
    const target = event.target as HTMLImageElement;
    if (fallbackSrc && target) {
      target.src = fallbackSrc;
    }
  };
};
