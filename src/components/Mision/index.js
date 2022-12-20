import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import {
  faPhone,
  faShieldAlt,
  faAmbulance,
} from "@fortawesome/free-solid-svg-icons";

const Mision = () => {
  return (
    <section class="mision" id="mision">
      <h1 class="heading">Mision</h1>
      <div class="box-container">
        <div class="box">
          <NavLink exact="true">
            <FontAwesomeIcon icon={faPhone} className="icono" />
          </NavLink>
          <h3>Llamadas</h3>
          <p>accusamus, architecto rem</p>
        </div>
        <div class="box">
          <NavLink exact="true">
            <FontAwesomeIcon icon={faShieldAlt} className="icono" />
          </NavLink>
          <h3>Seguridad</h3>
          <p>accusamus, architecto rem</p>
        </div>
        <div class="box">
          <NavLink exact="true">
            <FontAwesomeIcon icon={faAmbulance} className="icono" />
          </NavLink>
          <h3>Asistencia</h3>
          <p>accusamus, architecto rem</p>
        </div>
      </div>
    </section>
  );
};
export default Mision;
