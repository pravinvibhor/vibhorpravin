
import React from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import HeroSection from "../components/HeroSection";
import ExperienceTimeline from "../components/ExperienceTimeline";
import ProjectsShowcase from "../components/ProjectsShowcase";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ParticlesBackground />
      <HeroSection />
      <ExperienceTimeline />
      <ProjectsShowcase />
    </div>
  );
};

export default Index;
