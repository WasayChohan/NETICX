import React, { useState } from "react";
import "./Portfolio.css";
import netimg from "../assets/Images/pexels-maoriginalphotography-1485894.jpg";

// Modal Component to show the popup image
const Modal = ({ isOpen, closeModal, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div className="modal-content">
        <span className="close-button" onClick={closeModal}>
          ×
        </span>
        <img src={imageSrc} alt="Enlarged" className="modal-img" />
      </div>
    </div>
  );
};

function Portfolio(props) {
  const images = [
    { src: require("../assets/Images/webdev5.jpg"), item: "web_dev" },
    { src: require("../assets/Images/webdev2.jpg"), item: "web_dev" },
    { src: require("../assets/Images/webdev3.jpg"), item: "web_dev" },
    { src: require("../assets/Images/webdev4.jpg"), item: "web_dev" },
    { src: require("../assets/Images/webdev1.jpg"), item: "web_dev" },
    { src: require("../assets/Images/webdev6.jpg"), item: "web_dev" },
    { src: require("../assets/Images/techimg6.png"), item: "ui_design" },
    { src: require("../assets/Images/techimg4.png"), item: "ui_design" },
    { src: require("../assets/Images/techimg5.png"), item: "ui_design" },
    { src: require("../assets/Images/techimg6.png"), item: "ui_design" },
    { src: require("../assets/Images/techimg3.png"), item: "mobile_dev" },
    { src: require("../assets/Images/techimg4.png"), item: "mobile_dev" },
    { src: require("../assets/Images/techimg5.png"), item: "mobile_dev" },
    { src: require("../assets/Images/techimg6.png"), item: "mobile_dev" },
    { src: require("../assets/Images/techimg6.png"), item: "desktop_dev" },
    { src: require("../assets/Images/techimg4.png"), item: "desktop_dev" },
    { src: require("../assets/Images/techimg5.png"), item: "desktop_dev" },
    { src: require("../assets/Images/techimg6.png"), item: "desktop_dev" },
  ];

  const [tab, setTab] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal state
  const [selectedImage, setSelectedImage] = useState(null); // Track selected image

  const activeTab = (tabNumber) => {
    setTab(tabNumber);
  };

  const openModal = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const web_dev = images.filter((e) => e.item === "web_dev");
  const ui_design = images.filter((e) => e.item === "ui_design");
  const mobile_dev = images.filter((e) => e.item === "mobile_dev");
  const desktop_dev = images.filter((e) => e.item === "desktop_dev");

  const data =
    tab === 1
      ? web_dev
      : tab === 2
      ? ui_design
      : tab === 3
      ? mobile_dev
      : tab === 4
      ? desktop_dev
      : null;

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
              Mobile App Development
            </li>
            {/* <li
              onClick={() => activeTab(4)}
              className={`tech-li ${tab === 4 ? "active" : ""}`}
            >
              Desktop Development
            </li> */}
          </ul>
        </div>
        <div className="tech-imgs">
          {data.map((value, index) => (
            <div className="image-container" key={index}>
              <div className="image-overlay">
                <button
                  className="view-img"
                  onClick={() => openModal(value.src)} // Open modal with the image
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

      {/* Modal to show the image in a popup */}
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        imageSrc={selectedImage}
      />
    </div>
  );
}

export default Portfolio;
