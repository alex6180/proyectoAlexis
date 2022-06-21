import { Header } from "../../../Components/Header/Header";
import Doctor from "../../../../Common/assets/pose_1.png";
import "./Create-user.scss";
import { Button } from "../../../Components/Button/Button";

export const CreateUser = () => {
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
        <Button title="Crear usuario" />
      </div>
    </div>
  );
};

export default CreateUser;
