import React from "react";
import s from "../Specific/SpecificCategory.module.css";
// import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const SpecificCategory = () => {
  const { id } = useParams();
  console.log(id);

  const professional = [
    {
      id: 1,
      name: "SALUD",
      categoriesSpecific: [
        {
          id: 0,
          specific: "MEDICINA GENERAL",
        },
        {
          id: 1,
          specific: "ODONTOLOGIA",
        },
        {
          id: 2,
          specific: "VETERINARIA",
        },
      ],
    },
    {
      id: 2,
      name: "ADMINISTRACION",
      categoriesSpecific: [
        {
          id: 3,
          specific: "SECRETARY",
        },
        {
          id: 4,
          specific: "ACCOUNTING",
        },
        {
          id: 5,
          specific: "MANAGEMENT",
        },
      ],
    },
    {
      id: 3,
      name: "INGENIERIA",
      categoriesSpecific: [
        {
          id: 6,
          specific: "ELECTRIC",
        },
        {
          id: 7,
          specific: "MECHANICS",
        },
        {
          id: 8,
          specific: "ENVIRRONMENTAL",
        },
      ],
    },
    {
      id: 4,
      name: "HOGAR",
      categoriesSpecific: [
        {
          id: 9,
          specific: "CLEANING",
        },
        {
          id: 10,
          specific: "CARE ADULTS",
        },
        {
          id: 11,
          specific: "PLUMBING",
        },
      ],
    },
    {
      id: 5,
      name: "TECNOLOGIA",
      categoriesSpecific: [
        {
          id: 12,
          specific: "TELEFONIA",
        },
        {
          id: 13,
          specific: "INTERNET",
        },
        {
          id: 14,
          specific: "TELEVISION",
        },
      ],
    },
    {
      id: 6,
      name: "PROGRAMACION",
      categoriesSpecific: [
        {
          id: 15,
          specific: "DISEÑO WEB",
        },
        {
          id: 16,
          specific: "APLICACIONES",
        },
        {
          id: 17,
          specific: "SITIOS WEB",
        },
      ],
    },
  ];

  // const aux = professional[id].id;
  // console.log(aux);
  // let aux = professional.categoriesSpecific.map((el) => el.specific);
  let aux = professional.filter((pf) => pf.id === parseInt(id));
  console.log(aux);
  return (
    <div className={s.specific}>
      {aux[0].categoriesSpecific.map((prof) => {
        return (
          <div className={s.divSpecific}>
          <Link to={`/categories/${prof.id}`}>
            <h3>{prof.specific} </h3>
          </Link>
          </div>
        );
      })}

      {/* <h1>Hola</h1> */}
    </div>
  );
};

export default SpecificCategory;