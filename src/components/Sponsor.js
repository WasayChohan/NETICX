import React from "react";
import "./Sponsor.css";
import img5 from "../assets/Images/img5.png";
import img6 from "../assets/Images/img6.png";
import img7 from "../assets/Images/img7.png";
import img8 from "../assets/Images/img8.png";
import img9 from "../assets/Images/img9.png";
import img10 from "../assets/Images/img10.png";
import img11 from "../assets/Images/img11.png";
import img12 from "../assets/Images/img12.png";

function Sponsor() {
  return (
    <div className="sponsor">
      <ul className="sponsor-ul">
        <li className="sponsor-li">
          <img src={img5} alt="" className="sponsors-img" />
        </li>
        <li className="sponsor-li">
          <img src={img6} alt="" className="sponsors-img" />
        </li>
        <li className="sponsor-li">
          <img src={img7} alt="" className="sponsors-img" />
        </li>
        <li className="sponsor-li">
          <img src={img8} alt="" className="sponsors-img" />
        </li>
        <li className="sponsor-li">
          <img src={img9} alt="" className="sponsors-img" />
        </li>
        <li className="sponsor-li">
          <img src={img10} alt="" className="sponsors-img" />
        </li>
        <li className="sponsor-li">
          <img src={img11} alt="" className="sponsors-img" />
        </li>
        <li className="sponsor-li">
          <img src={img12} alt="" className="sponsors-img" />
        </li>
      </ul>
    </div>
  );
}

export default Sponsor;
