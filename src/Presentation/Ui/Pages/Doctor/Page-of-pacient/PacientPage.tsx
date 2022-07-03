import React from "react";
import { Helmet } from "react-helmet";
import { useParams, useNavigate } from "react-router-dom";
import { Pacients } from "../../../../Common/Constans/Pacients";
import { Header } from "../../../Components/Header/Header";
import Arrow from "../../../../Common/assets/Vector1.png";
import Doctor from "../../../../Common/assets/pose_8-user-page.png";
import Doctortwo from "../../../../Common/assets/pose_4.png";
import filterIcon from "../../../../Common/assets/Vector-icon-filter.png";
import searchIcon from "../../../../Common/assets/Vector-search.png";
import btnNav from "../../../../Common/assets/btn-open-page-add-exam.png";
import "./PacientPage.scss";
import { Exams } from "./Exams";
export const PacientPage = () => {
  const { id } = useParams();
  const getPacientById = (id: any) => {
    return Pacients.find((user) => user.Nombres === id);
  };
  const navigate = useNavigate();
  const navpageprev = () => {
    navigate("/Home-doctor");
  };
  const navpagenext = () => {
    navigate("/Add-exam-page");
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
      <div className="content-info-pacient-page">
        <div className="content-dates-personals-pacient-page">
          <h1 className="text-info-pacient-page">Datos personales</h1>
          <div className="background-info-of-dates-personals-pacient-page">
            <p className="text-info-user">
              Nombres: <span>{user?.Nombres}</span>{" "}
            </p>
            <p className="text-info-user">
              Apellidos: <span> {user?.Apellidos}</span>
            </p>
            <p className="text-info-user">
              Tipo de documento: <span> {user?.TipoDocumento}</span>
            </p>
            <p className="text-info-user">
              Numero de documento: <span> {user?.NumeroDocumento} </span>
            </p>
            <p className="text-info-user">
              Fecha de nacimiento:<span> {user?.FechaNacimiento}</span>
            </p>
            <p className="text-info-user">
              Sexo:<span> {user?.Sexo}</span>{" "}
            </p>
            <p className="text-info-user">
              Tipo de sangre: <span> {user?.TipoSangre}</span>
            </p>
            <p className="text-info-user">
              Estado civil: <span> {user?.EstadoCivil}</span>
            </p>
            <p className="text-info-user">
              EPS:<span> {user?.EPS}</span>
            </p>
          </div>
        </div>
        <div className="content-dates-personals">
          <h1 className="text-info-2-pacient-page">Contacto de emergencia</h1>
          <div className="background-info-of-contact-dates-pacient">
            <p className="text-info-user">
              Nombres: <span> {user?.NombresContactoEmergencia} </span>
            </p>
            <p className="text-info-user">
              Apellidos: <span> {user?.ApellidosContactoEmergencia} </span>
            </p>
            <p className="text-info-user">
              Parentesco: <span> {user?.Parentesco} </span>
            </p>
            <p className="text-info-user">
              Telefono de contacto: <span> {user?.TelefonoContacto} </span>
            </p>
          </div>
        </div>
      </div>
      {user?.exams === true ? (
        <div className="content-exams-pacient">
          <h1 className="text-one-exams">Examenes del paciente</h1>
          <div className="search-exams-pacient">
            <img src={searchIcon} className="icon-seacrh-exams-pacient" />
            <input
              placeholder="Busca doctores, pacientes..."
              className="input-home-admin"
              type="text"
              // onChange={handleChangeOne}
              // value={busqueda}
            />
            <div className="content-checkbox-pacient">
              <input
                className="input-checkbox-pacient-exams"
                // value={checkBox}
                type="checkbox"
              />
              <h1 className="text-checkbox"> Seleccionar todo </h1>
            </div>
            <div>
              <img src={filterIcon} className="icon-filter-home-admin" />
            </div>
          </div>
          <div>
            <button
              className="button-nav-to-page-add-exam"
              onClick={navpagenext}
            >
              <img src={btnNav} style={{ width: 56, height: 50 }} />
            </button>
          </div>
          <div className="content-card-exams">
            <Exams />
          </div>
        </div>
      ) : (
        <div className="content-none-exams">
          <h1 className="text-none-exams">Examenes del paciente</h1>
          <img src={Doctortwo} style={{ width: 454, height: 453 }} />
          <h1> El paciente aún no tiene examenes registrados. </h1>
          <button className="btn-add-exam-header-pacient-page">
            Agregar examen
          </button>
        </div>
      )}
    </div>
  );
};
