
import React from "react";
import { motion } from "framer-motion";
import { FileText, Book, ExternalLink } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { Certification } from "./types";
import { getColorScheme } from "./certificationUtils";

interface DetailedCertificateViewProps {
  certification: Certification;
  onClose: () => void;
}

const DetailedCertificateView: React.FC<DetailedCertificateViewProps> = ({ 
  certification, 
  onClose 
}) => {
  const colorScheme = getColorScheme(certification.colorScheme);
  
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

export default DetailedCertificateView;
