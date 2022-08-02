import React, { useState } from "react";
import Popup from "./popup.js";

function Tokenvalue() {
    const [isOpen, setOpen] = useState(false);
    function togglePopup() {
      setOpen(!isOpen);
    }
    return (
        <div>
            <p className="tokenTitle">Token value</p>
            <p className="tokenText">
                That’s our wallet value. <br /> It is based on the total value and the
                total supply.
            </p>
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
    );
};

export default Tokenvalue;