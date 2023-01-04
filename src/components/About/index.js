import "./index.scss";
import camara from "../../assets/images/camaras/michal-jakubowski-oQD9uq4Rd4I-unsplash.jpg";
import Reveal from "react-reveal/Reveal";
import React from "react";
import Fade from "react-reveal/Fade";

class FadeExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({ show: !this.state.show });
  }
}
const About = () => {
  return (
    <section class="about" id="about">
      <h1 class="heading">Nosotros</h1>
      <div class="row">
        <div class="image">
          <img src={camara} alt="camara de seguridad" />
        </div>
        <div class="content">
          <Reveal bottom>
            <h3>Especialistas en seguridad</h3>
            <p>
              Nuestro deber es hacer de su barrio un lugar seguro, utilizando
              innovación y tecnología. Brindamos soluciones, servicios y
              sistemas de seguridad. Contamos con la experiencia, la capacidad y
              la tecnología para satisfacer las exigencias de un mercado que se
              transforma permanentemente.
            </p>
          </Reveal>
          <Fade top when={this.state.show}>
            <p>
              Proveemos de información oportuna y completa.Contamos con rapidéz
              y velocidad en la modificación de dispositivos y respuestas ante
              agresiones. Contamos con total control sobre la operación, los
              medios y el personal. Aseguramos el cumplimiento de Leyes y
              disposiciones legales, Nacionales y Provinciales. Utilizamos
              procedimientos claros y sencillos de Administración de Personal.
            </p>
          </Fade>

          <button type="button" onClick={this.handleClick}>
            {this.state.show ? "Leer menos" : "Leer más"}
          </button>
        </div>
      </div>
    </section>
  );
};
export default About;
