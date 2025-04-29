
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
      
      {/* Side-by-side container for Initiatives and Certifications */}
      <div className="flex flex-col lg:flex-row max-w-[2000px] mx-auto mt-8 mb-12">
        <div className="w-full lg:w-1/2 lg:pr-4">
          <RadialInitiativesShowcase />
        </div>
        <div className="w-full lg:w-1/2 lg:pl-4">
          <CertificationsSection />
        </div>
      </div>
    </div>
  );
};

export default Index;
