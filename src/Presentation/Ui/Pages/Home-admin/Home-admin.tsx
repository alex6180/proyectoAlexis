import React, { useState } from "react";
import { Helmet } from "react-helmet";
import "./Home-admin.scss";
import Doctor from "../../../Common/assets/pose_1-home-admin.png";
import filterIcon from "../../../Common/assets/Vector-icon-filter.png";
import searchIcon from "../../../Common/assets/Vector-search.png";
import { Header } from "../../Components/Header/Header";
import iconBottom from "../../../Common/assets/Vector-icon-floating-bottom.png";
import { useNavigate } from "react-router-dom";
import { InfoUsers } from "../../../Common/Constans/Users";
import { CardUser } from "./card-user/CardUser";
export const HomeAdmin = () => {
  const navigate = useNavigate();
  const buttonActiontwo = () => {
    navigate("/cretate-user-init");
  };
  const [busqueda, setBusqueda] = useState("");

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

  console.log(filtrar);
  const handleChange = (e: any) => {
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  };
  return (
    <div>
      <Helmet bodyAttributes={{ style: "background : #F4F9FF;" }} />
      <Header />
      <div className="content-circles-home-admin">
        <div className="circle-home-admin"></div>
        <div className="circle-second-home-admin"></div>
      </div>
      <img src={Doctor} className="doctor-home-admin" />
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
          onChange={handleChange}
          value={busqueda}
        />
        <input className="input-checkbox-home-admin" type="checkbox" />

        <h1 className="text-checkbox"> Seleccionar todo </h1>
        <img src={filterIcon} className="icon-filter-home-admin" />
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
      <div className="floating-button" onClick={buttonActiontwo}>
        <img src={iconBottom} className="size-icon-bottom" />
      </div>
    </div>
  );
};
