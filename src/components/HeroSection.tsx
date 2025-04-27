
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import { Info } from "lucide-react";

const HeroSection: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Revenue Generator | Customer Success | Product Management";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center px-4 md:px-10 lg:px-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl"
      >
        <div className="flex items-center gap-3 mb-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
            Vibhor Pravin
          </h1>
          <HoverCard>
            <HoverCardTrigger asChild>
              <button className="mt-2">
                <Info className="w-6 h-6 text-neon hover:text-neon/80 transition-colors" />
              </button>
            </HoverCardTrigger>
            <HoverCardContent className="w-80 glass border-neon/20" side="right">
              <div className="space-y-2">
                <h4 className="text-lg font-semibold text-white">About Me</h4>
                <p className="text-sm text-white/70">
                  A passionate professional with expertise in revenue generation, customer success, and product management. 
                  Dedicated to driving business growth through strategic initiatives and customer-centric approaches.
                </p>
              </div>
            </HoverCardContent>
          </HoverCard>
        </div>
        <div className="h-8">
          <p className="text-2xl md:text-3xl font-medium text-neon lg:text-3xl">
            {displayText}
            <span className="border-r-2 border-neon animate-blink"></span>
          </p>
        </div>
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{ delay: 0.5, duration: 1.5 }}
        className="absolute top-20 right-10 w-64 h-64 rounded-full bg-neon/5 blur-[80px] animate-pulse"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 0.8, duration: 1.5 }}
        className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-neon-purple/5 blur-[100px] animate-pulse"
      />
    </section>
  );
};

export default HeroSection;
