
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog } from "@/components/ui/dialog";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { Initiative } from "@/data/initiativesData";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface InitiativeDetailsDialogProps {
  open: boolean;
  onClose: () => void;
  initiative: Initiative | null;
}

// Custom Dialog Content component without close button
const InitiativeDetailsContent: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  return (
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" onClick={(e) => {
        // Allow clicking the overlay to close the dialog
        const target = e.target as HTMLElement;
        if (target.classList.contains('fixed')) {
          const closeButton = document.querySelector('[data-radix-collection-item]');
          if (closeButton instanceof HTMLElement) {
            closeButton.click();
          }
        }
      }} />
      <DialogPrimitive.Content 
        className="fixed left-[50%] top-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] p-0 border-0 bg-transparent shadow-none duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%]"
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
      <InitiativeDetailsContent>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="glass-card p-6 max-w-xl mx-auto max-h-[80vh] overflow-hidden"
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
            <h3 className="text-2xl font-bold text-white">{initiative.title}</h3>
          </div>
          
          <p className="text-white/80 mb-6">{initiative.description}</p>
          
          <div className="mb-4">
            <Carousel 
              className="w-full"
              opts={{
                startIndex: slideIndex
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
                          />
                        </div>
                        <p className="text-white text-sm text-center">{slide.caption}</p>
                      </motion.div>
                    </AnimatePresence>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center gap-2 mt-4">
                <CarouselPrevious className="relative inline-flex h-8 w-8 rounded-full border border-white/40" />
                <CarouselNext className="relative inline-flex h-8 w-8 rounded-full border border-white/40" />
              </div>
            </Carousel>
            
            {/* Slide indicator dots */}
            <div className="flex justify-center gap-2 mt-3">
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
        </motion.div>
      </InitiativeDetailsContent>
    </Dialog>
  );
};

export default InitiativeDetailsDialog;
