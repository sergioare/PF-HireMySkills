import React from "react";

const SpecificCard = ({ name, id }) => {
  return (
    <div
      className="card text-center bg-dark"
      style={{ width: "18rem", marginTop: "10%", marginBottom: "10%" }}
    >
      <div className="overflow">
        <img
          src=""
          alt="a wallpaper"
          className="card-img-top object-fit-contain"
          style={{ height: "200px" }}
        />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{name}</h4>
        <a
          href={`/categories/profession/professionals/${id}`}
          className="btn btn-outline-secondary rounded-0"
        >
          See Professionals
        </a>
      </div>
    </div>
  );
};

export default SpecificCard;
