import React from "react";
import Popup from "./Popup";
const PopUpWarningPerformance = ({ isOpen, setOpen }) => {
  function handleClose() {
    setOpen(false);
  }
  if (!isOpen) return null;

  return (
    <Popup
      content={
        <div
          style={{
            alignItems: "center",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <b style={{ fontSize: "20px" }}>DISCLAIMER :</b>
          <p style={{ color: "white", fontSize: "18px", textAlign: "center" }}>
            Our past performances don’t reflect our future performances. We
            never know how the market can go, investing may leads to loss of
            money
          </p>
          <center>
            <button
              style={{ backgroundColor: "white", color: "black" }}
              className="buttonWallet"
              onClick={handleClose}
            >
              I understand
            </button>
          </center>
        </div>
      }
      handleClose={handleClose}
    />
  );
};

export default PopUpWarningPerformance;
