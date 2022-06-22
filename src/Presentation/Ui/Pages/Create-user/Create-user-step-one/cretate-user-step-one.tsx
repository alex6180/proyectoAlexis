import { Header } from "../../../Components/Header/Header";
import Arrow from "../../../../Common/assets/Vector1.png";
import Doctor from "../../../../Common/assets/pose_8.png";
import "./cretate-user-step-one.scss";
import { Circles } from "../../../Components/Circles/Circles";
import { Button } from "../../../Components/Button/Button";
import calendar from "../../../../Common/assets/calendar-icon.png";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import es from "date-fns/locale/es";
import { CONSTANTS } from "../../../../Common/Constans/Constans";
import { useNavigate } from "react-router-dom";

export const CretateUserStepOne = () => {
  const [Date, setDate] = useState<Date | null>(null);
  const onClickButton = () => {
    console.log("startDate");
  };
  const navigate = useNavigate();
  const buttonAction = () => {
    navigate("/cretate-user-init");
  };
  return (
    <div>
      <Header />
      <div className="content-create-user-4" />

      <div className="text-create-user-1" onClick={buttonAction}>
        <img src={Arrow} className="size-arrow-create-user-1" />
        <h1 className="text-button-create-user-1"> Regresar </h1>
      </div>
      <Circles />
      <div className="content-img-create-user-1">
        <img src={Doctor} className="image-doctor-create-user-2" />
      </div>

      <div className="content-text-page-create-2">
        <div className="content-header-text-create-user-2">
          <h1 className="number-progress-bar-header-create-user-2">1 de 4</h1>
          <div className="bar">
            <div className="progress-bar" />
          </div>
          <h1 className="text-header-create-user-2">Datos personales</h1>
          <h2 className="second-text-header-create-user-2">
            Completa los siguientes campos con la información del usuario.
          </h2>
        </div>
        <div className="inputs-create-user-2">
          <form>
            <input
              type="text"
              placeholder="Nombres"
              autoComplete="none"
              className="input-create-user-2"
            />
            <input
              type="text"
              placeholder="Apellidos"
              autoComplete="none"
              className="input-create-user-2"
            />
            <select placeholder="Tipo de documento">
              <option value="">Tipo de documento</option>
              {CONSTANTS.TipoDocumento.map((TipoDocumento) => {
                return <option value=""> {TipoDocumento} </option>;
              })}
            </select>
            <input
              type="text"
              placeholder="Número de documento"
              autoComplete="none"
              className="input-create-user-2"
            />
            <DatePicker
              selected={Date}
              onChange={(date: Date) => setDate(date)}
              className="input-create-user-2"
              id="textDatePicker"
              placeholderText="Fecha de nacimiento"
              dateFormat="dd/MM/yyyy"
              locale={es}
              yearDropdownItemNumber={70}
              scrollableYearDropdown
              showYearDropdown
            />
            <img src={calendar} className="calendar-icon-size" />
            <select placeholder="Sexo">
              <option value="">Sexo</option>
              {CONSTANTS.Sexo.map((Sexo) => {
                return <option value=""> {Sexo} </option>;
              })}
            </select>
            <select placeholder="Tipo de sangre">
              <option value="">Tipo de sangre</option>
              {CONSTANTS.TipoSangre.map((TipoSangre) => {
                return <option value=""> {TipoSangre} </option>;
              })}
            </select>
            <select placeholder="Estado civil">
              <option value="">Estado civil</option>
              {CONSTANTS.EstadoCivil.map((estadoCivil) => {
                return <option value=""> {estadoCivil} </option>;
              })}
            </select>
            <select placeholder="EPS">
              <option value="">EPS</option>
              {CONSTANTS.EPS.map((eps) => {
                return <option value=""> {eps} </option>;
              })}
            </select>
          </form>
          <div className="content-button-create-user-2">
            <button
              className="button-create-user2 "
              onClick={onClickButton}
              disabled={true}
            >
              Continuar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
