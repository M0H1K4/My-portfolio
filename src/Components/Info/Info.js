import React from "react";
import "./Info.css";
import linki from "../CustomLink/Link";

export default function Info() {
  
  return (
    <div className="info_div">
      <h1 className="info_h1">Nice to meet you! I’m Luka Kheladze.</h1>
      <p className="info_p">
        Based in the UK, I’m a front-end developer passionate about building
        accessible web apps that users love.
      </p>
      <button onClick={linki} className="info_button">
        CONTACT ME
      </button>
      <hr className="contact_me__hr" />
    </div>
  );
}
