import React from "react";
import "./Design.css";

function Design() {
  const design = [
    {
      id: 1,
      color: "linear-gradient(225deg, #29272e 0%, #27272e 100%)",
      design_p1: "UX Driven Engineering",
      design_p2:
        "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    },
    {
      id: 2,
      color: "linear-gradient(225deg, #68DBF2 0.01%, #509CF5 100%)",
      design_p1: "Developing Shared Understanding",
      design_p2:
        "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    },
    {
      id: 3,
      color: "linear-gradient(224.47deg, #FF92AE 8.18%, #FF3D9A 95.84%)",

      design_p1: "Proven Experience and Expertise",
      design_p2:
        "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    },
    {
      id: 4,
      color: "linear-gradient(225deg, #67E9F1 0%, #24E795 100%)",

      design_p1: "Security & Intellectual Property (IP)",
      design_p2:
        "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    },
    {
      id: 5,
      color: "linear-gradient(225deg, #FFEF5E 0%, #F7936F 100%)",
      design_p1: "Code Reviews",
      design_p2:
        "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    },
    {
      id: 6,
      color: "linear-gradient(225deg, #F76680 0%, #57007B 100%)",
      design_p1: "Quality Assurance & Testing",
      design_p2:
        "Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.",
    },
  ];
  return (
    <div className="design">
      <div className="design-color-line"></div>
      <div className="design-heading">
        <h1 className="design_h1">
          Leading companies trust us to <br />
          <b>develop software</b>
        </h1>
      </div>

      <div className="design-body">
        {design.map((design) => (
          <div className="designs" key={design.id}>
            <div className="sub-design">
              <span
                className="colors"
                style={{ background: design.color }}
              ></span>
              <div className="design-text">
                <p className="design-p1"> {design.design_p1} </p>
                <p className="design-p2">{design.design_p2}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Design;
