
import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Certification } from "./types";
import CertificationCard from "./CertificationCard";

interface CertificationsCarouselProps {
  certifications: Certification[];
  activeIndex: number;
  isDetailedViewOpen: boolean;
  onCardClick: (card: Certification & { position: number }, e: React.MouseEvent) => void;
}

const CertificationsCarousel: React.FC<CertificationsCarouselProps> = ({
  certifications,
  activeIndex,
  isDetailedViewOpen,
  onCardClick
}) => {
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
    <div className="relative h-[400px] perspective-1000 mt-6">
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
