import React from "react";
import TechStack from "../UI/Cards/TechStack";
import { techstack } from "../data/ProjectsList";

const TechStackSection = () => {
  const groupedTechStack = techstack.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="tech-stack-section">
      <h1 className="heading">
        <span className="heading-span">tech</span> stack
      </h1>
      <div className="prof-box">
        {/* <div className="prof-heading">
          <p className="prof-heading-text">
            Proficiency Level
            <span className="prof-head-small"> (out of 100)</span>
          </p>
        </div> */}
        <div className="prof-cats">
          <div className="prof-cat">
            <div
              style={{ backgroundColor: "rgb(247, 194, 95)" }}
              className="prof-checkbox"
            ></div>
            <p className="prof-text">0-1</p>
          </div>
          <div className="prof-cat">
            <div
              style={{ backgroundColor: "#1da1f2" }}
              className="prof-checkbox"
            ></div>
            <p className="prof-text">1-50</p>
          </div>
          <div className="prof-cat">
            <div
              style={{ backgroundColor: "rgb(94, 223, 94)" }}
              className="prof-checkbox"
            ></div>
            <p className="prof-text">50+</p>
          </div>
        </div>
      </div>
      <div className="tech-stack-items">
        {Object.entries(groupedTechStack).map(([category, items]) => (
          <div key={category}>
            <h2 className="tech-stack-category">{category}</h2>
            <div className="tech-stack-tools">
              <div className="tech-stack-tools-container">
                {items.map((item, index) => (
                  <TechStack
                    key={index}
                    name={item.name}
                    icon={item.icon}
                    color={item.color}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackSection;
