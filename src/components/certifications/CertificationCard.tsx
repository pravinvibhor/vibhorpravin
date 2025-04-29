
import React from "react";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { Certification } from "./types";
import { getColorScheme } from "./certificationUtils";

interface CertificationCardProps {
  card: Certification & { position: number };
  isDetailedViewOpen: boolean;
  onCardClick: (card: Certification & { position: number }, e: React.MouseEvent) => void;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ 
  card, 
  isDetailedViewOpen,
  onCardClick 
}) => {
  const colorScheme = getColorScheme(card.colorScheme);
  const isCenterCard = card.position === 0;
  const isAdjacent = Math.abs(card.position) === 1;
  const isEdge = Math.abs(card.position) === 2;

  return (
    <motion.div
      key={card.id}
      className={`absolute top-0 left-0 right-0 mx-auto w-[250px] sm:w-[280px] h-[330px] cursor-pointer`}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: isDetailedViewOpen ? 0 : isEdge ? 0.5 : isAdjacent ? 0.8 : 1,
        scale: isCenterCard ? 1.2 : isAdjacent ? 0.85 : 0.7,
        x: `${card.position * 200}px`,
        y: isCenterCard ? -20 : 0,
        zIndex: 5 - Math.abs(card.position) * 1,
        filter: `brightness(${isCenterCard ? 1.1 : 1 - Math.abs(card.position) * 0.2})`,
      }}
      exit={{ 
        opacity: 0,
        x: card.position < 0 ? -500 : 500,
        transition: { duration: 0.3 }
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 25
      }}
      onClick={(e) => onCardClick(card, e)}
      whileHover={isCenterCard ? { 
        scale: 1.25,
        y: -30,
        transition: { duration: 0.3 }
      } : isAdjacent ? {
        scale: 0.9,
        y: -10,
        transition: { duration: 0.3 }
      } : {}}
    >
      <div 
        className={`absolute inset-0 rounded-xl glass-card ${colorScheme.bgGradient} ${colorScheme.borderColor} ${
          isCenterCard ? `${colorScheme.glowColor} border-opacity-70` : 'border-opacity-30'
        } flex flex-col justify-center items-center p-6`}
      >
        <div className={`${isCenterCard ? colorScheme.accentColor : 'text-white/60'} mb-4`}>
          <Award className="h-10 w-10" />
        </div>
        
        {isCenterCard ? (
          <>
            <h3 className="text-xl font-medium mb-3 text-white text-center">{card.name}</h3>
            <p className="text-white/70 text-sm text-center mb-2">{card.organization}</p>
          </>
        ) : isAdjacent ? (
          <>
            <h3 className="text-base font-medium mb-1 text-white/80 text-center truncate w-full">
              {card.name}
            </h3>
            <p className="text-white/60 text-xs text-center truncate w-full">{card.organization}</p>
          </>
        ) : (
          <h3 className="text-sm font-medium text-white/50 text-center truncate w-full">
            {card.name}
          </h3>
        )}
      </div>
    </motion.div>
  );
};

export default CertificationCard;
