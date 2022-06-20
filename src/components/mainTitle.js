import "../style/mainTitle.css";
import ImageTitle from "../assets/imageTitle.js";
import React from "react";

function mainTitle() {
  return (
    <div className="title">
      <div className="main-textContainer">
        <div className="main-titleText">
          <p>
            IsepBee
            <br />
            A crypto project
            <br />
            of IsepInvest
            <br />
            and Garage
          </p>
        </div>

        <br />

        <div className="main-smallText">
          <p>A solution to make money with peace of mind</p>
        </div>
      </div>
      <div className="main-imageTitle">
        <ImageTitle />
      </div>
    </div>
  );
}

export default mainTitle;
