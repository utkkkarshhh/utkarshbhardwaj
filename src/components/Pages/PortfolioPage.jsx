import React from "react";
import styles from "./PortfolioPage.module.css";
import ProjectsSection from "../sections/ProjectsSection";

const PortfolioPage = () => {
  return (
    <div className={styles.portfolioPage}>
      <ProjectsSection />
    </div>
  );
};

export default PortfolioPage;
