import React from "react";
import "./PsCoin.scss";

import { psIcon } from "../../../../assets/images/Oguz";

const PsCoin = () => {
  return (
    <div className="ps-coin">
      <img className="ps-coin__logo" src={psIcon} alt="" />
      <span>$3.683</span>
    </div>
  );
};

export default PsCoin;
