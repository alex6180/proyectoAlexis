import React, { useContext } from "react";
import { CheckBoxContext } from "../../../../Routes/Navigation";
export const Exams = ({ nombre, estado }: any) => {
  const { checkBoxLab } = useContext(CheckBoxContext);
  return (
    <>
      <div className="card-exam">
        <div>
          <h1 className="text-card-exam">{nombre}</h1>
          <p
            className={
              estado === "Sin realizar"
                ? "without-checking"
                : estado === "Por revisar"
                ? "to-check"
                : estado === "Revisado"
                ? "reviewed"
                : "waiting-for-results"
            }
          >
            {" "}
            {estado}{" "}
          </p>
        </div>
        <input
          className="checkbox-card"
          type="checkbox"
          checked={checkBoxLab}
        />
      </div>
    </>
  );
};
