import React from "react";
import styles from "../Footer/Footer.module.css";

const Footer = () => {
  return (

    <div className={styles.Footer}>
      <h1 className={styles.fooLogo}>HireMySkills</h1>
      <div className={styles.fooIcon}>
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-whatsapp"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-github"></i>
        <i className="fa-brands fa-linkedin"></i>

      </div>
      <div className={styles.fooDerch}>
        All rights reserved © 2023, Working Group XI .
      </div>
    </div>
  );
};

export default Footer;
