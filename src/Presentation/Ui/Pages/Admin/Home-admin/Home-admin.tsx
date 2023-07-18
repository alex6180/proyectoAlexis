import React, { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import "./Home-admin.scss";
import Doctor from "../../../../Common/assets/pose_1-home-admin.png";
import filterIcon from "../../../../Common/assets/Vector-icon-filter.png";
import searchIcon from "../../../../Common/assets/Vector-search.png";
import { Header } from "../../../Components/Header/Header";
import iconBottom from "../../../../Common/assets/Vector-icon-floating-bottom.png";
import iconBottomModal from "../../../../Common/assets/Vector-close-modal.png";
import { useNavigate } from "react-router-dom";
import { InfoUsers } from "../../../../Common/Constans/Users";
import { CardUser } from "./card-user/CardUser";
import { CONSTANTS } from "../../../../Common/Constans/Constans";
import { CheckBoxContext } from "../../../../Routes/Navigation";
export const HomeAdmin = () => {
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
  const handleChangeOne = (e: any) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };

  const { checkBoxAdmin, setcheckBoxAdmin } = useContext(CheckBoxContext);

  const handleCheckBox = () => {
    if (checkBoxAdmin === false) {
      setcheckBoxAdmin(true);
    } else if (checkBoxAdmin === true) {
      setcheckBoxAdmin(false);
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
        <div className="content-checkbox">
          <input
            className="input-checkbox-home-admin"
            type="checkbox"
            onClick={handleCheckBox}
            checked={checkBoxAdmin}
          />
          <h1 className="text-checkbox"> Seleccionar todo </h1>
        </div>
        <div onClick={buttonActiveModal}>
          <img src={filterIcon} className="icon-filter-home-admin" />
        </div>
      </div>
      <div className="content-card">
        {infoUsers.map(({ Nombres, Apellidos, Rol }) => {
          return (
            <div>
              <CardUser Nombres={Nombres} Apellidos={Apellidos} Rol={Rol} />
            </div>
          );
        })}
      </div>
      <div className="text-alert">
        {infoUsers.length === 0 && busqueda && (
          <p>
            no se pudo encontrar ningun usuario con el nombre o apellido:
            <strong> {busqueda} </strong>
          </p>
        )}
      </div>
      <div className="floating-button" onClick={buttonActiontwo}>
        <img src={iconBottom} className="size-icon-bottom" />
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
