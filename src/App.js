import "./App.css";
import Header from "./components/Header.js";
import MainTitle from "./components/MainTitle.js";
import Roadmap from "./components/Roadmap.js";
import Performance from "./components/Performance.js";
import Wallet from "./components/Wallet.js";
import React, { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return width;
}

function App() {
  const [width, setWidth] = useState(getWindowDimensions());

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(getWindowDimensions()));
    console.log(width);
    return () =>
      window.removeEventListener("resize", () =>
        setWidth(getWindowDimensions())
      );
  });

  return (
    <div className="App">
      <div className="AppContainer">
        <Header />
        <MainTitle />
        <Roadmap />
        <Performance />
        <Wallet />
      </div>
    </div>
  );
}

export default App;
