import { Header } from "../../Components/Header/Header";
import Doctor from "../../../Common/assets/pose_6.png";
import Password from "../../../Common/assets/Copia de Vector.png";
import User from "../../../Common/assets/Vector.png";
import "./Login.scss";

import { Circles } from "../../Components/Circles/Circles";
import { useForm } from "../../../../Data/hooks/useForm";
import { useState } from "react";
import { Link, Navigate, NavLink, useNavigate } from "react-router-dom";
import { FormikErrors, useFormik } from "formik";

interface FormValues {
  usuario: string;
  contraseña: string;
}

export const Login = () => {
  const [disabled, setDisabled] = useState(true);
  const ButtonDisabled = () => {
    if (!values.usuario) {
      setDisabled(true);
    } else if (!values.contraseña) {
      setDisabled(true);
    } else {
      setDisabled(false);
    }
  };
  const navigate = useNavigate();
  const buttonAction = () => {
    navigate("/cretate-user");
  };

  const { handleChange, values } = useFormik({
    initialValues: {
      usuario: "",
      contraseña: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div>
      <Header />
      <div className="content-home">
        <Circles />
        <div className="content-img">
          <img src={Doctor} className="size-doctor" />
        </div>
        <div className="content-login">
          <div className="content-login-title">
            <h1 className="title"> Bienvenid@ </h1>
            <h3 className="subtitle">
              Neiv Doctor te ayuda a tener una comunicación y seguimiento de tus
              examenes medicos
            </h3>
          </div>
          <div className="content-inputs">
            <form onChange={ButtonDisabled} className="conent-user-input">
              <input
                type="text"
                className="input-name"
                id="textUser"
                placeholder=" "
                name="usuario"
                value={values.usuario}
                onChange={handleChange}
              />
              <label htmlFor="textUser" className="placeholder-user">
                usuario
              </label>
              <img src={User} className="img-input-user" />
              <div className="conent-password-input">
                <input
                  type="password"
                  className="input-password"
                  id="textPassword"
                  placeholder=" "
                  name="contraseña"
                  value={values.contraseña}
                  onChange={handleChange}
                />
                <label htmlFor="textPassword" className="placeholder-password">
                  Contraseña
                </label>
                <img src={Password} className="img-input-password" />
              </div>
            </form>
          </div>
          <div className="content-button-login">
            <button
              className="button-login"
              disabled={disabled}
              onClick={buttonAction}
            >
              Iniciar sesion
            </button>
          </div>
          <h2 className="text-login">¿Has olvidado la contraseña?</h2>
        </div>
      </div>
    </div>
  );
};
