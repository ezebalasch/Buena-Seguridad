import "./index.scss";
import camara from "../../assets/images/camaras/michal-jakubowski-oQD9uq4Rd4I-unsplash.jpg";

const About = () => {
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
          <a href="#">
            <button>Leer Mas</button>
          </a>
        </div>
      </div>
    </section>
  );
};
export default About;
