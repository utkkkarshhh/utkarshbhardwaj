// TechStack.js
import React from "react";

const TechStack = (props) => {
  const { name, icon, color, proficiency } = props;

  return (
    <div className="techStack" title={name}>
      <span
        style={proficiency ? { color: color } : {}}
        className="techStackLogo"
      >
        {icon}
      </span>
      <p className="stackName">{name}</p>
    </div>
  );
};

export default TechStack;
