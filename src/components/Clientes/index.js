import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import cliente0 from "../../assets/images/barrios/dacon.webp";
import cliente1 from "../../assets/images/barrios/parquelascandelas.webp";
import cliente2 from "../../assets/images/barrios/natania.webp";
import cliente3 from "../../assets/images/barrios/santaoliva.webp";
import cliente4 from "../../assets/images/barrios/losperalitos.webp";
import cliente5 from "../../assets/images/barrios/airesandino.webp";
import cliente6 from "../../assets/images/barrios/fradaos.webp";
import cliente7 from "../../assets/images/barrios/conviccion.webp";
import cliente8 from "../../assets/images/barrios/ligaclubdebarrio.jpg";
import cliente9 from "../../assets/images/barrios/ligajuninense.jpg";
import cliente10 from "../../assets/images/barrios/ligarivadaviense.jpg";

import { useRef, useState } from "react";

const Clientes = () => {
  const [hiddenState, setHiddenState] = useState(true);
  const airesCard = useRef(null);
  const fradaosCard = useRef(null);
  const conviCard = useRef(null);
  const ligaclubdebarrio = useRef(null);
  const ligarivadaviense = useRef(null);
  const ligajuninense = useRef(null);

  const handleVisibility = () => {
    if (hiddenState === true) {
      airesCard.current.classList.remove("hidden");
      fradaosCard.current.classList.remove("hidden");
      conviCard.current.classList.remove("hidden");
      ligaclubdebarrio.current.classList.remove("hidden");
      ligarivadaviense.current.classList.remove("hidden");
      ligajuninense.current.classList.remove("hidden");
    } else {
      airesCard.current.classList.add("hidden");
      fradaosCard.current.classList.add("hidden");
      conviCard.current.classList.add("hidden");
      ligaclubdebarrio.current.classList.add("hidden");
      ligarivadaviense.current.classList.add("hidden");
      ligajuninense.current.classList.add("hidden");
    }
    setHiddenState((prev) => !prev);
  };
  return (
    <section class="clientes" id="clientes">
      <h1 class="heading">Clientes satisfechos</h1>
      <h3 class="title">Trabajando para brindarles seguridad</h3>
      <div class="box-container">
        <div class="box">
          <img
            src={cliente0}
            sizes="(min-width: 1200px) 1024px, (min-width: 600px) 640px, 320px"
            alt="familias"
            height="15%"
            width="15%"
          />
          <h3>Asesoría y Construcción</h3>
          <p>Empresa Constructora Mendoza</p>
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
          <img
            src={cliente1}
            sizes="(min-width: 1200px) 1024px, (min-width: 600px) 640px, 320px"
            alt="familias"
            height="15%"
            width="15%"
          />
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
          <img
            src={cliente2}
            sizes="(min-width: 1200px) 1024px, (min-width: 600px) 640px, 320px"
            alt="familias"
            height="15%"
            width="15%"
          />
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
          <img
            src={cliente3}
            sizes="(min-width: 1200px) 1024px, (min-width: 600px) 640px, 320px"
            alt="familias"
            height="15%"
            width="15%"
          />
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
          <img
            src={cliente4}
            sizes="(min-width: 1200px) 1024px, (min-width: 600px) 640px, 320px"
            alt="familias"
            height="15%"
            width="15%"
          />
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
        <div class="box hidden" ref={airesCard}>
          <img
            src={cliente5}
            sizes="(min-width: 1200px) 1024px, (min-width: 600px) 640px, 320px"
            alt="familias"
            height="15%"
            width="15%"
          />
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
        <div class="box hidden" ref={fradaosCard}>
          <img
            src={cliente6}
            sizes="(min-width: 1200px) 1024px, (min-width: 600px) 640px, 320px"
            alt="familias"
            height="15%"
            width="15%"
          />
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
        <div class="box hidden" ref={conviCard}>
          <img
            src={cliente7}
            sizes="(min-width: 1200px) 1024px, (min-width: 600px) 640px, 320px"
            alt="familias mendoza"
            height="15%"
            width="15%"
          />
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
        <div class="box hidden" ref={ligarivadaviense}>
          <img
            src={cliente10}
            sizes="(min-width: 1200px) 1024px, (min-width: 600px) 640px, 320px"
            alt="familias"
            height="15%"
            width="15%"
          />
          <h3>Liga Rivadaviense de Fútbol</h3>
          <p>EVENTO DEPORTIVO</p>
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
        <div class="box hidden" ref={ligaclubdebarrio}>
          <img
            src={cliente8}
            sizes="(min-width: 1200px) 1024px, (min-width: 600px) 640px, 320px"
            alt="familias"
            height="15%"
            width="15%"
          />
          <h3>Liga de Clubes de Barrio</h3>
          <p>EVENTO DEPORTIVO</p>
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
        <div class="box hidden" ref={ligajuninense}>
          <img
            src={cliente9}
            sizes="(min-width: 1200px) 1024px, (min-width: 600px) 640px, 320px"
            alt="familias"
            height="15%"
            width="15%"
          />
          <h3>Liga Juninense de Fútbol</h3>
          <p>EVENTO DEPORTIVO</p>
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
      <button onClick={handleVisibility}>
        {hiddenState === true ? "Ver todos" : "Ver menos"}
      </button>
    </section>
  );
};
export default Clientes;
