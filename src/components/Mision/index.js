import "./index.scss";
import camara from "../../assets/images/familia/padrehijo.webp";

const Mision = () => {
  return (
    <section class="mision" id="mision">
      <h1 class="heading">Mision</h1>
      <div class="box-container">
        <div class="box">
          <img
            src={camara}
            sizes="(min-width: 1200px) 1024px, (min-width: 600px) 640px, 320px"
            alt="familia segura Mendoza"
          />

          <div class="col-1">
            <p>
              Mirar hacia el futuro, es lo que nos caracteriza. Es por ello que
              a través del planteamiento de objetivos y metas claras y por medio
              de la operación constante, llegamos a establecer una mejora
              continua que nos lleva a la excelencia operativa. De esta forma
              apuntamos a fortalecer aún más la organización; siendo
              responsables, competitiva y comprometida con la sociedad y nuestro
              recurso humano.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Mision;
