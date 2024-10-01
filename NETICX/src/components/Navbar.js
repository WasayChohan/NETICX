import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/Images/logo.png";
import "./Navbar.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); // Get the current location
  const navigate = useNavigate(); // For programmatic navigation

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

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
      handleScroll(id);
    } else {
      navigate("/");
      setTimeout(() => handleScroll(id), 300);
    }
    closeMenu();
  };

  return (
    <div>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <div className="logo">
          <img src={logo} alt="Logo" width="230px" height="88px" />
        </div>

        <ul className="navbar-ul">
          <li className="navbar-li">
            <NavLink to="/" onClick={(e) => handleNavClick("/", "home", e)}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/service"
              onClick={(e) => handleNavClick("/", "service", e)}
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/whoweare"
              onClick={(e) => handleNavClick("/", "whoweare", e)}
            >
              Who We Are
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/products"
              onClick={(e) => handleNavClick("/", "products", e)}
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/approach"
              onClick={(e) => handleNavClick("/", "approach", e)}
            >
              Approach
            </NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" onClick={closeMenu}>
              Portfolio
            </NavLink>
          </li>
        </ul>

        <button className="nav_contact_button">Contact Us</button>
      </nav>
      <div className="menu_icon" onClick={toggleMenu}>
        <MenuIcon />
      </div>
    </div>
  );
}

export default Header;
