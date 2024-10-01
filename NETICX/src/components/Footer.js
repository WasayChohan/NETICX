import React from "react";
import "./Footer.css";
import footerlogo from "../assets/Images/footerlogo.png";
import { FmdGood } from "@mui/icons-material";
import { Email } from "@mui/icons-material";
import { Phone } from "@mui/icons-material";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

function Footer() {
  const location = useLocation(); // Get the current location
  const navigate = useNavigate(); // For programmatic navigation

  const handleScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
    }
  };

  const handleNavClick = (path, id, e) => {
    e.preventDefault();
    if (location.pathname === "/") {
      // If on home page, scroll to the section
      handleScroll(id);
    } else {
      // Navigate to home page first and then scroll
      navigate("/");
      setTimeout(() => handleScroll(id), 300); // Scroll after navigating to home
    }
  };

  return (
    <div className="footer">
      <div className="footer-body">
        <div className="footer-logo">
          <img src={footerlogo} alt="" width="230px" height="88px" />
        </div>
        <div className="footer-items">
          <div className="footer-div1">
            <li className="footer-li">
              <NavLink to="/" onClick={(e) => handleNavClick("/", "home", e)}>
                Home
              </NavLink>
            </li>
            <li className="footer-li">
              <NavLink
                to="/"
                onClick={(e) => handleNavClick("/", "service", e)}
              >
                Service
              </NavLink>
            </li>
            <li className="footer-li">
              <NavLink
                to="/"
                onClick={(e) => handleNavClick("/", "whoweare", e)}
              >
                Who We Are
              </NavLink>
            </li>
          </div>
          <div className="footer-div1">
            <li className="footer-li">
              <NavLink
                to="/"
                onClick={(e) => handleNavClick("/", "products", e)}
              >
                Our Products
              </NavLink>
            </li>
            <li className="footer-li">
              <NavLink
                to="/"
                onClick={(e) => handleNavClick("/", "approach", e)}
              >
                Approach
              </NavLink>
            </li>
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
