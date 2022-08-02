import React from "react";
import Piechart from "./Piechart.js";
import Estimation from "./Estimation.js";
import ChartStatistique from "./ChartStatistique.js";
import Statistique from "./Statistique.js";
import TokenValue from "./TokenValue.js";
import Ibepcoin from "./Ibepcoin.js";
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
          <ChartStatistique />
          <Statistique />
        </div>
        <div className="walletComponent3">
          <TokenValue />
          <Ibepcoin />
        </div>
      </div>
    </div>
  );
}

export default Wallet;
