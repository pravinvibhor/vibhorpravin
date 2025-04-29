
import React from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import HeroSection from "../components/HeroSection";
import ExperienceTimeline from "../components/ExperienceTimeline";
import RadialInitiativesShowcase from "../components/RadialInitiativesShowcase";
import CertificationsSection from "../components/CertificationsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ParticlesBackground />
      <HeroSection />
      <ExperienceTimeline />
      
      {/* Stacked container for Initiatives and Certifications */}
      <div className="max-w-[2000px] mx-auto mt-8 mb-12 px-4">
        <div className="w-full mb-16">
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
