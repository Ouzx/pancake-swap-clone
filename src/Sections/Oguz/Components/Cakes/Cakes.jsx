import React from "react";
import "./Cakes.scss";
const Cakes = () => {
  return (
    <div className="cakes">
      <img
        srcSet="https://pancakeswap.finance//images/home/cake/bottom-right.webp 512w,
  https://pancakeswap.finance//images/home/cake/bottom-right@1.5x.webp 768w,
  https://pancakeswap.finance//images/home/cake/bottom-right@2x.webp 1024w,"
        alt="Small 3d pancake"
      ></img>
      <img
        srcSet="https://pancakeswap.finance//images/home/cake/top-right.webp 512w,
  https://pancakeswap.finance//images/home/cake/top-right@1.5x.webp 768w,
  https://pancakeswap.finance//images/home/cake/top-right@2x.webp 1024w,"
        alt="Small 3d pancake"
      ></img>

      <img
        srcSet="https://pancakeswap.finance//images/home/cake/coin.webp 512w,
  https://pancakeswap.finance//images/home/cake/coin@1.5x.webp 768w,
  https://pancakeswap.finance//images/home/cake/coin@2x.webp 1024w,"
        alt="CAKE token"
      ></img>

      <img
        srcSet="https://pancakeswap.finance//images/home/cake/top-left.webp 512w,
  https://pancakeswap.finance//images/home/cake/top-left@1.5x.webp 768w,
  https://pancakeswap.finance//images/home/cake/top-left@2x.webp 1024w,"
        alt="Small 3d pancake"
      ></img>
      <img
        style={{
          visibility: "hidden",
          position: "relative",
        }}
        srcSet="https://pancakeswap.finance//images/home/cake/bottom-right.webp 512w,
  https://pancakeswap.finance//images/home/cake/bottom-right@1.5x.webp 768w,
  https://pancakeswap.finance//images/home/cake/bottom-right@2x.webp 1024w,"
        alt="Small 3d pancake"
      ></img>
    </div>
  );
};

export default Cakes;
