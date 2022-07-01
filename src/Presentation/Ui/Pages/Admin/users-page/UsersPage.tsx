import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { InfoUsers } from "../../../../Common/Constans/Users";
import { Header } from "../../../Components/Header/Header";
import Arrow from "../../../../Common/assets/Vector1.png";
import { Helmet } from "react-helmet";
import Doctor from "../../../../Common/assets/pose_8-user-page.png";
import Delete from "../../../../Common/assets/Vector-icon-delete.png";
import Edit from "../../../../Common/assets/Vector-icon-edit.png";
import More from "../../../../Common/assets/Vector-icon-more.png";
import "./UserPage.scss";
import { useState } from "react";
export const UsersPage = () => {
  const navigate = useNavigate();
  const buttonActionOne = () => {
    navigate("/home-admin");
  };

  const getUserById = (id: any) => {
    return InfoUsers.find((user) => user.Nombres === id);
  };

  const [btnOptions, setBtnOptions] = useState(true);
  const [btnOpenModal, setBtnOpenModal] = useState(false);
  const optionsbtn = () => {
    setBtnOptions(!btnOptions);
  };

  const { id } = useParams();

  const user = getUserById(id);

  console.log(user);

  const btnOpen = () => {
    setBtnOpenModal(true);
  };
  const btnhiddmodal = () => {
    setBtnOptions(true);
    setBtnOpenModal(false);
  };

  return (
    <div>
      <Helmet bodyAttributes={{ style: "background : #F4F9FF;" }} />
      <Header />
      <div className="Button-user-page" onClick={buttonActionOne}>
        <img src={Arrow} className="size-arrow-user-page" />
        <h1 className="text-button-user-page"> Regresar </h1>
      </div>
      <div className="background-header-user-page">
        <div className="content-circles-user-page">
          <div className="circle-user-page"></div>
          <div className="circle-second-user-page"></div>
        </div>
        <img src={Doctor} className="size-doctor-user-page" />
        <div className="content-text-header-user-page">
          <h1 className="text-header-user-page">
            {user?.Nombres} {user?.Apellidos}
          </h1>
          <p
            className={
              user?.Rol === "Administrador"
                ? "text-2-subtitle-admin"
                : user?.Rol === "Paciente"
                ? "text-2-subtitle-Patinete"
                : user?.Rol === "Laboratorista"
                ? "text-2-subtitle-Laboratorista"
                : "text-2-subtitle-doctor"
            }
          >
            {user?.Rol}
          </p>
        </div>
        <div className="content-info-user-page">
          <div className="content-dates-personals">
            <h1 className="text-info">Datos personales</h1>
            <div className="background-info-of-dates-personals">
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
            <h1 className="text-info">Información de contacto</h1>
            <div className="background-info-of-dates">
              <p className="text-info-user">
                Ciudad de residencia: <span> {user?.Ciudad} </span>
              </p>
              <p className="text-info-user">
                Direccion de residencia:
                <span> {user?.DireccionResidencia} </span>
              </p>
              <p className="text-info-user">
                Correo electronico: <span> {user?.CorreoElectronico} </span>
              </p>
              <p className="text-info-user">
                Celular: <span> {user?.Celular} </span>
              </p>
              <p className="text-info-user">
                Telefono fijo: <span> {user?.TelefonoFijo} </span>
              </p>
              <p className="text-info-user">
                Telefono de oficina: <span> {user?.TelefonoOficina} </span>
              </p>
            </div>
          </div>
          <div className="content-dates-personals">
            <h1 className="text-info-2">Contacto de emergencia</h1>
            <div className="background-info-of-dates">
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
          <div className="content-dates-personals">
            <h1 className="text-info-2">Contacto de emergencia</h1>
            <div className="background-info-of-dates">
              <p className="text-info-user">
                Profesion: <span> {user?.Profesion} </span>{" "}
              </p>
              <p className="text-info-user">
                Rol: <span> {user?.Rol} </span>{" "}
              </p>
              <p className="text-info-user">
                Contraseña:<span> {user?.Contraseña} </span>{" "}
              </p>
            </div>

            <div
              className={
                btnOpenModal === true
                  ? "content-btn-floating-true-modal"
                  : "content-btn-floating"
              }
            >
              <div
                className={
                  btnOptions === true
                    ? "content-button-acctions"
                    : btnOpenModal === true
                    ? "content-button-acctions"
                    : "content-button-acctions-true"
                }
              >
                <div className="icon-and-text-delete">
                  <div className="icon-delete" onClick={btnOpen}>
                    <img src={Delete} style={{ width: 28, height: 36 }} />
                  </div>
                  <p> Eliminar </p>
                </div>
                <div className="icon-and-text-edit">
                  <div className="icon-edit">
                    <img src={Edit} style={{ width: 34, height: 36 }} />
                  </div>
                  <p> Editar </p>
                </div>
              </div>

              <div className="content-button-floating" onClick={optionsbtn}>
                <label
                  htmlFor="btn-more"
                  className={
                    btnOptions === true
                      ? "content-icon-btn"
                      : btnOpenModal === true
                      ? "content-icon-btn"
                      : "content-icon-btn-true"
                  }
                >
                  <img src={More} style={{ width: 30, height: 30 }} />
                </label>
              </div>
              <input type="checkbox" id="btn-more" className="checkbox-btn" />
            </div>
            <div
              className={
                btnOptions === false
                  ? "background-modal"
                  : "background-modal-false"
              }
            />
            {btnOpenModal && (
              <div className="content-modal-user-page">
                <img src={Delete} />
                <h1 className="title-modal-user-page">
                  {" "}
                  ¿Quieres eliminar el usuario?{" "}
                </h1>
                <h1 className="subtitle-modal-user-page">
                  El usuario se eliminara y perderas la información relacionada
                  con el.
                </h1>
                <div className="content-btn-text">
                  <p className="text-btn-one"> Eliminar usuario </p>
                  <p className="text-btn-two" onClick={btnhiddmodal}>
                    {" "}
                    Aceptar{" "}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
