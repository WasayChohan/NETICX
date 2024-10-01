import React, { useState } from "react";
import "./TechStack.css";

function TechStack() {
  const images = [
    { src: require("../assets/Images/NodeJS.png"), item: "backend" },
    { src: require("../assets/Images/PHP.png"), item: "backend" },
    { src: require("../assets/Images/sql.png"), item: "backend" },
    { src: require("../assets/Images/Java.png"), item: "backend" },
    { src: require("../assets/Images/NETCore.png"), item: "backend" },
    { src: require("../assets/Images/Python.png"), item: "backend" },
    { src: require("../assets/Images/RubyOnRails.png"), item: "backend" },
    { src: require("../assets/Images/Go.png"), item: "backend" },
    { src: require("../assets/Images/mongo.png"), item: "backend" },
    { src: require("../assets/Images/ts.webp"), item: "frontend" },
    { src: require("../assets/Images/vue.webp"), item: "frontend" },
    { src: require("../assets/Images/anguler.png"), item: "frontend" },
    { src: require("../assets/Images/Reactnative.webp"), item: "frontend" },
    { src: require("../assets/Images/js.png"), item: "frontend" },
    { src: require("../assets/Images/Gatsby.png"), item: "frontend" },
    { src: require("../assets/Images/react.png"), item: "frontend" },
    { src: require("../assets/Images/css-3.png"), item: "frontend" },
    { src: require("../assets/Images/html-5.png"), item: "frontend" },
    { src: require("../assets/Images/sql.png"), item: "database" },
    { src: require("../assets/Images/mongo.png"), item: "database" },
  ];

  const [tab, setTAb] = useState(1);
  const activeTab = (tabNumber) => {
    setTAb(tabNumber);
  };

  const backend = images.filter((e) => e.item === "backend");
  const frontend = images.filter((e) => e.item === "frontend");
  const database = images.filter((e) => e.item === "database");
  const cms = images.filter((e) => e.item === "cms");
  const cloudtesting = images.filter((e) => e.item === "cloudtesting");
  const devops = images.filter((e) => e.item === "devops");

  const data =
    tab === 1
      ? backend
      : tab === 2
      ? frontend
      : tab === 3
      ? database
      : tab === 4
      ? cms
      : tab === 5
      ? cloudtesting
      : tab === 6
      ? devops
      : null;
  return (
    <div className="techstack">
      <div className="techstck-heading">
        <div className="stack-color-line"></div>
        <h1 className="stack-h1">
          Our <br /> <b>Tech Stack</b>
        </h1>

        <ul className="stack-ul">
          <li
            onClick={() => activeTab(1)}
            className={` active-tab ${tab === 1 ? "active" : ""} `}
          >
            Backed
          </li>

          <li
            onClick={() => activeTab(2)}
            className={` active-tab ${tab === 2 ? "active" : ""} `}
          >
            Frontend
          </li>
          <li
            onClick={() => activeTab(3)}
            className={` active-tab ${tab === 3 ? "active" : ""} `}
          >
            Database
          </li>
          <li
            onClick={() => activeTab(4)}
            className={` active-tab ${tab === 4 ? "active" : ""} `}
          >
            CMS
          </li>
          <li
            onClick={() => activeTab(5)}
            className={` active-tab ${tab === 5 ? "active" : ""} `}
          >
            CloudTesting
          </li>
          <li
            onClick={() => activeTab(6)}
            className={` active-tab ${tab === 6 ? "active" : ""} `}
          >
            DevOps
          </li>
        </ul>
      </div>

      <div className="stacks">
        {data.map((value, index) => (
          <img
            key={index}
            src={value.src}
            alt=""
            width="100px"
            height="80px"
            className="stack-img"
          />
        ))}
      </div>
    </div>
  );
}

export default TechStack;
