import React, { useContext } from "react";
import About from "../../img/about.png";
import DayHeaderWave from "../../img/header-wave.png";
import NightHeaderWave from "../../img/nightHeaderWave.png";
import ModeContext from "../store/ModeContext";

const AboutSection = () => {
  const { darkMode } = useContext(ModeContext);
  return (
    <>
      <div className="header-wave">
        {darkMode ? (
          <img src={DayHeaderWave} alt="Header Wave"></img>
        ) : (
          <img src={NightHeaderWave} alt="Night"></img>
        )}
      </div>
      <h1 className="heading">
        <span className="heading-span">about</span> me
      </h1>
      <div className="about-section">
        <div className="about-info">
          <p>
            I'm a Final year Masters student in Computer Applications and
            Science (2024 Graduate). With a passion for Full Stack Development
            (Frontend Heavy), UX design and Project Management, I'm a true tech
            enthusiast. <br /> <br />
            But my interests don't end there - when i'm not busy tinkering with
            my code, i indulge in my love for content creation or exploring the
            complexities of world geopolitics. I'm' also a talented freelance
            video editor and content strategist (Portfolio).
            <br />
            <br />
            With an impressive array of skills and a passion for learning and
            growth, I'm finding new means to improve myself and myself work. My
            dedication and drive are sure to make me a valuable asset to any
            team or project i take on.
            <br /> <br />
            More about <b>Utkarsh</b> 😛 :
            <ul>
              <br />
              <li>
                Time's magazine{" "}
                <b>
                  <a
                    className="about-link"
                    href="https://en.wikipedia.org/wiki/You_(Time_Person_of_the_Year)#:~:text=%22You%22%20was%20the%20official%20choice,other%20websites%20featuring%20user%20contribution."
                  >
                    Person of the Year 2006.
                  </a>
                </b>
              </li>
              <li>
                More than 5k+ lines of contribution on{" "}
                <a
                  className="about-link"
                  href="https://en.wikipedia.org/wiki/Special:Contributions/Utkkkarshhh"
                >
                  Wikipedia
                </a>{" "}
                and other source information platform.
              </li>
              <li>
                Contributed to Plone.
                <a
                  className="about-link"
                  href="https://github.com/plone/documentation/pull/1484"
                >
                  <br></br>#1484
                </a>
                <a
                  className="about-link"
                  href="https://github.com/plone/volto/pull/4633"
                >
                  <br></br>#4633
                </a>
              </li>
              <li>
                Experience in building strong social media presence via content
                and strategy.
              </li>
            </ul>
            <br />
            <b>
              *Currently looking for full-time and internship opportunites!!*
            </b>
            <i>
              <br></br>(Remote | On-site | Hybrid)
              <br></br>(Anywhere in India)
              <br></br>(Paid | Unpaid)
            </i>
          </p>
        </div>
        <div className="about-image-section">
          <img className="about-image" src={About} alt="Vector" />
        </div>
      </div>
    </>
  );
};

export default AboutSection;
