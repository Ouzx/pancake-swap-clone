import React from "react";

import { TbWorld } from "react-icons/tb";
import { GoGear } from "react-icons/go";
import { AiFillCaretDown } from "react-icons/ai";
import { FiMoreHorizontal } from "react-icons/fi";

import { ReactComponent as HeaderLogo } from "../../../assets/images/Oguz/headerLogo.svg";
import { ReactComponent as HeaderLogoMini } from "../../../assets/images/Oguz/headerLogoMini.svg";
import binanceImg from "../../../assets/images/Oguz/binance.png";
import PsCoin from "../../../Sections/Oguz/Components/PsCoin/PsCoin";
import Button from "../../../Sections/Oguz/Components/Button/Button";
import "./Navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar-container">
      <div className="links">
        <div className="navbar-logo">
          <HeaderLogoMini width={32} />
          <HeaderLogo width={160} />
        </div>

        <nav>
          <span>Trade</span>
          <span>Win</span>
          <span>NFT</span>
          <span>Earn</span>
          <span>
            <FiMoreHorizontal size={20} />
          </span>
        </nav>
      </div>
      <div className="buttons">
        <div className="coin">
          <PsCoin />
        </div>
        <TbWorld style={{ cursor: "pointer" }} size={24} />
        <GoGear style={{ cursor: "pointer" }} size={24} />

        <div className="binance-button small">
          <Button text="" style={{ padding: "0.3rem 1rem" }}>
            <AiFillCaretDown size={18} />
          </Button>
          <img src={binanceImg} alt="binance" />
        </div>

        <div className="binance-button medium">
          <Button
            text="BNB"
            style={{
              padding: "0.3rem 1rem",
              paddingLeft: "2.4rem",
              paddingRight: "1rem",
            }}
          >
            <AiFillCaretDown size={18} />
          </Button>
          <img src={binanceImg} alt="binance" />
        </div>
        <div className="binance-button big">
          <Button
            text="BNB Smart Chain"
            style={{
              padding: "0.3rem 1rem",
              paddingLeft: "2.4rem",
              paddingRight: "1rem",
            }}
          >
            <AiFillCaretDown size={18} />
          </Button>
          <img src={binanceImg} alt="binance" />
        </div>
        <div className="small">
          <Button text="Connect" style={{ padding: "0.3rem 1rem" }}></Button>
        </div>
        <div className="medium">
          <Button text="Connect" style={{ padding: "0.3rem 1rem" }}></Button>
        </div>
        <div className="big">
          <Button
            text="Connect Wallet"
            style={{ padding: "0.3rem 1rem" }}
          ></Button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
