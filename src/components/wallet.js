import React from "react";
import Piechart from "./piechart.js";
import Estimation from "./estimation.js";
import Chart from "./chartstatistique.js";
import Statistique from "./statistique.js";
import Tokenvalue from "./tokenvalue.js";
import "../style/wallet.css";

function Wallet() {
  return (
    <div className="walletContainer">
      <p className="walletTitle">Our Wallet</p>
      <div className="walletComponent">
        <div className="walletComponent1">
          <Estimation />
          <Piechart />
        </div>
        <div className="walletComponent2">
          <Chart />
          <Statistique />
        </div>
        <div className="walletComponent3">
          <Tokenvalue />
        </div>
      </div>
    </div>
  );
}

export default Wallet;
