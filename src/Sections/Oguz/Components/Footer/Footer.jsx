import React from "react";
import "./Footer.scss";

import Logo from "../Logo/Logo";
import Seperator from "../Seperator/Seperator";
import Links from "../Links/Links";

const Footer = () => {
  return (
    <div className="footer-container">
      <Logo />
      <Seperator />
      <Links />
    </div>
  );
};

export default Footer;
