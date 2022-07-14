import React from "react";
import { Header } from "../../../Components/Header/Header";
import Doctor from "../../../../Common/assets/pose_1.png";
import imgModal from "../../../../Common/assets/img-modal-home-doctor.png";
import { useState } from "react";
import { CONSTANTS } from "../../../../Common/Constans/Constans";
import { Pacients } from "../../../../Common/Constans/Pacients";
import { CardPacient } from "./CardPacient/CardPacient";
import { useNavigate } from "react-router-dom";
export const HomeLabTechnician = () => {
  const [withUsers, setwithUsers] = useState(true);
  const [withUser, setwithUser] = useState(false);
  const [infoUsers, setInfoUsers] = useState(Pacients);
  const [busqueda, setBusqueda] = useState("");

  const filtrar = (busqueda: any) => {
    if (infoUsers === busqueda) {
      return infoUsers;
    } else
      setInfoUsers(
        Pacients.filter((i) => {
          if (i.NumeroDocumento.toString().includes(busqueda.toLowerCase())) {
            return i;
          }
        })
      );
  };
  const navigate = useNavigate();
  console.log(filtrar);
  const handleChangeOne = (e: any) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const withuser = () => {
    if (!!busqueda) {
      setwithUser(true);
    }
  };

  const closeModal = () => {
    setwithUser(false);
  };
  return (
    <div className="content-home-doctor">
      <Header />
      <img src={Doctor} className="size-img-home-doctor" />
      <div
        className={
          withUsers === true
            ? "content-text-body-with-users"
            : "content-text-body"
        }
      >
        <h1 className="text-one"> ¡Hola </h1>
        <h1 className="text-two"> Janne cooper! </h1>
      </div>
      {withUser === true ? (
        <div className="text-none-users">
          {infoUsers.length === 0 && busqueda && (
            <>
              <div className="background-modal" />
              <div className="background-modal-home-doctor">
                <div className="content-body-modal-home-doctor">
                  <img src={imgModal} style={{ width: 100, height: 80 }} />
                  <h1 className="text-one-modal-home-doctor">Opps..</h1>
                  <h1 className="text-two-modal-home-doctor">
                    No hemos podio encontrar ningún paciente con los datos
                    ingresados. Por favor, revisalos y vuelve a intentarlo
                  </h1>
                  <h1
                    className="btn-close-modal-home-doctor"
                    onClick={closeModal}
                  >
                    {" "}
                    Aceptar{" "}
                  </h1>
                </div>
              </div>
            </>
          )}
        </div>
      ) : (
        ""
      )}
      {withUsers === true ? (
        <div className="content-text-three-with-users">
          <h1 className="text-one-with-users">
            Cuentanos que paciente quieres encontrar.
          </h1>
          <div className="input-home-doctor" onSubmit={handleChangeOne}>
            <select
              placeholder="Tipo de documento"
              name="busqueda1"
              className="select-home-doctor"
            >
              <option value="">Tipo de documento</option>
              {CONSTANTS.TipoDocumento.map((TipoDocumento) => {
                return <option value={TipoDocumento}> {TipoDocumento} </option>;
              })}
            </select>
            <input
              type="number"
              placeholder="Número de documento"
              autoComplete="none"
              className="input-create-user-2"
              name="NumeroDocumento"
              value={busqueda}
              onChange={handleChangeOne}
            />
            <div
              className={
                withUser === true && !!busqueda
                  ? "content-card-user"
                  : "content-card-user-false"
              }
            >
              {infoUsers.map(({ Nombres, Apellidos }) => {
                return (
                  <div>
                    <CardPacient Nombres={Nombres} Apellidos={Apellidos} />
                  </div>
                );
              })}
            </div>
          </div>
          <div
            className={
              withUser === false
                ? "content-buttons-body-home-page"
                : infoUsers.length === 0 && busqueda
                ? "content-buttons-body-home-page"
                : !busqueda
                ? "content-buttons-body-home-page"
                : "content-buttons-body-home-page-true-with-user"
            }
          >
            <button className="btn-search-pacient" onClick={withuser}>
              Buscar Paciente
            </button>
          </div>
        </div>
      ) : (
        <div className="content-text-three">
          <h1 className="text-none-users">
            Aun no hay ningún paciente registrado, comunicate con algún
            admistrador para realizar la creación de un paciente.
          </h1>
        </div>
      )}
    </div>
  );
};
