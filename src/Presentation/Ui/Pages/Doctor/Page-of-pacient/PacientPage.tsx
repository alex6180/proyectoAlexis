import React from "react";
import { Helmet } from "react-helmet";
import { useParams, useNavigate } from "react-router-dom";
import { Pacients } from "../../../../Common/Constans/Pacients";
import { Header } from "../../../Components/Header/Header";
import Arrow from "../../../../Common/assets/Vector1.png";
import Doctor from "../../../../Common/assets/pose_8-user-page.png";
import "./PacientPage.scss";
export const PacientPage = () => {
  const { id } = useParams();
  const getPacientById = (id: any) => {
    return Pacients.find((user) => user.Nombres === id);
  };
  const navigate = useNavigate();
  const navpageprev = () => {
    navigate("/Home-doctor");
  };

  const user = getPacientById(id);
  return (
    <div>
      <Helmet bodyAttributes={{ style: "background : #F4F9FF;" }} />
      <Header />
      <div className="Button-pacient-page" onClick={navpageprev}>
        <img src={Arrow} className="size-arrow-pacient-page" />
        <h1 className="text-button-pacient-page"> Regresar </h1>
      </div>
      <div className="background-header-pacient-page">
        <div className="content-circles-pacient-page">
          <div className="circle-pacient-page"></div>
          <div className="circle-second-pacient-page"></div>
        </div>
        <img src={Doctor} className="size-doctor-pacient-page" />
      </div>
      <div className="content-text-header-pacient-page">
        <h1 className="text-header-pacient-page">
          {user?.Nombres} {user?.Apellidos}
        </h1>
        <p className="text-2-subtitle-Pacinet">Paciente</p>
        <button className="btn-add-exam-header-pacient-page">
          Agregar examen
        </button>
      </div>
    </div>
  );
};
