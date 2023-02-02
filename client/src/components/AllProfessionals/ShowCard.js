import React from "react";
import { Link } from "react-router-dom";
import styles from "./AllProfessionals.module,css";
import imgDefault from "../../assets/imgDefault.jpg";

const ShowCard = ({ prof }) => {
  return (
    <div>
      <div key={prof.id} className={styles.profCard}>
        <Link className={styles.link} to={`/professionals/${prof.id}`}>
          <h1 className={styles.profName}>{prof.name}</h1>
          <div className={styles.profImg}>
            <img
              className={styles.img}
              src={prof.photo ? prof.photo : imgDefault}
              alt="Img not found"
            />
          </div>
        </Link>

        <span
          className={styles.profRating}
          style={
            prof.rating < 1
              ? { backgroundColor: "rgb(255, 77, 91)" }
              : prof.rating < 4
              ? { backgroundColor: "rgb(253, 158, 81)" }
              : { backgroundColor: "rgb(4, 201, 4)" }
          }
        >
          Rating: {prof.rating}
        </span>
        <h3 className={styles.description}>Profile:</h3>
        <p className={styles.profDescrip}>{prof.description}</p>
        <div className={styles.divBtn}>
          <button className={styles.btn}>Contract!</button>
        </div>
      </div>
    </div>
  );
};

export default ShowCard;
