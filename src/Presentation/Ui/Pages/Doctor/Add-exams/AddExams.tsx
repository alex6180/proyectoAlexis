import React from "react";
import { Helmet } from "react-helmet";
import { Circles } from "../../../Components/Circles/Circles";
import { Header } from "../../../Components/Header/Header";
import Doctor from "../../../../Common/assets/pose_4-add-exams.png";
import Arrow from "../../../../Common/assets/Vector1.png";
import Check from "../../../../Common/assets/Vector-check.png";
import "./AddExams.scss";
import { CONSTANTS } from "../../../../Common/Constans/Constans";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { useState } from "react";
export const AddExams = () => {
  const navigate = useNavigate();
  const navpageprev = () => {
    navigate("/Home-doctor");
  };
  const { handleChange, values } = useFormik({
    initialValues: {
      TipoDocumento: "",
      NumeroDocumento: "",
      TipoExamen: "",
      Observaciones: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const [enabled, setEnabled] = useState(true);
  const [visibleModal, setVisibleModal] = useState(false);
  const buttonActiveModal = () => {
    setVisibleModal(true);
  };
  const ButtonDisabledForm = () => {
    if (
      (values.NumeroDocumento,
      values.Observaciones,
      values.TipoDocumento,
      values.TipoExamen === "")
    ) {
      setEnabled(true);
    } else {
      setEnabled(false);
    }
  };

  return (
    <div>
      <Header />
      <Helmet bodyAttributes={{ style: "background :  whitesmoke;" }} />
      <div className="Button-pacient-page" onClick={navpageprev}>
        <img src={Arrow} className="size-arrow-pacient-page" />
        <h1 className="text-button-pacient-page"> Regresar </h1>
      </div>
      <div className="img-add-exams-page">
        <Circles />
        <img src={Doctor} className="size-doctor-add-exams-page" />
      </div>
      <div className="content-inputs-add-exam">
        <div className="content-body-add-exams-page">
          <div className="content-text-page-add-exam">
            <h1 className="text-header-page-add-exam"> Agregar examen </h1>
            <h1 className="text2-header-page-add-exam">
              Completa los siguientes campos para asignar un examen
            </h1>
          </div>
          <div>
            <form
              className="content-inputs-add-exams"
              onChange={ButtonDisabledForm}
            >
              <select
                name="TipoDocumento"
                className="select-add-exam"
                onChange={handleChange}
                value={values.TipoDocumento}
              >
                <option value="">Tipo de documento</option>
                {CONSTANTS.TipoDocumento.map((TipoDocumento) => {
                  return (
                    <option value={TipoDocumento}> {TipoDocumento} </option>
                  );
                })}
              </select>
              <input
                type="number"
                placeholder="Número de documento"
                autoComplete="none"
                name="NumeroDocumento"
                className="input-add-exam"
                onChange={handleChange}
                value={values.NumeroDocumento}
              />
              <select
                name="TipoExamen"
                className="select-add-exam"
                onChange={handleChange}
                value={values.TipoExamen}
              >
                <option value="">Tipo de examen</option>
                <option value="Tipo A"> Tipo A </option>
                <option value="Tipo B"> Tipo B </option>
                <option value="Tipo C"> Tipo C </option>
              </select>
              <textarea
                onChange={handleChange}
                value={values.Observaciones}
                name="Observaciones"
                placeholder="Observaciones"
                autoComplete="none"
                className="input-add-exam2"
              />
            </form>
            <button
              className="button-add-exams"
              disabled={enabled}
              onClick={buttonActiveModal}
            >
              Continuar
            </button>
          </div>
          {visibleModal && (
            <div
              className={
                visibleModal === true
                  ? "background-modal-add-exams"
                  : "background-modal-add-exams-false"
              }
            >
              <div className="content-modal-add-exam">
                <img src={Check} className="img-modal-add-exam" />
                <p className="title-modal-add-exam"> Creacion Exitosa </p>
                <p className="subtitle-modal-add-exam">
                  Se añadio un nuevo examen
                </p>
                <p className="button-modal-add-exam" onClick={navpageprev}>
                  Aceptar
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
