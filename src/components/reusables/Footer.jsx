import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { faSortUp } from "@fortawesome/free-solid-svg-icons";
import DayFooterWave from "../../img/footer-wave.png";
import NightFooterWave from "../../img/nightFooterWave.png";
import ModeContext from "../store/ModeContext";

function Footer() {
  const { darkMode } = useContext(ModeContext);

  const clickHandler = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer className="footer-section">
      <div className="header-wave">
        {darkMode ? (
          <img src={DayFooterWave} alt="Footer Wave"></img>
        ) : (
          <img src={NightFooterWave} alt="Night"></img>
        )}
      </div>
      <span onClick={clickHandler} className="back2Top fa fa-sort-up fa-2x">
        <FontAwesomeIcon icon={faSortUp} />
      </span>
      <div className="socials-footer">
        <a
          className="footer-item"
          href="https://www.instagram.com/utkkkarshhh/"
          title="Instagram"
        >
          <FaInstagram />
        </a>
        <a
          className="footer-item"
          href="https://www.twitter.com/utkkkarshhh/"
          title="Twitter"
        >
          <FaXTwitter />
        </a>
        <a
          className="footer-item"
          href="https://github.com/utkkkarshhh/"
          title="Github"
        >
          <FaGithub />
        </a>
        <a
          className="footer-item"
          href="https://www.linkedin.com/in/utkkkarshhh/"
          title="LinkedIn"
        >
          <FaLinkedin />
        </a>
      </div>
      <hr className="footer-hr" />
      <p id="creds">
        Designed and Developed by
        <a href="https://www.linkedin.com/in/utkkkarshhh/"> Utkarsh Bhardwaj</a>
      </p>
    </footer>
  );
}

export default Footer;
