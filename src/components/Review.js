import React from "react";
import "./Review.css";
import img13 from "../assets/Images/img13.png";
import img14 from "../assets/Images/img14.png";
import img15 from "../assets/Images/img15.png";
import img16 from "../assets/Images/img16.png";
import img17 from "../assets/Images/img17.png";

import starimg from "../assets/Images/starimg.png";

function Review() {
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
        <div className="review-text">
          <div className="review-color-line"></div>

          <p className="review-p1">
            Why customers love <br /> <b>working with us</b>{" "}
          </p>
          <p className="review-p2">
            Without any doubt I recommend Neticx as one of the best web design
            and digital marketing agencies. One of the best agencies I’ve came
            across so far. Wouldn’t be hesitated to introduce their work to
            someone else.
          </p>
        </div>
        <div className="review-show">
          {reviews.map((reviews) => (
            <div className="reviews" key={reviews.id}>
              <img
                src={reviews.img}
                alt=""
                width="100px"
                height="100px"
                style={{ borderRadius: "51px" }}
              />
              <div className="stars">
                <img src={reviews.stars} alt="" width="19.52px" height="20px" />
                <img src={reviews.stars} alt="" width="19.52px" height="20px" />
                <img src={reviews.stars} alt="" width="19.52px" height="20px" />
                <img src={reviews.stars} alt="" width="19.52px" height="20px" />
                <img src={reviews.stars} alt="" width="19.52px" height="20px" />
              </div>

              <p className="reviews-p1"> {reviews.reviews_p1} </p>
              <p className="reviews-p2"> {reviews.reviews_p2} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Review;
