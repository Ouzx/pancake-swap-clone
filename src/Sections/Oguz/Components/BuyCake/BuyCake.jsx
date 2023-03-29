import React from "react";

import Button from "../Button/Button";
import ExternalLink from "../ExternalLink/ExternalLink";
import Stats from "../Stats/Stats";
import Cakes from "../Cakes/Cakes";
import "./BuyCake.scss";
const BuyCake = () => {
  return (
    <div className="buy-cake">
      <div className="buy-cake__top">
        <Cakes />
        <div className="buy-cake__top__info">
          <h1 className="buy-cake__title">
            <span>CAKE</span> makes our world go round.
          </h1>
          <p className="buy-cake__description">
            CAKE token is at the heart of the PancakeSwap ecosystem. Buy it, win
            it, farm it, spend it, stake it... heck, you can even vote with it!
          </p>
          <div className="buy-cake__interact">
            <Button text={"Buy CAKE"} />
            <ExternalLink text="Learn" />
          </div>
        </div>
      </div>
      <Stats />
    </div>
  );
};

export default BuyCake;
