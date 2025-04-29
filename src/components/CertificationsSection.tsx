import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Book, Award, FileText, ExternalLink } from "lucide-react"; 
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import { Dialog } from "./ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";

interface Certification {
  id: number;
  name: string;
  organization: string;
  date: string;
  description: string;
  colorScheme: string;
  verificationUrl?: string;
}

const CertificationsSection: React.FC = () => {
  const certifications: Certification[] = [
    {
      id: 1,
      name: "Product Management Certification",
      organization: "Product School",
      date: "2023",
      description: "Comprehensive product management strategies and methodologies.",
      colorScheme: "blue",
      verificationUrl: "https://example.com/certificate/1"
    },
    {
      id: 2,
      name: "Revenue Operations Certification",
      organization: "HubSpot Academy",
      date: "2023",
      description: "Advanced revenue operations and business growth strategies.",
      colorScheme: "purple",
      verificationUrl: "https://example.com/certificate/2"
    },
    {
      id: 3,
      name: "Customer Success Management",
      organization: "SuccessCOACH",
      date: "2022",
      description: "Customer retention and success strategies for SaaS businesses.",
      colorScheme: "teal",
      verificationUrl: "https://example.com/certificate/3"
    },
    {
      id: 4,
      name: "Digital Marketing Specialist",
      organization: "Google Digital Garage",
      date: "2022",
      description: "Digital marketing fundamentals and campaign optimization.",
      colorScheme: "green",
      verificationUrl: "https://example.com/certificate/4"
    },
    {
      id: 5, 
      name: "Data Analytics Fundamentals",
      organization: "IBM",
      date: "2021",
      description: "Core data analytics principles and visualization techniques.",
      colorScheme: "cyan",
      verificationUrl: "https://example.com/certificate/5"
    },
    {
      id: 6,
      name: "Agile Project Management",
      organization: "Scrum Alliance",
      date: "2021",
      description: "Agile methodologies and scrum master certification.",
      colorScheme: "blue",
      verificationUrl: "https://example.com/certificate/6"
    },
    {
      id: 7,
      name: "Business Strategy Fundamentals",
      organization: "Harvard Business School Online",
      date: "2020",
      description: "Strategic business planning and competitive analysis.",
      colorScheme: "purple",
      verificationUrl: "https://example.com/certificate/7"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isDetailedViewOpen, setIsDetailedViewOpen] = useState(false);
  const [selectedCertification, setSelectedCertification] = useState<Certification | null>(null);

  const getColorScheme = (scheme: string) => {
    switch(scheme) {
      case "blue":
        return { 
          bgGradient: "bg-gradient-to-br from-blue-900/80 to-blue-700/40",
          borderColor: "border-blue-500/30", 
          glowColor: "shadow-[0_0_15px_rgba(59,130,246,0.3)]",
          accentColor: "text-blue-400"
        };
      case "purple":
        return { 
          bgGradient: "bg-gradient-to-br from-purple-900/80 to-purple-700/40",
          borderColor: "border-purple-500/30", 
          glowColor: "shadow-[0_0_15px_rgba(147,51,234,0.3)]",
          accentColor: "text-purple-400"
        };
      case "teal":
        return { 
          bgGradient: "bg-gradient-to-br from-teal-900/80 to-teal-700/40",
          borderColor: "border-teal-500/30", 
          glowColor: "shadow-[0_0_15px_rgba(20,184,166,0.3)]",
          accentColor: "text-teal-400"
        };
      case "green":
        return { 
          bgGradient: "bg-gradient-to-br from-green-900/80 to-green-700/40",
          borderColor: "border-green-500/30", 
          glowColor: "shadow-[0_0_15px_rgba(34,197,94,0.3)]",
          accentColor: "text-green-400"
        };
      case "cyan":
        return { 
          bgGradient: "bg-gradient-to-br from-cyan-900/80 to-cyan-700/40",
          borderColor: "border-cyan-500/30", 
          glowColor: "shadow-[0_0_15px_rgba(6,182,212,0.3)]",
          accentColor: "text-cyan-400"
        };
      default:
        return { 
          bgGradient: "bg-gradient-to-br from-blue-900/80 to-blue-700/40",
          borderColor: "border-blue-500/30", 
          glowColor: "shadow-[0_0_15px_rgba(59,130,246,0.3)]",
          accentColor: "text-blue-400"
        };
    }
  };

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

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <section 
      className="py-8 md:py-12 px-4 relative overflow-hidden" 
      id="certifications"
    >
      <div className="max-w-full mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center lg:text-left">
            <span className="text-neon">Certifications & Courses</span>
          </h2>
        </motion.div>

        <div className="relative h-[400px] perspective-1000 mt-6">
          <div className="preserve-3d relative w-full h-full">
            <AnimatePresence mode="sync">
              {getVisibleCards().map((card) => {
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
                  onClick={(e) => handleCardClick(card, e)}
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
                        <p className={`${colorScheme.accentColor} text-xs font-medium`}>{card.date}</p>
                      </>
                    ) : isAdjacent ? (
                      <>
                        <h3 className="text-base font-medium mb-1 text-white/80 text-center truncate w-full">
                          {card.name}
                        </h3>
                        <p className={`${colorScheme.accentColor} text-xs`}>{card.date}</p>
                      </>
                    ) : (
                      <h3 className="text-sm font-medium text-white/50 text-center truncate w-full">
                        {card.name}
                      </h3>
                    )}
                  </div>
                </motion.div>
              )})}
            </AnimatePresence>
          </div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isDetailedViewOpen ? 0.2 : 0.4 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-neon-purple/5 blur-[100px] animate-pulse"
      />

      {!isDetailedViewOpen && (
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
      )}

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

