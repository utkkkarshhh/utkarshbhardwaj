import "./AboutSection.css";
import React, { useContext } from "react";
import image from "../../img/utkarsh-img.png";
import DayHeaderWave from "../../img/header-wave.png";
import NightHeaderWave from "../../img/nightHeaderWave.png";
import ModeContext from "../store/ModeContext";

const AboutSection = () => {
  const { darkMode } = useContext(ModeContext);
  return (
    <>
      <div class="header-wave">
        {darkMode ? (
          <img src={DayHeaderWave} alt="Header Wave"></img>
        ) : (
          <img src={NightHeaderWave} alt="Night"></img>
        )}
      </div>
      <div className="about-section" id="about-section">
        <div className="information">
          <h1 className="heading">
            <span className="heading-span">about</span> me
          </h1>
          <p>
            Meet Utkarsh Bhardwaj, a highly motivated Final year Masters student
            in Computer Applications and Science. With a passion for Full Stack
            Development, UX design and Project Management, Utkarsh is a true
            tech enthusiast <br /> <br />
            But his interests don't end there - when he's not busy coding, you
            might find Utkarsh indulging in his love for content creation or
            exploring the complexities of world geopolitics. In fact, Utkarsh is
            also a talented freelance video editor and content strategist.{" "}
            <br />
            <br />
            With an impressive array of skills and a passion for learning and
            growth, Utkarsh is constantly striving to improve himself and his
            work. His dedication and drive are sure to make him a valuable asset
            to any team or project he takes on.
            <br /> <br />
            More about <b>Utkarsh</b> 😛 :
            <ul>
              <br />
              <li>
                Time's magazine <b>Person of the Year 2006.</b>
              </li>
              <li>
                More than 5k+ lines of contribution on various free education
                platform.
              </li>
              <li> Open-Source Contributor to Plone.</li>
              <li>
                Experience in building strong social media presence via content
                and strategy.
              </li>
            </ul>
            <br />
            <b>
              *Currently looking for full-time and internship opportunites!!*
            </b>
          </p>
        </div>
        <div className="picture">
          <img src={image} alt="Utkarsh" />
        </div>
      </div>
    </>
  );
};

export default AboutSection;
