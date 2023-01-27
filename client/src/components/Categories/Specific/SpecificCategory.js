import React from "react";
import styles from "../Specific/SpecificCategory.module.css";
import { Link, useParams } from "react-router-dom";
import Footer from "../../Footer/Footer";
import NavBar from "../../Navbar/Navbar";
import api from "../../../api.json";

const SpecificCategory = () => {
  const { id } = useParams();
  // console.log(id);

  let aux = api.filter((pf) => pf.id === parseInt(id));
  console.log(aux);

  return (
    <div className={styles.specific}>
      <NavBar />
      <div className={styles.cardSub}>
        <h1>Profession</h1>
      </div>
      <div className={styles.cardSubCat}>
        {aux[0].subCategory.map((prof) => {
          return (
            <div key={prof.id} className={styles.divSpecific}>
              <Link to={`/professional/${prof.id}`}>
                <h3>{prof.name} </h3>
              </Link>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default SpecificCategory;
