import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/index";
import Home from "./components/Home/index";
import About from "./components/About/index";
import Mision from "./components/Mision/index";
import Clientes from "./components/Clientes/index";
import Contacto from "./components/Contacto/index";
import Footer from "./components/Footer/index";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="mision" element={<Mision />} />
          <Route path="clientes" element={<Clientes />} />
          <Route path="contacto" element={<Contacto />} />
          <Route element={<Footer />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
