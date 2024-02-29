import React from "react";
import "./HeroSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="left-section">
          <h1>Utkarsh Bhardwaj</h1>
          <p>Crafting enticing digital products through design and code</p>
          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
          </div>
        </div>
        <div className="right-section">
          <img src="https://via.placeholder.com/400x400" alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
