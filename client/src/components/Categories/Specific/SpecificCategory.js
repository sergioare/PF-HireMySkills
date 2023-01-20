import React from "react";
import s from "../Specific/SpecificCategory.module.css";
// import { useState } from "react";
import { useParams } from "react-router-dom";

const SpecificCategory = () => {
  const { id } = useParams();
  console.log(id);

  const professional = [
    {
      id: 1,
      name: "SALUD",
      categoriesSpecific: [
        {
          id: 1234,
          specific: "MEDICINA GENERAL",
        },
        {
          id: 12,
          specific: "ODONTOLOGIA",
        },
        {
          id: 123,
          specific: "VETERINARIA",
        },
      ],
    },
    {
      id: 2,
      name: "ADMINISTRACION",
      categoriesSpecific: [
        {
          id: 1234,
          specific: "SECRETARY",
        },
        {
          id: 12,
          specific: "ACCOUNTING",
        },
        {
          id: 123,
          specific: "MANAGEMENT",
        },
      ],
    },
    {
      id: 3,
      name: "INGENIERIA",
      categoriesSpecific: [
        {
          id: 1234,
          specific: "ELECTRIC",
        },
        {
          id: 12,
          specific: "MECHANICS",
        },
        {
          id: 123,
          specific: "ENVIRRONMENTAL",
        },
      ],
    },
    {
      id: 4,
      name: "HOGAR",
      categoriesSpecific: [
        {
          id: 1234,
          specific: "CLEANING",
        },
        {
          id: 12,
          specific: "CARE ADULTS",
        },
        {
          id: 123,
          specific: "PLUMBING",
        },
      ],
    },
    {
      id: 5,
      name: "TECNOLOGIA",
      categoriesSpecific: [
        {
          id: 1234,
          specific: "TELEFONIA",
        },
        {
          id: 12,
          specific: "INTERNET",
        },
        {
          id: 123,
          specific: "TELEVISION",
        },
      ],
    },
    {
      id: 6,
      name: "PROGRAMACION",
      categoriesSpecific: [
        {
          id: 1234,
          specific: "DISEÑO WEB",
        },
        {
          id: 12,
          specific: "APLICACIONES",
        },
        {
          id: 123,
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
            <h3>{prof.specific} </h3>
          </div>
        );
      })}

      {/* <h1>Hola</h1> */}
    </div>
  );
};

export default SpecificCategory;