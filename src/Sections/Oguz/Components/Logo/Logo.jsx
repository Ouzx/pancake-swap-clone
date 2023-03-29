import React from "react";
import "./Logo.scss";

import { Logo as LogoImage } from "../../../../assets/images/Oguz/index";
const Logo = () => {
  return <img className="logo-image" src={LogoImage} alt="logo" />;
};

export default Logo;
