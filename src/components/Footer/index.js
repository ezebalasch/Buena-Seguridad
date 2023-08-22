import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faMapMarker, faEnvelope } from "@fortawesome/free-solid-svg-icons";
const Footer = () => {
  return (
    <section class="footer">
      <div class="icons">
        <a target={"a_blank"} href="https://www.instagram.com/grupobalder/">
          <FontAwesomeIcon icon={faInstagram} className="icono" />
        </a>
        <a
          target={"a_blank"}
          href="https://www.google.com/search?q=buena%20seguridad%20mendoza&rlz=1C1EJFC_enAR892AR892&oq=buen&aqs=chrome.0.69i59j69i57j69i61l2j69i60.3444j0j7&sourceid=chrome&ie=UTF-8&tbs=lf:1,lf_ui:2&tbm=lcl&sxsrf=ALiCzsZ9WuxJwESgZzPHnIzq0NNlUCj7tQ:1671574536946&rflfq=1&num=10&rldimm=14055903353551904316&lqi=ChdidWVuYSBzZWd1cmlkYWQgbWVuZG96YVohIhdidWVuYSBzZWd1cmlkYWQgbWVuZG96YSoGCAIQABABkgERZ292ZXJubWVudF9vZmZpY2U&ved=2ahUKEwiAyfWznIn8AhWRq5UCHZsHBzMQvS56BAhYEAE&sa=X&rlst=f#rlfi=hd:;si:14055903353551904316,l,ChdidWVuYSBzZWd1cmlkYWQgbWVuZG96YVohIhdidWVuYSBzZWd1cmlkYWQgbWVuZG96YSoGCAIQABABkgERZ292ZXJubWVudF9vZmZpY2U;mv:[[-32.8686546,-68.8168793],[-32.918189399999996,-68.8534401]];tbs:lrf:!1m4!1u3!2m2!3m1!1e1!1m4!1u2!2m2!2m1!1e1!2m1!1e2!2m1!1e3!3sIAE,lf:1,lf_ui:2"
        >
          <FontAwesomeIcon icon={faMapMarker} className="icono" />
        </a>
        <a target={"a_blank"} href="mailto:bseguridadsas@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} className="icono" />
        </a>
      </div>
    </section>
  );
};
export default Footer;
