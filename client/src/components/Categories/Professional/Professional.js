import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  getProfessionalById,
  clearProfessional,
} from "../../../redux/actions/actions";
import { useParams, useNavigate } from "react-router-dom";
import styles from "../Professional/Professional.module.css";
import NavBar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import imgDefault from "../../../assets/imgDefault.jpg";

const Professional = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navegate = useNavigate();
  const detailProfessional = useSelector((state) => state.detail);

  useEffect(() => {
    dispatch(clearProfessional());
    dispatch(getProfessionalById(id));
  }, [dispatch, id]);

  return (
    <div className={styles.divProfessional}>
      <NavBar />
      <div className={styles.profBtn}>
        <Link onClick={() => navegate(-1)}>
          <button>
            <i className="fa-solid fa-circle-chevron-left"></i>
          </button>
        </Link>
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
                      {detailProfessional.town}
                    </span>
                  </p>
                  <p className={styles.detText}>
                    <b>Score: </b>
                    <span className={styles.detSpan}>
                      {detailProfessional.rating}
                    </span>
                  </p>
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
                  <div className={styles.divBtn}>
                    <button className={styles.btn}>Contract!</button>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className={styles.divLoading}>
              <img
                className={styles.loading}
                src="https://img1.picmix.com/output/stamp/normal/8/5/2/9/509258_fb107.gif"
                alt="Img not found"
                width="200px"
              />
            </div>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Professional;
