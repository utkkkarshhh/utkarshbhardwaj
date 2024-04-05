import React, { useContext } from "react";
import { Link } from "react-router-dom";
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
              <a href="https://www.linkedin.com/in/utkkkarshhh">
                Download Resume
              </a>
            </button>
            <button className={darkMode ? "heroButton1" : "darkModeButton"}>
              <Link to="/contact">Contact Me</Link>
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
