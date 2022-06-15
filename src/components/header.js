import "../style/header.css";
import logo from "../assets/isepToken.png";
import React, { useState, useEffect } from "react";


function Header() {
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
        <div className="navBar">
            <a className="items-navBar" href="#about">About</a>
            <a className="items-navBar" href="#ourgoal">Our goal</a>
            <a className="items-navBar" href="#whitepaper">Whitepaper</a>
            <a className="items-navBar" href="#roadmap">Roadmap</a>
            <a className="items-navBar" href="#contact">Contact</a>
        </div>
      <button className="btn-header">CQFD</button>
    </div>
  );
}

export default Header;

// CODE USELESS POUR L'INSTANT A SUPPRIMER SI CA MARCHE

// const [toggleMenu, setToggleMenu] = useState(false);
    
// const [largeur, setLargeur] = useState(window.innerWidth);

// const toggleNavSmallScreen = () => {
//   setToggleMenu(!toggleMenu);
// }


// useEffect (() => {

// const changeWidth = () => {
//     setLargeur(window.innerWidth);

//     if(window.innerWidth > 500){
//         setToggleMenu(false);
//     }
// }

// window.addEventListener('resize', changeWidth);

// return () => {
//     window.removeEventListener('resize', changeWidth);
// }
// }
// )
