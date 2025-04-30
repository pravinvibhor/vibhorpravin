
import React from "react";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";

const AboutMePanel: React.FC = () => {
  return (
    <div className="relative h-full glass-card rounded-l-2xl overflow-hidden border-l border-t border-b border-neon/20">
      <div 
        className="absolute inset-0 bg-gradient-to-br from-neon/10 to-transparent opacity-50 z-0"
      />
      
      <ScrollArea className="relative z-10 h-full">
        <div className="flex flex-col space-y-6 p-6">
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
              <img 
                src="/lovable-uploads/3100b1ae-2d7e-4d43-ab1e-f47ec6e91d96.png"
                alt="Vibhor Pravin" 
                className="w-full h-full object-cover"
                width="128"
                height="128"
                loading="eager"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/90 space-y-4"
          >
            <p>
              I've built a career at the intersection of strategy, client growth, and revenue innovation; turning untapped potential into tangible results, and always chasing the next 'Why hasn't anyone done this yet?'
            </p>
            <p>
              My journey includes driving revenue for Fortune 2000 clients in consulting, establishing Customer Success department, and launching new services like the SaaS procurement offering. From managing corporate banking portfolios at ICICI Bank to decoding SaaS adoption patterns at Quolum, I've loved the challenge of making numbers move.
            </p>
            <p>
              Beyond corporate life, I kicked off India Creates Club to spotlight grassroots innovation in India's bustling cities and built this very site to house all my chaos in clean code. Armed with an MBA, a B.Tech, and a streak of "let's figure it out," I thrive on turning ideas into impact.
            </p>
            <p>
              When I'm not wrangling strategies or building experiments, you'll find me grocery shopping, cooking or trying to find some underrated TV show.
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
      </ScrollArea>
    </div>
  );
};

export default AboutMePanel;
