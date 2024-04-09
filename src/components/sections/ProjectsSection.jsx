import React from "react";
import Project from "../UI/Cards/Project";
// import FeaturedProjectCard from "../UI/Cards/FeaturedProjectCard";
import { featuredProjects } from "../data/ProjectsList";
import { Link } from "react-router-dom";

const ProjectsSection = () => {
  return (
    <div className="projects-section" id="projects-section">
      <h1 className="heading">
        <span className="heading-span"> featured</span> projects
      </h1>
      {featuredProjects.map((item, index) => {
        return (
          <Project
            projectname={item.name}
            techName1={item["tech-name"]["tech-name1"]}
            techName2={item["tech-name"]["tech-name2"]}
            techName3={item["tech-name"]["tech-name3"]}
            projectDescription={item.description}
            codebtn={item.codebtn}
            demobtn={item.demobtn}
            imagesrc={item.imagePath}
            key={index}
            redirect={item.redirect}
          />
        );
      })}
      <Link to="/portfolio">
        <p className="watch-more-portfolio">
          Click here to watch complete portfolio.
        </p>
      </Link>
    </div>
  );
};

export default ProjectsSection;
