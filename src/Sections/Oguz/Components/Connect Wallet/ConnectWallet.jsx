import React from "react";
import ExternalLink from "../ExternalLink/ExternalLink";
import Button from "../Button/Button";
import "./ConnectWallet.scss";
const ConnectWallet = () => {
  return (
    <div className="connect-wallet">
      <h2 className="connect-wallet__title">Starts in seconds.</h2>
      <p className="connect--wallet__description">
        Connect your crypto wallet to start using the app in seconds.
        <span>No regsitration neded.</span>
      </p>
      <ExternalLink text="Learn how to start" />
      <Button text={"Connect Wallet"} />
    </div>
  );
};

export default ConnectWallet;
