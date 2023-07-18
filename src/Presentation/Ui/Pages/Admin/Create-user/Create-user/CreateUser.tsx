import { Header } from "../../../../Components/Header/Header";
import Doctor from "../../../../../Common/assets/pose_1.png";
import "./Create-user.scss";
import { Button } from "../../../../Components/Button/Button";
import { useNavigate } from "react-router-dom";

export const CreateUser = () => {
  const navigate = useNavigate();
  const buttonAction = () => {
    navigate("/cretate-user-init");
  };

  return (
    <div className="content-create-user">
      <Header />
      <div className="content-img-create-user">
        <img src={Doctor} className="size-doctor-create-user" />
      </div>
      <div className="texts-button-create-user">
        <h1 className="title-create-user">¡Hola</h1>
        <h1 className="subtitle-create-user">Jane Cooper!</h1>
        <h1 className="subtitle-create-user-2">
          Aun no tienes usuarios registrados, empieza a crearlos y ayudales a
          mejorar la gestión de sus examenes.
        </h1>
      </div>
      <div className="content-button-create-user">
        <button className="button-create-user" onClick={buttonAction}>
          {" "}
          Crear usuario{" "}
        </button>
      </div>
    </div>
  );
};

export default CreateUser;
