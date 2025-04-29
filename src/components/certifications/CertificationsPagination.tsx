
import React from "react";

interface CertificationsPaginationProps {
  certifications: { id: number }[];
  activeIndex: number;
  isDetailedViewOpen: boolean;
}

const CertificationsPagination: React.FC<CertificationsPaginationProps> = ({
  certifications,
  activeIndex,
  isDetailedViewOpen
}) => {
  if (isDetailedViewOpen) return null;

  return (
    <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center gap-2 mt-8">
      {Array.from({ length: Math.min(certifications.length, 7) }).map((_, index) => (
        <div 
          key={index}
          className={`h-1.5 rounded-full transition-all duration-300 ${
            (activeIndex <= index && index < activeIndex + 5) || 
            (activeIndex + 5 > certifications.length && index < (activeIndex + 5) % certifications.length)
              ? 'w-8 bg-neon/70' 
              : 'w-2 bg-white/20'
          }`}
        />
      ))}
    </div>
  );
};

export default CertificationsPagination;
