import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../Footer/Footer";
import NavBar from "../../Navbar/Navbar";
import TeamCard from "../TeamCard/TeamCard";
import andres from "./TeamImgs/andres.jpg";
import sergio from "./TeamImgs/sergio.jpg";

const Team = [
  {
    id: 1,
    name: "Sergio",
    about:
      "I am a dedicated, honest individual. I am a good timekeeper, always willing to learn new skills. I am friendly, helpful and polite, have a good sense of humour.",
    linkedin: "https://www.linkedin.com/in/sergio-arevalo-ba4523254/",
    github: "https://github.com/sergioare",
    gmail: "sergioarevalo301@gmail.com",
    phone: "+57 3142199627",
    lastProject: "Videogames - HireMySkills",
    photo: sergio,
    prof: "Full Stack Developer - International Business",
  },
  {
    id: 2,
    name: "Andrés",
    about:
      "I am a dedicated, honest individual. Always willing to learn new skills. I am friendly, helpful and polite. I'm very hardworking",
    linkedin:
      "https://www.linkedin.com/in/andr%C3%A9s-alfredo-andrada-1a83261b5/",
    github: "https://github.com/AndresAndrada",
    gmail: "andresandrada1994@gmail.com",
    phone: "+54 (351) 7445402",
    lastProject: "HireMySkills",
    photo: andres,
    prof: "Full Stack Developer",
  },
  {
    id: 3,
    name: "Juan",
    about: "Hola soy Juan",
    linkedin: "",
    github: "",
    gmail: "",
    phone: "",
    lastProject: "",
    photo:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    prof: "",
  },
  {
    id: 4,
    name: "Leo",
    about: "Hola soy Leo",
    linkedin: "",
    github: "",
    gmail: "",
    phone: "",
    lastProject: "",
    photo:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    prof: "",
  },
  {
    id: 5,
    name: "Yuri",
    about: "Hola soy Yuri",
    linkedin: "",
    github: "",
    gmail: "",
    phone: "",
    lastProject: "",
    photo:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    prof: "",
  },
  {
    id: 6,
    name: "Alexis",
    about: "Hola soy Alexis",
    linkedin: "",
    github: "",
    gmail: "",
    phone: "",
    lastProject: "",
    photo:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    prof: "",
  },
  {
    id: 7,
    name: "Maxi",
    about: "",
    linkedin: "https://www.linkedin.com/in/maximilianofailla/",
    github: "https://github.com/MFaii",
    gmail: "faillamaximiliano@gmail.com",
    phone: "+54 9 11 5837-7643",
    lastProject: "PokeApi - HireMySkills",
    photo:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    prof: "Full Stack Developer",
  },
];

const TeamCards = () => {
  const navigate = useNavigate();

  return (
    <div>
      <NavBar />
      <div className="container">
        <div>
          <button
            className="btn btn-lg btn-outline-light"
            style={{ marginTop: "5%" }}
            onClick={() => navigate(-1)}
          >
            Return
          </button>
        </div>
        <div className="row d-flex justify-content-evenly">
          {Team.map((person) => (
            <div className="col-md-6" key={person.id}>
              <TeamCard
                name={person.name}
                about={person.about}
                linkedin={person.linkedin}
                github={person.github}
                email={person.gmail}
                phone={person.phone}
                last={person.lastProject}
                photo={person.photo}
                prof={person.prof}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCards;
