import "./AboutSection.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeUp } from "@fortawesome/free-solid-svg-icons";
import image from "../../img/utkarsh-img.png";
import Wave from "../../img/header-wave.png";


const AboutSection = () => {
  return (
    <>
      {" "}
      <div class="header-wave">
        <img src={Wave} alt="Header Wave"></img>
      </div>
      <div className="about-section" id="about-section">
        <div className="information">
          <h1 className="heading">
            <span className="heading-span">about</span> me
          </h1>
          <p>
            Meet Utkarsh Bhardwaj, a highly motivated 1st year Masters student
            in Computer Applications and Science. With a passion for Full Stack
            Development, UX design and Project Management, Utkarsh is a true
            tech enthusiast <br /> <br />
            But his interests don't end there - when he's not busy coding, you
            might find Utkarsh indulging in his love for content creation or
            exploring the intricacies of world geopolitics. In fact, Utkarsh is
            also a talented freelance video editor and content strategist.{" "}
            <br />
            <br />
            With an impressive array of skills and a passion for learning and
            growth, Utkarsh is constantly striving to improve himself and his
            work. His dedication and drive are sure to make him a valuable asset
            to any team or project he takes on.
            <br /> <br />
            More about Utkarsh 😛 :
            <ul>
              <br />
              <li>
                {" "}
                Time's magazine <b>Person of the Year 2006.</b>
              </li>
              <li>
                {" "}
                More than 20k+ lines of contribution on various free education
                platform.
              </li>
              <li> Open-Source Contributor to Plone.</li>
              <li>
                Experience in building strong social media presence via content
                and strategy.
              </li>
            </ul>{" "}
            <br />
            <b>
              *Currently looking for a full-time internship role for Summer
              2023*
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
