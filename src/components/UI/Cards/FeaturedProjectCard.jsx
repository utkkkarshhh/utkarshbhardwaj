import React from "react";

const FeaturedProjectCard = ({ props }) => {
  return (
    <div className="fp">
      <div className="fp-left">
        <image src={props.image} alt="Project" />
      </div>
      <div className="fp-right">
        <div className="fp-right-head">
          <div className="fp-right-title"></div>
          <div className="fp-right-tech"></div>
        </div>
        <div className="fp-text">
          <div className="fp-short-description">
            <p>{props.description}</p>
          </div>
          <div className="fp-buttons"> </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjectCard;
