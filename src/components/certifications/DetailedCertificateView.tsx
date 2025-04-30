
import React from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Certification } from "./types";
import { getColorScheme } from "./certificationUtils";
import { Button } from "../ui/button";

interface DetailedCertificateProps {
  certification: Certification;
  onClose: () => void;
}

const DetailedCertificateView: React.FC<DetailedCertificateProps> = ({ certification, onClose }) => {
  const colorScheme = getColorScheme(certification.colorScheme);
  
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="bg-background/95 backdrop-blur-sm border border-border rounded-lg overflow-hidden shadow-lg max-w-md w-full mx-auto"
      style={{ 
        background: `linear-gradient(135deg, ${colorScheme.from}40 0%, ${colorScheme.to}20 100%)` 
      }}
    >
      <div className="relative p-6">
        <Button 
          variant="ghost" 
          size="icon" 
          className="absolute right-4 top-4 text-muted-foreground hover:text-foreground" 
          onClick={onClose}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-foreground">{certification.name}</h3>
          <p className="text-muted-foreground">{certification.organization}</p>
          <p className="text-sm text-muted-foreground mt-1">{certification.date}</p>
        </div>
        
        <div className="space-y-4">
          <div className="min-h-[50px]">
            <p className="text-foreground/80">{certification.description}</p>
          </div>
          
          {certification.verificationUrl && (
            <div className="text-center pt-4">
              <a 
                href={certification.verificationUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors bg-white/10 hover:bg-white/20 text-white"
              >
                Verify Credential
              </a>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default DetailedCertificateView;
