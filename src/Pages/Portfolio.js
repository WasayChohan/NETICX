import React, { useState } from "react";
import "./Portfolio.css";
import netimg from "../assets/Images/pexels-maoriginalphotography-1485894.jpg";

const Modal = ({ isOpen, closeModal, imageSrc, text }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content">
        <span className="close-button" onClick={closeModal}>
          ×
        </span>
        <div className="modal-body">
          <div className="modal-img-container">
            <img src={imageSrc} alt="Enlarged" className="modal-img" />
          </div>
          <div className="modal-text-container">
            <h2>Project Overview</h2>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

function Portfolio(props) {
  const images = [
    {
      src: require("../assets/Images/image-5760x4450 (1).jpg"),
      item: "web_dev",
      text: "This project showcases a cutting-edge, responsive website developed using modern web technologies such as HTML5, CSS3, and JavaScript. It is designed to seamlessly adapt to various screen sizes and devices, offering an optimized user experience whether on mobile, tablet, or desktop. The site features an intuitive layout with smooth animations and interactive UI elements, creating a visually appealing and engaging experience for users. The minimalist design focuses on clarity and ease of navigation.",
    },
    {
      src: require("../assets/Images/web1.jpg"),
      item: "web_dev",
      text: "This project showcases a cutting-edge, responsive website developed using modern web technologies such as HTML5, CSS3, and JavaScript. It is designed to seamlessly adapt to various screen sizes and devices, offering an optimized user experience whether on mobile, tablet, or desktop. The site features an intuitive layout with smooth animations and interactive UI elements, creating a visually appealing and engaging experience for users. The minimalist design focuses on clarity and ease of navigation.",
    },
    {
      src: require("../assets/Images/image-5760x4450 (3).jpg"),
      item: "web_dev",
      text: "This project showcases a cutting-edge, responsive website developed using modern web technologies such as HTML5, CSS3, and JavaScript. It is designed to seamlessly adapt to various screen sizes and devices, offering an optimized user experience whether on mobile, tablet, or desktop. The site features an intuitive layout with smooth animations and interactive UI elements, creating a visually appealing and engaging experience for users. The minimalist design focuses on clarity and ease of navigation.",
    },
    {
      src: require("../assets/Images/image-5760x4450 (4).jpg"),
      item: "web_dev",
      text: "This project showcases a cutting-edge, responsive website developed using modern web technologies such as HTML5, CSS3, and JavaScript. It is designed to seamlessly adapt to various screen sizes and devices, offering an optimized user experience whether on mobile, tablet, or desktop. The site features an intuitive layout with smooth animations and interactive UI elements, creating a visually appealing and engaging experience for users. The minimalist design focuses on clarity and ease of navigation.",
    },
    {
      src: require("../assets/Images/image-5760x4450 (5).jpg"),
      item: "web_dev",
      text: "This project showcases a cutting-edge, responsive website developed using modern web technologies such as HTML5, CSS3, and JavaScript. It is designed to seamlessly adapt to various screen sizes and devices, offering an optimized user experience whether on mobile, tablet, or desktop. The site features an intuitive layout with smooth animations and interactive UI elements, creating a visually appealing and engaging experience for users. The minimalist design focuses on clarity and ease of navigation.",
    },
    {
      src: require("../assets/Images/web2.jpg"),
      item: "web_dev",
      text: "This project showcases a cutting-edge, responsive website developed using modern web technologies such as HTML5, CSS3, and JavaScript. It is designed to seamlessly adapt to various screen sizes and devices, offering an optimized user experience whether on mobile, tablet, or desktop. The site features an intuitive layout with smooth animations and interactive UI elements, creating a visually appealing and engaging experience for users. The minimalist design focuses on clarity and ease of navigation.",
    },
    { src: require("../assets/Images/mob1 (1).jpg"), item: "ui_design" },
    { src: require("../assets/Images/techimg4.png"), item: "ui_design" },
    { src: require("../assets/Images/techimg5.png"), item: "ui_design" },
    { src: require("../assets/Images/techimg6.png"), item: "ui_design" },
    { src: require("../assets/Images/mob1 (1).jpg"), item: "mobile_app" },
    { src: require("../assets/Images/mob2.jpg"), item: "mobile_app" },
    { src: require("../assets/Images/mob3.jpg"), item: "mobile_app" },
    { src: require("../assets/Images/mob4.jpg"), item: "mobile_app" },
    { src: require("../assets/Images/mob6.jpg"), item: "mobile_app" },
    { src: require("../assets/Images/mob7.jpg"), item: "mobile_app" },
  ];

  const [tab, setTab] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [selectedImage, setSelectedImage] = useState(null); // Track selected image
  const [selectedText, setSelectedText] = useState(""); // Track selected text

  const activeTab = (tabNumber) => {
    setTab(tabNumber);
  };

  const openModal = (imageSrc, text) => {
    setSelectedImage(imageSrc);
    setSelectedText(text);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
    setSelectedText("");
  };

  const web_dev = images.filter((e) => e.item === "web_dev");
  const ui_design = images.filter((e) => e.item === "ui_design");
  const mobile_app = images.filter((e) => e.item === "mobile_app");

  const data =
    tab === 1 ? web_dev : tab === 2 ? ui_design : tab === 3 ? mobile_app : null;

  return (
    <div className="portfolio" id={props.id}>
      <div
        className="fortfolioimg"
        style={{
          backgroundImage: `url(${netimg})`,
        }}
      >
        <div className="portfolio-heading">
          <h2 className="portfolio-h2">Our Work</h2>
          <h1 className="portfolio-h1">Portfolio</h1>
          <p className="portfolio-p1">Showcasing Our Skills and Projects</p>
        </div>
      </div>

      <div className="technologies">
        <div className="tech-bar">
          <ul className="techs-ul">
            <li
              onClick={() => activeTab(1)}
              className={`tech-li ${tab === 1 ? "active" : ""}`}
            >
              Web Development
            </li>
            <li
              onClick={() => activeTab(2)}
              className={`tech-li ${tab === 2 ? "active" : ""}`}
            >
              UI/UX Designing
            </li>
            <li
              onClick={() => activeTab(3)}
              className={`tech-li ${tab === 3 ? "active" : ""}`}
            >
              Mobile Application
            </li>
          </ul>
        </div>
        <div className="tech-imgs">
          {data.map((value, index) => (
            <div className="image-container" key={index}>
              <div className="image-overlay">
                <button
                  className="view-img"
                  onClick={() => openModal(value.src, value.text)} // Open modal with the image and text
                >
                  View Project
                </button>
              </div>
              <img src={value.src} alt="" className="tech-img" />
            </div>
          ))}
        </div>
        <button className="load-btn">Load More</button>
      </div>

      {/* Modal to show the image and text in a popup */}
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        imageSrc={selectedImage}
        text={selectedText}
      />
    </div>
  );
}

export default Portfolio;
