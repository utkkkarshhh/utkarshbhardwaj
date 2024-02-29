import React, { useContext } from "react";
import "./HeroSection.css";
import VectorImage from "../../img/3301603.png";
import ModeContext from "../store/ModeContext";

const HeroSection = () => {
  const { darkMode } = useContext(ModeContext);
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="left-section">
          <h1 className="heroHeading">Utkarsh Bhardwaj</h1>
          <p className="heroDescription">
            Crafting enticing digital products through design and code
          </p>
          <div className="heroButtons">
            <button className={darkMode ? "heroButton1" : "darkModeButton"}>
              Download Resume
            </button>
            <button className={darkMode ? "heroButton1" : "darkModeButton"}>
              Contact Me
            </button>
          </div>
        </div>
        <div className="right-section">
          <img className="VectorImage" src={VectorImage} alt="Vector" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
