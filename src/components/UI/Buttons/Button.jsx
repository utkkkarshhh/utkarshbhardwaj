import React from "react";
import "./Button.css";

const Button = (props) => {
  return <div>
    <a className="btn-1" onClick={props.onClick} href={props.link}>{props.name}</a>
  </div>;
};

export default Button;
