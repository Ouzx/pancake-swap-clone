import React from "react";
import "./Logo.scss";

import { Logo as LogoImage } from "../../../../assets/images/Oguz/index";
const Logo = ({ className }) => {
  return (
    <img className={`logo-image ${className}`} src={LogoImage} alt="logo" />
  );
};

export default Logo;
