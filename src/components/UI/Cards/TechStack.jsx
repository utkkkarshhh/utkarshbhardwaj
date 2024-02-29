import React from "react";
import "./TechStack.css";

const TechStack = (props) => {
  return (
    <div className="techStack" title={props.name}>
      <div>
        <img src={props.image} alt="TechTool" />
      </div>
      <div>
        <p className="stackName">{props.name}</p>
      </div>
    </div>
  );
};

export default TechStack;
