import React from 'react';
import logo from "../assets/isepToken.png";
import "../style/wallet.css";

function Ibepcoin() {
    return (
        <div className="ibepback">
            <h1 className="ibepcoin">
                <img
                    src={logo}
                    width="48"
                    height="48"
                    alt="Logo"
                    className="logo_image2"
                />
                IbepCoin
            </h1>
            <div className="sousibep">
                <div className='ibepcomp'>
                    <h1 className='ibeptitre'>Wallet value</h1>
                </div>
                <p>/</p>
                <div className='ibepcomp'>
                    <h1 className='ibeptitre'>Total supply</h1>
                </div>
                <p>=</p>
                <div className='ibepcomp'>
                    <h1 className='ibeptitre'>Total value</h1>
                </div>
            </div>
        </div>
    );
};

export default Ibepcoin;