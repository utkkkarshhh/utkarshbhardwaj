import React from "react";
import "./HeroSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import VectorImage from "../../img/3301603.png";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <div className="left-section">
          <h1 className="heroHeading">Utkarsh Bhardwaj</h1>
          <p className="heroDescription">
            Crafting enticing digital products through design and code
          </p>
          <div className="social-icons">
            <FontAwesomeIcon icon={faFacebookF} />
            <FontAwesomeIcon icon={faTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
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
