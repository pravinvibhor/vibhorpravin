
import React from "react";
import { motion } from "framer-motion";
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

const InitiativeDetailsDialog: React.FC<InitiativeDetailsDialogProps> = ({ open, onClose, initiative }) => {
  if (!initiative) return null;
  
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <InitiativeDetailsContent>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="glass-card p-6 max-w-xl mx-auto"
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
            <Carousel className="w-full">
              <CarouselContent>
                {initiative.slides.map((slide, index) => (
                  <CarouselItem key={index}>
                    <div className="flex flex-col gap-3 p-1">
                      <div className="aspect-video overflow-hidden rounded-lg">
                        <img 
                          src={slide.image} 
                          alt={`Slide ${index + 1} for ${initiative.title}`} 
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
              onClick={onClose}
              className="text-white/70 hover:text-white text-sm px-4 py-1 rounded-full border border-white/30 hover:border-white/50 transition-colors"
            >
              Close
            </button>
          </div>
        </motion.div>
      </InitiativeDetailsContent>
    </Dialog>
  );
};

export default InitiativeDetailsDialog;
