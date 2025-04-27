
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';

interface Section {
  id: string;
  title: string;
  component: React.ReactNode;
}

const NavigationTiles: React.FC = () => {
  const [selectedSection, setSelectedSection] = useState<string | null>(null);

  const sections: Section[] = [
    { id: 'about', title: 'About Me', component: <div>About Me Content</div> },
    { id: 'work', title: 'My Work', component: <div>Work Content</div> },
    { id: 'projects', title: 'My Projects', component: <div>Projects Content</div> },
    { id: 'contact', title: 'Contact Details', component: <div>Contact Content</div> },
  ];

  return (
    <div className="relative w-full max-w-6xl mx-auto px-4 pt-24">
      {/* Persistent Glassy Tile */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass absolute top-0 left-1/2 -translate-x-1/2 p-6 rounded-2xl w-64 z-20"
      >
        <div className="flex flex-col items-center gap-4">
          <Avatar className="w-16 h-16 border-2 border-neon">
            <AvatarImage src="/placeholder.svg" alt="LIG" />
            <AvatarFallback className="bg-neon/10">LIG</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <h3 className="text-white/90 font-medium">LIG</h3>
          </div>
        </div>
      </motion.div>

      {/* Navigation Tiles */}
      <div className="grid grid-cols-2 gap-4 mt-24">
        {sections.map((section) => (
          <motion.button
            key={section.id}
            onClick={() => setSelectedSection(section.id)}
            className={`glass p-6 rounded-xl transition-all duration-300 ${
              selectedSection === section.id
                ? 'neon-glow bg-neon/5'
                : 'hover:bg-white/5'
            }`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <h3 className="text-xl font-medium text-white">{section.title}</h3>
          </motion.button>
        ))}
      </div>

      {/* Content Area */}
      <AnimatePresence mode="wait">
        {selectedSection && (
          <motion.div
            key={selectedSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="mt-8 glass p-8 rounded-2xl"
          >
            {sections.find(s => s.id === selectedSection)?.component}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NavigationTiles;
