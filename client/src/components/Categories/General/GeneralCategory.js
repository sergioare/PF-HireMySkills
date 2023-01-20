import React from "react";
import { Link } from "react-router-dom";
import s from "../General/GeneralCategory.module.css";
// import SpecificCategory from "../Specific/SpecificCategory";
import { useState } from "react";

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
    <div className={s.cards}>
      {professional.map((prof) => {
        return (
          <div className={s.cardsGeneral}>
            <Link to={`/categories/${prof.id}`}>
              <h3>{prof.name} </h3>
            </Link>
          </div>
        );
      })}
      {/* <SpecificCategory /> */}
    </div>
  );
};

export default GeneralCategory;