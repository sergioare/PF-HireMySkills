import React from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Navbar/Navbar";
import TeamCard from "../TeamCard/TeamCard";

const Team = [
  {
    id: 1,
    name: "Sergio",
    about: "Hola soy Sergio",
    linkedin: "",
    github: "",
    gmail: "",
    phone: "",
    lastProject: "",
    photo:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    name: "Andrés",
    about: "Hola soy Andrés",
    linkedin: "",
    github: "",
    gmail: "",
    phone: "",
    lastProject: "",
    photo:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
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
  },
  {
    id: 7,
    name: "Maxi",
    about: "Hola soy maxi",
    linkedin: "https://www.linkedin.com/in/maximilianofailla/",
    github: "https://github.com/MFaii",
    gmail: "faillamaximiliano@gmail.com",
    phone: "+54 1158377643(ARG)",
    lastProject: "Pokemon Website",
    photo:
      "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
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
            className="btn btn-lg btn-outline-danger"
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
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamCards;
