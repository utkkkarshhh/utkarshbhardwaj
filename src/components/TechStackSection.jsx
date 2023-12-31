import React from "react";
import "./TechStackSection.css";
import TechStack from "./UI/TechStack";
import { techstack } from "./ProjectsList";

const TechStackSection = () => {
  return (
    <div className="tech-stack-section">
      <h1 className="heading">
        <span className="heading-span">tech</span>
        {""} stack
      </h1>
      <div className="tech-stack-items">
        {techstack.map((item, index)=>{
            return <TechStack name={item.name} image={item.image}/>
        })}
      </div>
    </div>
  );
};

export default TechStackSection;
