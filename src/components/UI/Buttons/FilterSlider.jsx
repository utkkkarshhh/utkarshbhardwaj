import React, { useState } from "react";
import "./FilterSlider.css";

function FilterSlider({ currentFilter }) {
  const [activeFilter, setActiveFilter] = useState("Fullstack");

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
          activeFilter === "Fullstack" ? "activeFilter" : ""
        }`}
        onClick={() => clickHandler("Fullstack")}
      >
        Fullstack Web Apps
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
          activeFilter === "Others" ? "activeFilter" : ""
        }`}
        onClick={() => clickHandler("Others")}
      >
        Others
      </div>
    </div>
  );
}

export default FilterSlider;
