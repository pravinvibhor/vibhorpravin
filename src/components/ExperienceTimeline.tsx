
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
      company: "MarketsandMarkets",
      logo: "/lovable-uploads/5f05e48d-2ff3-4666-a8d9-9cd4bfe8c140.png",
      role: "Client Growth Partner",
      duration: "2024 - 2025",
      description: [
        "Managed IT consulting & growth projects (US/EMEA)",
        "Delivered advisory services & built opportunity pipelines of over $100k monthly",
        "Designed GTM strategies and expanded TAM for Fortune 2000 clients"
      ],
      isActive: true,
    },
    {
      id: 2,
      company: "Quolum",
      logo: "/lovable-uploads/02f50d70-18ec-4b26-ab83-a2d0ee8b1bd8.png",
      role: "Customer Success Manager",
      duration: "2022 - 2024",
      description: [
        "Established Customer Success department; managed all India & US clients",
        "Achieved 90%+ client retention rate through enhanced service & value",
        "Launched new SaaS procurement service delivering over $300k in client savings"
      ],
      isActive: false,
    },
    {
      id: 3,
      company: "ICICI Bank",
      logo: "/lovable-uploads/fd929336-e4cc-4629-803f-a0565988c21b.png",
      role: "Accounts Manager",
      duration: "2021 - 2022",
      description: [
        "Led New Client Acquisition (NCA) campaign for South India resulting in an increase of over 5% Q-o-Q growth",
        "Managed corporate banking relationships with orgs generating over INR 50 crore revenue",
        "Strategised and executed sales strategies for corporate onboarding"
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
    <section className="py-12 md:py-20 px-4 md:px-10 lg:px-20 relative" id="experience">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12 text-white text-center"
        >
          Career <span className="text-neon">Path</span>
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
                onMouseEnter={() => handleSelectItem(item.id)}
              >
                <div
                  className={`absolute left-0 w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300 ${
                    item.isActive
                      ? "bg-neon neon-glow"
                      : "bg-secondary border border-white/10"
                  }`}
                >
                  <div className={`w-3 h-3 rounded-full ${item.isActive ? "bg-black" : "bg-white/50"}`}></div>
                </div>
                
                <div className="cursor-pointer">
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
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="glass p-8 rounded-2xl"
              >
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
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
