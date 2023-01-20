import React from "react";
import s from "../Footer/Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className={s.Footer}>
      <h1 className={s.fooLogo}>HireMySkills</h1>
      <div className={s.fooIcon}>
        <FontAwesomeIcon icon="fa-brands fa-facebook" />
        <FontAwesomeIcon icon="fa-brands fa-twitter" />
        <FontAwesomeIcon icon="fa-brands fa-instagram" />
        <FontAwesomeIcon icon="fa-brands fa-linkedin" />
        <FontAwesomeIcon icon="fa-brands fa-github" />
      </div>
      <div className={s.fooDerch}>Derechos Reservados © Grupo 11 Henry</div>
    </div>
  );
};

export default Footer;
