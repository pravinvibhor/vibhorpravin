import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
const HeroSection: React.FC = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Building elegant digital experiences";
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
  return <section className="min-h-screen flex flex-col justify-center px-4 md:px-10 lg:px-20 relative">
      <motion.div initial={{
      opacity: 0,
      y: 20
    }} animate={{
      opacity: 1,
      y: 0
    }} transition={{
      duration: 1
    }} className="max-w-4xl">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-2 text-white">Vibhor Pravin</h1>
        <h2 className="text-2xl md:text-3xl font-medium mb-6 text-neon neon-text lg:text-3xl">Revenue Generator | Customer Success | Product Management </h2>
        <div className="h-8">
          <p className="text-lg md:text-xl text-white/80 mb-8">
            {displayText}
            <span className="border-r-2 border-neon animate-blink"></span>
          </p>
        </div>
        
        <div className="flex gap-4 mt-8">
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.98
        }} className="glass px-8 py-3 rounded-full text-white font-medium border border-neon/50 neon-glow">
            View My Work
          </motion.button>
          <motion.button whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.98
        }} className="glass px-8 py-3 rounded-full text-white/80 font-medium">
            Contact Me
          </motion.button>
        </div>
      </motion.div>
      
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 0.8
    }} transition={{
      delay: 0.5,
      duration: 1.5
    }} className="absolute top-20 right-10 w-64 h-64 rounded-full bg-neon/5 blur-[80px] animate-pulse"></motion.div>
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 0.6
    }} transition={{
      delay: 0.8,
      duration: 1.5
    }} className="absolute bottom-20 left-10 w-72 h-72 rounded-full bg-neon-purple/5 blur-[100px] animate-pulse"></motion.div>
    </section>;
};
export default HeroSection;