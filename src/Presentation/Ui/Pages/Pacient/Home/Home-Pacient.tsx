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
import { ExamsInfo } from "../../../../Common/Constans/Exams";
export const HomePacient = () => {
  const navigate = useNavigate();
  const buttonActiontwo = () => {
    navigate("/cretate-user-init");
  };
  const [busqueda, setBusqueda] = useState("");
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

  const [checkBox, setcheckBox] = useState("false");
  const [checkBoxCard, setcheckBoxCard] = useState("false");

  console.log(checkBox, checkBoxCard);

  const onBox = () => {
    if (checkBox === "true") {
      setcheckBoxCard("true");
    }
    if (checkBox === "false") {
      setcheckBoxCard("false");
    }
  };

  return (
    <div>
      <Helmet bodyAttributes={{ style: "background : #F4F9FF;" }} />
      <Header />
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
        <div className="content-checkbox" onChange={onBox}></div>
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
      <div
        className={
          visibleModal === true ? "background-modal" : "background-modal-false"
        }
      />
      {visibleModal && (
        <div className="content-modal-home-admin">
          <div className="content-header-modal">
            <h1 className="text-header">Rol</h1>
            <img
              className="img-header"
              src={iconBottomModal}
              onClick={buttonActiveModal}
            />
          </div>
          <div className="content-body-modal">
            {CONSTANTS.Rol.map((rol) => {
              return (
                <>
                  <input
                    type="checkbox"
                    value={rol}
                    className="checkbox-text-body"
                  />
                  <h1 className="text-body"> {rol} </h1>
                </>
              );
            })}
            <div className="content-button-create-user-2">
              <button className="button-modal">Aplicar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
