
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Book, Award, FileText } from "lucide-react"; 
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

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
      colorScheme: "blue"
    },
    {
      id: 2,
      name: "Revenue Operations Certification",
      organization: "HubSpot Academy",
      date: "2023",
      description: "Advanced revenue operations and business growth strategies.",
      colorScheme: "purple"
    },
    {
      id: 3,
      name: "Customer Success Management",
      organization: "SuccessCOACH",
      date: "2022",
      description: "Customer retention and success strategies for SaaS businesses.",
      colorScheme: "teal"
    },
    {
      id: 4,
      name: "Digital Marketing Specialist",
      organization: "Google Digital Garage",
      date: "2022",
      description: "Digital marketing fundamentals and campaign optimization.",
      colorScheme: "green"
    },
    {
      id: 5, 
      name: "Data Analytics Fundamentals",
      organization: "IBM",
      date: "2021",
      description: "Core data analytics principles and visualization techniques.",
      colorScheme: "cyan"
    },
    {
      id: 6,
      name: "Agile Project Management",
      organization: "Scrum Alliance",
      date: "2021",
      description: "Agile methodologies and scrum master certification.",
      colorScheme: "blue"
    },
    {
      id: 7,
      name: "Business Strategy Fundamentals",
      organization: "Harvard Business School Online",
      date: "2020",
      description: "Strategic business planning and competitive analysis.",
      colorScheme: "purple"
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [flippedCardId, setFlippedCardId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Function to get color scheme based on card type
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

  // Calculate visible cards with proper wrapping
  const getVisibleCards = () => {
    const visibleCards = [];
    for (let i = 0; i < 5; i++) {
      const index = (activeIndex + i) % certifications.length;
      visibleCards.push({
        ...certifications[index],
        position: i - 2 // -2, -1, 0, 1, 2
      });
    }
    return visibleCards;
  };
  
  const handleFlipCard = (id: number) => {
    if (flippedCardId === id) {
      setFlippedCardId(null);
    } else {
      setFlippedCardId(id);
    }
  };

  const handleNext = () => {
    setActiveIndex((prev) => 
      prev + 1 >= certifications.length ? 0 : prev + 1
    );
    setFlippedCardId(null);
  };

  const handlePrevious = () => {
    setActiveIndex((prev) => 
      prev - 1 < 0 ? certifications.length - 1 : prev - 1
    );
    setFlippedCardId(null);
  };

  return (
    <section className="py-20 px-4 md:px-10 lg:px-20 relative overflow-hidden" id="certifications">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">
            Professional <span className="text-neon">Certifications</span>
          </h2>
        </motion.div>

        {/* 3D Carousel Container */}
        <div className="relative h-[450px] perspective-1000 mt-16 md:mt-16">
          <div 
            ref={containerRef} 
            className="preserve-3d relative w-full h-full"
          >
            <AnimatePresence>
              {getVisibleCards().map((card) => {
                const colorScheme = getColorScheme(card.colorScheme);
                const isCenterCard = card.position === 0;
                const isAdjacent = Math.abs(card.position) === 1;
                const isEdge = Math.abs(card.position) === 2;
                
                return (
                <motion.div
                  key={card.id}
                  className={`absolute top-0 left-0 right-0 mx-auto w-[280px] h-[330px] cursor-pointer`}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: isEdge ? 0.6 : isAdjacent ? 0.85 : 1,
                    rotateY: flippedCardId === card.id ? 180 : 0,
                    scale: isCenterCard ? 1.2 : isAdjacent ? 0.9 : 0.75,
                    x: `${card.position * 200}px`, // Increased spacing between cards
                    y: isCenterCard && flippedCardId === card.id ? -20 : 0, // Move center card up when flipped
                    zIndex: 5 - Math.abs(card.position) * 1,
                    filter: `brightness(${isCenterCard ? 1.1 : 1 - Math.abs(card.position) * 0.2})`,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                    duration: isCenterCard ? 0.7 : 0.5 // Slower flip animation for center card
                  }}
                  onClick={() => isCenterCard && handleFlipCard(card.id)}
                  whileHover={isCenterCard && flippedCardId !== card.id ? { 
                    scale: 1.25,
                    y: -15,
                    transition: { duration: 0.3 }
                  } : {}}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Front face */}
                  <div 
                    className={`absolute inset-0 backface-hidden rounded-xl glass-card ${colorScheme.bgGradient} ${colorScheme.borderColor} ${
                      isCenterCard ? `${colorScheme.glowColor} border-opacity-70` : 'border-opacity-30'
                    } flex flex-col justify-center items-center p-6`}
                    style={{ 
                      backfaceVisibility: "hidden", 
                    }}
                  >
                    <div className={`${isCenterCard ? colorScheme.accentColor : 'text-white/60'} mb-4`}>
                      <Award className="h-10 w-10" />
                    </div>
                    
                    {/* Only show full text details on center card */}
                    {isCenterCard ? (
                      <>
                        <h3 className="text-xl font-medium mb-3 text-white text-center">{card.name}</h3>
                        <p className="text-white/70 text-sm text-center mb-2">{card.organization}</p>
                        <p className={`${colorScheme.accentColor} text-xs font-medium`}>{card.date}</p>
                      </>
                    ) : (
                      <>
                        <h3 className="text-base font-medium mb-1 text-white/80 text-center truncate w-full">
                          {card.name}
                        </h3>
                        <p className={`${colorScheme.accentColor} text-xs`}>{card.date}</p>
                      </>
                    )}
                  </div>

                  {/* Back face - only fully functional on center card */}
                  <div 
                    className={`absolute inset-0 backface-hidden rounded-xl glass-card ${colorScheme.bgGradient} ${colorScheme.borderColor} flex flex-col justify-center items-center p-6`}
                    style={{ 
                      transform: "rotateY(180deg)",
                      backfaceVisibility: "hidden", 
                    }}
                  >
                    <div className={`${colorScheme.accentColor} mb-4`}>
                      <FileText className="h-8 w-8" />
                    </div>
                    <ScrollArea className="h-32 w-full mb-4">
                      <p className="text-white/90 text-sm text-center mb-4">
                        {card.description}
                      </p>
                    </ScrollArea>
                    
                    <a 
                      href={card.verificationUrl || "#"} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="mt-auto"
                    >
                      <Button 
                        variant="outline" 
                        className={`${colorScheme.accentColor} ${colorScheme.borderColor} hover:bg-white/10`}
                      >
                        <Book className="mr-2 h-4 w-4" />
                        View Certificate
                      </Button>
                    </a>
                  </div>
                </motion.div>
              )})}
            </AnimatePresence>
          </div>

          {/* Navigation Controls with improved styling */}
          <div className="absolute -bottom-4 left-0 right-0 flex justify-center items-center gap-8 mt-8">
            <Button 
              variant="outline" 
              size="icon"
              onClick={handlePrevious}
              className="h-12 w-12 rounded-full border-neon/30 bg-background/20 backdrop-blur-sm hover:bg-neon/20 text-white"
            >
              <span className="sr-only">Previous slide</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </Button>
            
            <Button 
              variant="outline" 
              size="icon"
              onClick={handleNext}
              className="h-12 w-12 rounded-full border-neon/30 bg-background/20 backdrop-blur-sm hover:bg-neon/20 text-white"
            >
              <span className="sr-only">Next slide</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Background Accents */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        className="absolute bottom-10 left-10 w-72 h-72 rounded-full bg-neon-purple/5 blur-[100px] animate-pulse"
      />
    </section>
  );
};

export default CertificationsSection;
