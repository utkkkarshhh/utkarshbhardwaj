import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaShareNodes } from "react-icons/fa6";

const Project2 = () => {
  return (
    <div className="project-page">
      <div
        className="project-page-image-container"
        style={{
          backgroundImage: `url(${Image})`,
          backgroundSize: "cover",
        }}
      >
        <div className="project-page-go-back">
          <IoMdArrowRoundBack />
        </div>
        <div className="project-page-project-name">
          <h1>Project2</h1>
        </div>
        <div className="project-page-project-share">
          <FaShareNodes />
        </div>
      </div>
      <div className="project-page-body">
        <h1 className="project-page-body-header">Project2</h1>
        <div className="project-page-body-para">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            mattis rhoncus urna neque viverra. Arcu vitae elementum curabitur
            vitae nunc. Viverra suspendisse potenti nullam ac tortor vitae. Non
            arcu risus quis varius quam quisque. Purus sit amet volutpat
            consequat mauris nunc congue nisi vitae. Quis commodo odio aenean
            sed adipiscing. Ullamcorper eget nulla facilisi etiam dignissim diam
            quis enim. Mi quis hendrerit dolor magna eget est lorem ipsum. Ipsum
            a arcu cursus vitae congue mauris rhoncus aenean vel.
          </p>
        </div>
        <div className="project-page-body-image"></div>
      </div>
    </div>
  );
};

export default Project2;
