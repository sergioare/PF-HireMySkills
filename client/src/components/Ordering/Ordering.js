import React from "react";
import { useState } from "react";
import styles from "../Ordering/Ordering.module.css";

export default function Ordering({ handlerByNameCategories, namechange }) {
  const professional = [
    {
      id: 1,
      name: "SALUD",
      categoriesSpecific: ["MEDICINA GENERAL", "ODONTOLOGIA", "TERAPIA FISICA"],
    },
    {
      id: 2,
      name: "ADMINISTRACION",
      categoriesSpecific: ["SECRETARIA", "CONTABILIDAD", "GERENCIA"],
    },
    {
      id: 3,
      name: "INGENIERIA",
      categoriesSpecific: ["ELECTRICA", "AUTOMOTRIZ", "AMBIENTAL"],
    },
    {
      id: 4,
      name: "HOGAR",
      categoriesSpecific: ["LIMPIEZA", "CUIDAR ADULTOS", "PLOMERIA"],
    },
    {
      id: 5,
      name: "TECNOLOGIA",
      categoriesSpecific: ["TELEFONIA", "INTERNET", "TELEVISION"],
    },
    {
      id: 6,
      name: "PROGRAMACION",
      categoriesSpecific: ["DISEÑO WEB", "APLICACIONES", "SITIOS WEB"],
    },
  ];

  // eslint-disable-next-line no-lone-blocks
  // {
  //   professional.map((el) => {
  //     return el.professional.sort((a, b) => {
  //       let categoriesA = a.name.toLowerCase();
  //       let categoriesB = b.name.toLowerCase();

  //       if (categoriesA > categoriesB) return 1;

  //       if (categoriesB > categoriesA) return -1;

  //       return 0;
  //     });
  //   });
  // }
  return (
    <div className={styles.order}>
      <div className={styles.divName}>
        <label className={styles.subTitles}>SORT </label>
        <select className={styles.selects}>
          <option value="">--Categories--</option>
          <option value="asc">(A - Z)</option>
          <option value="desc">(Z - A)</option>
        </select>
      </div>
    </div>
  );
}
