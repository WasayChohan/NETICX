import React, { useRef, useState } from "react";
import "./Review.css";
import img13 from "../assets/Images/img13.png";
import img14 from "../assets/Images/img14.png";
import img15 from "../assets/Images/img15.png";
import img16 from "../assets/Images/img16.png";
import img17 from "../assets/Images/img17.png";

import starimg from "../assets/Images/starimg.png";

import Slider from "react-slick";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Review() {
  const [currentText, setCurrentText] = useState(
    "Without any doubt I recommend Neticx as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else."
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    beforeChange: (current, next) => {
      const texts = [
        "Without any doubt I recommend Neticx as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",

        "Neticx is without a doubt among the top web design and digital marketing firms, in my opinion. Among the greatest organisations I've found thus far. wouldn't think twice about introducing their work to others.",

        "As one of the top web design and digital marketing firms, Neticx comes highly recommended from me. Among the best agencies I've found thus far. wouldn't think twice to present their work to another person.",

        "As another of the very top web design and digital marketing firms, Neticx comes highly recommended from me. Among the best agencies I've found thus far. wouldn't think twice to present their work to another person.",

        "Becoming a member of the top web design and internet advertising firms, Neticx comes highly recommended from me. Among the best agencies I've found thus far. wouldn't think twice to present their work to another person.",
      ];
      setCurrentText(texts[next % texts.length]);
    },
    responsive: [
      {
        breakpoint: 1424,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  const slider = useRef(null);
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  const reviews = [
    {
      id: 1,
      img: img14,
      stars: starimg,
      reviews_p1: "Corina McCoy",
      reviews_p2: "Software Engineer",
    },
    {
      id: 2,
      img: img15,
      stars: starimg,
      reviews_p1: "Corina McCoy",
      reviews_p2: "Software Engineer",
    },
    {
      id: 3,
      img: img13,
      stars: starimg,
      reviews_p1: "Corina McCoy",
      reviews_p2: "Software Engineer",
    },
    {
      id: 4,
      img: img16,
      stars: starimg,
      reviews_p1: "Corina McCoy",
      reviews_p2: "Software Engineer",
    },
    {
      id: 5,
      img: img17,
      stars: starimg,
      reviews_p1: "Corina McCoy",
      reviews_p2: "Software Engineer",
    },
  ];

  return (
    <div className="review">
      <div className="review-body">
        <div className="slider-btn">
          <button
            className="prev-btn"
            onClick={() => slider.current.slickPrev()}
          >
            {" "}
            <ArrowBackIcon />{" "}
          </button>
          <div className="review-text">
            <div className="review-color-line"></div>

            <p className="review-p1">
              Why customers love <br /> <b>working with us</b>{" "}
            </p>
            <p className="review-p2">{currentText}</p>
          </div>{" "}
          <button
            className="next-btn"
            onClick={() => slider.current.slickNext()}
          >
            <ArrowForwardIcon />
          </button>
        </div>
        <div className="review-show">
          <Slider ref={slider} {...settings}>
            {reviews.map((review) => (
              <div className="reviews" key={review.id}>
                <div className="reviews-img">
                  <img
                    src={review.img}
                    alt=""
                    width="100px"
                    height="100px"
                    style={{ borderRadius: "51px" }}
                  />
                </div>

                <div className="stars">
                  {[...Array(5)].map((_, i) => (
                    <img
                      key={i}
                      src={review.stars}
                      alt=""
                      width="19.52px"
                      height="20px"
                    />
                  ))}
                </div>
                <p className="reviews-p1"> {review.reviews_p1} </p>
                <p className="reviews-p2"> {review.reviews_p2} </p>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

export default Review;
