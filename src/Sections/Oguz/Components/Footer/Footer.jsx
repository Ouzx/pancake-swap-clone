import React from "react";
import "./Footer.scss";

import { AiOutlineArrowRight } from "react-icons/ai";

import Logo from "../Logo/Logo";
import Seperator from "../Seperator/Seperator";
import PsCoin from "../PsCoin/PsCoin";
import Button from "../Button/Button";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";
import LanguageSelector from "../LanguageSelector/LanguageSelector";
import Links from "../Links/Links";
import SocialIcons from "../SocialIcons/SocialIcons";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <Logo className="footer-logo-top" />
        <Seperator />

        <div className="footer-container__coin-button">
          <PsCoin />
          <Button text="Buy CAKE" style={{ padding: "0.3rem 1rem" }}>
            <AiOutlineArrowRight />
          </Button>
        </div>

        <div className="footer-container__theme-language">
          <ThemeSwitch />
          <LanguageSelector />
        </div>

        <Seperator />

        <Links>
          <Logo className="footer-logo-bottom" />
        </Links>
        <Seperator visible={false} topGap="42px" />
        <SocialIcons />
        <Seperator topGap="42px" />
      </div>
    </div>
  );
};

export default Footer;
