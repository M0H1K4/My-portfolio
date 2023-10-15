import React from "react";
import icon1 from "../../images/icon-github.svg";
import icon2 from "../../images/icon-linkedin.svg";
import icon3 from "../../images/icon-twitter.svg";
import chemi from "../../images/image-profile-mobile.webp"

import './Foto.css'

export default function Foto() {
  return (
    <div className="container">
      <h1 className="name">M0H1K4</h1>
      <div className="images">
        <img className="github" src={icon1} />
        <img className="linkedin"src={icon2}/>
        <img className="twitter" src={icon3}/>
      </div>
      <img className="chemi" src={chemi}/>
    </div>
  );
}
