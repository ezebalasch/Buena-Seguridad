import "./index.scss";
import Producto from "./Producto/index";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div>
      <section class="home" id="home">
        <div class="content">
          <h1>BUENA SEGURIDAD</h1>
          <p>
            Nuestro trabajo es convertir del mundo un lugar más seguro para el
            cuidando, las personas y las empresas.
          </p>
          <Link
            to="about"
            className="logo"
            spy={true}
            smooth={true}
            offset={-10}
            duration={500}
          >
            <button>Conócenos</button>
          </Link>
          <a href="#about"></a>
        </div>
      </section>
      <Producto />
    </div>
  );
};
export default Home;
