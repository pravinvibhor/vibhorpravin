
import React, { useState } from "react";
import { motion } from "framer-motion";
import { initiatives } from "@/data/initiativesData";
import RadialSegments from "./initiatives/RadialSegments";
import MobileInitiativeCards from "./initiatives/MobileInitiativeCards";
import InitiativeDetailsDialog from "./initiatives/InitiativeDetailsDialog";

const RadialInitiativesShowcase: React.FC = () => {
  const [openInitiative, setOpenInitiative] = useState<number | null>(null);
  const [hoveredInitiative, setHoveredInitiative] = useState<number | null>(null);

  const openInitiativeDetails = (id: number) => {
    setOpenInitiative(id);
  };

  const closeInitiativeDetails = () => {
    setOpenInitiative(null);
  };

  const activeInitiative = openInitiative !== null 
    ? initiatives.find(initiative => initiative.id === openInitiative) || null
    : null;

  return (
    <section className="py-8 md:py-12 px-4 relative overflow-hidden" id="initiatives" aria-label="Initiatives and Impact">
      <div className="max-w-full mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-16"
        >
          Initiatives & <span className="text-neon">Impact</span>
        </motion.h2>
        
        <div className="flex justify-center">
          {/* Desktop Radial View */}
          <RadialSegments 
            initiatives={initiatives}
            hoveredInitiative={hoveredInitiative}
            setHoveredInitiative={setHoveredInitiative}
            onInitiativeClick={openInitiativeDetails}
          />

          {/* Mobile Card View */}
          <MobileInitiativeCards
            initiatives={initiatives}
            hoveredInitiative={hoveredInitiative}
            setHoveredInitiative={setHoveredInitiative}
            onInitiativeClick={openInitiativeDetails}
          />
        </div>
      </div>

      {/* Initiative Details Dialog */}
      <InitiativeDetailsDialog 
        open={openInitiative !== null}
        onClose={closeInitiativeDetails}
        initiative={activeInitiative}
      />
    </section>
  );
};

export default RadialInitiativesShowcase;
