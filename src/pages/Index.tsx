
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
      <RadialInitiativesShowcase />
      <CertificationsSection />
    </div>
  );
};

export default Index;
