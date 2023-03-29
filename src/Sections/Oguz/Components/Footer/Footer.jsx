import React from "react";
import "./Footer.scss";

import { AiOutlineArrowRight } from "react-icons/ai";

import Logo from "../Logo/Logo";
import Seperator from "../Seperator/Seperator";
import PsCoin from "../PsCoin/PsCoin";
import Button from "../Button/Button";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import Links from "../Links/Links";

const Footer = () => {
  return (
    <div className="footer-container">
      <Logo />
      <Seperator />
      <div className="footer-container__coin-button">
        <PsCoin />
        <Button text="Buy CAKE" style={{ padding: "0.3rem 1rem" }}>
          <AiOutlineArrowRight />
        </Button>
      </div>
      <div className="footer-container__theme-language">
        <ThemeSwitch />
      </div>
      <Links />
    </div>
  );
};

export default Footer;
