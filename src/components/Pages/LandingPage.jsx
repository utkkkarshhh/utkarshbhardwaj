import React from "react";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import TechStackSection from "../sections/TechStackSection";
import ProjectsSection from "../sections/ProjectsSection";

const LandingPage = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <TechStackSection />
      <ProjectsSection/>
    </div>
  );
};

export default LandingPage;
