import React from "react";
import icon1 from "../../images/icon-github.svg";
import icon2 from "../../images/icon-linkedin.svg";
import icon3 from "../../images/icon-twitter.svg";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer-main">
      <h1 className="footer_title">Contact</h1>
      <p className="footer_p">
        I would love to hear about your project and how I could help. Please
        fill in the form, and I’ll get back to you as soon as possible.
      </p>
      <hr className="footer_hr" />
      <h2 className="footer-h2">M0H1K4</h2>
      <div className="footer_img">
        <img className="i1" src={icon1} />
        <img className="i1" src={icon2} />
        <img className="i1" src={icon3} />
      </div>
    </div>
  );
}
