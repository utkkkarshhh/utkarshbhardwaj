import React from "react";
import "./TechStack.css";

const TechStack = (props) => {
  return (
    <div className="techStack" title={props.name}>
      <span className="techStackLogo">{props.icon}</span>
      <p className="stackName">{props.name}</p>
    </div>
  );
};

export default TechStack;
