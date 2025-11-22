import React from "react";
import "./Navbar.css"
import logo from "./assets/Submark Orange.png";

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt="Logo" />
            </div>
            <ul className="navbar-menu">
                <li><a href="#home">Resume</a></li>
                <li><a href="#about">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;