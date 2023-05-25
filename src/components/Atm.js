import React from "react";
import {BiWifi} from 'react-icons/bi'
import {GoPrimitiveDot} from 'react-icons/go'

const Atm = () => {
  return (
    <div className="ATM-card">
      <div className="ATM-head">
        <img src="./images/sim.png" className="sim-port" />
        <BiWifi />
      </div>
      <div className="ATM-body">
        <h5>Jonathan Micheal</h5>

        <div className="codes">
          <span>
            <GoPrimitiveDot />
            <GoPrimitiveDot />
            <GoPrimitiveDot />
            <GoPrimitiveDot />
          </span>
          <span>3456</span>
        </div>
      </div>

      <div className="ATM-footer">
        <div className="expiry-date-info">
          <p>09/12</p>
        </div>

        <div className="card-type">
          <img src="./images/mastercard.png" />
          <p>mastercard</p>
        </div>
      </div>
    </div>
  );
};

export default Atm;
