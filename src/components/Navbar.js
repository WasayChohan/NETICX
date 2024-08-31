// import logo from "../Images/logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/Images/logo.png";

import "./Navbar.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
// import { Link } from "react-scroll";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <div>
      <nav className={`nav ${isMenuOpen ? "open" : ""}`}>
        <div className="logo">
          <img src={logo} alt="" width="230px" height="88px" />
        </div>

        <ul className="navbar-ul">
          <li className="navbar-li">
            {" "}
            <NavLink onClick={closeMenu} to={"/"}>
              {" "}
              Home
            </NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink onClick={closeMenu} to={"/service"}>
              {" "}
              Services
            </NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink onClick={closeMenu} to={"/whoweare"}>
              {" "}
              Who We Are
            </NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink onClick={closeMenu} to={"/products"}>
              {" "}
              Products
            </NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink onClick={closeMenu} to={"/approach"}>
              {" "}
              Approach
            </NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink onClick={closeMenu} to={"/portfolio"}>
              {" "}
              Portfolio
            </NavLink>{" "}
          </li>
        </ul>
        {/* <ul className="navbar-ul">
          <li className="navbar-li">
            <Link
              to={"/"}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Home
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to={"/service"}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Services
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to={"/whoweare"}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Who We Are
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to={"/products"}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Products
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to={"/approach"}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Approach
            </Link>
          </li>
          <li>
            {" "}
            <Link
              onClick={closeMenu}
              to={"/portfolio"}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Portfolio
            </Link>
          </li>
        </ul> */}
        <button className="nav_contact_button">Contact Us</button>
      </nav>
      <div className="menu_icon" onClick={toggleMenu}>
        <MenuIcon />
      </div>
    </div>
  );
}

export default Header;
