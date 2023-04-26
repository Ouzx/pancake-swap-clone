import React, { useState } from "react";
import "./MobileNav.scss";
import { ReactComponent as Trade } from "../../assets/icons/trade.svg";
import { ReactComponent as Earn } from "../../assets/icons/earn.svg";
import { ReactComponent as Win } from "../../assets/icons/win.svg";
import { ReactComponent as Nft } from "../../assets/icons/nft.svg";
import { ReactComponent as More } from "../../assets/icons/more.svg";

const MobileNav = () => {
  return (
    <div className="mobile-nav">
      <button className="mobile-nav__item">
        <Trade />
        Trade
      </button>
      <button className="mobile-nav__item">
        <Earn />
        Earn
      </button>
      <button className="mobile-nav__item">
        <Win />
        Win
      </button>
      <button className="mobile-nav__item">
        <Nft />
        NFT
      </button>
      <button className="mobile-nav__item">
        <More />
      </button>
    </div>
  );
};

export default MobileNav;
