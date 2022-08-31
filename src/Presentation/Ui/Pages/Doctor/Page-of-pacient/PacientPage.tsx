import React, { useContext, useState } from "react";
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
import iconBottomModal from "../../../../Common/assets/Vector-close-modal.png";
import Delete from "../../../../Common/assets/Vector-icon-delete.png";
import "./PacientPage.scss";
import { Exams } from "./Exams";
import { CONSTANTS } from "../../../../Common/Constans/Constans";
import { CheckBoxContext } from "../../../../Routes/Navigation";
export const PacientPage = () => {
  const { id } = useParams();
  const getPacientById = (id: any) => {
    return Pacients.find((user) => user.Nombres === id);
  };
  const navigate = useNavigate();
  const navpagenext = () => {
    navigate("/Add-exam-page");
  };
  const navpageprev = () => {
    navigate("/Home-doctor");
  };
  const user = getPacientById(id);
  const [visibleModal, setVisibleModal] = useState(false);
  const [visibleModalDelete, setVisibleModalDelete] = useState(false);
  const buttonActiveModal = () => {
    setVisibleModal(!visibleModal);
  };
  const buttonActiveModalDelete = () => {
    setVisibleModalDelete(!visibleModalDelete);
  };
  const { checkBox1, setcheckBox1 } = useContext(CheckBoxContext);

  const handleCheckBox = () => {
    if (checkBox1 === "false") {
      setcheckBox1("true");
    } else if (checkBox1 === "true") {
      setcheckBox1("false");
    }
  };

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
        <button
          className="btn-add-exam-header-pacient-page"
          onClick={navpagenext}
        >
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
      {user?.exams.length === 0 ? (
        <div className="content-none-exams">
          <h1 className="text-none-exams">Examenes del paciente</h1>
          <img src={Doctortwo} style={{ width: 454, height: 453 }} />
          <h1> El paciente aún no tiene examenes registrados. </h1>
          <button
            className="btn-add-exam-header-pacient-page"
            onClick={navpagenext}
          >
            Agregar examen
          </button>
        </div>
      ) : (
        (console.log(user?.exams.length, "dfghfgh"),
        (
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
                  onClick={handleCheckBox}
                  type="checkbox"
                />
                <h1 className="text-checkbox"> Seleccionar todo </h1>
              </div>
              <div>
                <img
                  src={filterIcon}
                  className="icon-filter-home-admin"
                  onClick={buttonActiveModal}
                />
              </div>
            </div>
            <div>
              <button
                className="button-nav-to-page-add-exam"
                onClick={buttonActiveModalDelete}
              >
                <img src={btnNav} style={{ width: 56, height: 50 }} />
              </button>
            </div>
            {visibleModalDelete && (
              <div className="content-modal-delete-pacient-page">
                <div className="card-modal-delete-pacient-page">
                  <img src={Delete} />
                  <h1> ¿Quires eliminar los examenes? </h1>
                  <p className="text-modal-delete-page-pacient">
                    Se eliminaran los examnes seleccionados y ya el paciente no
                    podrá verlos o realizarlos.
                  </p>
                  <p className="first-btn-modal-delete-page-pacient">
                    Eliminar examenes
                  </p>
                  <p
                    className="second-btn-modal-delete-page-pacient"
                    onClick={buttonActiveModalDelete}
                  >
                    Cancelar
                  </p>
                </div>
              </div>
            )}
            <div className="content-card-exams">
              {user?.exams.map((i) => {
                return <Exams nombre={i.nombre} estado={i.estado} />;
              })}
            </div>
            {visibleModal && (
              <div className="background-modal-pacient-page">
                <div className="content-modal-pacient-page">
                  <div className="body-modal-pacient">
                    <div className="content-header-modal-pacient-page">
                      <h1 className="text-header-modal-pacient">
                        Tipo de examen
                      </h1>
                      <img
                        className="img-header-pacient-page"
                        src={iconBottomModal}
                        onClick={buttonActiveModal}
                      />
                    </div>
                    <div className="content-body-modal-pacient-page">
                      {CONSTANTS.TipoExamen.map((i) => {
                        return (
                          <>
                            <input
                              type="checkbox"
                              value={i}
                              className="checkbox-text-body-pacient"
                            />
                            <h1 className="tex-body-pacient-page"> {i} </h1>
                          </>
                        );
                      })}
                      <h1 className="text-two-header-modal-pacient">
                        Estado del examen
                      </h1>
                      {CONSTANTS.EstadoExamen.map((i) => {
                        return (
                          <>
                            <input
                              type="checkbox"
                              value={i}
                              className="checkbox-text-body"
                            />
                            <h1 className="text-two-body-pacient-page">
                              {" "}
                              {i}{" "}
                            </h1>
                          </>
                        );
                      })}
                      <button className="button-modal-pacient-page">
                        Aplicar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))
      )}
    </div>
  );
};
