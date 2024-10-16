import React from "react";

import "./Home.css";
import img1 from "../assets/Images/img1.png";
import Service from "./Service.js";
import WhoWeAre from "./WhoWeAre.js";
import Sponsor from "../components/Sponsor.js";
import Review from "../components/Review.js";
import OurCaseStudy from "./OurCaseStudy.js";
import Design from "../components/Design.js";
import Success from "../components/Success.js";
import TechStack from "../components/TechStack.js";
import Approach from "./Approach.js";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home" id="home">
      <div className="home_layout">
        <div className="home_text">
          <p className="home_p">
            The Right
            <b>
              <span style={{ color: "#DE4396" }}> Partner </span>
            </b>
            you <b>Need To Innovate</b>
          </p>

          <p className="home_p2">
            STRONG TECHNOLOGY TEAMS FOR YOUR SUSTAINED GROWTH
          </p>
          <div className="buttons">
            <Link to="/contact">
              <button className="nav_contact_button">Contact us</button>
            </Link>
            <button className="consult_but">Get Free Consulting</button>
          </div>
        </div>

        <div className="home-img-div">
          <img src={img1} alt="" className="home-img" />
        </div>
      </div>
    </div>
  );
}

export default Home;
