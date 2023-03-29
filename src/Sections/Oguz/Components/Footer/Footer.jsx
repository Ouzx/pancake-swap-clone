import React from "react";
import "./Footer.scss";

import Logo from "../Logo/Logo";
import Seperator from "../Seperator/Seperator";
import PsCoin from "../PsCoin/PsCoin";
import Links from "../Links/Links";

const Footer = () => {
  return (
    <div className="footer-container">
      <Logo />
      <Seperator />
      <div className="footer-container__coin-button">
        <PsCoin />
      </div>
      <Links />
    </div>
  );
};

export default Footer;
