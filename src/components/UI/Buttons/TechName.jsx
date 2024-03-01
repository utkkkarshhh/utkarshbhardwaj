import React, { useContext } from "react";
import "./TechName.css";
import ModeContext from "../../store/ModeContext";

const TechName = (props) => {
  const { darkMode } = useContext(ModeContext);
  return (
    <div>
      <p className={darkMode ? "tech-item-name" : "tech-item-name-day"}>
        {props.techName}
      </p>
    </div>
  );
};

export default TechName;
