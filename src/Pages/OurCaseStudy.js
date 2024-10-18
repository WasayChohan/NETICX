import React from "react";
import "./OurCaseStudy.css";
import hms from "../assets/Images/hms.PNG";
import hrm from "../assets/Images/hrm.PNG";
import caribbeans from "../assets/Images/caribbeans.PNG";
import { ArrowForwardIos } from "@mui/icons-material";
import { Link } from "react-router-dom";

function Products(props) {
  const product = [
    {
      id: 1,
      img: hms,
      product_text_h1: "HMS",
      product_p1:
        " The Hospital Management System (HMS) by SalesEmerge is a user-friendly platform designed to help hospitals manage everyday tasks more efficiently. It includes tools for patient registration, billing, scheduling appointments, and maintaining medical records. The system makes it easier for hospitals to organize their operations, leading to better patient care and smoother workflow.",
      product_link: "./HmsCaseStudy",
    },
    {
      id: 1,
      img: hrm,
      product_text_h1: "HRM",
      product_p1:
        "The Human Resource Management System (HRM) by SalesEmerge helps organizations manage their employees easily. It covers important tasks like tracking attendance, processing payroll, and evaluating performance. This system makes HR activities smoother and improves how companies manage their workforce. ",
      // product_text_h5: "Explor",
      product_link: "./HrmCaseStudy",
    },
    {
      id: 1,
      img: caribbeans,
      product_text_h1: "CARIBBEANS CONNECTS",
      product_p1:
        "Caribbeans Connects is an online platform that helps creatives like models, musicians, and photographers from the Caribbean, UK, and beyond connect with global opportunities. It allows them to showcase their talents and find collaborations or jobs worldwide. To join, users can simply register on the site and start connecting",
      // product_text_h5: "Explor",
      product_link: "./CaribbeanCaseStudy",
    },
  ];

  return (
    <section className="products" id="products">
      <div className="product-color-line"></div>
      <h1 className="product-h1">Our Case Study</h1>

      {product.map((product) => (
        <div className="product" key={product.id}>
          <div className="product-img">
            <img src={product.img} alt="" />
          </div>

          <div className="product-text-parent">
            <div className="product-text">
              <h1 className="product-text-h1"> {product.product_text_h1} </h1>
              <p className="product-p1">{product.product_p1}</p>

              {/* <Link to="/contact" className="contact-btn-link">
                <button className="nav_contact_button">Contact us</button>
              </Link> */}

              <Link to={product.product_link} className="projectcase-btn-link">
                <span>
                  <h5 className="explore-alignment">
                    <span className="explore-text">Explore</span>
                    <span className="arrow-icon">
                      <ArrowForwardIos />
                    </span>
                  </h5>
                </span>
              </Link>
            </div>
          </div>
        </div>
      ))}

      <button className="product-btn">Explore more product</button>
    </section>
  );
}

export default Products;
