import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

function Professionals() {
const { id } = useParams();
console.log(id)

const Workers=[
    {
        id:0,
        name: "MEDICINA GENERAL" ,
        profesional:[
            {
            worker:"Juan"
            },
            {
            worker:"Luis"
            },
            {
            worker:"Diego"
            },

            
        ]

    },
    {
        id:1,
        name: "ODONTOLOGIA" ,
        profesional:[
            {
            worker:"Alfredo"
            },
            {
            worker:"Roberto"
            },
            {
            worker:"Franco"
            },

            
        ]

    },
    {
        id:2,
        name: "VETERINARIA" ,
        profesional:[
            {
            worker:"Luis"
            },
            {
            worker:"Angel"
            },
            {
            worker:"Leo"
            },

            
        ]

    },
    {
        id:3,
        name: "ADMINISTRACION" ,
        profesional:[
            {
            worker:"Pepito"
            },
            {
            worker:"Menganito"
            },
            {
            worker:"Persona"
            },

            
        ]

    },
    {
        id:4,
        name: "ACCOUNTING" ,
        profesional:[
            {
            worker:"Godofredo"
            },
            {
            worker:"Alexander"
            },
            {
            worker:"Alex2"
            },

            
        ]

    },
    {
        id:5,
        name: "MANAGEMENT" ,
        profesional:[
            {
            worker:"Persona3"
            },
            {
            worker:"Monica"
            },
            {
            worker:"Taatiana"
            },

            
        ]

    },
    {
        id:6,
        name: "ELECTRIC" ,
        profesional:[
            {
            worker:"Juan"
            },
            {
            worker:"Luis"
            },
            {
            worker:"Diego"
            },

            
        ]

    },
    {
        id:7,
        name: "MECHANICS" ,
        profesional:[
            {
            worker:"Alfredo"
            },
            {
            worker:"Roberto"
            },
            {
            worker:"Franco"
            },

            
        ]

    },
    {
        id:7,
        name: "ENVIRRONMENTAL" ,
        profesional:[
            {
            worker:"Luis"
            },
            {
            worker:"Angel"
            },
            {
            worker:"Leo"
            },

            
        ]

    },
    {
        id:8,
        name: "CLEANING" ,
        profesional:[
            {
            worker:"Pepito"
            },
            {
            worker:"Menganito"
            },
            {
            worker:"Persona"
            },

            
        ]

    },
    {
        id:9,
        name: "CARE ADULTS" ,
        profesional:[
            {
            worker:"Godofredo"
            },
            {
            worker:"Alexander"
            },
            {
            worker:"Alex2"
            },

            
        ]

    },
    {
        id:10,
        name: "PLUMBING" ,
        profesional:[
            {
            worker:"Persona3"
            },
            {
            worker:"Monica"
            },
            {
            worker:"Taatiana"
            },

            
        ]

    },
    {
        id:11,
        name: "TELEFONIA" ,
        profesional:[
            {
            worker:"Persona3"
            },
            {
            worker:"Monica"
            },
            {
            worker:"Taatiana"
            },

            
        ]

    },
    {
        id:12,
        name: "INTERNET" ,
        profesional:[
            {
            worker:"Juan"
            },
            {
            worker:"Luis"
            },
            {
            worker:"Diego"
            },

            
        ]

    },
    {
        id:13,
        name: "TELEVISION" ,
        profesional:[
            {
            worker:"Alfredo"
            },
            {
            worker:"Roberto"
            },
            {
            worker:"Franco"
            },

            
        ]

    },
    {
        id:14,
        name: "DISEÑO WEB" ,
        profesional:[
            {
            worker:"Luis"
            },
            {
            worker:"Angel"
            },
            {
            worker:"Leo"
            },

            
        ]

    },
    {
        id:15,
        name: "APLICACIONES" ,
        profesional:[
            {
            worker:"Pepito"
            },
            {
            worker:"Menganito"
            },
            {
            worker:"Persona"
            },

            
        ]

    },
    {
        id:16,
        name: "SITIOS WEB" ,
        profesional:[
            {
            worker:"Godofredo"
            },
            {
            worker:"Alexander"
            },
            {
            worker:"Alex2"
            },

            
        ]

    },
]

let aux = Workers.filter((wr)=>wr.id===parseInt(id))
console.log(aux);
  return (
    <div>Professionals</div>
  )
}

export default Professionals