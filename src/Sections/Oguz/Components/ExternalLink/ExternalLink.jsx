import React from "react";
import { RxExternalLink } from "react-icons/rx";
import "./ExternalLink.scss";

const ExternalLink = ({ text, style }) => {
  return (
    <div className="external-link" style={style}>
      <span>{text} </span>
      <RxExternalLink className="external-link__icon" />
    </div>
  );
};

export default ExternalLink;
