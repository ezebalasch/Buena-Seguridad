import "./index.scss";
import Producto from "./Producto/index";
import { Link } from "react-scroll";
import guardia from "../../assets/images/seguridad/guardia.jpg";

const Home = () => {
  return (
    <div>
      <section class="home" id="home">
        {/* <img
          className="fondo"
          alt={"Seguridad Privada Mendoza"}
          src={guardia}
        /> */}
        <div class="content">
          <h1>GRUPO BALDER</h1>
          <p>
            Nuestro trabajo es convertir del mundo un lugar más seguro, ciudando
            a las personas y las empresas.
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
