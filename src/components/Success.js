import React from "react";
import "./Success.css";

function Success() {
  return (
    <div className="success">
      <div className="success-body">
        <div className="success-box">
          <h1 className="success-h1">450+</h1>
          <p className="success-p">Satisfied Clients</p>
        </div>
        <div className="success-box">
          <h1 className="success-h1">1200+</h1>
          <p className="success-p">Projects</p>
        </div>
        <div className="success-box">
          <h1 className="success-h1">95k</h1>
          <p className="success-p">Hours Worked</p>
        </div>
        <div className="success-box">
          <h1 className="success-h1">24/7</h1>
          <p className="success-p">Support </p>
        </div>
      </div>
    </div>
  );
}

export default Success;
