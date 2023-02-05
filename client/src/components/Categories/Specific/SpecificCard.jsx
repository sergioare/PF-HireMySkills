import React from "react";

const SpecificCard = ({ name, id }) => {
  return (
    <div
      className="card text-center bg-dark"
      style={{ width: "18rem", marginTop: "10%", marginBottom: "10%" }}
    >
      <div className="overflow">
        <img
          src="https://i0.wp.com/www.silocreativo.com/wp-content/uploads/2014/01/descripcion-categorias-wordpress.png?fit=666%2C370&quality=100&strip=all&ssl=1"
          alt="a wallpaper"
          className="card-img-top object-fit-contain"
          style={{
            height: "200px",
            margin: "0",
            padding: "0",
            borderRadius: "0",
          }}
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
