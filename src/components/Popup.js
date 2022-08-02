import React from "react";

function Popup({ handleClose, children }) {
  return (
    <div className="popup-container">
      <div className="popup-box" onClick={handleClose}></div>

      <div className="box" onClick={() => {}}>
        <div className="close-icon" onClick={handleClose}>
          x
        </div>
        {children}
      </div>
    </div>
  );
}

export default Popup;
