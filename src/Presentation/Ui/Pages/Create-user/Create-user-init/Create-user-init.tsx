import React from "react";
import { Header } from "../../../Components/Header/Header";
import Doctor from "../../../../Common/assets/pose_7.png";
import Arrow from "../../../../Common/assets/Vector1.png";

import "./Create-user-init.scss";

import { Circles } from "../../../Components/Circles/Circles";
import { useNavigate } from "react-router-dom";
export const CreateUserInit = () => {
  const navigate = useNavigate();
  const buttonActionOne = () => {
    navigate("/cretate-user");
  };
  const buttonActiontwo = () => {
    navigate("/cretate-user-step-one");
  };

  return (
    <div className="content-create-user-1">
      <Header />
      <div className="content-create-user-3" />
      <Circles />
      <div className="content-img-create-user-1">
        <img src={Doctor} className="size-doctor-create-user-1" />
      </div>
      <div className="text-create-user-1" onClick={buttonActionOne}>
        <img src={Arrow} className="size-arrow-create-user-1" />
        <h1 className="text-button-create-user-1"> Regresar </h1>
      </div>

      <div className="content-texts-create-user-1">
        <h1 className="title-create-user-1"> Creación de usuario </h1>
        <h1 className="subtitle-create-user-1">
          Ten presente que para la creación de tus usuarios debes tener a la
          mano los datos personales de cada uno de ellos.{" "}
        </h1>
        <div className="content-button-create-user-1">
          <button className="button-login" onClick={buttonActiontwo}>
            ¡Empecemos!
          </button>
        </div>
      </div>
    </div>
  );
};
