import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Doctor from "../../../../Common/assets/pose_1-home-admin.png";
import filterIcon from "../../../../Common/assets/Vector-icon-filter.png";
import searchIcon from "../../../../Common/assets/Vector-search.png";
import { Header } from "../../../Components/Header/Header";
import iconBottom from "../../../../Common/assets/Vector-icon-floating-bottom.png";
import iconBottomModal from "../../../../Common/assets/Vector-close-modal.png";
import { useNavigate } from "react-router-dom";
import { InfoUsers } from "../../../../Common/Constans/Users";
import { CONSTANTS } from "../../../../Common/Constans/Constans";
import { useFormik } from "formik";
import { Exams } from "./Exams";
import Doctor1 from "../../../../Common/assets/pose_1.png";
import { ExamsInfo } from "../../../../Common/Constans/Exams";
import "./HomePacient.scss";
export const HomePacient = () => {
  const navigate = useNavigate();
  const buttonActiontwo = () => {
    navigate("/cretate-user-init");
  };
  const [busqueda, setBusqueda] = useState("");
  const [withExams, setwithExams] = useState(true);
  const [visibleModal, setVisibleModal] = useState(false);
  const [infoUsers, setInfoUsers] = useState(InfoUsers);
  const filtrar = (busqueda: any) => {
    setInfoUsers(
      InfoUsers.filter((i) => {
        if (i.Nombres.toLowerCase().includes(busqueda.toLowerCase())) {
          return i;
        }
        if (i.Apellidos.toLowerCase().includes(busqueda.toLowerCase())) {
          return i;
        }
      })
    );
  };
  const buttonActiveModal = () => {
    setVisibleModal(!visibleModal);
  };
  console.log(filtrar);
  const handleChangeOne = (e: any) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  return (
    <div>
      <Header />
      {withExams === true ? (
        <div>
          <Helmet bodyAttributes={{ style: "background : #F4F9FF;" }} />
          <div className="content-circles-home-admin">
            <div className="circle-home-admin"></div>
            <div className="circle-second-home-admin"></div>
            <img src={Doctor} className="doctor-home-admin" />
          </div>
          <div className="background-header-home-admin" />
          <div className="content-text-header-home-admin">
            <h1 className="title-home-admin">¡Hola</h1>
            <h1 className="subtitle-home-admin">Jane Cooper!</h1>
          </div>
          <div className="content-search-filter">
            <img src={searchIcon} className="icon-seacrh-home-admin" />
            <input
              placeholder="Busca doctores, pacientes..."
              className="input-home-admin"
              type="text"
              onChange={handleChangeOne}
              value={busqueda}
            />
            <div className="content-checkbox"></div>
            <div onClick={buttonActiveModal}>
              <img src={filterIcon} className="icon-filter-home-admin" />
            </div>
          </div>
          <div className="content-card" style={{ top: 320 }}>
            {ExamsInfo.map(({ nombre, estado }) => {
              return (
                <div>
                  <Exams nombre={nombre} estado={estado} />
                </div>
              );
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
                          <h1 className="text-two-body-pacient-page"> {i} </h1>
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
      ) : (
        <div>
          <img src={Doctor1} className="doctor-home-pacient-none-exams" />
          <div className="content-text-home-pacient-none-exams">
            <h1 className="title-home-admin">¡Hola</h1>
            <h1 className="subtitle-home-admin">Jane Cooper!</h1>
            <div>
              <p className="subtitle-home-pacient-none-exams">
                Aun no tienes ningún examen asignado. En caso de algo comunicate
                con
              </p>
              <p className="subtitle1-home-pacient-none-exams">
                atención al cliente al +57 3111111111.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
