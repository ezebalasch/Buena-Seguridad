import "./index.scss";
import Producto from "./Producto/index";

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
          <a href="#about">
            <button>Descubre mas</button>
          </a>
        </div>
      </section>
      <Producto />
    </div>
  );
};
export default Home;
