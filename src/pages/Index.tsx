
import React from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import HeroSection from "../components/HeroSection";
import ExperienceTimeline from "../components/ExperienceTimeline";
import ProjectsShowcase from "../components/ProjectsShowcase";
import CertificationsSection from "../components/CertificationsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ParticlesBackground />
      <HeroSection />
      <ExperienceTimeline />
      <ProjectsShowcase />
      <CertificationsSection />
    </div>
  );
};

export default Index;
