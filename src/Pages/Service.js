import React, { useRef } from "react";
import "./Service.css";
import boximg1 from "../assets/Images/boximg1.png";
import boximg2 from "../assets/Images/boximg2.png";
import boximg3 from "../assets/Images/boximg3.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Service() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 3,
    centerMode: true, // Enable center mode if you want centered slide effect
  };
  return (
    <div className="service">
      <h1 className="service-h1"> Service We Offer</h1>

      <div className="sub-service">
        <Slider {...settings}>
          <div className="box">
            <div className="box11">
              <img src={boximg1} alt="" className="box1" />
            </div>
            <p className="p1">Software Testing Service</p>
            <p className="p2">
              A Website is an extension of yourself and we can help you to
              express it properly. Your website is your number one marketing
              asset because we live in a digital age.
            </p>
          </div>
          <div className="box">
            <div className="box11">
              <img src={boximg1} alt="" className="box1" />
            </div>
            <p className="p1">Software Testing Service</p>
            <p className="p2">
              A Website is an extension of yourself and we can help you to
              express it properly. Your website is your number one marketing
              asset because we live in a digital age.
            </p>
          </div>
          <div className="box">
            <div className="box11">
              <img src={boximg1} alt="" className="box1" />
            </div>
            <p className="p1">Software Testing Service</p>
            <p className="p2">
              A Website is an extension of yourself and we can help you to
              express it properly. Your website is your number one marketing
              asset because we live in a digital age.
            </p>
          </div>
          <div className="box">
            <div className="box11">
              <img src={boximg1} alt="" className="box1" />
            </div>
            <p className="p1">Software Testing Service</p>
            <p className="p2">
              A Website is an extension of yourself and we can help you to
              express it properly. Your website is your number one marketing
              asset because we live in a digital age.
            </p>
          </div>
          <div className="box">
            <div className="box11">
              <img src={boximg1} alt="" className="box1" />
            </div>
            <p className="p1">Software Testing Service</p>
            <p className="p2">
              A Website is an extension of yourself and we can help you to
              express it properly. Your website is your number one marketing
              asset because we live in a digital age.
            </p>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Service;
