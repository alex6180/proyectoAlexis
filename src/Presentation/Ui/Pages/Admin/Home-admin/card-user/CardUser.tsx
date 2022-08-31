import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CheckBoxContext } from "../../../../../Routes/Navigation";
import "./CardUser.scss";

export const CardUser = ({ Nombres, Apellidos, Rol }: any) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/User-page/${Nombres}`);
  };

  const { checkBox } = useContext(CheckBoxContext);
  console.log(checkBox);

  return (
    <>
      <div className="card">
        <div onClick={handleClick}>
          <h1 className="text-card">
            {Nombres} {Apellidos}
          </h1>
          <p
            className={
              Rol === "Administrador"
                ? "text-2-card"
                : Rol === "Paciente"
                ? "text-2-card-Patinete"
                : Rol === "Laboratorista"
                ? "text-2-card-Laboratorista"
                : "text-2-card-doctor"
            }
          >
            {Rol}{" "}
          </p>
        </div>
        <div className="check_box">
          <input
            className="checkbox-card"
            type="checkbox"
            checked={checkBox === "false" ? false : checkBox === "true" && true}
          />
        </div>
      </div>
    </>
  );
};
