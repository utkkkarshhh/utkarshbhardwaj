import React, { useState } from "react";
import Project from "../UI/Cards/Project";
import "./ProjectsSection.css";
import { data } from "../data/ProjectsList";
import FilterSlider from "../UI/Buttons/FilterSlider";

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("Fullstack");

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
  };

  const filteredData =
    activeFilter === "All"
      ? data
      : data.filter((item) => item.id === activeFilter);
  return (
    <div className="projects-section" id="projects-section">
      <h1 className="heading">
        <span className="heading-span">projects</span>{" "}
      </h1>

      <FilterSlider currentFilter={handleFilterChange} />

      {filteredData.map((item, index) => {
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
          />
        );
      })}
    </div>
  );
};

export default ProjectsSection;
