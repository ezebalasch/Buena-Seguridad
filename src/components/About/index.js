import "./index.scss";
import camara from "../../assets/images/camaras/michal-jakubowski-oQD9uq4Rd4I-unsplash.jpg";
import { useRef, useState } from "react";

const About = () => {
  const [hiddenState, setHiddenState] = useState(true);
  const textCard = useRef(null);
  const handleVisibility = () => {
    if (hiddenState === true) {
      textCard.current.classList.remove("hidden");
    } else {
      textCard.current.classList.add("hidden");
    }
    setHiddenState((prev) => !prev);
  };
  return (
    <section class="about" id="about">
      <h1 class="heading">Nosotros</h1>
      <div class="row">
        <div class="image">
          <img src={camara} alt="camara de seguridad" />
        </div>
        <div class="content">
          <h3>Especialistas en seguridad</h3>
          <p>
            Nuestro deber es hacer de su barrio un lugar seguro, utilizando
            innovación y tecnología. Brindamos soluciones, servicios y sistemas
            de seguridad. Contamos con la experiencia, la capacidad y la
            tecnología para satisfacer las exigencias de un mercado que se
            transforma permanentemente.
          </p>
          <p class="hidden" ref={textCard}>
            Proveemos de información oportuna y completa.Contamos con rapidéz y
            velocidad en la modificación de dispositivos y respuestas ante
            agresiones. Contamos con total control sobre la operación, los
            medios y el personal. Aseguramos el cumplimiento de Leyes y
            disposiciones legales, Nacionales y Provinciales. Utilizamos
            procedimientos claros y sencillos de Administración de Personal.
          </p>
          <button onClick={handleVisibility}>
            {hiddenState === true ? "Leer mas" : "Leer menos"}
          </button>
        </div>
      </div>
    </section>
  );
};
export default About;
