
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Book, Award, FileText } from "lucide-react"; 
import { ScrollArea } from "./ui/scroll-area";
import { Button } from "./ui/button";

interface Certification {
  id: number;
  name: string;
  organization: string;
  date: string;
  description: string;
  verificationUrl?: string;
}

const CertificationsSection: React.FC = () => {
  const certifications: Certification[] = [
    {
      id: 1,
      name: "Product Management Certification",
      organization: "Product School",
      date: "2023",
      description: "Comprehensive product management strategies and methodologies."
    },
    {
      id: 2,
      name: "Revenue Operations Certification",
      organization: "HubSpot Academy",
      date: "2023",
      description: "Advanced revenue operations and business growth strategies."
    },
    {
      id: 3,
      name: "Customer Success Management",
      organization: "SuccessCOACH",
      date: "2022",
      description: "Customer retention and success strategies for SaaS businesses."
    },
    {
      id: 4,
      name: "Digital Marketing Specialist",
      organization: "Google Digital Garage",
      date: "2022",
      description: "Digital marketing fundamentals and campaign optimization."
    },
    {
      id: 5, 
      name: "Data Analytics Fundamentals",
      organization: "IBM",
      date: "2021",
      description: "Core data analytics principles and visualization techniques."
    },
    {
      id: 6,
      name: "Agile Project Management",
      organization: "Scrum Alliance",
      date: "2021",
      description: "Agile methodologies and scrum master certification."
    },
    {
      id: 7,
      name: "Business Strategy Fundamentals",
      organization: "Harvard Business School Online",
      date: "2020",
      description: "Strategic business planning and competitive analysis."
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [flippedCardId, setFlippedCardId] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
        <div className="relative h-[420px] perspective-1000 mt-10 md:mt-10">
          <div 
            ref={containerRef} 
            className="preserve-3d relative w-full h-full"
          >
            <AnimatePresence>
              {getVisibleCards().map((card) => (
                <motion.div
                  key={card.id}
                  className={`absolute top-0 left-0 right-0 mx-auto w-[280px] h-[320px] cursor-pointer`}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                    rotateY: flippedCardId === card.id ? 180 : 0,
                    scale: card.position === 0 ? 1.1 : 1,
                    x: `${card.position * 150}px`,
                    zIndex: 5 - Math.abs(card.position) * 1,
                    filter: `brightness(${1 - Math.abs(card.position) * 0.15})`,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                    duration: 0.5
                  }}
                  onClick={() => handleFlipCard(card.id)}
                  whileHover={flippedCardId !== card.id ? { 
                    scale: card.position === 0 ? 1.15 : 1.05,
                    y: -10,
                    transition: { duration: 0.2 }
                  } : {}}
                  style={{
                    transformStyle: "preserve-3d",
                  }}
                >
                  {/* Front face */}
                  <div 
                    className={`absolute inset-0 backface-hidden rounded-xl glass-card ${
                      card.position === 0 ? 'neon-glow border-neon/30' : ''
                    } flex flex-col justify-center items-center p-6`}
                    style={{ 
                      backfaceVisibility: "hidden", 
                    }}
                  >
                    <div className="text-neon mb-4">
                      <Award className="h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-medium mb-3 text-white text-center">{card.name}</h3>
                    <p className="text-white/60 text-sm text-center mb-2">{card.organization}</p>
                    <p className="text-neon text-xs">{card.date}</p>
                  </div>

                  {/* Back face */}
                  <div 
                    className="absolute inset-0 backface-hidden rounded-xl glass-card border-neon/30 flex flex-col justify-center items-center p-6"
                    style={{ 
                      transform: "rotateY(180deg)",
                      backfaceVisibility: "hidden", 
                    }}
                  >
                    <div className="text-neon mb-4">
                      <FileText className="h-8 w-8" />
                    </div>
                    <ScrollArea className="h-32 w-full mb-4">
                      <p className="text-white/80 text-sm text-center mb-4">
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
                        className="text-neon border-neon/40 hover:bg-neon/20"
                      >
                        <Book className="mr-2 h-4 w-4" />
                        View Certificate
                      </Button>
                    </a>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center gap-8 mt-8">
            <Button 
              variant="outline" 
              size="icon"
              onClick={handlePrevious}
              className="h-10 w-10 rounded-full border-neon/30 bg-background/20 backdrop-blur-sm hover:bg-neon/20 text-white"
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
              className="h-10 w-10 rounded-full border-neon/30 bg-background/20 backdrop-blur-sm hover:bg-neon/20 text-white"
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
