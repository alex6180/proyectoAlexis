import { Header } from "../../Components/Header/Header";
import Doctor from "../../../Common/assets/pose_6.png";
import Password from "../../../Common/assets/Copia de Vector.png";
import User from "../../../Common/assets/Vector.png";
import "./Login.scss";
import { Button } from "../../Components/Button/Button";
import { Circles } from "../../Components/Circles/Circles";
export const Login = () => {
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
            <div className="conent-user-input">
              <input
                type="text"
                className="input-name"
                id="textUser"
                placeholder=" "
              />
              <label htmlFor="textUser" className="placeholder-user">
                usuario
              </label>
              <img src={User} className="img-input-user" />
            </div>
            <div className="conent-password-input">
              <input
                type="password"
                className="input-password"
                id="textPassword"
                placeholder=" "
              />
              <label htmlFor="textPassword" className="placeholder-password">
                Contraseña
              </label>
              <img src={Password} className="img-input-password" />
            </div>
          </div>
          <div className="content-button-login">
            <Button title="Iniciar sesión" />
          </div>
          <h2 className="text-login">¿Has olvidado la contraseña?</h2>
        </div>
      </div>
    </div>
  );
};