// Custom DialogContent component that doesn't include the close button
const CustomDialogContent: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
      <DialogPrimitive.Content 
        className="fixed left-[50%] top-[50%] z-50 w-full max-w-md translate-x-[-50%] translate-y-[-50%] p-0 border-0 bg-transparent shadow-none duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]"
      >
        {children}
        {/* Close button explicitly removed */}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
};

const DetailedCertificateView: React.FC<{
  certification: Certification;
  onClose: () => void;
}> = ({ certification, onClose }) => {
  const colorScheme = getColorScheme(certification.colorScheme);
  
  function getColorScheme(scheme: string) {
    switch(scheme) {
      case "blue":
        return { 
          bgGradient: "bg-gradient-to-br from-blue-900/80 to-blue-700/40",
          borderColor: "border-blue-500/30", 
          glowColor: "shadow-[0_0_15px_rgba(59,130,246,0.3)]",
          accentColor: "text-blue-400"
        };
      case "purple":
        return { 
          bgGradient: "bg-gradient-to-br from-purple-900/80 to-purple-700/40",
          borderColor: "border-purple-500/30", 
          glowColor: "shadow-[0_0_15px_rgba(147,51,234,0.3)]",
          accentColor: "text-purple-400"
        };
      case "teal":
        return { 
          bgGradient: "bg-gradient-to-br from-teal-900/80 to-teal-700/40",
          borderColor: "border-teal-500/30", 
          glowColor: "shadow-[0_0_15px_rgba(20,184,166,0.3)]",
          accentColor: "text-teal-400"
        };
      case "green":
        return { 
          bgGradient: "bg-gradient-to-br from-green-900/80 to-green-700/40",
          borderColor: "border-green-500/30", 
          glowColor: "shadow-[0_0_15px_rgba(34,197,94,0.3)]",
          accentColor: "text-green-400"
        };
      case "cyan":
        return { 
          bgGradient: "bg-gradient-to-br from-cyan-900/80 to-cyan-700/40",
          borderColor: "border-cyan-500/30", 
          glowColor: "shadow-[0_0_15px_rgba(6,182,212,0.3)]",
          accentColor: "text-cyan-400"
        };
      default:
        return { 
          bgGradient: "bg-gradient-to-br from-blue-900/80 to-blue-700/40",
          borderColor: "border-blue-500/30", 
          glowColor: "shadow-[0_0_15px_rgba(59,130,246,0.3)]",
          accentColor: "text-blue-400"
        };
    }
  }

  const handleLinkClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };
  
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8, rotateY: 0 }}
      animate={{ 
        opacity: 1, 
        scale: 1, 
        rotateY: 180,
        transition: { duration: 0.5, ease: "easeInOut" }
      }}
      exit={{ opacity: 0, scale: 0.8, rotateY: 0 }}
      className="w-[400px] h-[400px] mx-auto"
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className={`w-full h-full rounded-xl glass-card ${colorScheme.bgGradient} ${colorScheme.borderColor} ${colorScheme.glowColor} border-opacity-70 p-8 flex flex-col justify-center items-center`}
        style={{ transform: "rotateY(180deg)" }}
      >
        <div className={`${colorScheme.accentColor} mb-6`}>
          <FileText className="h-10 w-10" />
        </div>
        
        <h3 className="text-2xl font-bold mb-3 text-white text-center">
          {certification.name}
        </h3>
        
        <p className="text-white/90 text-lg text-center mb-2">
          {certification.organization}
        </p>
        
        <p className={`${colorScheme.accentColor} text-base font-medium mb-6`}>
          {certification.date}
        </p>
        
        <ScrollArea className="h-32 w-full mb-6">
          <p className="text-white/90 text-sm text-center mb-4">
            {certification.description}
          </p>
        </ScrollArea>
        
        <a 
          href={certification.verificationUrl || "#"} 
          target="_blank" 
          rel="noopener noreferrer"
          onClick={handleLinkClick}
          className="mt-auto"
        >
          <Button 
            variant="outline" 
            className={`${colorScheme.accentColor} ${colorScheme.borderColor} hover:bg-white/10`}
          >
            <Book className="mr-2 h-4 w-4" />
            View Certificate
            <ExternalLink className="ml-1 h-3 w-3" />
          </Button>
        </a>
      </div>
    </motion.div>
  );
};

export default CertificationsSection;
