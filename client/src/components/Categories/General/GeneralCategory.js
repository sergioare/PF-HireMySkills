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
    {
      id: 7,
      name: "ECONOMIA",
      categoriesSpecific: [""],
    },
    {
      id: 8,
      name: "TELECOMUNICACIONES",
      categoriesSpecific: [""],
    },
    {
      id: 9,
      name: "DEPORTE",
      categoriesSpecific: [""],
    },
    {
      id: 10,
      name: "EDUCACIÓN",
      categoriesSpecific: [""],
    },
    {
      id: 11,
      name: "ARTE",
      categoriesSpecific: [""],
    },
    {
      id: 12,
      name: "INDUSTRIAL",
      categoriesSpecific: [""],
    },
  ]);

  return (
    <div className={styles.general}>
      <h1 className={styles.cardTitle}>Categories</h1>
      <div className={styles.card}>
        {professional.map((prof) => {
          return (
            <Link to={`/categories/${prof.id}`}>
              <div key={prof.id} className={styles.cardBody}>
                <h3 className={styles.cardName}>{prof.name} </h3>
              </div>
            </Link>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default GeneralCategory;
