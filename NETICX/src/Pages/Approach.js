import React from "react";
import "./Approach.css";
import cupimg from "../assets/Images/cupimg.png";

function Development(props) {
  return (
    <div className="development" id={props.id}>
      <div className="development-heading">
        <div className="development-color-line"></div>
        <h1 className="development-h1">
          How Development <br />
          <b>through Alcaline works</b>
        </h1>
      </div>
      <div className="develop-container">
        <div className="sub-container-top">
          <div className="develop-step">
            <div className="develop-step2">
              <p className="develop-p1">
                {" "}
                <span className="nums">#1</span> Assemble the right team
              </p>
              <p className="develop-p2">
                We handle all aspects of vetting and choosing the right team
                that you don't have the time, expertise, or desire to do.
              </p>
            </div>
          </div>
          <div className="develop-step">
            <div className="develop-step2">
              <p className="develop-p1">
                <span className="nums">#3</span> Assemble the right team
              </p>
              <p className="develop-p2">
                We handle all aspects of vetting and choosing the right team
                that you don't have the time, expertise, or desire to do.
              </p>
            </div>
          </div>
          <div className="develop-step">
            <div className="develop-step2">
              <p className="develop-p1">
                <span className="nums">#5</span> Assemble the right team
              </p>
              <p className="develop-p2">
                We handle all aspects of vetting and choosing the right team
                that you don't have the time, expertise, or desire to do.
              </p>
            </div>
          </div>
        </div>

        <div className="top-parent">
          <div className="top-lines"></div>
          <div className="top-lines"></div>
          <div className="top-lines"></div>
        </div>
        <div className="line-cup">
          <div className="develop-color-line"></div>
          <span>
            <img
              src={cupimg}
              alt=""
              width="42px"
              height="42px"
              className="cup-img"
            />
          </span>
        </div>

        <div className="bottom-parent">
          <div className="bottom-lines"></div>
          <div className="bottom-lines"></div>
          <div className="bottom-lines"></div>
        </div>
        <div className="sub-container-bottom">
          <div className="develop-step">
            <div className="develop-step2">
              <p className="develop-p1">
                <span className="nums">#2</span> Assemble the right team
              </p>
              <p className="develop-p2">
                We handle all aspects of vetting and choosing the right team
                that you don't have the time, expertise, or desire to do.
              </p>
            </div>
          </div>
          <div className="develop-step">
            <div className="develop-step2">
              <p className="develop-p1">
                <span className="nums">#4</span> Assemble the right team
              </p>
              <p className="develop-p2">
                We handle all aspects of vetting and choosing the right team
                that you don't have the time, expertise, or desire to do.
              </p>
            </div>
          </div>
          <div className="develop-step">
            <div className="develop-step2">
              <p className="develop-p1">
                <span className="nums">#6</span> Assemble the right team
              </p>
              <p className="develop-p2">
                We handle all aspects of vetting and choosing the right team
                that you don't have the time, expertise, or desire to do.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Development;
