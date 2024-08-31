import React from "react";
import "./Footer.css";
import footerlogo from "../assets/Images/footerlogo.png";
import { FmdGood } from "@mui/icons-material";
import { Email } from "@mui/icons-material";
import { Phone } from "@mui/icons-material";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-body">
        <div className="footer-logo">
          <img src={footerlogo} alt="" width="230px" height="88px" />
        </div>
        <div className="footer-items">
          <div className="footer-div1">
            <li className="footer-li"> Home</li>
            <li className="footer-li">Service</li>
            <li className="footer-li">Who WE Are</li>
          </div>
          <div className="footer-div1">
            <li className="footer-li">Our Products</li>
            <li className="footer-li">Approach</li>
            <li className="footer-li">Testimonials</li>
          </div>
          <div className="footer-div1">
            <li className="footer-li">
              <b>Location</b>
            </li>
            <li className="footer-li">
              <span className="footer-span">
                <FmdGood /> Pak, Karachi
              </span>
            </li>
            <li className="footer-li">
              <span className="footer-span">
                <FmdGood /> UAE
              </span>
            </li>
          </div>
          <div className="footer-div1">
            <li className="footer-li">
              <b>Contact With Us</b>
            </li>
            <li className="footer-li">
              <span className="footer-span">
                <Email /> Info@neticx.com
              </span>
            </li>
            <li className="footer-li">
              <span className="footer-span">
                {" "}
                <Phone /> +923139120034
              </span>
            </li>
          </div>
        </div>
      </div>
      <div className="copyright">© 2024 Neticx. All rights reserved.</div>
    </div>
  );
}

export default Footer;
