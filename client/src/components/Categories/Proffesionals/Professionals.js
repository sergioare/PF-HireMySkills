import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { getProfessionals } from "../../../redux/actions/actions";
import styles from "./Professionals.module.css";
import imgDefault from "../../../assets/imgDefault.jpg";
import Stars from "../../Stars/Stars";

function Professionals() {
  const { id } = useParams();
  const navegate = useNavigate();
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
        <button onClick={() => navegate(-1)}>
          <i className="fa-solid fa-circle-chevron-left"></i>
        </button>
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
                      src={wr.photo ? wr.photo : imgDefault}
                      alt="Img not found"
                    />
                  </div>
                </Link>

                <span className={styles.profRating}>Rating:</span>
                <Stars value={wr.rating} />
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
