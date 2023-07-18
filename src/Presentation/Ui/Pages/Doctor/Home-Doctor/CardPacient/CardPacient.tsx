import React from "react";
import { useNavigate } from "react-router-dom";

export const CardPacient = ({ Nombres, Apellidos }: any) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/Pacient-Page/${Nombres}`);
  };

  return (
    <>
      <div className="card">
        <div onClick={handleClick}>
          <h1 className="text-card">
            {Nombres} {Apellidos}
          </h1>
          <p className="text-2-card-Patinete">Paciente</p>
        </div>
      </div>
    </>
  );
};
