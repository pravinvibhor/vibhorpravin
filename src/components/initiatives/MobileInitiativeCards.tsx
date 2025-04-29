
import React from "react";
import { motion } from "framer-motion";
import { Initiative } from "@/data/initiativesData";

interface MobileInitiativeCardsProps {
  initiatives: Initiative[];
  hoveredInitiative: number | null;
  setHoveredInitiative: (id: number | null) => void;
  onInitiativeClick: (id: number) => void;
}

const MobileInitiativeCards: React.FC<MobileInitiativeCardsProps> = ({
  initiatives,
  hoveredInitiative,
  setHoveredInitiative,
  onInitiativeClick,
}) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:hidden">
      {initiatives.map((initiative, index) => (
        <motion.div
          key={initiative.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1, duration: 0.5 }}
          whileHover={{ scale: 1.03 }}
          className={`glass-card p-4 cursor-pointer`}
          style={{
            background: `linear-gradient(135deg, ${initiative.color}80 0%, ${initiative.color}40 100%)`,
            borderColor: hoveredInitiative === initiative.id ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.1)"
          }}
          onClick={() => onInitiativeClick(initiative.id)}
          onMouseEnter={() => setHoveredInitiative(initiative.id)}
          onMouseLeave={() => setHoveredInitiative(null)}
          role="button"
          aria-label={`View details about ${initiative.title}`}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              onInitiativeClick(initiative.id);
            }
          }}
        >
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-full bg-white/10">
              <initiative.icon className="w-5 h-5 text-white" />
            </div>
            <h3 className="text-lg font-medium text-white">{initiative.shortTitle}</h3>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default MobileInitiativeCards;
