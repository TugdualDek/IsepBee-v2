import React from "react";
import Piechart from "./piechart.js";
import Estimation from "./estimation.js";
import "../style/wallet.css";

function Wallet() {
  return (
    <div className="walletContainer">
      <p className="walletTitle">Our Wallet</p>
      <div className="walletComponent">
        <Estimation />
        <Piechart />
      </div>
    </div>
  );
}

export default Wallet;
