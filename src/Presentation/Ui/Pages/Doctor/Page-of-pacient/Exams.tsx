import React from "react";
import "./Exams.scss";
export const Exams = () => {
  return (
    <>
      <div className="card-exam">
        <div>
          <h1 className="text-card-exam">Nombre de examen</h1>
          <p className="without-checking"> Sin realizar </p>
        </div>
        <input className="checkbox-card" type="checkbox" />
      </div>
      <div className="card-exam">
        <div>
          <h1 className="text-card-exam">Nombre de examen</h1>
          <p className="without-checking"> Sin realizar </p>
        </div>
        <input className="checkbox-card" type="checkbox" />
      </div>
      <div className="card-exam">
        <div>
          <h1 className="text-card-exam">Nombre de examen</h1>
          <p className="waiting-for-results"> Esperando resultados </p>
        </div>
        <input className="checkbox-card" type="checkbox" />
      </div>
      <div className="card-exam">
        <div>
          <h1 className="text-card-exam">Nombre de examen</h1>
          <p className="to-check"> Por revisar </p>
        </div>
        <input className="checkbox-card" type="checkbox" />
      </div>
      <div className="card-exam">
        <div>
          <h1 className="text-card-exam">Nombre de examen</h1>
          <p className="to-check"> Por revisar </p>
        </div>
        <input className="checkbox-card" type="checkbox" />
      </div>
      <div className="card-exam">
        <div>
          <h1 className="text-card-exam">Nombre de examen</h1>
          <p className="reviewed"> Revisado </p>
        </div>
        <input className="checkbox-card" type="checkbox" />
      </div>
      <div className="card-exam">
        <div>
          <h1 className="text-card-exam">Nombre de examen</h1>
          <p className="reviewed"> Revisado </p>
        </div>
        <input className="checkbox-card" type="checkbox" />
      </div>
      <div className="card-exam">
        <div>
          <h1 className="text-card-exam">Nombre de examen</h1>
          <p className="reviewed"> Revisado </p>
        </div>
        <input className="checkbox-card" type="checkbox" />
      </div>
      <div className="card-exam">
        <div>
          <h1 className="text-card-exam">Nombre de examen</h1>
          <p className="reviewed"> Revisado </p>
        </div>
        <input className="checkbox-card" type="checkbox" />
      </div>
    </>
  );
};
