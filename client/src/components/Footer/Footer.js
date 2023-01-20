import React from "react";
import s from "../Footer/Footer.module.css";

const Footer = () => {
  return (
    <div className={s.Footer}>
      <h1 className={s.fooLogo}>HireMySkills</h1>
      <div className={s.fooIcon}>iconos</div>
      <div className={s.fooDerch}>Derechos Reservados © Grupo 11 Henry</div>
    </div>
  );
};

export default Footer;
