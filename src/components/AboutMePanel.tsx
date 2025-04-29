
import React from "react";
import { motion } from "framer-motion";

const AboutMePanel: React.FC = () => {
  return (
    <div className="relative h-full glass-card rounded-l-2xl overflow-hidden border-l border-t border-b border-neon/20">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-neon/10 to-transparent opacity-50 z-0"
      />
      
      <div className="relative z-10 flex flex-col space-y-6 p-6">
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="space-y-2"
        >
          <h2 className="text-2xl font-bold text-neon">About Me</h2>
          <div className="h-0.5 w-16 bg-neon/30"></div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="w-32 h-32 rounded-full overflow-hidden border-2 border-neon/30 glow-sm">
            <div className="w-full h-full bg-neon/10 flex items-center justify-center text-neon">
              VP
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-white/90 space-y-4"
        >
          <p>
            A passionate professional with expertise in revenue generation, customer success, and product management.
          </p>
          <p>
            With over a decade of experience in the tech industry, I specialize in driving business growth through strategic initiatives and customer-centric approaches.
          </p>
          <p>
            My focus is on developing innovative solutions that meet business needs while ensuring exceptional user experiences. I excel at bridging the gap between technical and non-technical stakeholders.
          </p>
          <p>
            I am dedicated to continuous learning and staying ahead of industry trends to deliver cutting-edge strategies that drive meaningful results.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-4"
        >
          <h3 className="text-lg font-semibold text-neon mb-2">Core Skills</h3>
          <div className="flex flex-wrap gap-2">
            {["Revenue Growth", "Customer Success", "Product Strategy", "Team Leadership", "Market Analysis", "Strategic Planning"].map((skill, i) => (
              <span key={i} className="px-3 py-1 rounded-full text-xs text-white/80 bg-neon/10 border border-neon/20">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMePanel;
