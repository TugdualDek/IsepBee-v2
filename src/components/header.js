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
      window.removeEventListener("resize", () =>
        setWidth(getWindowDimensions())
      );
  });

  function btnFunction() {
    console.log(isOpen);
    setOpen(!isOpen);
  }

  useEffect(() => {
    if (isOpen && width >= 500) {
      setOpen(false);
    }
  }, [width]);

  return (
    <div className="header" 
    style={{marginBottom: isOpen ? 250 : 0}}>
      <div className="header-img">
        <img
          src={logo}
          width="75"
          height="75"
          alt="Logo"
          className="logo_image"
        />
      </div>
      {width > 500 && (
        <div className="navBar">
          <a className="items-navBar" href="#about">
            About
          </a>
          <a className="items-navBar" href="#ourgoal">
            Our goal
          </a>
          <a className="items-navBar" href="#whitepaper">
            Whitepaper
          </a>
          <a className="items-navBar" href="#roadmap">
            Roadmap
          </a>
          <a className="items-navBar" href="#contact">
            Contact
          </a>
        </div>
      )}
      {width <= 500 && (
        <button
          onClick={() => btnFunction()}
          className={`${isOpen ? "navbar-burger-open" : "navbar-burger"}`}
        >
          <span className="burger-bar"></span>
        </button>
      )}
      {isOpen && (
        <div className="navBar-open">
          <a className="items-navBar-open" href="#about" onClick={() => btnFunction()}>
            About
          </a>
          <a className="items-navBar-open" href="#ourgoal" onClick={() => btnFunction()}>
            Our goal
          </a>
          <a className="items-navBar-open" href="#whitepaper" onClick={() => btnFunction()}>
            Whitepaper
          </a>
          <a className="items-navBar-open" href="#roadmap" onClick={() => btnFunction()}>
            Roadmap
          </a>
          <a className="items-navBar-open" href="#contact" onClick={() => btnFunction()}>
            Contact
          </a>
        </div>
      )}
    </div>
  );
}

export default Header;
