
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog } from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Initiative } from "@/data/initiativesData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

interface InitiativeDetailsDialogProps {
  open: boolean;
  onClose: () => void;
  initiative: Initiative | null;
}

// Custom Dialog Content component without close button
const InitiativeDetailsContent: React.FC<{
  children: React.ReactNode;
  onClose: () => void;
}> = ({ children, onClose }) => {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" onClick={(e) => {
        // Allow clicking the overlay to close the dialog
        const target = e.target as HTMLElement;
        if (target.classList.contains('fixed')) {
          onClose();
        }
      }} />
      <DialogPrimitive.Content 
        className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] p-0 border-0 bg-transparent shadow-none duration-200"
      >
        {children}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  );
};

const InitiativeDetailsDialog: React.FC<InitiativeDetailsDialogProps> = ({ open, onClose, initiative }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  
  if (!initiative) return null;
  
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <InitiativeDetailsContent onClose={onClose}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ 
            enter: { duration: 0.5, ease: "easeOut" },
            exit: { duration: 0.15, ease: "linear" }
          }}
          className="glass-card p-6 max-w-xl mx-auto max-h-[80vh] overflow-hidden relative"
          style={{
            background: `linear-gradient(135deg, ${initiative.color}80 0%, ${initiative.color}40 100%)`,
            borderColor: "rgba(255,255,255,0.2)"
          }}
        >
          <div className="mb-4 flex items-center gap-3">
            <div className="p-2 rounded-full bg-white/10">
              {React.createElement(initiative.icon, { 
                className: "w-5 h-5 text-white" 
              })}
            </div>
            {initiative.link ? (
              <a 
                href={initiative.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl font-bold text-white hover:text-neon transition-colors"
              >
                {initiative.title}
              </a>
            ) : (
              <h3 className="text-2xl font-bold text-white">{initiative.title}</h3>
            )}
          </div>
          
          <p className="text-white/80 mb-6">{initiative.description}</p>
          
          <div className="mb-4">
            <Carousel 
              className="w-full"
              opts={{
                startIndex: slideIndex,
                dragFree: true
              }}
              setApi={(api) => {
                api?.on('select', () => {
                  setSlideIndex(api.selectedScrollSnap());
                });
              }}
            >
              <CarouselContent>
                {initiative.slides.map((slide, index) => (
                  <CarouselItem key={index}>
                    <AnimatePresence mode="wait">
                      <motion.div 
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-col gap-3 p-1"
                      >
                        <div className="aspect-video overflow-hidden rounded-lg">
                          <img 
                            src={slide.image} 
                            alt={`Slide ${index + 1} for ${initiative.title}`} 
                            className="w-full h-full object-cover"
                            draggable="false"
                          />
                        </div>
                        <p className="text-white text-sm text-center">{slide.caption}</p>
                      </motion.div>
                    </AnimatePresence>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            
            {/* Slide indicator dots */}
            <div className="flex justify-center gap-2 mt-6">
              {initiative.slides.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 rounded-full transition-all ${
                    slideIndex === index ? "bg-white scale-125" : "bg-white/30"
                  }`}
                  onClick={() => {
                    setSlideIndex(index);
                  }}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
            
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
            aria-label="Close dialog"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </motion.div>
      </InitiativeDetailsContent>
    </Dialog>
  );
};

export default InitiativeDetailsDialog;
