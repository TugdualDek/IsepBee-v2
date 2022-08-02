import "../style/wallet.css";
import React, { useState } from "react";
import Popup from "./popup.js";

function Statistique() {
    const [isOpen, setOpen] = useState(false);
    function togglePopup() {
      setOpen(!isOpen);
    }
    return (
        <div>
        <p className="statsTitle">Detailed Statistics</p>
        <p className="statsetText">
            That’s our wallet. Nothing more, nothing less. <br /> It is an
            estimation because we may invest in DEFI, <br /> in this case it is just
            an estimation.
        </p>
        <div className="buttonEstimation">
        <button className="buttonWallet" onClick={togglePopup}>
          See more
        </button>
        {isOpen && (
          <Popup
            content={
              <>
                <b style={{fontSize: "20px"}}>DISCLAIMER :</b>
                <p style={{ color: "black" }}>
                  Our past performances don’t reflect our future performances.
                  We never know how the market can go, investing may leads to
                  loss of money
                </p>
                <center>
                <button style={{backgroundColor: "white", color: "black"}} className="buttonWallet" onClick={togglePopup}>
                  I understand
                </button>
                </center>
              </>
            }
            handleClose={togglePopup}
          />
        )}
      </div>
        </div>
    );
};

export default Statistique;