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
    slidesToShow: 3,
    slidesToScroll: 3,
    centerMode: true,
  };
  const box = [
    {
      img: boximg1,
      p1: "Mobile App Development",
      p2: "A Website is an extension of yourself and we can help you to express it properly. Your website is number one marketing asset because we live in a digital age.",
    },
    {
      img: boximg2,
      p1: "Web Design & Development",
      p2: "A Website is an extension of yourself and we can help you to express it properly. Your website is number one marketing asset because we live in a digital age.",
    },
    {
      img: boximg3,
      p1: "Software Testing Service",
      p2: "A Website is an extension of yourself and we can help you to express it properly. Your website is number one marketing asset because we live in a digital age.",
    },
  ];
  return (
    <div className="service">
      <h1 className="service-h1"> Service We Offer</h1>

      <div className="sub-service">
        <Slider {...settings}>
          {box.map((box, index) => (
            <div className="box" key={index}>
              <div className="box11">
                <img src={box.img} alt="" className="box1" />
              </div>
              <p className="p1"> {box.p1} </p>
              <p className="p2">{box.p2}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default Service;
