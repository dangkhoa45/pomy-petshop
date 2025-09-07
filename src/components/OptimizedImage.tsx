import Image from "next/image";
import { useState } from "react";
import type { ImageProps } from "@/shared/types";

interface OptimizedImageProps extends Omit<ImageProps, 'width' | 'height'> {
  width?: number;
  height?: number;
  fallbackSrc?: string;
  aspectRatio?: string;
}

export default function OptimizedImage({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false,
  quality = 80,
  fallbackSrc,
  aspectRatio,
  ...props
}: OptimizedImageProps) {
  const [imageError, setImageError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageError = () => {
    setImageError(true);
    setIsLoading(false);
  };

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  if (imageError && !fallbackSrc) {
    return (
      <div 
        className={`bg-gray-200 flex items-center justify-center ${className}`}
        style={{ 
          width: width ? `${width}px` : '100%', 
          height: height ? `${height}px` : '200px',
          aspectRatio: aspectRatio 
        }}
      >
        <span className="text-gray-500 text-sm">Image not available</span>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div 
          className="absolute inset-0 bg-gray-200 animate-pulse rounded"
          style={{ 
            width: width ? `${width}px` : '100%', 
            height: height ? `${height}px` : '200px' 
          }}
        />
      )}
      <Image
        src={imageError && fallbackSrc ? fallbackSrc : src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        quality={quality}
        onError={handleImageError}
        onLoad={handleImageLoad}
        style={{ 
          objectFit: 'cover',
          ...(aspectRatio && { aspectRatio })
        }}
        {...props}
      />
    </div>
  );
}
