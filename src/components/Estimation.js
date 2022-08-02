import React, { useState } from "react";
import PopUpWarningPerformance from "./PopUpWarningPerformance.js";
function Estimation() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <p className="estimationTitle">Wallet Estimation</p>
      <p className="estimationText">
        That’s our wallet. Nothing more, nothing less. <br /> It is an
        estimation because we may invest in DEFI, <br /> in this case it is just
        an estimation.
      </p>
      <div className="buttonEstimation">
        <button className="buttonWallet" onClick={() => setOpen(true)}>
          See more
        </button>
        <PopUpWarningPerformance isOpen={isOpen} setOpen={setOpen} />
      </div>
    </div>
  );
}

export default Estimation;
