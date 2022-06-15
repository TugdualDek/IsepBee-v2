import "../style/header.css";
import logo from "../assets/isepToken.png";
import React, { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return width;
}

function Header() {
  const [width, setWidth] = useState(getWindowDimensions());

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(getWindowDimensions()));
    return () =>
    window.removeEventListener("resize", () => setWidth(getWindowDimensions()));
  }
  )
  return (
    <div className="header">
      <div>
          <img
            src={logo}
            width="75"
            height="75"
            alt="Logo"
            className="logo_image"
          />
      </div>
        {width > 500 && <div className="navBar">
            <a className="items-navBar" href="#about">About</a>
            <a className="items-navBar" href="#ourgoal">Our goal</a>
            <a className="items-navBar" href="#whitepaper">Whitepaper</a>
            <a className="items-navBar" href="#roadmap">Roadmap</a>
            <a className="items-navBar" href="#contact">Contact</a>
        </div>}
      {width < 500 && <button className="btn-header">CQFD</button>}
    </div>
  );
}

export default Header;