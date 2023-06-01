import "./index.scss";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const Contacto = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_gutlvai",
        "template_f5pasgj",
        form.current,
        "SZS4AIkW32uiWngt-"
      )
      .then(
        () => {
          alert("Mensaje enviado con éxito!");
          window.location.reload(false);
        },
        () => {
          alert("Error al enviar el mensaje, por favor intente nuevamente.");
        }
      );
  };
  return (
    <section class="contacto" id="contacto">
      <h1 class="heading">Contacto</h1>
      <div class="row">
        <div class="form-container">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" placeholder="nombre" name="name" required />
            <input
              type="email"
              placeholder="usuario@email.com"
              name="email"
              required
            />
            <input
              type="number"
              placeholder="Teléfono de Contacto"
              name="tel"
            />
            <textarea
              cols="15"
              rows="5"
              placeholder="Mensaje"
              name="message"
              required
            ></textarea>
            <input type="submit" value="Enviar" />
          </form>
        </div>
      </div>
    </section>
  );
};
export default Contacto;
