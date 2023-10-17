import React from "react";
import "./Built.css";

import img1 from "./../../images/thumbnail-project-1-small.webp";

export default function Built(props) {
  /// create new component and inside new array with photos 
  return (
    <div className="built_main_div">
      <img src={img1} className="built-image" />

      <h2>{props.title}</h2>
      <div className="skills_h4">
        <h4>{props.description}</h4>
      </div>
      <div className="buttons_div">
        <a href={props.link} target="blank">
          <button className="built_button">
            VIEW PROJECT
            <hr className="built_hr" />
          </button>
        </a>
        <button className="built_button">
          VIEW CODE
          <hr className="built_hr" />
        </button>
      </div>
    </div>
  );
}