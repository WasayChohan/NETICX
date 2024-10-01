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
      p1: "Mobile App Development",
      p2: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      img: boximg2,
      p1: "Software Testing Service",
      p2: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      img: boximg3,
      p1: "Web Design & Development",
      p2: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      img: boximg2,
      p1: "Software Testing Service",
      p2: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
    },
    {
      img: boximg3,
      p1: "Web Design & Development",
      p2: "A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.",
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
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Service;
