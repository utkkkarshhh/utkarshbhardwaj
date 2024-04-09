import React from "react";
import { Link } from "react-router-dom";
import TechName from "../Buttons/TechName";
import { FaCode } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { IoReaderOutline } from "react-icons/io5";

const FeaturedProjectCard = ({
  imgsrc,
  redirect,
  projectName,
  techName1,
  techName2,
  techName3,
  techName4,
  techName5,
  techName6,
  techName7,
  techName8,
  projectDescription,
  codebtn,
  demobtn,
  caution,
}) => {
  return (
    <div className="fp">
      <div className="fp-left">
        <div className="fp-img-container">
          <img className="fp-img" src={imgsrc} alt="Project"></img>
        </div>
      </div>
      <div className="fp-right">
        <div className="fp-right-head">
          <Link to={redirect}>
            <div className="fp-right-title">{projectName}</div>
          </Link>
          <div className="fp-right-tech">
            <div className="fp-tech-name">
              {techName1 && <TechName techName={techName1} />}
              {techName2 && <TechName techName={techName2} />}
              {techName3 && <TechName techName={techName3} />}
              {techName4 && <TechName techName={techName4} />}
              {techName5 && <TechName techName={techName5} />}
              {techName6 && <TechName techName={techName6} />}
              {techName7 && <TechName techName={techName7} />}
              {techName8 && <TechName techName={techName8} />}
            </div>
          </div>
        </div>
        <div className="fp-text">
          <div className="fp-short-description">
            <p>{projectDescription}</p>
          </div>
          <div className="fp-buttons">
            <a href={codebtn} className="fp-btn fp-code-btn">
              Code <FaCode />
            </a>
            <Link to={redirect}>
              <p className="fp-btn fp-read-btn">
                Read <IoReaderOutline />
              </p>
            </Link>
            <a href={demobtn} className="fp-btn fp-live-btn">
              Watch Live <FaEye />
            </a>
          </div>
          {caution && <p className="fp-caution">{caution}</p>}
        </div>
      </div>
      <div className="fp-empty"></div>
    </div>
  );
};

export default FeaturedProjectCard;
