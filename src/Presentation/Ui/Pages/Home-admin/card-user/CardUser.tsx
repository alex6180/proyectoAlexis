import React from "react";
import { useNavigate } from "react-router-dom";
import "./CardUser.scss";
export const CardUser = ({ Nombres, Apellidos, Rol }: any) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/User-page/${Nombres}`);
  };
  return (
    <div className="card" onClick={handleClick}>
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
      <input className="checkbox-card" type="checkbox" />
    </div>
  );
};
