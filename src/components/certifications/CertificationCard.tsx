
import React from "react";
import { motion } from "framer-motion";
import { Certification } from "./types";
import ImageOptimizer from "../ImageOptimizer";

interface CertificationCardProps {
  card: Certification & { position: number };
  isDetailedViewOpen: boolean;
  onCardClick: (card: Certification & { position: number }, e: React.MouseEvent) => void;
}

const CertificationCard: React.FC<CertificationCardProps> = ({
  card,
  isDetailedViewOpen,
  onCardClick,
}) => {
  const getCardStyle = () => {
    if (isDetailedViewOpen) return { filter: "blur(4px)" };

    switch (card.position) {
      case -2: // Far left card
        return { 
          left: "0%",
          transform: "translateX(-50%) scale(0.7) translateZ(-100px)",
          filter: "brightness(0.6) blur(2px)",
          zIndex: 1
        };
      case -1: // Left card
        return { 
          left: "25%",
          transform: "translateX(-50%) scale(0.85) translateZ(-50px)",
          filter: "brightness(0.8) blur(1px)",
          zIndex: 2
        };
      case 0: // Center card
        return { 
          left: "50%",
          transform: "translateX(-50%) scale(1) translateZ(0px)",
          filter: "brightness(1)",
          zIndex: 5
        };
      case 1: // Right card
        return { 
          left: "75%",
          transform: "translateX(-50%) scale(0.85) translateZ(-50px)",
          filter: "brightness(0.8) blur(1px)",
          zIndex: 2
        };
      case 2: // Far right card
        return { 
          left: "100%",
          transform: "translateX(-50%) scale(0.7) translateZ(-100px)",
          filter: "brightness(0.6) blur(2px)",
          zIndex: 1
        };
      default:
        return {};
    }
  };

  return (
    <motion.div
      key={`${card.id}-${card.position}`}
      initial={false}
      animate={getCardStyle()}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 30,
        mass: 1
      }}
      className={`absolute top-0 w-64 h-[350px] rounded-xl overflow-hidden shadow-lg cursor-pointer ${card.position === 0 ? "shadow-neon/20" : ""}`}
      onClick={(e) => onCardClick(card, e)}
      whileHover={card.position === 0 ? { scale: 1.02 } : {}}
    >
      <div className="relative w-full h-full bg-gray-900 rounded-xl overflow-hidden">
        {/* The entire card is clickable now, image is just part of the card */}
        <div className="absolute inset-0 w-full h-full">
          <ImageOptimizer 
            src={card.image} 
            alt={card.title}
            className="w-full h-full object-cover"
            width={256}
            height={350}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 flex flex-col gap-1">
          <h3 className="text-white text-lg font-semibold line-clamp-2">
            {card.title}
          </h3>
          {card.position === 0 && (
            <div className="flex flex-col gap-1">
              <p className="text-white/70 text-sm line-clamp-2">
                {card.issuer}
              </p>
              <p className="text-neon text-xs">
                {card.date}
              </p>
            </div>
          )}
          {card.position === 0 && (
            <div className="mt-2 bg-white/20 text-white text-xs py-0.5 px-2 rounded-full w-fit">
              View details
            </div>
          )}
        </div>
        
        {card.position !== 0 && (
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <p className="text-white/70 text-sm truncate">
              {card.issuer}
            </p>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CertificationCard;
