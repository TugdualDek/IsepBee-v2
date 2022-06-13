import './App.css';
import Header from "./components/header.js";
import React, { useState, useEffect } from "react";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return width;
}

function App() {
  const [width, setWidth] = useState(getWindowDimensions());

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(getWindowDimensions()));
    return () =>
      window.removeEventListener("resize", () =>
        setWidth(getWindowDimensions())
      );
  });

  useEffect(() => console.log(width));
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
