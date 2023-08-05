import React from "react";
import "./TechStack.css";

const TechStack = (props) => {
  return (
    <div className="tech-stack" title={props.name}>
      <div>
        <img src={props.image} alt="TechTool"/>
      </div>
      <div>
        <p className="stack-name">{props.name}</p>
      </div>
    </div>
  );
};

export default TechStack;
