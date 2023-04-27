import React, { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import bunny from "../../../assets/images/Oguz/bunny.webp";
import "./HeaderTopBar.scss";
const HeaderTopBar = () => {
  const [show, setShow] = useState(true);
  return (
    <div className={`header-top-bar-container ${!show && "hide-top-bar"}`}>
      <img src={bunny} alt="" width={92} />
      <div className="content">
        <div className="in">
          <span style={{ color: "#ffb237", fontWeight: "bold" }}>
            PHISHING WARNING:
          </span>{" "}
          please make sure you're visiting{" "}
          <span style={{ color: "#fff", fontWeight: "bold" }}>
            https://pancakeswap.finance
          </span>{" "}
          - check the URL carefully.
        </div>
      </div>
      <button
        className="close"
        onClick={() => {
          setShow(false);
        }}
      >
        <RxCross1 size={16} />
      </button>
    </div>
  );
};

export default HeaderTopBar;
