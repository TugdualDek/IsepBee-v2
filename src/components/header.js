import "../style/header.css";
import logo from "../assets/isepToken.png";
import React, { useState, useEffect } from "react";


function Header() {
    const [toggleMenu, setToggleMenu] = useState(false);
    
    const [largeur, setLargeur] = useState(window.innerWidth);

    const toggleNavSmallScreen = () => {
      setToggleMenu(!toggleMenu);
    }
    

useEffect (() => {

    const changeWidth = () => {
        setLargeur(window.innerWidth);

        if(window.innerWidth > 500){
            setToggleMenu(false);
        }
    }

    window.addEventListener('resize', changeWidth);

    return () => {
        window.removeEventListener('resize', changeWidth);
    }
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
      {(toggleMenu || largeur > 500) && (
        <div className="navBar">
            <a href="#about">About</a>
            <a href="#ourgoal">Our goal</a>
            <a href="#whitepaper">Whitepaper</a>
            <a href="#roadmap">Roadmap</a>
            <a href="#contact">Contact</a>
        </div>
      )}
      <button onClick={toggleNavSmallScreen} className="btn-header">CQFD</button>
    </div>
  );
}

export default Header;
