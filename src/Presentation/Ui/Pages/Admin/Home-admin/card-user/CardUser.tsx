import { useFormik } from "formik";
import React from "react";
import { useNavigate } from "react-router-dom";
import "./CardUser.scss";
import { useState } from "react";

export const CardUser = ({
  Nombres,
  Apellidos,
  Rol,
  checkBox,
  onChange,
}: any) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/User-page/${Nombres}`);
  };

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
        <input
          className="checkbox-card"
          type="checkbox"
          value={checkBox}
          onChange={onChange}
        />
      </div>
    </>
  );
};
