
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Dialog } from "./ui/dialog";
import CertificationsCarousel from "./certifications/CertificationsCarousel";
import CertificationsPagination from "./certifications/CertificationsPagination";
import DetailedCertificateView from "./certifications/DetailedCertificateView";
import CustomDialogContent from "./certifications/CustomDialogContent";
import { Certification } from "./certifications/types";
import { certifications } from "./certifications/certificationsData";

const CertificationsSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isDetailedViewOpen, setIsDetailedViewOpen] = useState(false);
  const [selectedCertification, setSelectedCertification] = useState<Certification | null>(null);

  const handleOpenDetailedView = (certification: Certification) => {
    console.log("Opening detailed view for certification ID:", certification.id);
    setSelectedCertification(certification);
    setIsDetailedViewOpen(true);
  };

  const handleCardClick = (card: Certification & { position: number }, e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (card.position === 0) {
      handleOpenDetailedView(card);
    } else {
      handleNavigate(card.position);
    }
  };

  const handleNavigate = (position: number) => {
    if (position < 0) {
      setActiveIndex((prev) => 
        prev - 1 < 0 ? certifications.length - 1 : prev - 1
      );
    } 
    else if (position > 0) {
      setActiveIndex((prev) => 
        prev + 1 >= certifications.length ? 0 : prev + 1
      );
    }
  };

  return (
    <section 
      className="pt-32 pb-16 px-4 relative overflow-hidden" 
      id="certifications"
    >
      <div className="max-w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
            <span className="text-white">Certifications & </span><span className="text-neon">Courses</span>
          </h2>
        </motion.div>

        <CertificationsCarousel
          certifications={certifications}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          isDetailedViewOpen={isDetailedViewOpen}
          onCardClick={handleCardClick}
        />
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isDetailedViewOpen ? 0.2 : 0.4 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-neon-purple/5 blur-[100px] animate-pulse"
      />

      <CertificationsPagination 
        certifications={certifications}
        activeIndex={activeIndex}
        isDetailedViewOpen={isDetailedViewOpen}
      />

      {selectedCertification && (
        <Dialog 
          open={isDetailedViewOpen} 
          onOpenChange={(open) => {
            setIsDetailedViewOpen(open);
            if (!open) setSelectedCertification(null);
          }}
        >
          <CustomDialogContent>
            <DetailedCertificateView 
              certification={selectedCertification}
              onClose={() => setIsDetailedViewOpen(false)}
            />
          </CustomDialogContent>
        </Dialog>
      )}
    </section>
  );
};

export default CertificationsSection;
