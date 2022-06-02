import { Header } from "../../Components/Header/Header";
import Doctor from "../../../Common/assets/pose_6.png";
import User from "../../../Common/assets/Vector.png";
import Password from "../../../Common/assets/Copia de Vector.png";
import "./Home.scss";
export const Home = () => {
  return (
    <div>
      <Header />

      <div className="content-home">
        <div className="circle"></div>
        <div className="circle-second"></div>
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
            <input
              type="text"
              placeholder="Usuario"
              className="input-name"
              src={User}
            />
            <div className="conent-password-input">
              <input
                type="password"
                className="input-password"
                placeholder="Contraseña"
              />
            </div>
          </div>
          <div className="content-login-button">
            <button className="button-login">
              <h1 className="text-button">Iniciar sesión</h1>
            </button>
          </div>
          <h1 className="text-login">¿has olvidado la contraseña?</h1>
        </div>
      </div>
    </div>
  );
};
