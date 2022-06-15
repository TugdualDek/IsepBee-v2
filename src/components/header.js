import "../style/header.css";
import logo from "../assets/isepToken.png";
import React, { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width } = window;
  return width;
}

function Header() {
  const [width, setWidth] = useState(getWindowDimensions());

  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(getWindowDimensions()));
    return () =>
    window.removeEventListener("resize", () => setWidth(getWindowDimensions()));
  }
  )

  function btnFunction() {
    console.log(isOpen);
    setOpen(!isOpen);
  }
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
        {width > 500 && 
        <div className="navBar">
            <a className="items-navBar" href="#about">About</a>
            <a className="items-navBar" href="#ourgoal">Our goal</a>
            <a className="items-navBar" href="#whitepaper">Whitepaper</a>
            <a className="items-navBar" href="#roadmap">Roadmap</a>
            <a className="items-navBar" href="#contact">Contact</a>
        </div>}
      {width < 500 && <button onClick={() => btnFunction() } className="btn-header">CQFD</button>}
      {isOpen && (
        <div className="navBar-open">
          <a className="items-navBar-open" href="#about">About</a>
          <a className="items-navBar-open" href="#ourgoal">Our goal</a>
          <a className="items-navBar-open" href="#whitepaper">Whitepaper</a>
          <a className="items-navBar-open" href="#roadmap">Roadmap</a>
          <a className="items-navBar-open" href="#contact">Contact</a>
        </div>)
      }
    </div>
  );
}

export default Header;