import React from "react";
import ExternalLink from "../ExternalLink/ExternalLink";
import Button from "../Button/Button";

import { purpleBg } from "../../../../assets/images/Oguz";
import "./ConnectWallet.scss";

const ConnectWallet = () => {
  return (
    <div className="connect-wallet">
      <div
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          overflow: "hidden",
        }}
      >
        <div className="connect-wallet__image"></div>
      </div>
      <div className="connect-wallet__content">
        <h2 className="connect-wallet__title">Starts in seconds.</h2>
        <p className="connect--wallet__description">
          Connect your crypto wallet to start using the app in seconds.
          <span>No regsitration neded.</span>
        </p>
        <div className="connect-wallet__interact">
          <ExternalLink text="Learn how to start" />
          <Button text={"Connect Wallet"} />
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet;
