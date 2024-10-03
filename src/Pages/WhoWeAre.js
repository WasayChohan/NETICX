import React, { useState } from "react";
import "./WhoWeAre.css";
import { ArrowForward } from "@mui/icons-material";
import { FaPlay, FaPause } from "react-icons/fa";
import ReactPlayer from "react-player";
import Video from "../assets/video/officevideo.mp4";

function WhoWeAre(props) {
  const [playing, setPlaying] = useState(false);

  const togglePlayPause = () => {
    setPlaying(!playing);
  };

  return (
    <div className="whoweare" id={props.id}>
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
          <ReactPlayer
            url={Video}
            playing={playing}
            controls={false}
            // width="100%"
            // height="100%"
            className="player"
          />

          <div className="play-pause-btn" onClick={togglePlayPause}>
            {playing ? <FaPause /> : <FaPlay />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhoWeAre;
