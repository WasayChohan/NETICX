import React, { useState, useEffect } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/Images/logo.png";
import { Link } from "react-scroll";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleScrollVisibility = () => {
    const scrollY = window.scrollY;
    setIsVisible(scrollY <= lastScrollY || scrollY < 100);
    setLastScrollY(scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollVisibility);
    return () => {
      window.removeEventListener("scroll", handleScrollVisibility);
    };
  }, [lastScrollY]);

  return (
    <div>
      <nav
        className={`nav ${isMenuOpen ? "open" : ""} ${
          isVisible ? "visible" : "hidden"
        }`}
      >
        <div className="logo">
          <img src={logo} alt="Logo" width="230px" height="88px" />
        </div>

        <ul className="navbar-ul">
          <li className="navbar-li">
            <Link
              to="home"
              spy={true}
              smooth={true}
              offset={-15} // Adjust offset for Home section
              duration={500}
              onClick={closeMenu}
              activeClass="active" // Specify the active class
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="service"
              spy={true}
              smooth={true}
              offset={-10} // Adjust offset for Services section
              duration={500}
              onClick={closeMenu}
              activeClass="active" // Specify the active class
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="whoweare"
              spy={true}
              smooth={true}
              offset={-6} // Adjust offset for Who We Are section
              duration={500}
              onClick={closeMenu}
              activeClass="active" // Specify the active class
            >
              Who We Are
            </Link>
          </li>
          <li>
            <Link
              to="products"
              spy={true}
              smooth={true}
              offset={-20} // Adjust offset for Products section
              duration={500}
              onClick={closeMenu}
              activeClass="active" // Specify the active class
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="approach"
              spy={true}
              smooth={true}
              offset={-20} // Adjust offset for Approach section
              duration={500}
              onClick={closeMenu}
              activeClass="active" // Specify the active class
            >
              Approach
            </Link>
          </li>
          <li>
            <Link
              to="portfolio"
              smooth={true}
              duration={500}
              offset={-70} // Adjust offset for Portfolio section
              onClick={closeMenu}
              activeClass="active" // Specify the active class
            >
              Portfolio
            </Link>

            {/* <NavLink to="/portfolio">Portfolio</NavLink> */}
          </li>
        </ul>

        <NavLink to="/contact" className="contact-btn-link">
          <button className="nav_contact_button">Contact us</button>
        </NavLink>
      </nav>
      <div className="menu_icon" onClick={toggleMenu}>
        <MenuIcon />
      </div>
    </div>
  );
}

export default Header;
