import React from "react";
import "./Bean.scss";
const UpperBeans = () => {
  return (
    <div className="upper-bean-group">
      <div className="beans-container">
        <img
          style={{
            maxHeight: "16rem",
            visibility: "hidden",
            height: "auto",
            maxWidth: "100%",
          }}
          srcset="https://pancakeswap.finance/images/home/flying-pancakes/1-bottom.webp 512w,
                https://pancakeswap.finance/images/home/flying-pancakes/1-bottom@1.5x.webp 768w,
                https://pancakeswap.finance/images/home/flying-pancakes/1-bottom@2x.webp 1024w,"
          loading="lazy"
          decoding="async"
          class="sc-dd92527b-1 fxqDPC"
        ></img>
        <div className="beans-bean-container">
          <img
            srcset="https://pancakeswap.finance/images/home/flying-pancakes/1-bottom.webp 512w,
                  https://pancakeswap.finance/images/home/flying-pancakes/1-bottom@1.5x.webp 768w,
                  https://pancakeswap.finance/images/home/flying-pancakes/1-bottom@2x.webp 1024w,"
            alt="Pancake flying on the bottom"
          ></img>
        </div>
        <div className="beans-bean-container">
          <img
            srcset="https://pancakeswap.finance/images/home/flying-pancakes/1-left.webp 512w,
                  https://pancakeswap.finance/images/home/flying-pancakes/1-left@1.5x.webp 768w,
                  https://pancakeswap.finance/images/home/flying-pancakes/1-left@2x.webp 1024w,"
            alt="Pancake flying on the left"
          ></img>
        </div>
        <div className="beans-bean-container">
          <img
            srcset="https://pancakeswap.finance/images/home/flying-pancakes/1-top.webp 512w,
  https://pancakeswap.finance/images/home/flying-pancakes/1-top@1.5x.webp 768w,
  https://pancakeswap.finance/images/home/flying-pancakes/1-top@2x.webp 1024w,"
            alt="Pancake flying on the top"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default UpperBeans;
