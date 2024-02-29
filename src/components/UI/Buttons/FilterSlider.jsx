import React, { useState } from "react";
import "./FilterSlider.css";
import { act } from "react-dom/test-utils";

function FilterSlider({ currentFilter }) {
  const [activeFilter, setActiveFilter] = useState("All");

  const clickHandler = (filter) => {
    setActiveFilter(filter);
    currentFilter(filter);
  };

  return (
    <div className="filter-slider">
      <div
        className={`tech-filter ${
          activeFilter === "All" ? "activeFilter" : ""
        }`}
        onClick={() => clickHandler("All")}
      >
        All
      </div>
      <div
        className={`tech-filter ${
          activeFilter === "MERN" ? "activeFilter" : ""
        }`}
        onClick={() => clickHandler("MERN")}
      >
        MERN
      </div>
      <div
        className={`tech-filter ${
          activeFilter === "UX/UI" ? "activeFilter" : ""
        }`}
        onClick={() => clickHandler("UX/UI")}
      >
        UX/UI
      </div>
      <div
        className={`tech-filter ${
          activeFilter === "UI Clones" ? "activeFilter" : ""
        }`}
        onClick={() => clickHandler("UI Clones")}
      >
        UI Clones
      </div>
    </div>
  );
}

export default FilterSlider;
