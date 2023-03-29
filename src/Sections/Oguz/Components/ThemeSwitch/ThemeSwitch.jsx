import React, { useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";

import "./ThemeSwitch.scss";
const ThemeSwitch = () => {
  const [data, setData] = useState(false);

  const onClick = () => {
    setData(!data);
  };

  return (
    <div onClick={onClick} className={"switch-container"}>
      <div onClick={onClick} className={"switch-container__wrapper"}>
        <input type="checkbox" checked={data} readOnly onClick={onClick} />
        <div
          aria-checked={data}
          onClick={onClick}
          className="switch-container__wrapper__holder"
        >
          {!data ? (
            <FiSun
              onClick={onClick}
              size={20}
              className="switch-container__wrapper__holder__icon"
            />
          ) : (
            <FiMoon
              size={20}
              onClick={onClick}
              className="switch-container__wrapper__holder__icon"
            />
          )}
        </div>
        <FiSun
          onClick={onClick}
          size={20}
          className="switch-container__wrapper__icon --left"
        />
        <FiMoon
          onClick={onClick}
          size={20}
          className="switch-container__wrapper__icon --right"
        />
      </div>
    </div>
  );
};

export default ThemeSwitch;
