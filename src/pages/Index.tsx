
import React from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import HeroSection from "../components/HeroSection";
import ExperienceTimeline from "../components/ExperienceTimeline";
import RadialInitiativesShowcase from "../components/RadialInitiativesShowcase";
import CertificationsSection from "../components/CertificationsSection";
import AboutMeTrigger from "../components/AboutMeTrigger";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ParticlesBackground />
      <AboutMeTrigger />
      <HeroSection />
      <ExperienceTimeline />
      
      {/* Stacked container for Initiatives and Certifications with proper spacing */}
      <div className="max-w-[2000px] mx-auto px-4">
        <div className="w-full mb-20">
          <RadialInitiativesShowcase />
        </div>
        <div className="w-full">
          <CertificationsSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
