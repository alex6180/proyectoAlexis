import React from "react";
import { Header } from "../../Components/Header/Header";
import "./Home-admin.scss";
import Doctor from "../../../Common/assets/pose_1-home-admin.png";
import { Circles } from "../../Components/Circles/Circles";
export const HomeAdmin = () => {
  return (
    <div className="content-home-admin">
      <Header />
      <div className="content-circles-home-admin">
        <div className="circle-home-admin"></div>
        <div className="circle-second-home-admin"></div>
      </div>
      <img src={Doctor} className="doctor-home-admin" />
      <div className="background-header-home-admin" />
      <div className="content-text-header-home-admin">
        <h1 className="title-home-admin">¡Hola</h1>
        <h1 className="subtitle-home-admin">Jane Cooper!</h1>
      </div>
    </div>
  );
};
