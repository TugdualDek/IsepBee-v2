import Popup from "./popup.js";
import React, { useState } from "react";

function Estimation() {
  const [isOpen, setOpen] = useState(false);
  function togglePopup() {
    setOpen(!isOpen);
  }
  return (
    <div>
      <p className="estimationTitle">Wallet Estimation</p>
      <p className="estimationText">
        That’s our wallet. Nothing more, nothing less. <br /> It is an
        estimation because we may invest in DEFI, <br /> in this case it is just
        an estimation.
      </p>
      <button className="buttonWallet" onClick={togglePopup}>
        See more
      </button>
      {isOpen && (
        <Popup
          content={
            <>
              <b>Design your Popup</b>
              <p style={{ color: "black" }}>
                Our past performances don’t reflect our future performances. We
                never know how the market can go, investing may leads to loss of
                money
              </p>
            </>
          }
          handleClose={togglePopup}
        />
      )}
    </div>
  );
}

export default Estimation;
