import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { getProfessionals } from "../../../redux/actions/actions";
import styles from "./Professionals.module.css";

function Professionals() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const allProfessionals = useSelector((state) => state.allProfessionals);

  useEffect(() => {
    dispatch(getProfessionals());
  }, [dispatch, id]);

  // console.log(allProfessionals[0]);

  let aux = allProfessionals.filter(
    (wr) => wr.id === wr.professions.profession
  );
  console.log(aux);
  return (
    <div className={styles.cards}>
      <Navbar />
      <Link to="/home">
        <button className={styles.profBtn}>Back to Home</button>
      </Link>
      {aux.map((wr) => {
        return (
          <div key={wr.id} className={styles.cardsGeneral}>
            <Link
              to={`/categories/profession/professionals/professional/${wr.id}`}
            >
              <h1 className={styles.profName}>{wr.name}</h1>
              <div className={styles.img}>{wr.photo}</div>
            </Link>

            <h3>{wr.rating}</h3>
            <h2 className={styles.description}>Descrption</h2>
            <p>{wr.description}</p>
          </div>
        );
      })}
      <Footer />
    </div>
  );
}

export default Professionals;
