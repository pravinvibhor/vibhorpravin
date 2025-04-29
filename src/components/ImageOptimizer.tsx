
import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  loading?: "lazy" | "eager";
}

const ImageOptimizer: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  loading = "lazy"
}) => {
  // If priority is true, we override loading to eager
  const loadingAttribute = priority ? "eager" : loading;
  
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={loadingAttribute}
      className={className}
      fetchPriority={priority ? "high" : "auto"}
    />
  );
};

export default ImageOptimizer;
