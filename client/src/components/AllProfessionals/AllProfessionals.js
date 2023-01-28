import React from "react";
import styles from "../AllProfessionals/AllProfessionals.module.css";

const AllProfessionals = () => {
  return (
    <div className={styles.divAllProfessionals}>
      <h1>
        AllProfessionals
        <br />
        aqui se mostraria todos los profesionales y se le aplicaria filtro por
        categorias o subcategorias y se puede ordenar por nombre
        <br />
        y en el navbar poner una opcion para profesionales
        <br />
        con un boton de ver detalle - contratar
      </h1>
    </div>
  );
};

export default AllProfessionals;
