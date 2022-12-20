import { NavLink } from "react-router-dom";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faVideoCamera,
  faAmbulance,
  faMap,
  faPersonMilitaryPointing,
} from "@fortawesome/free-solid-svg-icons";
import { useRef, useState } from "react";

const Producto = () => {
  const [hiddenState, setHiddenState] = useState(true);
  const planCard = useRef(null);
  const guardCard = useRef(null);
  const handleVisibility = () => {
    if (hiddenState === true) {
      planCard.current.classList.remove("hidden");
      guardCard.current.classList.remove("hidden");
    } else {
      planCard.current.classList.add("hidden");
      guardCard.current.classList.add("hidden");
    }
    setHiddenState((prev) => !prev);
  };
  return (
    <section class="product" id="product">
      <div class="box-container">
        <div class="box">
          <NavLink exact="true">
            <FontAwesomeIcon icon={faPhone} className="icono" />
          </NavLink>
          <h3>Contacto</h3>
          <p>Equipos de comunicacion</p>
          <p>Contacto inmediato con la policia de mendoza</p>
        </div>
        <div class="box">
          <NavLink exact="true">
            <FontAwesomeIcon icon={faVideoCamera} className="icono" />
          </NavLink>

          <h3>Seguridad</h3>
          <p>Sistemas de Cámaras de VideoVigilancia</p>
          <p>Supervisión las 24hs</p>
        </div>
        <div class="box">
          <NavLink exact="true">
            <FontAwesomeIcon icon={faAmbulance} className="icono" />
          </NavLink>

          <h3>Asistencia</h3>
          <p>
            Plan de emergencias diseñado para poder socorrer al ciudadano en el
            momento.
          </p>
        </div>
        <div class="box hidden" ref={planCard}>
          <NavLink exact="true">
            <FontAwesomeIcon icon={faMap} className="icono" />
          </NavLink>

          <h3>Planificación</h3>
          <p>
            Diseño y aplicación de planes específicos de seguridad adecuados a
            las necesidades
          </p>
        </div>
        <div class="box hidden" ref={guardCard}>
          <NavLink exact="true">
            <FontAwesomeIcon
              icon={faPersonMilitaryPointing}
              className="icono"
            />
          </NavLink>

          <h3>Guardias</h3>
          <p>Guardias de seguridad</p>
          <p>Vestuario acorde a requerimiento</p>
          <p>Supervisión las 24hs </p>
        </div>
      </div>
      <button onClick={handleVisibility}>
        {hiddenState === true ? "Ver mas" : "Ver menos"}
      </button>
    </section>
  );
};
export default Producto;
