import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import VectorImage from "../../img/3301603.png";
import ModeContext from "../store/ModeContext";

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const { darkMode } = useContext(ModeContext);
  const niches = [
    "Utkarsh Bhardwaj",
    "Software Developer",
    "Video Editor",
    "Web Developer",
  ];

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % niches.length);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [index, niches.length]);

  return (
    <div className="hero">
      <div className="left-section">
        <p className="herohead">Welcome to my portfolio 🙏 </p>
        <h1 className="heroHeading">
          Hey there, I'm <span className="niches">{niches[index]}</span>
        </h1>
        <p className="heroDescription">
          Crafting Enticing Digital Products through design and code👨‍💻
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
  );
};

export default HeroSection;
