import React from "react";
import "./Projects.css";
import linki from "../CustomLink/Link";

export default function Projects() {
  return (
    <div className="projects_div">
      <div className="projects_div__title">
        <h1 className="projects_h1">Projects</h1>
        <button onClick={linki} className="projects_button">
          CONTACT ME!
          <hr className="projects_hr" />
        </button>
      </div>

    </div>
  );
}
