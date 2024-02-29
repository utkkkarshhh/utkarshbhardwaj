import React from "react";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import TechStackSection from "../sections/TechStackSection";
import ProjectsSection from "../sections/ProjectsSection";
import ContactSection from "../sections/ContactSection";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <TechStackSection />
    </div>
  );
};

export default LandingPage;
