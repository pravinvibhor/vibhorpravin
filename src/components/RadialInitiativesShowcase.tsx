import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Award, Book, FileText, Globe, Rocket } from "lucide-react";
import { Dialog } from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface InitiativeSlide {
  image: string;
  caption: string;
}

interface Initiative {
  id: number;
  title: string;
  shortTitle: string;
  icon: React.ElementType;
  description: string;
  color: string;
  slides: InitiativeSlide[];
}

const RadialInitiativesShowcase: React.FC = () => {
  const [openInitiative, setOpenInitiative] = useState<number | null>(null);
  const [hoveredInitiative, setHoveredInitiative] = useState<number | null>(null);

  // Sample data for 5 initiatives
  const initiatives: Initiative[] = [
    {
      id: 1,
      title: "India Creates Club",
      shortTitle: "Community",
      icon: Globe,
      description: "A community platform for tech creators to connect in their city, fostering collaboration and innovation across India. The platform has successfully created networks in multiple metropolitan areas.",
      color: "#9b87f5", // Purple
      slides: [
        {
          image: "/lovable-uploads/6d243cad-de8a-4798-be27-0bfdd371a664.png",
          caption: "Building local tech communities across India"
        },
        {
          image: "/lovable-uploads/6d243cad-de8a-4798-be27-0bfdd371a664.png",
          caption: "Connecting creators through meaningful events"
        }
      ]
    },
    {
      id: 2,
      title: "Tiffin Service in Dubai",
      shortTitle: "Food Service",
      icon: Award,
      description: "Launched a successful tiffin service for a restaurant in Dubai, securing 14 subscriptions in the first week of operation with innovative marketing and quality food delivery.",
      color: "#00b3ff", // Blue
      slides: [
        {
          image: "/lovable-uploads/c53dd021-1eff-41e8-8cdb-ebf7bef42d7b.png",
          caption: "Authentic homestyle meals delivered daily"
        },
        {
          image: "/lovable-uploads/c53dd021-1eff-41e8-8cdb-ebf7bef42d7b.png",
          caption: "Rapid growth with 14 subscriptions in first week"
        }
      ]
    },
    {
      id: 3,
      title: "Tata's Leather Strategy for D2C",
      shortTitle: "D2C Strategy",
      icon: FileText,
      description: "Developed comprehensive E-commerce and subscription Business Model for Tata's Direct-to-Consumer Venture, revolutionizing their approach to leather goods marketing.",
      color: "#F97316", // Orange
      slides: [
        {
          image: "/lovable-uploads/6d9eb5b2-be07-469a-a42f-85a13ec5a23a.png",
          caption: "Transforming traditional retail into D2C powerhouse"
        },
        {
          image: "/lovable-uploads/6d9eb5b2-be07-469a-a42f-85a13ec5a23a.png",
          caption: "Subscription model for premium leather goods"
        }
      ]
    },
    {
      id: 4,
      title: "Educational Workshops",
      shortTitle: "Education",
      icon: Book,
      description: "Conducted a series of educational workshops aimed at emerging entrepreneurs, focusing on sustainable business practices and innovative financing models.",
      color: "#0EA5E9", // Sky Blue
      slides: [
        {
          image: "/lovable-uploads/6d243cad-de8a-4798-be27-0bfdd371a664.png",
          caption: "Empowering the next generation of entrepreneurs"
        },
        {
          image: "/lovable-uploads/6d243cad-de8a-4798-be27-0bfdd371a664.png",
          caption: "Hands-on learning experiences for real-world application"
        }
      ]
    },
    {
      id: 5,
      title: "Tech Innovation Labs",
      shortTitle: "Innovation",
      icon: Rocket,
      description: "Established tech innovation labs in partnership with universities, providing resources and mentorship to student-led startups developing solutions for local challenges.",
      color: "#D946EF", // Magenta Pink
      slides: [
        {
          image: "/lovable-uploads/6d9eb5b2-be07-469a-a42f-85a13ec5a23a.png",
          caption: "Bridging academic research with commercial applications"
        },
        {
          image: "/lovable-uploads/6d9eb5b2-be07-469a-a42f-85a13ec5a23a.png",
          caption: "Supporting student entrepreneurs in bringing ideas to market"
        }
      ]
    }
  ];

  const openInitiativeDetails = (id: number) => {
    setOpenInitiative(id);
  };

  const closeInitiativeDetails = () => {
    setOpenInitiative(null);
  };

  // Radial segment positioning calculations
  const centerX = 250;
  const centerY = 250;
  const innerRadius = 80;
  const outerRadius = 180;
  const segmentCount = initiatives.length;
  const gapAngle = 10; // Gap in degrees between segments
  const segmentAngle = (360 - (segmentCount * gapAngle)) / segmentCount;
  const startAngle = -90 - (segmentAngle / 2); // Start from top, adjusted for segment width

  return (
    <section className="py-12 md:py-20 px-4 md:px-10 lg:px-20" id="initiatives" aria-label="Initiatives and Impact">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-white text-center"
        >
          Initiatives & <span className="text-neon">Impact</span>
        </motion.h2>
        
        <div className="flex justify-center mb-12">
          <div className="relative w-[500px] h-[500px] hidden md:block">
            <svg viewBox="0 0 500 500" className="w-full h-full">
              {initiatives.map((initiative, index) => {
                const angleStart = startAngle + (index * (segmentAngle + gapAngle));
                const angleEnd = angleStart + segmentAngle;
                
                // Calculate the SVG arc path
                const angleStartRad = (angleStart * Math.PI) / 180;
                const angleEndRad = (angleEnd * Math.PI) / 180;
                
                const x1 = centerX + innerRadius * Math.cos(angleStartRad);
                const y1 = centerY + innerRadius * Math.sin(angleStartRad);
                const x2 = centerX + outerRadius * Math.cos(angleStartRad);
                const y2 = centerY + outerRadius * Math.sin(angleStartRad);
                const x3 = centerX + outerRadius * Math.cos(angleEndRad);
                const y3 = centerY + outerRadius * Math.sin(angleEndRad);
                const x4 = centerX + innerRadius * Math.cos(angleEndRad);
                const y4 = centerY + innerRadius * Math.sin(angleEndRad);

                // Arc flags - using 0 for small arc, 1 for large arc if needed
                const arcSweep = segmentAngle > 180 ? 1 : 0;
                
                const path = [
                  `M ${x1} ${y1}`, // Move to start point
                  `L ${x2} ${y2}`, // Line to outer start
                  `A ${outerRadius} ${outerRadius} 0 ${arcSweep} 1 ${x3} ${y3}`, // Arc to outer end
                  `L ${x4} ${y4}`, // Line to inner end
                  `A ${innerRadius} ${innerRadius} 0 ${arcSweep} 0 ${x1} ${y1}`, // Arc back to start
                  'Z' // Close path
                ].join(' ');

                // Calculate position for icon and text
                const iconAngle = (angleStart + angleEnd) / 2 * Math.PI / 180;
                const iconRadius = (innerRadius + outerRadius) / 2;
                const iconX = centerX + iconRadius * Math.cos(iconAngle);
                const iconY = centerY + iconRadius * Math.sin(iconAngle);

                const IconComponent = initiative.icon;

                return (
                  <g key={initiative.id} className="cursor-pointer">
                    <motion.path
                      d={path}
                      fill={`url(#gradient-${initiative.id})`}
                      stroke={hoveredInitiative === initiative.id ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.2)"}
                      strokeWidth="1"
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.05 }}
                      onMouseEnter={() => setHoveredInitiative(initiative.id)}
                      onMouseLeave={() => setHoveredInitiative(null)}
                      onClick={() => openInitiativeDetails(initiative.id)}
                      role="button"
                      aria-label={`View details about ${initiative.title}`}
                      tabIndex={0}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          openInitiativeDetails(initiative.id);
                        }
                      }}
                      className="neon-glow"
                    />
                    <defs>
                      <linearGradient id={`gradient-${initiative.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor={initiative.color} stopOpacity="0.9" />
                        <stop offset="100%" stopColor={initiative.color} stopOpacity="0.4" />
                      </linearGradient>
                    </defs>
                    
                    {/* Icon */}
                    <foreignObject
                      x={iconX - 15}
                      y={iconY - 40}
                      width="30"
                      height="30"
                      className="pointer-events-none"
                    >
                      <div className="flex items-center justify-center h-full">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                    </foreignObject>
                    
                    {/* Text */}
                    <foreignObject
                      x={iconX - 60}
                      y={iconY - 5}
                      width="120"
                      height="40"
                      className="pointer-events-none"
                    >
                      <div className="flex items-center justify-center h-full">
                        <p className="text-white text-sm font-medium text-center">
                          {initiative.shortTitle}
                        </p>
                      </div>
                    </foreignObject>
                  </g>
                );
              })}
            </svg>
          </div>

          {/* Mobile view - vertical list */}
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
                onClick={() => openInitiativeDetails(initiative.id)}
                onMouseEnter={() => setHoveredInitiative(initiative.id)}
                onMouseLeave={() => setHoveredInitiative(null)}
                role="button"
                aria-label={`View details about ${initiative.title}`}
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    openInitiativeDetails(initiative.id);
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
        </div>
      </div>

      {/* Initiative Details Dialog */}
      <Dialog open={openInitiative !== null} onOpenChange={() => closeInitiativeDetails()}>
        <InitiativeDetailsContent>
          {openInitiative !== null && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="glass-card p-6 max-w-xl mx-auto"
              style={{
                background: `linear-gradient(135deg, ${initiatives[openInitiative - 1].color}80 0%, ${initiatives[openInitiative - 1].color}40 100%)`,
                borderColor: "rgba(255,255,255,0.2)"
              }}
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="p-2 rounded-full bg-white/10">
                  {React.createElement(initiatives[openInitiative - 1].icon, { 
                    className: "w-5 h-5 text-white" 
                  })}
                </div>
                <h3 className="text-2xl font-bold text-white">{initiatives[openInitiative - 1].title}</h3>
              </div>
              
              <p className="text-white/80 mb-6">{initiatives[openInitiative - 1].description}</p>
              
              <div className="mb-4">
                <Carousel className="w-full">
                  <CarouselContent>
                    {initiatives[openInitiative - 1].slides.map((slide, index) => (
                      <CarouselItem key={index}>
                        <div className="flex flex-col gap-3 p-1">
                          <div className="aspect-video overflow-hidden rounded-lg">
                            <img 
                              src={slide.image} 
                              alt={`Slide ${index + 1} for ${initiatives[openInitiative - 1].title}`} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <p className="text-white text-sm text-center">{slide.caption}</p>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="flex justify-center gap-2 mt-2">
                    <CarouselPrevious className="relative inline-flex h-8 w-8" />
                    <CarouselNext className="relative inline-flex h-8 w-8" />
                  </div>
                </Carousel>
              </div>
              
              <div className="flex justify-end">
                <button 
                  onClick={closeInitiativeDetails}
                  className="text-white/70 hover:text-white text-sm px-4 py-1 rounded-full border border-white/30 hover:border-white/50 transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          )}
        </InitiativeDetailsContent>
      </Dialog>
    </section>
  );
};

// Custom Dialog Content component without close button
const InitiativeDetailsContent: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
      <DialogPrimitive.Content 
        className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] p-0 border-0 bg-transparent shadow-none duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]"
      >
        {children}
        {/* Close button explicitly removed */}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
};

export default RadialInitiativesShowcase;
