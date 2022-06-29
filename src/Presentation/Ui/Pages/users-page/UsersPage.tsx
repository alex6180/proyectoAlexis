import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { InfoUsers } from "../../../Common/Constans/Users";
import { Header } from "../../Components/Header/Header";
import Arrow from "../../../Common/assets/Vector1.png";
import { Helmet } from "react-helmet";
import Doctor from "../../../Common/assets/pose_8-user-page.png";
import "./UserPage.scss";
export const UsersPage = () => {
  const navigate = useNavigate();
  const buttonActionOne = () => {
    navigate("/home-admin");
  };

  const getUserById = (id: any) => {
    return InfoUsers.find((user) => user.Nombres === id);
  };

  const { id } = useParams();

  const user = getUserById(id);

  console.log(user);

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
          </div>
        </div>
      </div>
    </div>
  );
};
