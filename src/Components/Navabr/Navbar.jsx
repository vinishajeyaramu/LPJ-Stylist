import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import logo from '../../Assets/Images/Label Pallavi J.jpg'
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <>
      <nav>
        {/* Hamburger Icon */}
        <div className="hamburger" onClick={toggleMenu}>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
          <span className={`bar ${isOpen ? "open" : ""}`}></span>
        </div>

        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        {/* Mobile Menu */}
        <div className={`menu ${isOpen ? "active" : ""}`}>
          <ul>
            <li>
              <NavLink to="/" className="nav-link" onClick={closeMenu}>
                HOME
              </NavLink>
            </li>
            <li>
              <NavLink to="/aboutme" className="nav-link" onClick={closeMenu}>
                ABOUT ME
              </NavLink>
            </li>
            <li>
              <NavLink to="/services" className="nav-link" onClick={closeMenu}>
                SERVICES
              </NavLink>
            </li>
            <li>
              <NavLink to="/portfolio" className="nav-link" onClick={closeMenu}>
                PORTFOLIO
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" className="nav-link" onClick={closeMenu}>
                BLOG
              </NavLink>
            </li>
            <li>
              <NavLink to="/appointment" className="nav-link" onClick={closeMenu}>
                APPOINTMENT
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Overlay to close menu when clicked outside */}
        {isOpen && <div className="overlay" onClick={closeMenu}></div>}
      </nav>
    </>
  );
};

export default Navbar;
