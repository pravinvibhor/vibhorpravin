
import React, { useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import { Certification } from "./types";
import CertificationCard from "./CertificationCard";

interface CertificationsCarouselProps {
  certifications: Certification[];
  activeIndex: number;
  setActiveIndex: (index: number) => void;
  isDetailedViewOpen: boolean;
  onCardClick: (card: Certification & { position: number }, e: React.MouseEvent) => void;
}

const CertificationsCarousel: React.FC<CertificationsCarouselProps> = ({
  certifications,
  activeIndex,
  setActiveIndex,
  isDetailedViewOpen,
  onCardClick
}) => {
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  
  const handleSwipe = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    
    const diffX = touchStartX.current - touchEndX.current;
    const threshold = 50; // Minimum swipe distance
    
    if (Math.abs(diffX) > threshold) {
      if (diffX > 0) {
        // Swiped left - go to next slide
        setActiveIndex((activeIndex + 1) % certifications.length);
      } else {
        // Swiped right - go to previous slide
        setActiveIndex((activeIndex - 1 + certifications.length) % certifications.length);
      }
    }
    
    // Reset values
    touchStartX.current = null;
    touchEndX.current = null;
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    
    const handleTouchStart = (e: TouchEvent) => {
      touchStartX.current = e.touches[0].clientX;
    };
    
    const handleTouchMove = (e: TouchEvent) => {
      // Optionally add visual feedback during swipe
    };
    
    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX.current = e.changedTouches[0].clientX;
      handleSwipe();
    };
    
    const handleMouseDown = (e: MouseEvent) => {
      touchStartX.current = e.clientX;
      
      const handleMouseUp = (e: MouseEvent) => {
        touchEndX.current = e.clientX;
        handleSwipe();
        document.removeEventListener('mouseup', handleMouseUp);
        document.removeEventListener('mousemove', handleMouseMove);
      };
      
      const handleMouseMove = (e: MouseEvent) => {
        // Optional: Add drag visual feedback if needed
      };
      
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('mousemove', handleMouseMove);
    };
    
    // Add touch events specifically for mobile
    container.addEventListener('touchstart', handleTouchStart, { passive: true });
    container.addEventListener('touchmove', handleTouchMove, { passive: true });
    container.addEventListener('touchend', handleTouchEnd);
    container.addEventListener('mousedown', handleMouseDown);
    
    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('mousedown', handleMouseDown);
    };
  }, [certifications.length, activeIndex, setActiveIndex]);
  
  const getVisibleCards = () => {
    const visibleCards = [];
    for (let i = 0; i < 5; i++) {
      const index = (activeIndex + i - 2 + certifications.length) % certifications.length;
      visibleCards.push({
        ...certifications[index],
        position: i - 2
      });
    }
    return visibleCards;
  };

  return (
    <div 
      ref={containerRef} 
      className="relative h-[400px] perspective-1000 mt-2 touch-none"
      aria-label="Certification carousel, swipe left or right to navigate"
    >
      <div className="preserve-3d relative w-full h-full">
        <AnimatePresence mode="sync">
          {getVisibleCards().map((card) => (
            <CertificationCard
              key={card.id}
              card={card}
              isDetailedViewOpen={isDetailedViewOpen}
              onCardClick={onCardClick}
            />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CertificationsCarousel;
