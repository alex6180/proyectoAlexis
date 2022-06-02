import React from "react";
import Textlogo from "../../../Common/assets/Neiv Doctor.png";
import Logo from "../../../Common/assets/Logo.png";
import "./Header.scss";

export const Header = () => {
  return (
    <div className="content-header">
      <div className="size-logo">
        <img src={Textlogo} width={170} />
        <img src={Logo} className="Logo-img" />
      </div>
    </div>
  );
};
