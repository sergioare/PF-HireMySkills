import React from "react";
import imgDefault from "../../assets/imgDefault.jpg";
import Stars from "../Stars/Stars";

const ShowCard = ({ name, rating, id, photo, professions }) => {
  return (
    <div
      className="card text-center bg-dark"
      style={{ width: "20rem", marginTop: "10%", marginBottom: "10%" }}
    >
      <div className="overflow">
        <img
          src={photo ? photo : imgDefault}
          alt="professional photo"
          className="card-img-top object-fit-contain"
          style={{
            height: "300px",
            padding: "0",
            margin: "0",
            borderRadius: "0",
          }}
        />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{name}</h4>
        <p className="card-text text-secondary text-white">
          Professions: {professions}
        </p>
        <p className="card-text text-secondary d-flex justify-content-center">
          Rating:
          <Stars value={rating} className="" />
        </p>

        <a
          href={`/professionals/${id}`}
          className="btn btn-outline-secondary rounded-0"
        >
          Professional Profile
        </a>
      </div>
    </div>
  );
};

export default ShowCard;
