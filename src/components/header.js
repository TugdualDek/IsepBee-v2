import React from "react";
import "../style/header.css";
import logo from "../assets/isepToken.png";

function Header() {
  return (
    <nav className="header">
      <a href="">
        <img
          src={logo}
          width="75"
          height="75"
          alt="Logo"
          className="logo_image"
        />
      </a>
      <div className="navBar">
        <a href="#about">About</a>
        <a href="#ourgoal">Our goal</a>
        <a href="#whitepaper">Whitepaper</a>
        <a href="#roadmap">Roadmap</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  );
}

export default Header;
