
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
    <>
      {/* Resume Button */}
      <motion.a 
        href="https://drive.google.com/file/d/1bylxuX6auDFSX87PIiTZyc5v5bDruHlH/view?usp=sharing" 
        target="_blank"
        rel="noopener noreferrer"
        download="Vibhor_Pravin_Resume.pdf"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="glass px-6 py-3 rounded-full text-white text-sm fixed top-5 right-5 hover:glass-hover transition-all duration-300 z-50 flex items-center gap-2"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-neon">
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
          <polyline points="14 2 14 8 20 8"></polyline>
          <line x1="16" y1="13" x2="8" y2="13"></line>
          <line x1="16" y1="17" x2="8" y2="17"></line>
          <polyline points="10 9 9 9 8 9"></polyline>
        </svg>
        Resume
      </motion.a>
      
      {/* Icons Container - Side by side below Resume */}
      <div className="fixed top-20 right-5 flex gap-4 z-40">
        {/* LinkedIn Icon */}
        <motion.a
          href="https://www.linkedin.com/in/vibhorpravin/" 
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center glass rounded-full"
          whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(0,224,255,0.6)" }}
        >
          <Linkedin size={20} className="text-neon" />
        </motion.a>

        {/* About Me Button */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild>
            <motion.div 
              className="w-10 h-10 cursor-pointer glass rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1, boxShadow: "0 0 15px rgba(0,224,255,0.6)" }}
              onClick={() => setOpen(true)}
            >
              {/* Space Helmet SVG */}
              <svg 
                viewBox="0 0 50 50" 
                className="w-6 h-6" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Helmet Base */}
                <path 
                  d="M25 8C16.5 8 10 15.5 10 25C10 34.5 16.5 42 25 42C33.5 42 40 34.5 40 25C40 15.5 33.5 8 25 8Z" 
                  fill="#00000000" 
                  stroke="#00e0ff" 
                  strokeWidth="2"
                  strokeOpacity={animate ? 1 : 0.7}
                />
                
                {/* Helmet Visor */}
                <path 
                  d="M16 22C16 22 19 18 25 18C31 18 34 22 34 22V30C34 30 31 34 25 34C19 34 16 30 16 30V22Z" 
                  fill="#00e0ff" 
                  fillOpacity="0.2" 
                  stroke="#00e0ff"
                  strokeWidth="1.5"
                  strokeOpacity={animate ? 1 : 0.7}
                />
                
                {/* Helmet Glow */}
                <motion.circle 
                  cx="25" cy="26" r="10" 
                  fill="url(#helmet-gradient)" 
                  fillOpacity="0.4"
                  animate={{ 
                    r: animate ? 10 : 9,
                    fillOpacity: animate ? 0.5 : 0.3
                  }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                
                {/* Helmet Base Ring */}
                <ellipse
                  cx="25" cy="38" rx="12" ry="2"
                  fill="#00e0ff"
                  fillOpacity="0.2"
                />
                
                {/* Light effect for visor */}
                <defs>
                  <radialGradient id="helmet-gradient" cx="25" cy="26" r="10" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#ffffff" />
                    <stop offset="30%" stopColor="#00ffff" />
                    <stop offset="100%" stopColor="#00e0ff" stopOpacity="0" />
                  </radialGradient>
                </defs>
              </svg>
            </motion.div>
          </SheetTrigger>

          <SheetContent side="right" className="glass border-neon/20 w-80 sm:w-96 max-h-[80vh] my-auto p-0">
            <AboutMePanel />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
};

export default AboutMeTrigger;
