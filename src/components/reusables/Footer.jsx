import React, { useContext } from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
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
      <div class="header-wave">
        {darkMode ? (
          <img src={DayFooterWave} alt="Footer Wave"></img>
        ) : (
          <img src={NightFooterWave} alt="Night"></img>
        )}
      </div>
      <a onClick={clickHandler} className="back2Top fa fa-sort-up fa-2x">
        <FontAwesomeIcon icon={faSortUp} />
      </a>
      <div className="socials-footer">
        <a
          href="https://www.instagram.com/utkkkarshhh/"
          title="Instagram"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className="fa fa-instagram fa-2x"
            aria-hidden="true"
          />
        </a>
        <a href="https://www.twitter.com/utkkkarshhh/" title="Twitter">
          <FontAwesomeIcon
            icon={faTwitter}
            className="fa fa-twitter fa-2x"
            aria-hidden="true"
          />
        </a>
        <a
          href="https://github.com/utkkkarshhh/"
          title="Github"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faGithub}
            className="fa fa-github fa-2x"
            aria-hidden="true"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/utkkkarshhh/"
          title="LinkedIn"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faLinkedin}
            className="fa fa-linkedin fa-2x"
            aria-hidden="true"
          />
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
