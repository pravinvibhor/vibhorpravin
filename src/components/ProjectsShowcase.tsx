import React, { useState } from "react";
import { motion } from "framer-motion";
interface ProjectCategory {
  id: string;
  name: string;
}
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string[];
  technologies: string[];
}
const ProjectsShowcase: React.FC = () => {
  const categories: ProjectCategory[] = [{
    id: "all",
    name: "All"
  }, {
    id: "react",
    name: "React"
  }, {
    id: "python",
    name: "Python"
  }, {
    id: "ui",
    name: "UI/UX"
  }];
  const projects: Project[] = [{
    id: 1,
    title: "Project Alpha",
    description: "A modern web application with real-time features",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
    category: ["react", "ui"],
    technologies: ["React", "Node.js", "Firebase"]
  }, {
    id: 2,
    title: "Data Visualizer",
    description: "Interactive dashboard for data analysis",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    category: ["python", "ui"],
    technologies: ["Python", "D3.js", "Flask"]
  }, {
    id: 3,
    title: "Mobile Application",
    description: "Cross-platform app with sleek design",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    category: ["react"],
    technologies: ["React Native", "Redux", "Expo"]
  }, {
    id: 4,
    title: "E-commerce Platform",
    description: "Full-featured online store solution",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    category: ["python", "react"],
    technologies: ["Django", "React", "PostgreSQL"]
  }, {
    id: 5,
    title: "Designer Portfolio",
    description: "Minimalist showcase for creative works",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
    category: ["ui"],
    technologies: ["Figma", "HTML/CSS", "JavaScript"]
  }];
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const filteredProjects = activeCategory === "all" ? projects : projects.filter(project => project.category.includes(activeCategory));
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
      }} className="text-white/70 mb-12 max-w-2xl">Explore my projects and work across different arenas and platforms</motion.p>
        
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        delay: 0.3,
        duration: 0.6
      }} className="flex flex-wrap gap-3 mb-10">
          {categories.map((category, index) => <motion.button key={category.id} whileHover={{
          scale: 1.05
        }} whileTap={{
          scale: 0.98
        }} onClick={() => setActiveCategory(category.id)} className={`px-5 py-2 rounded-full text-sm transition-all duration-300 ${activeCategory === category.id ? "bg-neon text-black font-medium" : "glass text-white/80 hover:text-white"}`}>
              {category.name}
            </motion.button>)}
        </motion.div>
        
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => <motion.div layout key={project.id} initial={{
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
              <p className="text-white/60 text-sm mb-4">{project.description}</p>
              
              {hoveredProject === project.id && <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map(tech => <span key={tech} className="text-xs bg-white/10 text-neon px-2 py-1 rounded-md">
                      {tech}
                    </span>)}
                </motion.div>}
            </motion.div>)}
        </motion.div>
      </div>
    </section>;
};
export default ProjectsShowcase;