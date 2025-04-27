
import React, { useState } from "react";
import { motion } from "framer-motion";

interface TimelineItem {
  id: number;
  company: string;
  logo: string;
  role: string;
  duration: string;
  description: string[];
  isActive: boolean;
}

const ExperienceTimeline: React.FC = () => {
  const [timelineItems, setTimelineItems] = useState<TimelineItem[]>([
    {
      id: 1,
      company: "Tech Corp",
      logo: "/placeholder.svg",
      role: "Senior Developer",
      duration: "2022 - Present",
      description: [
        "Led the development of core product features",
        "Implemented CI/CD pipeline reducing deployment time by 40%",
        "Mentored junior developers and conducted code reviews"
      ],
      isActive: true,
    },
    {
      id: 2,
      company: "Digital Agency",
      logo: "/placeholder.svg",
      role: "Web Developer",
      duration: "2020 - 2022",
      description: [
        "Developed responsive websites for various clients",
        "Created a custom CMS solution using React and Node.js",
        "Optimized site performance and SEO"
      ],
      isActive: false,
    },
    {
      id: 3,
      company: "Startup Inc",
      logo: "/placeholder.svg",
      role: "Frontend Engineer",
      duration: "2018 - 2020",
      description: [
        "Built the company's flagship product interface",
        "Implemented user authentication and data visualization",
        "Reduced bundle size by 35% through code optimization"
      ],
      isActive: false,
    },
  ]);

  const handleSelectItem = (id: number) => {
    setTimelineItems(prev => 
      prev.map(item => ({
        ...item,
        isActive: item.id === id
      }))
    );
  };

  const activeItem = timelineItems.find(item => item.isActive);

  return (
    <section className="py-16 md:py-24 px-4 md:px-10 lg:px-20 relative" id="experience">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-white"
        >
          Experience <span className="text-neon">Timeline</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-5 gap-8">
          <div className="md:col-span-2 relative">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-muted"></div>
            
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative mb-16 last:mb-0 pl-10"
              >
                <div
                  className={`absolute left-0 w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-all duration-300 ${
                    item.isActive
                      ? "bg-neon neon-glow"
                      : "bg-secondary border border-white/10"
                  }`}
                  onClick={() => handleSelectItem(item.id)}
                >
                  <div className={`w-3 h-3 rounded-full ${item.isActive ? "bg-black" : "bg-white/50"}`}></div>
                </div>
                
                <div onClick={() => handleSelectItem(item.id)} className="cursor-pointer">
                  <h3 className={`text-xl font-medium mb-1 ${item.isActive ? "text-neon" : "text-white"}`}>
                    {item.company}
                  </h3>
                  <p className="text-white/60">{item.duration}</p>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            layout
            key={activeItem?.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="md:col-span-3"
          >
            {activeItem && (
              <div className="glass p-8 rounded-2xl">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg glass flex items-center justify-center">
                    <img src={activeItem.logo} alt={activeItem.company} className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{activeItem.role}</h3>
                    <p className="text-neon">{activeItem.company}</p>
                  </div>
                </div>
                
                <ul className="space-y-3">
                  {activeItem.description.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-neon mt-1">•</span>
                      <span className="text-white/80">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
