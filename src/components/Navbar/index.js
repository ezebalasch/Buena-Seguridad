import "./index.scss";
import logo from "../../assets/images/Logo/Logo_.png";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <header>
        <div>
          <Link
            to="home"
            className="logo"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <img src={logo} alt="" />
          </Link>
          <Link
            to="home"
            className="nav-links"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            Buena Seguridad
          </Link>
        </div>

        <nav class="navbar">
          <ul>
            <li>
              <Link
                to="home"
                className="nav-links"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="about"
                className="nav-links"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link
                to="mision"
                className="nav-links"
                spy={true}
                smooth={true}
                offset={-15}
                duration={500}
              >
                Mision
              </Link>
            </li>
            <li>
              <Link
                to="clientes"
                className="nav-links"
                spy={true}
                smooth={true}
                offset={-3}
                duration={500}
              >
                Clientes
              </Link>
            </li>
            <li>
              <Link
                to="contacto"
                className="nav-links"
                spy={true}
                smooth={true}
                offset={0}
                duration={500}
              >
                Contacto
              </Link>
            </li>
          </ul>
          <div class="fas fa-bars"></div>
        </nav>
        <div class="fas fa-bars"></div>
      </header>
    </div>
  );
};
export default Navbar;
