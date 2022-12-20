import Navbar from "../Navbar";
import "./index.scss";
import Home from "./../Home/index";
import About from "./../About/index";
import Mision from "./../Mision/index";
import Clientes from "./../Clientes/index";
import Contacto from "../Contacto";
import Footer from "../Footer";

const Layout = () => {
  return (
    <div className="App">
      <Navbar />
      <div className="page">
        <Home />
        <About />
        <Mision />
        <Clientes />
        <Contacto />
      </div>
      <Footer />
    </div>
  );
};
export default Layout;
