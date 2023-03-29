import React from "react";
import "./Bean.scss";

const LowerBeans = () => {
  return (
    <div className="lower-bean-group">
      <div className="beans-container">
        <img
          style={{
            maxHeight: "16rem",
            visibility: "hidden",
            height: "auto",
            maxWidth: "100%",
          }}
          srcSet="https://pancakeswap.finance/images/home/flying-pancakes/2-bottom.webp 512w,
  https://pancakeswap.finance/images/home/flying-pancakes/2-bottom@1.5x.webp 768w,
  https://pancakeswap.finance/images/home/flying-pancakes/2-bottom@2x.webp 1024w,"
          loading="lazy"
          decoding="async"
        ></img>
        <div className="beans-bean-container">
          <img
            srcSet="https://pancakeswap.finance/images/home/flying-pancakes/2-bottom.webp 512w,
  https://pancakeswap.finance/images/home/flying-pancakes/2-bottom@1.5x.webp 768w,
  https://pancakeswap.finance/images/home/flying-pancakes/2-bottom@2x.webp 1024w,"
            alt="Pancake flying on the bottom"
          ></img>
        </div>
        <div className="beans-bean-container">
          <img
            srcSet="https://pancakeswap.finance/images/home/flying-pancakes/2-top.webp 512w,
  https://pancakeswap.finance/images/home/flying-pancakes/2-top@1.5x.webp 768w,
  https://pancakeswap.finance/images/home/flying-pancakes/2-top@2x.webp 1024w,"
            alt="Pancake flying on the top"
          ></img>
        </div>
        <div className="beans-bean-container">
          <img
            srcSet="https://pancakeswap.finance/images/home/flying-pancakes/2-right.webp 512w,
  https://pancakeswap.finance/images/home/flying-pancakes/2-right@1.5x.webp 768w,
  https://pancakeswap.finance/images/home/flying-pancakes/2-right@2x.webp 1024w,"
            alt="Pancake flying on the right"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default LowerBeans;
