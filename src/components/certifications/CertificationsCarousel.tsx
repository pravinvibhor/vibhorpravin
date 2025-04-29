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
        // Swiped left - calculate the new index directly
        const newIndex = activeIndex + 1 >= certifications.length ? 0 : activeIndex + 1;
        setActiveIndex(newIndex);
      } else {
        // Swiped right - calculate the new index directly
        const newIndex = activeIndex - 1 < 0 ? certifications.length - 1 : activeIndex - 1;
        setActiveIndex(newIndex);
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
    
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchend', handleTouchEnd);
    container.addEventListener('mousedown', handleMouseDown);
    
    return () => {
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('mousedown', handleMouseDown);
    };
  }, [certifications.length, setActiveIndex]);
  
  const getVisibleCards = () => {
    const visibleCards = [];
    for (let i = 0; i < 5; i++) {
      const index = (activeIndex + i) % certifications.length;
      visibleCards.push({
        ...certifications[index],
        position: i - 2
      });
    }
    return visibleCards;
  };

  return (
    <div ref={containerRef} className="relative h-[400px] perspective-1000 mt-2 touch-none">
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
