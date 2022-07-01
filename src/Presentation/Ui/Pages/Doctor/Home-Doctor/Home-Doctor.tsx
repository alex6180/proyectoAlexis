import React from "react";
import { Header } from "../../../Components/Header/Header";
import Doctor from "../../../../Common/assets/pose_1.png";
import "./HomeDoctor.scss";
import { useState } from "react";
import { useFormik } from "formik";
import { CONSTANTS } from "../../../../Common/Constans/Constans";
export const HomeDoctor = () => {
  const [withUsers, setwithUsers] = useState(true);
  const { handleChange, values } = useFormik({
    initialValues: {
      TipoDocumento: "",
      NumeroDocumento: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });
  return (
    <div className="content-home-doctor">
      <Header />
      <img src={Doctor} className="size-img-home-doctor" />
      <div
        className={
          withUsers === true
            ? "content-text-body-with-users"
            : "content-text-body"
        }
      >
        <h1 className="text-one"> ¡Hola </h1>
        <h1 className="text-two"> Janne cooper! </h1>
      </div>

      {withUsers === true ? (
        <div className="content-text-three-with-users">
          <h1 className="text-one-with-users">
            Cuentanos que paciente quieres encontrar.
          </h1>
          <div className="input-home-doctor">
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
          </div>
        </div>
      ) : (
        <div className="content-text-three">
          <h1>
            Aun no hay ningún paciente registrado, comunicate con algún
            admistrador para realizar la creación de un paciente.
          </h1>
        </div>
      )}
    </div>
  );
};
