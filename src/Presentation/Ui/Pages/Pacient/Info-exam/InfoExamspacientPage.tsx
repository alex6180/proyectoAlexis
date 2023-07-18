import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Doctor from "../../../../Common/assets/pose_8.png";
import Arrow from "../../../../Common/assets/Vector1.png";
import { Circles } from "../../../Components/Circles/Circles";
import { Header } from "../../../Components/Header/Header";
import Textlogo from "../../../../Common/assets/Neiv Doctor.png";
import Logo from "../../../../Common/assets/Logo.png";
import iconBottomModal from "../../../../Common/assets/Vector-close-modal.png";
import Check from "../../../../Common/assets/Vector-check.png";
import "../../../Components/Header/Header.scss";
import { CONSTANTS } from "../../../../Common/Constans/Constans";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
export const InfoExamsPacientPage = () => {
  const navigate = useNavigate();
  const navpageprev = () => {
    navigate("/Home-Pacient");
  };
  return (
    <div>
      <Helmet bodyAttributes={{ style: "background :  whitesmoke;" }} />
      <Header />
      <div className="content-button-info-exam" onClick={navpageprev}>
        <img src={Arrow} />
        <h1 className="text-btn-back-info-exam"> Regresar </h1>
      </div>
      <div className="img-add-exams-page">
        <Circles />
        <img src={Doctor} className="size-doctor-add-exams-page" />
      </div>
      <div className="content-text-info-exam">
        <div className="content-info-exam">
          <h1> Informacion del examen </h1>
          <h3 className="subtitle-text-info">
            Revisa la información del examen y agrega notas.
          </h3>
          <div className="content-info-exam-page">
            <p> Nombre del paciente: </p>
            <p> Numero de documento: </p>
            <p> Tipo de examen: </p>
            <p> Estado: </p>
            <p> Resultado: </p>
            <h4 className="first-text-info"> Josh Ryan </h4>
            <h4 className="two-text-info"> 1020831832 </h4>
            <h4 className="three-text-info"> Sangre </h4>
            <h4 className="four-text-info"> Por revisar </h4>
            <h4 className="five-text-info"> Josh_Sangre.pdf </h4>
          </div>
          <h2> Observaciones </h2>
          <div className="content-observations-info-exams">
            <div className="content-title-observations">
              <p>Dr. Josh Ryan </p>
              <h4> 30/02/22 </h4>
            </div>
            <h3>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};
