
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
        <div className="mb-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white">
            Vibhor Pravin
          </h1>
        </div>
        <div className="h-8">
          <p className="text-2xl md:text-3xl font-medium text-neon lg:text-3xl text-left">
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

      {/* Floating Resume Button */}
      <motion.a 
        href="/resume.pdf" 
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
    </section>
  );
};

export default HeroSection;
