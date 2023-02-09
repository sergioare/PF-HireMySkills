import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getProfessionalById,
  clearProfessional,
  addToCart,
} from "../../../redux/actions/actions";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../Professional/Professional.module.css";
import NavBar from "../../Navbar/Navbar";
import imgDefault from "../../../assets/imgDefault.jpg";
import Services from "../../Services/Services";
import LoaderGeneral from "../../LoaderGeneral/LoaderGeneral";

import Review from "../../Review/Review";
import Stars from "../../Stars/Stars";

const Professional = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navegate = useNavigate();
  const detailProfessional = useSelector((state) => state.detail);

  console.log(detailProfessional, "detail");
  useEffect(() => {
    dispatch(clearProfessional());
    dispatch(getProfessionalById(id));
  }, [dispatch, id]);

  return (
    <div className={styles.divProfessional}>
      <NavBar />
      <div className={styles.profBtn}>
        <button onClick={() => navegate(-1)}>
          <i className="fa-solid fa-circle-chevron-left"></i>
        </button>
      </div>

      <div className={styles.divDet}>
        <div className={styles.firstContainer}>
          {detailProfessional.name ? (
            <div className={styles.containerDet}>
              <div className={styles.profImg}>
                <img
                  className={styles.img}
                  src={
                    detailProfessional.photo
                      ? detailProfessional.photo
                      : imgDefault
                  }
                  alt="Img not found"
                />
                <div className={styles.twoContainer}>
                  <h1 className={styles.detName}>{detailProfessional.name}</h1>
                  <p className={styles.detText}>
                    <b> Profile: </b>
                    <span className={styles.detSpan}>
                      {detailProfessional.description}
                    </span>
                  </p>
                  <p className={styles.detText}>
                    <b>Town: </b>
                    <span className={styles.detSpan}>
                      {detailProfessional.town}-{detailProfessional.state}-
                      {detailProfessional.country}
                    </span>
                  </p>
                  <p className={styles.detText}>
                    <p className="text d-flex" style={{ fontWeight: "bold" }}>
                      Score:
                      <Stars value={detailProfessional.rating} />{" "}
                    </p>
                  </p>

                  {/* {console.log(detailProfessional.rating, "detail")} */}
                  <p className={styles.detText}>
                    <b>Professions: </b>
                    <span className={styles.detSpan}>
                      {detailProfessional.skills.join(", ")}
                    </span>
                  </p>
                  <p className={styles.detText}>
                    <b>Portfolio: </b>
                    <span className={styles.detSpan}>
                      {detailProfessional.portfolio}
                    </span>
                  </p>
                  <h3>Services</h3>
                  <article className={styles.box}>
                    {detailProfessional.products.map((service) => (
                      <Services
                        key={service.id}
                        data={service}
                        addToCart={() => dispatch(addToCart(service.id))}
                      />
                    ))}
                  </article>
                  {/* --------Review------... */}
                  <div className={styles.divReview}>
                    <hr />
                    <Review />
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="d-flex justify-content-center align-items-center mt-5">
              <LoaderGeneral />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Professional;
