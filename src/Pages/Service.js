import React from "react";
import "./Service.css";
import Slider from "react-slick";

import boximg1 from "../assets/Images/boximg1.png";
import boximg2 from "../assets/Images/boximg2.png";
import boximg3 from "../assets/Images/boximg3.png";

function Service(props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "150px",

    arrows: false,

    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
          centerPadding: "0",
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
          centerPadding: "0",
        },
      },
    ],
  };

  const box = [
    {
      img: boximg1,
      p1: "Web Development",
      p2: "From custom websites to powerful e-commerce platforms, we build digital solutions that captivate and convert.",
      link: "Webdev",
    },
    {
      img: boximg2,
      p1: "Graphic Designing",
      p2: "We craft visually stunning designs that enhance your brand identity and leave a lasting impression..",
      link: "Graphic",
    },
    {
      img: boximg3,
      p1: "Content Writing",
      p2: "Engage your audience with compelling content that drives action and resonates with your brand's voice.",
      link: "Content",
    },
    {
      img: boximg2,
      p1: "Digital Marketing",
      p2: "Amplify your online presence with strategic digital marketing services, including SEO, PPC, and social media management.",
      link: "Digital",
    },
    {
      img: boximg3,
      p1: "Android / iOS Development",
      p2: "Reach your audience with expertly designed mobile apps for Android and iOS platforms.",
      link: "Androiddev",
    },
    {
      img: boximg3,
      p1: "Automation Integration",
      p2: "Streamline your operations with tailored automation solutions and seamless integrations.",
      link: "Automation",
    },
    {
      img: boximg3,
      p1: "Blockchain Development",
      p2: "Dive into the future with our blockchain expertise in Ethereum, Binance, Polygon, Tron, Solana, and smart contracts.",
      link: "Blockchain",
    },
    {
      img: boximg3,
      p1: "UX/UI Design",
      p2: "Create exceptional user experiences with intuitive and engaging UX/UI designs.",
      link: "Uiux",
    },
    {
      img: boximg3,
      p1: "AI Services",
      p2: "Leverage the power of artificial intelligence with advanced AI solutions, including machine learning and NLP.",
      link: "Ai",
    },
  ];

  return (
    <div className="service" id={props.id}>
      <h1 className="service-h1">Services We Offer</h1>
      <div className="sub-service">
        <Slider {...settings}>
          {box.map((box, index) => (
            <div className="box" key={index}>
              <div className="box11">
                <img src={box.img} alt="" className="box1" />
              </div>
              <p className="p1">{box.p1}</p>
              <p className="p2">{box.p2}</p>

              <button
                onClick={() => (window.location.href = box.link)}
                className="read-more-btn"
              >
                read more --
              </button>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Service;
