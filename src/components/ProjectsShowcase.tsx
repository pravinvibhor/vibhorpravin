
import React, { useState } from "react";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
}

const ProjectsShowcase: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  
  const projects: Project[] = [{
    id: 1,
    title: "India Creates Club",
    description: "A community platform for tech creators to connect in their city",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  }, {
    id: 2,
    title: "Tiffin Service in Dubai",
    description: "Launched a tiffin service for a restaurant in Dubai securing 14 subscriptions in the first week",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
  }, {
    id: 3,
    title: "Tata's Leather Strategy for D2C",
    description: "Developed E-commerce and susbcription Business Model for Tata's D2C Venture",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b"
  }];

  return <section className="py-16 md:py-24 px-4 md:px-10 lg:px-20" id="projects">
      <div className="max-w-6xl mx-auto">
        <motion.h2 initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.6
        }} className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Featured <span className="text-neon">Projects</span>
        </motion.h2>
        
        <motion.p initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2,
          duration: 0.6
        }} className="text-white/70 mb-8 max-w-2xl">
          Explore my projects and work across different arenas and platforms
        </motion.p>
        
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => <motion.div layout key={project.id} initial={{
            opacity: 0,
            y: 20
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1,
            duration: 0.5
          }} whileHover={{
            y: -5
          }} className={`glass-card p-6 overflow-hidden ${hoveredProject === project.id ? "neon-glow glass-hover" : ""}`} onMouseEnter={() => setHoveredProject(project.id)} onMouseLeave={() => setHoveredProject(null)}>
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-110" />
              </div>
              
              <h3 className="text-xl font-medium mb-2 text-white">{project.title}</h3>
              <p className="text-white/60 text-sm">{project.description}</p>
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
};

export default ProjectsShowcase;
