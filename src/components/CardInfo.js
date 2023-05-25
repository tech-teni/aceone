import React from "react";
import Atm from "./Atm";
import Invoices from "./Invoices";
import { BsApple } from "react-icons/bs";

const CardInfo = () => {
  return (
    <div className="card-info2">
      <div className="circle"></div>

      <Atm />
      <Invoices />
    </div>
  );
};

export default CardInfo;
