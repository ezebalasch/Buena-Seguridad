import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import cliente1 from "../../assets/images/barrios/ParqueLasCandelas.jpg";
import cliente2 from "../../assets/images/barrios/LosPeralitos.png";
import cliente3 from "../../assets/images/barrios/SantaOliva.jpg";
import cliente4 from "../../assets/images/barrios/Natania.jpg";
import cliente5 from "../../assets/images/barrios/AiresAndino.jpg";
import cliente6 from "../../assets/images/barrios/Fradaos.jpg";
import cliente7 from "../../assets/images/barrios/Conviccion.jpg";

const Clientes = () => {
  return (
    <section class="clientes" id="clientes">
      <h1 class="heading">Clientes satisfechos</h1>
      <h3 class="title">Trabajando para brindarles seguridad</h3>
      <div class="box-container">
        <div class="box">
          <img src={cliente1} alt="familias" height="15%" width="15%" />
          <h3>Parque Las Candelas</h3>
          <p>Barrio Privado Mendoza</p>
          <div class="stars">
            <NavLink exact="true">
              <FontAwesomeIcon icon={faStar} className="icono" />
            </NavLink>
            <NavLink exact="true">
              <FontAwesomeIcon icon={faStar} className="icono" />
            </NavLink>{" "}
            <NavLink exact="true">
              <FontAwesomeIcon icon={faStar} className="icono" />
            </NavLink>{" "}
            <NavLink exact="true">
              <FontAwesomeIcon icon={faStar} className="icono" />
            </NavLink>{" "}
            <NavLink exact="true">
              <FontAwesomeIcon icon={faStar} className="icono" />
            </NavLink>
          </div>
        </div>
        <div class="box">
          <img src={cliente2} alt="familias" height="15%" width="15%" />
          <h3>Los Peralitos</h3>
          <p>Barrio Privado Mendoza</p>
          <div class="stars">
            <NavLink exact="true">
              <FontAwesomeIcon icon={faStar} className="icono" />
            </NavLink>
            <NavLink exact="true">
              <FontAwesomeIcon icon={faStar} className="icono" />
            </NavLink>{" "}
            <NavLink exact="true">
              <FontAwesomeIcon icon={faStar} className="icono" />
            </NavLink>{" "}
            <NavLink exact="true">
              <FontAwesomeIcon icon={faStar} className="icono" />
            </NavLink>{" "}
            <NavLink exact="true">
              <FontAwesomeIcon icon={faStar} className="icono" />
            </NavLink>
          </div>
        </div>
        <div class="box">
          <img src={cliente3} alt="familias" height="15%" width="15%" />
          <h3>Jardines de Santa Oliva</h3>
          <p>Barrio Privado Mendoza</p>
          <div class="stars">
            <NavLink exact="true">
              <FontAwesomeIcon icon={faStar} className="icono" />
            </NavLink>
            <NavLink exact="true">
              <FontAwesomeIcon icon={faStar} className="icono" />
            </NavLink>{" "}
            <NavLink exact="true">
              <FontAwesomeIcon icon={faStar} className="icono" />
            </NavLink>{" "}
            <NavLink exact="true">
              <FontAwesomeIcon icon={faStar} className="icono" />
            </NavLink>{" "}
            <NavLink exact="true">
              <FontAwesomeIcon icon={faStar} className="icono" />
            </NavLink>
          </div>
        </div>
        <div class="box">
          <img src={cliente4} alt="familias" height="15%" width="15%" />
          <h3>Natania 44</h3>
          <p>Barrio Privado Mendoza</p>
          <div class="stars">
            <NavLink exact="true">
              <FontAwesomeIcon icon={faStar} className="icono" />
            </NavLink>
            <NavLink exact="true">
              <FontAwesomeIcon icon={faStar} className="icono" />
            </NavLink>{" "}
            <NavLink exact="true">
              <FontAwesomeIcon icon={faStar} className="icono" />
            </NavLink>{" "}
            <NavLink exact="true">
              <FontAwesomeIcon icon={faStar} className="icono" />
            </NavLink>{" "}
            <NavLink exact="true">
              <FontAwesomeIcon icon={faStar} className="icono" />
            </NavLink>
          </div>
        </div>
        <div class="box">
          <img src={cliente5} alt="familias" height="15%" width="15%" />
          <h3>Aires Andino</h3>
          <p>Barrio Privado Mendoza</p>
          <div class="stars">
            <NavLink exact="true">
              <FontAwesomeIcon icon={faStar} className="icono" />
            </NavLink>
            <NavLink exact="true">
              <FontAwesomeIcon icon={faStar} className="icono" />
            </NavLink>{" "}
            <NavLink exact="true">
              <FontAwesomeIcon icon={faStar} className="icono" />
            </NavLink>{" "}
            <NavLink exact="true">
              <FontAwesomeIcon icon={faStar} className="icono" />
            </NavLink>{" "}
            <NavLink exact="true">
              <FontAwesomeIcon icon={faStar} className="icono" />
            </NavLink>
          </div>
        </div>
        <div class="box">
          <img src={cliente6} alt="familias" height="15%" width="15%" />
          <h3>Fradaos</h3>
          <p>Empresa de Transportes</p>
          <div class="stars">
            <NavLink exact="true">
              <FontAwesomeIcon icon={faStar} className="icono" />
            </NavLink>
            <NavLink exact="true">
              <FontAwesomeIcon icon={faStar} className="icono" />
            </NavLink>{" "}
            <NavLink exact="true">
              <FontAwesomeIcon icon={faStar} className="icono" />
            </NavLink>{" "}
            <NavLink exact="true">
              <FontAwesomeIcon icon={faStar} className="icono" />
            </NavLink>{" "}
            <NavLink exact="true">
              <FontAwesomeIcon icon={faStar} className="icono" />
            </NavLink>
          </div>
        </div>
        <div class="box">
          <img src={cliente7} alt="familias" height="15%" width="15%" />
          <h3>Convicción SA</h3>
          <p>Empresa Constructora</p>
          <div class="stars">
            <NavLink exact="true">
              <FontAwesomeIcon icon={faStar} className="icono" />
            </NavLink>
            <NavLink exact="true">
              <FontAwesomeIcon icon={faStar} className="icono" />
            </NavLink>{" "}
            <NavLink exact="true">
              <FontAwesomeIcon icon={faStar} className="icono" />
            </NavLink>{" "}
            <NavLink exact="true">
              <FontAwesomeIcon icon={faStar} className="icono" />
            </NavLink>{" "}
            <NavLink exact="true">
              <FontAwesomeIcon icon={faStar} className="icono" />
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Clientes;
