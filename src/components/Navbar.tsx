
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

interface NavLink {
  name: string;
  href: string;
  isExternal?: boolean;
}

const navLinks: NavLink[] = [
  { name: "Home", href: "#" },
  { name: "Experience", href: "#experience" },
  { name: "Initiatives", href: "#initiatives" },
  { name: "Certifications", href: "#certifications" },
  { 
    name: "Resume", 
    href: "https://drive.google.com/file/d/1Qx5L3KVPp863Wtg104qw8xsqw52LmXP2/view?usp=sharing", 
    isExternal: true 
  }
];

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 20) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-2 bg-background/80 backdrop-blur-md shadow-md" : "py-4 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a href="#" className="text-white font-semibold text-xl">
          <span className="text-neon">VP</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              className="text-white/80 hover:text-neon transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white/80 hover:text-neon hover:bg-transparent"
          onClick={toggleMobileMenu}
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-50 md:hidden bg-background/95 backdrop-blur-md"
            >
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-center px-4 py-4">
                  <a href="#" className="text-white font-semibold text-xl" onClick={closeMobileMenu}>
                    <span className="text-neon">VP</span>
                  </a>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-white/80 hover:text-neon hover:bg-transparent"
                    onClick={closeMobileMenu}
                  >
                    <X className="h-6 w-6" />
                    <span className="sr-only">Close menu</span>
                  </Button>
                </div>
                <nav className="flex flex-col items-center justify-center flex-1 space-y-8">
                  {navLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target={link.isExternal ? "_blank" : undefined}
                      rel={link.isExternal ? "noopener noreferrer" : undefined}
                      className="text-white/80 hover:text-neon transition-colors text-lg"
                      onClick={closeMobileMenu}
                    >
                      {link.name}
                    </a>
                  ))}
                </nav>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Navbar;
