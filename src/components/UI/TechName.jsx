import React from "react";
import './TechName.css';

const TechName = (props) =>{
    return(
        <div>
            <p className="tech-item-name">{props.techName}</p>
        </div>
    );
}

export default TechName; 