import React from "react";
import "./Servicepages.css";
import servicewebdev from "./ServiceImg/service-webdev.jpg";

function Uiux() {
  return (
    <div className="service-pages">
      <div className="services-pages-layout">
        <div className="service-pages-img">
          {" "}
          <img src={servicewebdev} alt="" />{" "}
        </div>
        <div className="service-pages-text">
          <h1>Web Development</h1>
          <p>
            "At NETICX, we specialize in delivering custom web solutions
            tailored to your unique business needs. Our experienced developers
            utilize the latest technologies to create robust, user-friendly
            websites that engage your audience and drive results. From custom
            website development and e-commerce solutions to responsive designs
            and content management systems, we ensure your site looks and
            functions beautifully on all devices. Our services also include
            performance optimization for fast loading speeds and ongoing
            maintenance and support to keep your website up-to-date. Partner
            with us to elevate your online presence and create a digital
            experience that sets you apart from the competition. Contact NETICX
            today to learn how we can help your business thrive online!"
          </p>
        </div>
      </div>
    </div>
  );
}

export default Uiux;
