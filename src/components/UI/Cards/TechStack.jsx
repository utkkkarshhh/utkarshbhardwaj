import React from "react";

const TechStack = (props) => {
  return (
    <div className="techStack" title={props.name}>
      <span style={{ color: props.color }} className="techStackLogo">
        {props.icon}
      </span>
      <p className="stackName">{props.name}</p>
    </div>
  );
};

export default TechStack;
