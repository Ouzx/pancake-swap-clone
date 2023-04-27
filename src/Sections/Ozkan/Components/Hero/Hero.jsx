import React from "react";
// import "./Hero.scss";
import "./HeroN.scss";

function Hero() {
  return (
    <div className="hero">
      <div className="hero-left">
        <h2 className="hero-header">The moon is made of pancakes.</h2>
        <h2 className="hero-text">
          Trade, earn, and win crypto on the most popular decentralized platform
          in the galaxy.
        </h2>
        <div className="hero-buttons">
          <button className="hero-button-1">Connect Wallet</button>
          <button className="hero-button-2">Trade Now</button>
        </div>
      </div>

      <div
        className="hero-container"
        height="192px,,,100%"
        width="192px,,,100%"
      >
        <div className="hero-actual">
          <span className="hero-wrapper">
            <span className="up">
              <img
                alt=""
                aria-hidden="true"
                src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%271024%27%20height=%271024%27/%3e"
                className="up-img"
              />
            </span>
            <img
              alt="Lunar bunny"
              srcset="https://pancakeswap.finance/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fastronaut-bunny.04f3a990.png&w=1080&q=75 1x, /_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fastronaut-bunny.04f3a990.png&w=2048&q=75 2x"
              src="https://pancakeswap.finance/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fastronaut-bunny.04f3a990.png&w=2048&q=75"
              decoding="async"
              data-nimg="intrinsic"
              className="nimg"
            />
          </span>
        </div>
        <div className="hero-fake">
          <div className="wrapper">
            <img
              srcset="https://pancakeswap.finance/images/home/lunar-bunny/star-l.webp 512w,
                      https://pancakeswap.finance/images/home/lunar-bunny/star-l@1.5x.webp 768w,
                      https://pancakeswap.finance/images/home/lunar-bunny/star-l@2x.webp 1024w,"
              loading="lazy"
              decoding="async"
              alt="3D Star"
              className="img-placeholder"
            />
            <div className="div-placeholder">
              <img
                srcset="https://pancakeswap.finance/images/home/lunar-bunny/star-l.webp 512w,
                        https://pancakeswap.finance/images/home/lunar-bunny/star-l@1.5x.webp 768w,
                        https://pancakeswap.finance/images/home/lunar-bunny/star-l@2x.webp 1024w,"
                alt="3D Star"
              />
            </div>
            <div className="div-placeholder">
              <img
                srcset="https://pancakeswap.finance/images/home/lunar-bunny/star-r.webp 512w,
                        https://pancakeswap.finance/images/home/lunar-bunny/star-r@1.5x.webp 768w,
                        https://pancakeswap.finance/images/home/lunar-bunny/star-r@2x.webp 1024w,"
                alt="3D Star"
              />
            </div>
            <div className="div-placeholder">
              <img
                srcset="https://pancakeswap.finance/images/home/lunar-bunny/star-top-r.webp 512w,
                        https://pancakeswap.finance/images/home/lunar-bunny/star-top-r@1.5x.webp 768w,
                        https://pancakeswap.finance/images/home/lunar-bunny/star-top-r@2x.webp 1024w,"
                alt="3D Star"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
