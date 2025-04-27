
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Briefcase, FolderKanban, Mail } from 'lucide-react';

interface TileContentProps {
  id: string;
  title: string;
  icon: React.ReactNode;
}

const tiles: TileContentProps[] = [
  { id: 'about', title: 'About Me', icon: <User className="w-6 h-6" /> },
  { id: 'work', title: 'My Work', icon: <Briefcase className="w-6 h-6" /> },
  { id: 'projects', title: 'My Projects', icon: <FolderKanban className="w-6 h-6" /> },
  { id: 'contact', title: 'Contact Details', icon: <Mail className="w-6 h-6" /> },
];

const TilingSystem: React.FC = () => {
  const [selectedTile, setSelectedTile] = useState<string | null>(null);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      {/* Persistent Glassy Tile */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6 mb-8 flex items-center gap-4"
      >
        <div className="w-16 h-16 rounded-full bg-neon/20 flex items-center justify-center text-neon text-2xl font-bold">
          LIG
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Your Name</h1>
          <p className="text-white/60">Full Stack Developer</p>
        </div>
      </motion.div>

      {/* Navigation Tiles */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        {tiles.map((tile) => (
          <motion.button
            key={tile.id}
            onClick={() => setSelectedTile(tile.id)}
            className={`glass-card p-6 flex flex-col items-center justify-center gap-3 transition-all duration-300
              ${selectedTile === tile.id ? 'ring-2 ring 2 ring-neon shadow-[0_0_15px_rgba(0,224,255,0.3)]' : 'hover:glass-hover'}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {tile.icon}
            <span className="text-white/80">{tile.title}</span>
          </motion.button>
        ))}
      </div>

      {/* Content Area */}
      <AnimatePresence mode="wait">
        {selectedTile && (
          <motion.div
            key={selectedTile}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="glass-card p-6"
          >
            <h2 className="text-xl font-semibold text-white mb-4">
              {tiles.find(t => t.id === selectedTile)?.title}
            </h2>
            <div className="text-white/70">
              {/* Placeholder content - you can replace this with actual content components */}
              Content for {selectedTile} section goes here
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TilingSystem;
