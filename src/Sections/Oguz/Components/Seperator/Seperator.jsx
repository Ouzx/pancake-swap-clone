import React from "react";
import "./Seperator.scss";
const Seperator = ({
  topGap = "0px",
  bottomGap = "0px",
  visible = true,
  showOnTablet = false,
}) => {
  return (
    <div
      style={{
        marginTop: topGap,
        marginBottom: bottomGap,
        visibility: visible ? "visible" : "hidden",
      }}
      className={`seperator ${showOnTablet ? "seperator-show-on-tablet" : ""}`}
    ></div>
  );
};

export default Seperator;
