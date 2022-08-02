import React, { useState } from "react";

import PopUpWarningPerformance from "./PopUpWarningPerformance.js";
function TokenValue() {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <p className="tokenTitle">Token value</p>
      <p className="tokenText">
        That’s our wallet value. <br /> It is based on the total value and the
        total supply.
      </p>
      <button className="buttonWallet" onClick={() => setOpen(true)}>
        See more
      </button>
      <PopUpWarningPerformance isOpen={isOpen} setOpen={setOpen} />
    </div>
  );
}

export default TokenValue;
