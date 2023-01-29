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
    dispatch(getProfessionals(id));
  }, [dispatch, id]);

  // console.log(allProfessionals);
  //console.log(id);
  let aux = allProfessionals.filter((wr) =>
    wr.professions.some((sk) => sk.id === parseInt(id))
  );
  // console.log(aux);
  return (
    <div className={styles.divProf}>
      <Navbar />
      <div className={styles.profBtn}>
        <Link to="/categories">
          <button>
            <i className="fa-solid fa-circle-chevron-left"></i>
          </button>
        </Link>
      </div>
      <div className={styles.divCards}>
        {aux.length ? (
          aux.map((wr) => {
            return (
              <div key={wr.id} className={styles.profCard}>
                <Link className={styles.link} to={`/professionals/${wr.id}`}>
                  <h1 className={styles.profName}>{wr.name}</h1>
                  <div className={styles.profImg}>
                    <img
                      className={styles.img}
                      src={wr.photo ? wr.photo : "imgDefault"}
                      alt="Img not found"
                    />
                  </div>
                </Link>

                <span
                  className={styles.profRating}
                  style={
                    wr.rating < 1
                      ? { backgroundColor: "rgb(255, 77, 91)" }
                      : wr.rating < 4
                      ? { backgroundColor: "rgb(253, 158, 81)" }
                      : { backgroundColor: "rgb(4, 201, 4)" }
                  }
                >
                  Rating: {wr.rating}
                </span>
                <h3 className={styles.description}>Profile:</h3>
                <p className={styles.profDescrip}>{wr.description}</p>
                <div className={styles.divBtn}>
                  <button className={styles.btn}>Contract!</button>
                </div>
              </div>
            );
          })
        ) : (
          <h1 className={styles.notProf}>Not found professionals</h1>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Professionals;
