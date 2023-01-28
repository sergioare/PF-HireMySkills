import React from "react";
import Professionals from "../Proffesionals/Professionals";
import styles from "../Professional/Professional.module.css";

const Professional = () => {
  return (
    <div className={styles.divProfessional}>
      <h1>
        Professional detail
        <br></br> con un boton de diga contratar servicios
      </h1>
      <div>
        {Professionals.id(
          <div className={styles.divProfBody}>
            <h1>{Professionals.worker}</h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default Professional;
