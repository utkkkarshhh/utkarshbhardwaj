import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import image from "../../img/utkarsh-img.png";
import ModeContext from "../store/ModeContext";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
  const [index, setIndex] = useState(0);
  const { darkMode } = useContext(ModeContext);
  const niches = [
    "Utkarsh Bhardwaj",
    "Software Developer",
    "UX Designer",
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
          Hey there, I'm <br />
          <span className="niches">{niches[index]}</span>
        </h1>
        <p className="heroDescription">
          Crafting Enticing Digital Products through design and code👨‍💻
        </p>
        <div className="hero-socials">
          <a
            className="hs-item"
            href="https://www.instagram.com/utkkkarshhh/"
            title="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            className="hs-item"
            href="https://www.twitter.com/utkkkarshhh/"
            title="Twitter"
          >
            <FaXTwitter />
          </a>
          <a
            className="hs-item"
            href="https://github.com/utkkkarshhh/"
            title="Github"
          >
            <FaGithub />
          </a>
          <a
            className="hs-item"
            href="https://www.linkedin.com/in/utkkkarshhh/"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>
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
        <img className="hero-img" src={image} alt="Utkarsh" />
      </div>
    </div>
  );
};

export default HeroSection;
