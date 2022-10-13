import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Doctor from "../../../../Common/assets/pose_8.png";
import Arrow from "../../../../Common/assets/Vector1.png";
import { Circles } from "../../../Components/Circles/Circles";
import { Header } from "../../../Components/Header/Header";
import Textlogo from "../../../../Common/assets/Neiv Doctor.png";
import Logo from "../../../../Common/assets/Logo.png";
import iconBottomModal from "../../../../Common/assets/Vector-close-modal.png";
import Check from "../../../../Common/assets/Vector-check.png";
import imgInputFiles from "../../../../Common/assets/img-input-files.png";
import "../../../Components/Header/Header.scss";
import "./InfoExamsLab.scss";
import { CONSTANTS } from "../../../../Common/Constans/Constans";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
export const InfoExamsLab = () => {
  const [visibleMenuEdit, setVisibleMenuEdit] = useState(false);
  const [visibleModal, setVisibleModal] = useState(false);
  const buttonActiveModal = () => {
    setVisibleMenuEdit(!visibleMenuEdit);
  };
  const buttonVisibleModal = () => {
    setVisibleModal(true);
    setVisibleMenuEdit(false);
  };
  const buttonNoVisibleModal = () => {
    setVisibleModal(false);
  };
  const { handleChange, values } = useFormik({
    initialValues: {
      TipoExamen: "",
      Observaciones: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const navigate = useNavigate();
  const navpageprev = () => {
    navigate("/Home-Lab-Technician");
  };
  const [file, setFile] = useState();
  const uploadFiles = (e: any) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(e.target.files[0]);
    fileReader.onload = (e) => {
      e.preventDefault();
    };
  };

  return (
    <div>
      <Helmet bodyAttributes={{ style: "background :  whitesmoke;" }} />
      <div
        className={
          visibleMenuEdit === true
            ? "content-header-true"
            : visibleModal === true
            ? "content-header-true"
            : "content-header"
        }
      >
        <div className="size-logo">
          <img src={Textlogo} width={170} />
          <img src={Logo} className="Logo-img" />
        </div>
      </div>
      <div className="content-button-info-exam" onClick={navpageprev}>
        <img src={Arrow} />
        <h1 className="text-btn-back-info-exam"> Regresar </h1>
      </div>
      <div className="img-add-exams-page">
        <Circles />
        <img src={Doctor} className="size-doctor-add-exams-page" />
      </div>
      <div className="content-text-info-exam">
        <div className="content-info-exam">
          <h1> Informacion del examen </h1>
          <h3 className="subtitle-text-info">
            Revisa la información del examen y agrega notas.
          </h3>
          <div className="content-info-exam-page">
            <p> Nombre del paciente: </p>
            <p> Numero de documento: </p>
            <p> Tipo de examen: </p>
            <p> Estado: </p>
            <p> Resultado: </p>
            <h4 className="first-text-info"> Josh Ryan </h4>
            <h4 className="two-text-info"> 1020831832 </h4>
            <h4 className="three-text-info"> Sangre </h4>
            <h4 className="four-text-info"> Por revisar </h4>
            <h4 className="five-text-info"> Josh_Sangre.pdf </h4>
          </div>
          <h2> Observaciones </h2>
          <div className="content-observations-info-exams">
            <div className="content-title-observations">
              <p>Dr. Josh Ryan </p>
              <h4> 30/02/22 </h4>
            </div>
            <h3>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </h3>
          </div>
          <button className="btn-edit-info-exam" onClick={buttonActiveModal}>
            Dejar una observacion
          </button>
        </div>
        {visibleModal && (
          <div className="content-popUp-info-exam-page">
            <div className="content-modal-add-exam">
              <img src={Check} />
              <p className="title-modal-info-exam"> Ajustes relaizados </p>
              <p className="subtitle-modal-info-exam">
                Se ha añadido las observaciones al examen
              </p>
              <p
                className="button-modal-add-exam"
                onClick={buttonNoVisibleModal}
              >
                Aceptar
              </p>
            </div>
          </div>
        )}
        {visibleMenuEdit && (
          <div className="content-edit-info-exam-page">
            <div className="content-edit-info-exam">
              <div className="content-text-edit-info-exam">
                <div className="text-header-edit-info-exam">
                  <h1> Observaciones </h1>
                  <img
                    src={iconBottomModal}
                    onClick={buttonActiveModal}
                    style={{ width: 28, height: 28, cursor: "pointer" }}
                  />
                </div>
                <p>
                  Completa los siguientes campos para realizar alguna
                  observación en el examen.
                </p>
                <div>
                  <select
                    name="TipoExamen"
                    className="select-info-exam"
                    id="EstadoExamen"
                    value={values.TipoExamen}
                    onChange={handleChange}
                  >
                    <option value=""></option>
                    {CONSTANTS.EstadoExamen.map((EstadoExamen) => {
                      return (
                        <option value={EstadoExamen}> {EstadoExamen} </option>
                      );
                    })}
                  </select>
                  <label
                    htmlFor="EstadoExamen"
                    className={
                      values.TipoExamen === ""
                        ? "placeholder-select-info-exam"
                        : "placeholder-select-info-exam-true"
                    }
                  >
                    Estado
                  </label>
                </div>
                <div className="image-upload-wrap">
                  <input
                    className="file-upload-input"
                    type="file"
                    accept="img/*,.pdf"
                    multiple
                    onChange={(e) => {
                      uploadFiles(e.target.files);
                    }}
                  />
                  <div className={"text-information"}>
                    <img src={imgInputFiles} />
                    <h1>Arrastra y suelta aquí</h1>
                    <h3> ó </h3>
                    <h2>Busca los archivos</h2>
                  </div>
                </div>
                <textarea
                  onChange={handleChange}
                  value={values.Observaciones}
                  name="Observaciones"
                  placeholder="Observaciones"
                  autoComplete="none"
                  className="input-info-exam"
                />
                <button
                  className="button-save-changes-edit"
                  onClick={buttonVisibleModal}
                >
                  Guardar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
