import React from "react";

import { TbWorld } from "react-icons/tb";
import { GoGear } from "react-icons/go";
import { AiFillCaretDown } from "react-icons/ai";

import { ReactComponent as HeaderLogo } from "../../../assets/images/Oguz/headerLogo.svg";
import { ReactComponent as HeaderLogoMini } from "../../../assets/images/Oguz/headerLogoMini.svg";
import binanceImg from "../../../assets/images/Oguz/binance.png";

import Button from "../../../Sections/Oguz/Components/Button/Button";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-logo">
        <HeaderLogoMini width={32} />
        <HeaderLogo width={160} />
      </div>
      <div className="buttons">
        <TbWorld size={24} />
        <GoGear size={24} />
        <div className="binance-button">
          <Button text="" style={{ padding: "0.3rem 1rem" }}>
            <AiFillCaretDown size={18} />
          </Button>
          <img src={binanceImg} alt="binance" />
        </div>
        <Button text="Connect" style={{ padding: "0.3rem 1rem" }}></Button>
      </div>
    </div>
  );
};

export default Navbar;
