import React from "react";
import "./Info.css";

export default function Info() {
  return (
    <div className="info_div">
      <h1 className="info_h1">Nice to meet you! I’m Luka Kheladze.</h1>
      <p className="info_p">
        Based in the UK, I’m a front-end developer passionate about building
        accessible web apps that users love.
      </p>
      <button className="info_button" href="https://www.linkedin.com/in/luka-kheladze-288b44252/">
        CONTACT ME
      </button>
      <hr className="contact_me__hr"/>
    </div>
  );
}
