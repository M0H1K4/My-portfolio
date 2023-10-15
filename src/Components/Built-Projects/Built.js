import React from "react";
import img1 from "../../images/thumbnail-project-1-small.webp"
import "./Built.css";

export default function Built() {
  return (
    <div className="built_main_div">
      <img src={img1} className="built-image1" />
      <h2>DESIGN PORTFOLIO</h2>
      <div className="skills_h4">
        <h4>HTML</h4>
        <h4>CSS</h4>
      </div>
      <div className="buttons_div">
        <button className="built_button">
          VIEW PROJECT
          <hr className="built_hr" />
        </button>
        <button className="built_button">
          VIEW CODE
          <hr className="built_hr" />
        </button>
      </div>
    </div>
  );
}