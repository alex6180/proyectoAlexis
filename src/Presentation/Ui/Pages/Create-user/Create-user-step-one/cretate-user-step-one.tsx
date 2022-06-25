import { Header } from "../../../Components/Header/Header";
import Arrow from "../../../../Common/assets/Vector1.png";
import Doctor from "../../../../Common/assets/pose_8.png";
import Check from "../../../../Common/assets/Vector-check.png";
import "./cretate-user-step-one.scss";
import { Circles } from "../../../Components/Circles/Circles";
import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import { CONSTANTS } from "../../../../Common/Constans/Constans";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";

export const CretateUserStepOne = () => {
  const { handleChange, values } = useFormik({
    initialValues: {
      Nombres: "",
      Apellidos: "",
      TipoDocumento: "",
      NumeroDocumento: "",
      FechaNacimiento: "",
      Sexo: "",
      TipoSangre: "",
      EstadoCivil: "",
      EPS: "",
      Departamento: "",
      DirecciónResidencia: "",
      CorreoElectrónico: "",
      Celular: "",
      TeléfonoFijo: "",
      TeléfonoOficina: "",
      Nombres1: "",
      Apellidos1: "",
      Parentesco: "",
      TeléfonoContacto: "",
      Rol: "",
      Contraseña: "",
      Profesion: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  const [disabled, setDisabled] = useState(true);
  const [disabledFormtwo, setDisabledFormtwo] = useState(true);
  const [disabledFormThree, setDisabledFormThree] = useState(true);
  const [disabledFormFour, setDisabledFormFour] = useState(true);

  const ButtonDisabledFormOne = () => {
    if (
      (values.Apellidos,
      values.EPS,
      values.EstadoCivil,
      values.FechaNacimiento,
      values.Nombres,
      values.NumeroDocumento,
      values.Sexo,
      values.TipoDocumento,
      values.TipoSangre === "")
    ) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };
  const ButtonDisabledFormTwo = () => {
    if (
      (values.Celular,
      values.CorreoElectrónico,
      values.Departamento,
      values.DirecciónResidencia,
      values.TeléfonoFijo,
      values.TeléfonoOficina === "")
    ) {
      setDisabledFormtwo(true);
    } else {
      setDisabledFormtwo(false);
    }
  };
  const ButtonDisabledFormThree = () => {
    if (
      (values.Apellidos1,
      values.Nombres1,
      values.Parentesco,
      values.TeléfonoContacto === "")
    ) {
      setDisabledFormThree(true);
    } else {
      setDisabledFormThree(false);
    }
  };

  const ButtonDisabledFormFour = () => {
    if ((values.Contraseña, values.Profesion, values.Rol === "")) {
      setDisabledFormFour(true);
    } else {
      setDisabledFormFour(false);
    }
  };

  const handleButtonModal = () => {
    navigate("/Home-admin", { replace: true });
  };

  const [visibleModal, setVisibleModal] = useState(false);

  const buttonActiveModal = () => {
    setVisibleModal(true);
  };

  const [form, setForm] = useState({
    stepOne: "true",
    stepTwo: "false",
    stepThree: "false",
    stepFour: "false",
  });

  const nextForm = () => {
    if (form.stepOne === "true") {
      setForm({
        stepOne: "false",
        stepTwo: "true",
        stepThree: "false",
        stepFour: "false",
      });
    } else if (form.stepTwo === "true") {
      setForm({
        stepOne: "false",
        stepTwo: "false",
        stepThree: "true",
        stepFour: "false",
      });
    } else if (form.stepThree === "true") {
      setForm({
        stepOne: "false",
        stepTwo: "false",
        stepThree: "false",
        stepFour: "true",
      });
    }
  };

  const navigate = useNavigate();
  const buttonAction = () => {
    navigate("/cretate-user-init");
  };
  return (
    <div>
      <Header />
      <div
        className={
          form.stepOne === "true"
            ? "content-create-user-4"
            : "content-create-user-4-step-three"
        }
      />

      <div className="text-create-user-1" onClick={buttonAction}>
        <img src={Arrow} className="size-arrow-create-user-1" />
        <h1 className="text-button-create-user-1"> Regresar </h1>
      </div>
      <Circles />
      <div className="content-img-create-user-1">
        <img src={Doctor} className="image-doctor-create-user-2" />
      </div>
      <div className="content-text-page-create-2">
        <div
          className={
            form.stepOne === "false"
              ? ".inputs-create-user-one-false"
              : "inputs-create-user-one"
          }
          defaultValue={form.stepOne}
        >
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
          <form
            className={
              form.stepOne === "false" ? "content-form-number-one-false" : ""
            }
            onChange={ButtonDisabledFormOne}
          >
            <input
              type="text"
              placeholder="Nombres"
              autoComplete="none"
              className="input-create-user-2"
              name="Nombres"
              value={values.Nombres}
              onChange={handleChange}
            />
            <input
              type="text"
              placeholder="Apellidos"
              autoComplete="none"
              className="input-create-user-2"
              name="Apellidos"
              value={values.Apellidos}
              onChange={handleChange}
            />
            <select
              placeholder="Tipo de documento"
              value={values.TipoDocumento}
              onChange={handleChange}
              name="TipoDocumento"
            >
              <option value="">Tipo de documento</option>
              {CONSTANTS.TipoDocumento.map((TipoDocumento) => {
                return <option value={TipoDocumento}> {TipoDocumento} </option>;
              })}
            </select>
            <input
              type="number"
              placeholder="Número de documento"
              autoComplete="none"
              className="input-create-user-2"
              name="NumeroDocumento"
              value={values.NumeroDocumento}
              onChange={handleChange}
            />

            <input
              onChange={handleChange}
              placeholder="Fecha de nacimiento"
              type="text"
              onFocus={(e) => (e.target.type = "date")}
              className="input-calendar-create-user-2"
              value={values.FechaNacimiento}
              name="FechaNacimiento"
            />

            <select
              placeholder="Sexo"
              value={values.Sexo}
              onChange={handleChange}
              name="Sexo"
            >
              <option value="">Sexo</option>
              {CONSTANTS.Sexo.map((Sexo) => {
                return <option value={Sexo}> {Sexo} </option>;
              })}
            </select>
            <select
              placeholder="Tipo de sangre"
              value={values.TipoSangre}
              onChange={handleChange}
              name="TipoSangre"
            >
              <option value="">Tipo de sangre</option>
              {CONSTANTS.TipoSangre.map((TipoSangre) => {
                return <option value={TipoSangre}> {TipoSangre} </option>;
              })}
            </select>
            <select
              placeholder="Estado civil"
              value={values.EstadoCivil}
              onChange={handleChange}
              name="EstadoCivil"
            >
              <option value="">Estado civil</option>
              {CONSTANTS.EstadoCivil.map((estadoCivil) => {
                return <option value={estadoCivil}> {estadoCivil} </option>;
              })}
            </select>
            <select
              placeholder="EPS"
              value={values.EPS}
              onChange={handleChange}
              name="EPS"
            >
              <option value="">EPS</option>
              {CONSTANTS.EPS.map((EPS) => {
                return <option value={EPS}> {EPS} </option>;
              })}
            </select>
          </form>
          <div className="content-button-create-user-2">
            <button
              className={
                form.stepOne === "true"
                  ? "button-create-user2"
                  : "button-create-user2-false"
              }
              disabled={disabled}
              onClick={nextForm}
            >
              Continuar
            </button>
          </div>
        </div>
        <div
          className={
            form.stepTwo === "false"
              ? ".inputs-create-user-two-false"
              : "inputs-create-user-two"
          }
          defaultValue={form.stepTwo}
        >
          <div className="content-header-text-create-user-2">
            <h1 className="number-progress-bar-header-create-user-2-step-two">
              2 de 4
            </h1>
            <div className="bar-step-two">
              <div className="progress-bar-step-two" />
            </div>
            <h1 className="text-header-create-user-2-step-two">
              Información de contacto
            </h1>
            <h2 className="second-text-header-create-user-2-step-two">
              Completa los siguientes campos con la información del usuario.
            </h2>
          </div>
          <form
            className={
              form.stepTwo === "true"
                ? "content-form-number-two"
                : "content-form-number-two-false"
            }
            onChange={ButtonDisabledFormTwo}
          >
            <select
              placeholder="Departamento"
              value={values.Departamento}
              onChange={handleChange}
              name="Departamento"
            >
              <option value="">Departamento</option>
              {CONSTANTS.Departamento.map((Departamento) => {
                return <option value={Departamento}> {Departamento} </option>;
              })}
            </select>
            <input
              type="Text"
              placeholder="Dirección de residencia"
              autoComplete="none"
              className="input-create-user-2"
              name="DirecciónResidencia"
              value={values.DirecciónResidencia}
              onChange={handleChange}
            />

            <input
              onChange={handleChange}
              placeholder="Correo electrónico"
              type="text"
              className="input-calendar-create-user-2"
              value={values.CorreoElectrónico}
              name="CorreoElectrónico"
              autoComplete="none"
            />
            <input
              onChange={handleChange}
              placeholder="Celular"
              type="number"
              className="input-calendar-create-user-2"
              value={values.Celular}
              name="Celular"
              autoComplete="none"
            />
            <input
              onChange={handleChange}
              placeholder="Teléfono fijo"
              type="number"
              className="input-calendar-create-user-2"
              value={values.TeléfonoFijo}
              name="TeléfonoFijo"
              autoComplete="none"
            />
            <input
              onChange={handleChange}
              placeholder="Teléfono de la oficina"
              type="number"
              className="input-calendar-create-user-2"
              value={values.TeléfonoOficina}
              name="TeléfonoOficina"
              autoComplete="none"
            />
          </form>
          <div className="content-button-create-user-2">
            <button
              className={
                form.stepTwo === "true"
                  ? "button-create-user2-step-four"
                  : "button-create-user2-step-two-false"
              }
              disabled={disabledFormtwo}
              onClick={nextForm}
            >
              Continuar
            </button>
          </div>
        </div>
        <div
          className={
            form.stepThree === "false"
              ? ".inputs-create-user-three-false"
              : "inputs-create-user-three"
          }
          defaultValue={form.stepThree}
        >
          <div className="content-header-text-create-user-2">
            <h1 className="number-progress-bar-header-create-user-2-step-two">
              3 de 4
            </h1>
            <div className="bar-step-three">
              <div className="progress-bar-step-three" />
            </div>
            <h1 className="text-header-create-user-2-step-two">
              Contacto de emergencia
            </h1>
            <h2 className="second-text-header-create-user-2-step-three">
              Completa los siguientes campos con la información del usuario.
            </h2>
          </div>
          <form
            className={
              form.stepThree === "true"
                ? "content-form-number-three"
                : "content-form-number-three-false"
            }
            onChange={ButtonDisabledFormThree}
          >
            <input
              type="text"
              placeholder="Nombres"
              autoComplete="none"
              className="input-create-user-2"
              name="Nombres1"
              value={values.Nombres1}
              onChange={handleChange}
            />

            <input
              onChange={handleChange}
              placeholder="Apellidos"
              type="text"
              autoComplete="none"
              className="input-calendar-create-user-2"
              value={values.Apellidos1}
              name="Apellidos1"
            />
            <input
              onChange={handleChange}
              placeholder="Parentesco"
              type="text"
              autoComplete="none"
              className="input-calendar-create-user-2"
              value={values.Parentesco}
              name="Parentesco"
            />
            <input
              onChange={handleChange}
              placeholder="Teléfono de contacto"
              type="number"
              autoComplete="none"
              className="input-calendar-create-user-2"
              value={values.TeléfonoContacto}
              name="TeléfonoContacto"
            />
          </form>
          <div className="content-button-create-user-2">
            <button
              className={
                form.stepThree === "true"
                  ? "button-create-user2-step-four"
                  : "button-create-user2-step-two-false"
              }
              disabled={disabledFormThree}
              onClick={nextForm}
            >
              Continuar
            </button>
          </div>
        </div>
        <div
          className={
            visibleModal === true
              ? "background-modal"
              : "background-modal-false"
          }
        />

        <div
          className={
            form.stepFour === "false"
              ? ".inputs-create-user-four-false"
              : "inputs-create-user-four"
          }
          defaultValue={form.stepFour}
        >
          <div className="content-header-text-create-user-2-step-four">
            <h1 className="number-progress-bar-header-create-user-2-step-two">
              4 de 4
            </h1>
            <div className="bar-step-four">
              <div className="progress-bar-step-four" />
            </div>
            <h1 className="text-header-create-user-2-step-two">
              Credenciales del usuario
            </h1>
            <h2 className="second-text-header-create-user-2-step-four">
              Completa los siguientes campos para generar los permisos dentro de
              la plataforma.
            </h2>
          </div>
          <form
            className={
              form.stepFour === "true"
                ? "content-form-number-four"
                : "content-form-number-four-false"
            }
            onChange={ButtonDisabledFormFour}
          >
            <input
              type="text"
              placeholder="Profesion"
              autoComplete="none"
              className="input-create-user-2"
              name="Profesion"
              value={values.Profesion}
              onChange={handleChange}
            />

            <select
              placeholder="Rol"
              value={values.Rol}
              onChange={handleChange}
              name="Rol"
            >
              <option value="">Rol</option>
              {CONSTANTS.Rol.map((Rol) => {
                return <option value={Rol}> {Rol} </option>;
              })}
            </select>
            <input
              onChange={handleChange}
              placeholder="Contraseña"
              type="text"
              className="input-calendar-create-user-2"
              value={values.Contraseña}
              name="Contraseña"
              autoComplete="none"
            />
          </form>
          <div className="content-button-create-user-2">
            <button
              className={
                form.stepFour === "true"
                  ? "button-create-user2-step-four"
                  : "button-create-user2-step-four-false"
              }
              disabled={disabledFormFour}
              onClick={buttonActiveModal}
            >
              Continuar
            </button>
          </div>
        </div>
        {visibleModal && (
          <div className="content-modal">
            <img src={Check} className="img-modal" />
            <p className="title-modal"> Creacion Exitosa </p>
            <p className="subtitle-modal"> Se añadio un nuevo usuario</p>
            <p className="button-modal" onClick={handleButtonModal}>
              Aceptar
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
