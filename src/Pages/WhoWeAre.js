import React from "react";
import "./WhoWeAre.css";
import img4 from "../assets/Images/img4.jpg";
import { ArrowForward } from "@mui/icons-material";

function WhoWeAre() {
  return (
    <div className="whoweare">
      <div className="whoweare-body">
        <div className="are-text-area">
          <div className="color-line"></div>
          <span style={{ color: "#1A202C" }}>
            <h1>Who We Are?</h1>
          </span>

          <p className="whoweare-p">
            <span style={{ color: "#D80E0E", fontWeight: "700" }}>NETICX</span>,
            a software development company, helps to digitize businesses by
            focusing on clients’ business challenges, needs, and pain points,
            and by providing business goals-oriented software solutions,
            including expertise in AI-driven solutions. We value close,
            transparent cooperation and encourage our clients to participate
            actively in the project development life cycle.
          </p>

          <h5 className="text-alignment">
            Explore our Service <ArrowForward />
          </h5>
        </div>
        <div className="video">
          <img
            src={img4}
            alt=""
            className="are-img"
            style={{ Width: "600px", Height: "400px", borderRadius: "30px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
