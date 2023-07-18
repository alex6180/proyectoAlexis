import React, { useContext, useState } from "react";
import { CheckBoxContext } from "../../../../Routes/Navigation";
import "./Exams.scss";
export const Exams = ({ nombre, estado }: any) => {
  const { checkBoxDoctor } = useContext(CheckBoxContext);

  const [first, setfirst] = useState("false");

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
          value={first}
          checked={checkBoxDoctor}
        />
      </div>
    </>
  );
};
