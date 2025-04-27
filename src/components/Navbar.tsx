
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "glass py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <a href="#" className="text-neon font-bold text-2xl tracking-tight">
          SOIDEL
        </a>
        
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-white hover:text-neon transition-colors">
            Home
          </a>
          <a href="#experience" className="text-white/80 hover:text-neon transition-colors">
            Experience
          </a>
          <a href="#projects" className="text-white/80 hover:text-neon transition-colors">
            Projects
          </a>
          <a href="#contact" className="text-white/80 hover:text-neon transition-colors">
            Contact
          </a>
        </nav>
        
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="glass px-4 py-2 rounded-full text-white text-sm"
        >
          Reach Out
        </motion.button>
      </div>
    </motion.header>
  );
};

export default Navbar;
