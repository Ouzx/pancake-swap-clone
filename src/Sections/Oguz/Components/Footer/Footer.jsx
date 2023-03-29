import React from "react";
import "./Footer.scss";

import Logo from "../Logo/Logo";
import Links from "../Links/Links";

const Footer = () => {
  return (
    <div className="footer-container">
      <Logo />
      <Links />
    </div>
  );
};

export default Footer;
