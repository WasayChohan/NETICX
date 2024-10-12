import React, { useState } from "react";
import "./Portfolio.css";
import netimg from "../assets/Images/bg.jpg";

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
            <p dangerouslySetInnerHTML={{ __html: text }} />
          </div>
        </div>
      </div>
    </div>
  );
};

function Portfolio(props) {
  const images = [
    {
      id: 1,
      src: require("../Pages/PortfolioImgs/image-5760x4450 (1).jpg"),
      item: "web_dev",
      text: " Experience simple, powerful business banking services backed by Ericsson. Our platform is designed to streamline your financial operations, allowing you to focus on what truly matters: growing your business. With intuitive features and robust security, managing your finances has never been easier.</br></br>Join thousands of satisfied customers who trust us for their banking needs. With a total transaction volume of $1,84,294.50 and an impressive success rate of 99.50%, we are committed to providing exceptional service. Our platform supports 1,450 cities and caters to over 8,90,4028 active customers, ensuring that you have the support and resources you need to thrive. Open an account today and take the first step towards financial efficiency!",
    },
    {
      id: 2,
      src: require("../Pages/PortfolioImgs/web1.jpg"),
      item: "web_dev",
      text: "This project showcases a cutting-edge, responsive website developed using modern web technologies such as HTML5, CSS3, and JavaScript. It is designed to seamlessly adapt to various screen sizes and devices, offering an optimized user experience whether on mobile, tablet, or desktop. The site features an intuitive layout with smooth animations and interactive UI elements, creating a visually appealing and engaging experience for users. The minimalist design focuses on clarity and ease of navigation.",
    },
    {
      id: 3,
      src: require("../Pages/PortfolioImgs/image-5760x4450 (3).jpg"),
      item: "web_dev",
      text: "This project showcases a cutting-edge, responsive website developed using modern web technologies such as HTML5, CSS3, and JavaScript. It is designed to seamlessly adapt to various screen sizes and devices, offering an optimized user experience whether on mobile, tablet, or desktop. The site features an intuitive layout with smooth animations and interactive UI elements, creating a visually appealing and engaging experience for users. The minimalist design focuses on clarity and ease of navigation.",
    },
    {
      id: 4,
      src: require("../Pages/PortfolioImgs/image-5760x4450 (4).jpg"),
      item: "web_dev",
      text: "This project showcases a cutting-edge, responsive website developed using modern web technologies such as HTML5, CSS3, and JavaScript. It is designed to seamlessly adapt to various screen sizes and devices, offering an optimized user experience whether on mobile, tablet, or desktop. The site features an intuitive layout with smooth animations and interactive UI elements, creating a visually appealing and engaging experience for users. The minimalist design focuses on clarity and ease of navigation.",
    },
    {
      id: 5,
      src: require("../Pages/PortfolioImgs/image-5760x4450 (5).jpg"),
      item: "web_dev",
      text: "This project showcases a cutting-edge, responsive website developed using modern web technologies such as HTML5, CSS3, and JavaScript. It is designed to seamlessly adapt to various screen sizes and devices, offering an optimized user experience whether on mobile, tablet, or desktop. The site features an intuitive layout with smooth animations and interactive UI elements, creating a visually appealing and engaging experience for users. The minimalist design focuses on clarity and ease of navigation.",
    },
    {
      id: 6,
      src: require("../Pages/PortfolioImgs/web2.jpg"),
      item: "web_dev",
      text: "This project showcases a cutting-edge, responsive website developed using modern web technologies such as HTML5, CSS3, and JavaScript. It is designed to seamlessly adapt to various screen sizes and devices, offering an optimized user experience whether on mobile, tablet, or desktop. The site features an intuitive layout with smooth animations and interactive UI elements, creating a visually appealing and engaging experience for users. The minimalist design focuses on clarity and ease of navigation.",
    },
    {
      id: 7,
      src: require("../Pages/PortfolioImgs/image-1000x755.jpg"),
      item: "ui_design",
    },
    {
      id: 8,
      src: require("../Pages/PortfolioImgs/image-1000x755 (6).jpg"),
      item: "ui_design",
    },
    {
      id: 9,
      src: require("../Pages/PortfolioImgs/image-1000x755 (2).jpg"),
      item: "ui_design",
    },
    {
      id: 10,
      src: require("../Pages/PortfolioImgs//image-1000x755 (3).jpg"),
      item: "ui_design",
    },
    {
      id: 11,
      src: require("../Pages/PortfolioImgs/image-1000x755 (4).jpg"),
      item: "ui_design",
    },
    {
      id: 12,
      src: require("../Pages/PortfolioImgs/image-1000x755 (5).jpg"),
      item: "ui_design",
    },
    {
      id: 13,
      src: require("../Pages/PortfolioImgs/mob6.jpg"),
      item: "mobile_app",
    },
    {
      id: 14,
      src: require("../Pages/PortfolioImgs/mob2.jpg"),
      item: "mobile_app",
    },
    {
      id: 15,
      src: require("../Pages/PortfolioImgs/mob3.jpg"),
      item: "mobile_app",
    },
    {
      id: 16,
      src: require("../Pages/PortfolioImgs/mob4.jpg"),
      item: "mobile_app",
    },
    {
      id: 17,
      src: require("../Pages/PortfolioImgs/mob1 (1).jpg"),
      item: "mobile_app",
    },
    {
      id: 18,
      src: require("../Pages/PortfolioImgs/mob7.jpg"),
      item: "mobile_app",
    },
    {
      id: 19,
      src: require("../Pages/PortfolioImgs/chain1.jpg"),
      item: "block_chain",
    },
    {
      id: 20,
      src: require("../Pages/PortfolioImgs/chain2.jpg"),
      item: "block_chain",
    },
    {
      id: 21,
      src: require("../Pages/PortfolioImgs/chain3.jpg"),
      item: "block_chain",
    },
    {
      id: 22,
      src: require("../Pages/PortfolioImgs/chain4.jpg"),
      item: "block_chain",
    },
    {
      id: 23,
      src: require("../Pages/PortfolioImgs/chain5.jpg"),
      item: "block_chain",
    },
    {
      id: 24,
      src: require("../Pages/PortfolioImgs/chain6.jpg"),
      item: "block_chain",
    },
    {
      id: 25,
      src: require("../Pages/PortfolioImgs/ai1.jpg"),
      item: "ai_service",
    },
    {
      id: 26,
      src: require("../Pages/PortfolioImgs/ai2.jpg"),
      item: "ai_service",
    },
    {
      id: 27,
      src: require("../Pages/PortfolioImgs/ai3.jpg"),
      item: "ai_service",
    },
    {
      id: 28,
      src: require("../Pages/PortfolioImgs/ai4.jpg"),
      item: "ai_service",
    },
    {
      id: 29,
      src: require("../Pages/PortfolioImgs/ai5.jpg"),
      item: "ai_service",
    },
    {
      id: 30,
      src: require("../Pages/PortfolioImgs/ai6.jpg"),
      item: "ai_service",
    },
  ];

  const [tab, setTab] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedText, setSelectedText] = useState("");
  const [noOfElement, setNoOfElement] = useState(4);

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
  const block_chain = images.filter((e) => e.item === "block_chain");
  const ai_service = images.filter((e) => e.item === "ai_service");
  // const android_ios = images.filter((e) => e.item === "android_ios");

  const data =
    tab === 1
      ? web_dev
      : tab === 2
      ? ui_design
      : tab === 3
      ? mobile_app
      : tab === 4
      ? block_chain
      : tab === 5
      ? ai_service
      : null;

  const slicedData = data.slice(0, noOfElement);
  const activeTab = (tabNumber) => {
    setTab(tabNumber);
    setNoOfElement(4);
  };

  const loadMore = () => {
    setNoOfElement(noOfElement + 4);
  };

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
              App Development
            </li>
            <li
              onClick={() => activeTab(4)}
              className={`tech-li ${tab === 4 ? "active" : ""}`}
            >
              Blockchain Development
            </li>
            <li
              onClick={() => activeTab(5)}
              className={`tech-li ${tab === 5 ? "active" : ""}`}
            >
              AI Services
            </li>
            {/* <li
              onClick={() => activeTab(6)}
              className={`tech-li ${tab === 6 ? "active" : ""}`}
            >
              Android / IOS Developmet
            </li> */}
          </ul>
        </div>
        <div className="tech-imgs">
          {slicedData.map((value, index) => (
            <div className="image-container" key={index}>
              <div className="image-overlay">
                <button
                  className="view-img"
                  onClick={() => openModal(value.src, value.text)}
                >
                  View Project
                </button>
              </div>
              <img src={value.src} alt="" className="tech-img" />
            </div>
          ))}
        </div>
        {noOfElement < data.length && (
          <button className="load-btn" onClick={loadMore}>
            Load More
          </button>
        )}
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
