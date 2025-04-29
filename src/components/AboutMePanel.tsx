
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
              I've built my career at the intersection of strategy, client growth, and revenue innovation—turning untapped potential into tangible results. With a track record spanning Ed-Tech, Finance, and SaaS, I'm eager to bring this expertise to your team.
            </p>
            <p>
              As a Client Growth Partner, I drove revenue growth for Fortune 2000 clients in EMEA and APAC by creating GTM strategies, defining ICPs, and building pipelines that expanded TAM and delivered transformative business results.
            </p>
            <p>
              At ICICI Bank, I managed corporate portfolios and sharpened my client engagement skills, while at Cerebry, I crafted pricing strategies and built sales pipelines that fueled revenue growth. At Quolum, I bridged the gap between product and customer needs, driving adoption and delivering value to SaaS users.
            </p>
            <p>
              With an MBA, a Bachelor of Technology, and hands-on experience scaling opportunities across regions and industries, I thrive on solving complex problems and creating pathways for growth. I'd love the chance to hone my skills in strategy, execution, and client success aligning with organisations' vision and goals.
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
