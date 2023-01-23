import React from "react";
import s from "../Specific/SpecificCategory.module.css";
import { Link, useParams } from "react-router-dom";


const professional = [
  {   
   
    
        
    "id": 1,
    "name": "SALUD",
    "categoriesSpecific": [
    {
      "id": 0,
      "specific": "MEDICINA GENERAL"
    },
    {
      "id": 1,
      "specific": "ODONTOLOGIA"
    },
    {
      "id": 2,
      "specific": "VETERINARIA"
    }
  ]

},


{
  "id": 2,
  "name": "ADMINISTRACION",
  "categoriesSpecific": [
    {
      "id": 3,
      "specific": "SECRETARY"
    },
    {
      "id": 4,
      "specific": "ACCOUNTING"
    },
    {
      "id": 5,
      "specific": "MANAGEMENT"
    }
  ]
},

{
  "id": 3,
  "name": "INGENIERIA",
  "categoriesSpecific": [
    {
      "id": 6,
      "specific": "ELECTRIC"
    },
    {
      "id": 7,
      "specific": "MECHANICS"
    },
    {
      "id": 8,
      "specific": "ENVIRRONMENTAL"
    }
  ]
},
{
  "id": 4,
  "name": "HOGAR",
  "categoriesSpecific": [
    {
      "id": 9,
      "specific": "CLEANING"
    },
    {
      "id": 10,
      "specific": "CARE ADULTS"
    },
    {
      "id": 11,
      "specific": "PLUMBING"
    }
  ]
},
{
  "id": 5,
  "name": "TECNOLOGIA",
  "categoriesSpecific": [
    {
      "id": 12,
      "specific": "TELEFONIA"
    },
    {
      "id": 13,
      "specific": "INTERNET"
    },
    {
      "id": 14,
      "specific": "TELEVISION"
    }
  ]
},
{
  "id": 6,
  "name": "PROGRAMACION",
  "categoriesSpecific": [
    {
      "id": 15,
      "specific": "DISEÑO WEB"
    },
    {
      "id": 16,
      "specific": "APLICACIONES"
    },
    {
      "id": 17,
      "specific": "SITIOS WEB"
    }
  ]
}
]


const SpecificCategory = () => {
  const { id } = useParams();
  // console.log(id);

  
  // const aux = professional[id].id;
  // console.log(aux);
  // let aux = professional.categoriesSpecific.map((el) => el.specific);
  let aux = professional.filter((pf) => pf.id === parseInt(id));
  console.log(aux);

 
  return (
    <div className={s.specific}>
      <div>
        <h1>Profession</h1>
      </div>
      {aux[0].categoriesSpecific.map((prof) => {
        return (
          <div key={prof.id} className={s.divSpecific}>
            <Link to={`/professional/${prof.id}`}>
              <h3>{prof.specific} </h3>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default SpecificCategory;
