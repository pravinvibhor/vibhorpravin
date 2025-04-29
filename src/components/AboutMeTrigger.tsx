
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import AboutMePanel from "./AboutMePanel";
import { Linkedin } from "lucide-react";

const AboutMeTrigger: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [animate, setAnimate] = useState(false);

  // Create pulsing animation effect
  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(prev => !prev);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-5 flex items-center gap-4 z-40">
      {/* LinkedIn Button */}
      <motion.a
        href="https://linkedin.com/in/" 
        target="_blank"
        rel="noopener noreferrer"
        className="fixed left-5 top-5 w-10 h-10 z-40 flex items-center justify-center glass rounded-full"
        whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(0,224,255,0.6)" }}
      >
        <Linkedin size={20} className="text-neon" />
      </motion.a>

      {/* About Me Button */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <motion.div 
            className="fixed right-5 top-20 w-10 h-10 z-40 cursor-pointer"
            whileHover={{ scale: 1.1 }}
            onClick={() => setOpen(true)}
          >
            {/* Animated constellation graphic */}
            <svg 
              viewBox="0 0 50 50" 
              className="w-full h-full" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Connecting lines */}
              <motion.line 
                x1="15" y1="15" 
                x2="25" y2="25" 
                stroke="#00e0ff" 
                strokeWidth="0.5" 
                strokeOpacity={animate ? 0.8 : 0.4}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
              />
              <motion.line 
                x1="25" y1="25" 
                x2="35" y2="15" 
                stroke="#00e0ff" 
                strokeWidth="0.5" 
                strokeOpacity={animate ? 0.8 : 0.4}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.3 }}
              />
              <motion.line 
                x1="25" y1="25" 
                x2="35" y2="35" 
                stroke="#00e0ff" 
                strokeWidth="0.5" 
                strokeOpacity={animate ? 0.8 : 0.4}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.6 }}
              />
              <motion.line 
                x1="25" y1="25" 
                x2="15" y2="35" 
                stroke="#00e0ff" 
                strokeWidth="0.5" 
                strokeOpacity={animate ? 0.8 : 0.4}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse", delay: 0.9 }}
              />
              
              {/* Constellation dots with brighter styling */}
              <motion.circle 
                cx="15" cy="15" r="2" 
                fill="#00ffff" 
                animate={{ 
                  r: animate ? 2.5 : 2,
                  fillOpacity: animate ? 1 : 0.85,
                  filter: animate ? "drop-shadow(0 0 3px #00ffff)" : "drop-shadow(0 0 1px #00ffff)"
                }} 
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.circle 
                cx="35" cy="15" r="2" 
                fill="#00ffff"
                animate={{ 
                  r: animate ? 2 : 2.5,
                  fillOpacity: animate ? 0.85 : 1,
                  filter: animate ? "drop-shadow(0 0 1px #00ffff)" : "drop-shadow(0 0 3px #00ffff)"
                }} 
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.circle 
                cx="25" cy="25" r="3" 
                fill="#00ffff" 
                animate={{ 
                  r: animate ? 3.5 : 3,
                  filter: animate ? "drop-shadow(0 0 5px #00ffff)" : "drop-shadow(0 0 3px #00ffff)"
                }} 
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.circle 
                cx="35" cy="35" r="2" 
                fill="#00ffff"
                animate={{ 
                  r: animate ? 2.5 : 2,
                  fillOpacity: animate ? 1 : 0.85,
                  filter: animate ? "drop-shadow(0 0 3px #00ffff)" : "drop-shadow(0 0 1px #00ffff)"
                }} 
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
              <motion.circle 
                cx="15" cy="35" r="2" 
                fill="#00ffff"
                animate={{ 
                  r: animate ? 2 : 2.5,
                  fillOpacity: animate ? 0.85 : 1,
                  filter: animate ? "drop-shadow(0 0 1px #00ffff)" : "drop-shadow(0 0 3px #00ffff)"
                }} 
                transition={{ duration: 1.5, ease: "easeInOut" }}
              />
            </svg>
          </motion.div>
        </SheetTrigger>

        <SheetContent side="right" className="glass border-neon/20 w-80 sm:w-96 max-h-[80vh] my-auto overflow-y-auto p-0">
          <AboutMePanel />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default AboutMeTrigger;
