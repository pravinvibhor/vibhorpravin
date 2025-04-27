
import React from "react";
import ParticlesBackground from "../components/ParticlesBackground";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import NavigationTiles from "../components/NavigationTiles";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ParticlesBackground />
      <Navbar />
      <HeroSection />
      <NavigationTiles />
    </div>
  );
};

export default Index;
