import React, {useState} from "react";
import { IoIosKeypad} from 'react-icons/io';
import { FaPen} from 'react-icons/fa';

const CardForm = () => {

    const [cardValue, setCardValue]=useState(`2412  -  7612  -  3412  -  3456`)
    const [CV, setCV]=useState(`327`)
    const [expiryDateMonth, setExpiryDateMonth]=useState(`09`)
    const [expiryDateYear, setExpiryDateYear]=useState(`12`)
    const [password, setPasword]=useState(`112441231`)

  return (
    <div className="card-info">
      <div className="card-info-header">
        <div className="logo-container">
          <img src="./images/logo.jpg" alt="logo image" className="logo" />
          <h1>
            <span>AceCoin</span>
            <span id="thin-name">Pay</span>
          </h1>
        </div>
        <div className="time">
          <span className="time">0</span>
          <span>1</span>
          <b style={{ backgroundColor: "white", color: "#1C2852" }}>:</b>
          <span>1</span>
          <span>9</span>
        </div>
      </div>
      <div className="card-info-body">
        <h4>Card Number</h4>
        <div className="edit-container">
          <p className="more-info">
            Enter the 16-digit card number on the card
          </p>
          <div className="edit-icon">
            <FaPen style={{ color: "#0660FE" }} />
            <p>Edit</p>
          </div>
        </div>
        <form>
          <div className="credit-card-inputs">
            <div className="credit-card-master-card-logo">
              <img src="./images/mastercard.png" alt="master card" />
            </div>
            <input
              type="text"
              id="inputField"
              maxlength="25"
              value={cardValue}
            />

            <div className="credit-card-marked-logo">
              <img src="./images/verified.png" alt="master card" />
            </div>
          </div>

          <div className="credit-card-cv">
            <div className="credit-card-cv-info">
              <h4>CVV Number</h4>
              <p className="more-info">Enter the 3 or 4 digit number on card</p>
            </div>
            <div className="credit-card-cv-input">
              <input type="number" value={CV} />
              <div className="keypad">
                <IoIosKeypad
                  style={{ color: "#A3A9B4", width: "25px", height: "25px" }}
                />
              </div>
            </div>
          </div>
          <div className="expiry-date">
            <div className="expiry-date-info">
              <h4>Expiry Date</h4>
              <p className="more-info">Enter expiration date of the card</p>
            </div>
            <div className="expiry-date-input">
              <input type="number" value={expiryDateMonth} />
              <span>/</span>
              <input type="number" value={expiryDateYear} />
            </div>
          </div>
          <div className="password">
            <div class="password-info">
              <h4>Password</h4>
              <p className="more-info">
                Enter your Dynamic password Mac-Book Air-1
              </p>
            </div>
            <div className="password-input">
              <input type="password" value={password} />
              <div className="keypad">
                <IoIosKeypad
                  style={{ color: "#A3A9B4", width: "25px", height: "25px" }}
                />
              </div>
            </div>
          </div>
          <div className="submit-container">
            <input type="submit" value="Pay Now" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default CardForm;
