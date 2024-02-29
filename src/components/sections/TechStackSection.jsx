import React from "react";
import "./TechStackSection.css";
import TechStack from "../UI/Cards/TechStack";
import { techstack } from "../data/ProjectsList";

const TechStackSection = () => {
  return (
    <div className="tech-stack-section">
      <h1 className="heading">
        <span className="heading-span">tech</span> stack
      </h1>
      <div className="tech-stack-items">
        {techstack.map((item, index) => {
          return <TechStack name={item.name} icon={item.icon} />;
        })}
      </div>
    </div>
  );
};

export default TechStackSection;
