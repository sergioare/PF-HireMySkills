import React from "react";
import { Link } from "react-router-dom";
import styles from "../General/GeneralCategory.module.css";
import { useState } from "react";
import Footer from "../../Footer/Footer";

const GeneralCategory = () => {
  const [professional] = useState([
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
  ]);

  return (
    <div className={styles.cards}>
      <h1>CATEGORIES</h1>
      {professional.map((prof) => {
        return (
          <div key={prof.id} className={styles.cardsGeneral}>
            <Link to={`/categories/${prof.id}`}>
              <h3>{prof.name} </h3>
            </Link>
          </div>
        );
      })}
      {/* <Footer /> */}
    </div>
  );
};

export default GeneralCategory;
