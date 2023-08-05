import React from "react";
import "./Project.css";
import TechName from "./UI/TechName";

const Project = (props) => {
  return (
    <div>
      <div className="project-card">
        <div className="info-section">
          <div className="project-name">
            <h1>{props.projectname}</h1>
          </div>
          <div className="tech-name">
            <TechName techName={props.techName1} />
            <TechName techName={props.techName2} />
            <TechName techName={props.techName3} />
          </div>
          <div project-description>
            <p>{props.projectDescription}</p>
          </div>
          <div className="buttons">
            <a href={props.codebtn} className="btn-1 code-btn">
              Code
            </a>
            <a href={props.demobtn} className="btn-1 demo-btn">
              Demo
            </a>
          </div>
        </div>
        <div className="image-section">
          <div class="image-container">
            <img className="image" src={props.imagesrc} alt="Project"></img>

            <div className="overlay">
              <a href={props.codebtn} className="btn-1">
                Explore
              </a>
              <figcaption>Project screenshot</figcaption>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
