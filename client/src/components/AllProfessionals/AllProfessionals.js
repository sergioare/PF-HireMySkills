import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {
  filterByProfession,
  getProfessionals,
  getSubCategory,
} from "../../redux/actions/actions";
import styles from "../AllProfessionals/AllProfessionals.module.css";
import imgDefault from "../../assets/imgDefault.jpg";

import OrderBy from "../OrderBy/OrderBy";

const AllProfessionals = () => {
  const dispatch = useDispatch();
  const allProfessionals = useSelector((state) => state.professionals);
  const profession = useSelector((state) => state.subCategory);
  const prueba = useSelector((state) => state.allProfessionals);
  console.log(prueba, "A");
  console.log(profession, "B");

  const handlerprofession = (e) => {
    console.log(e.target.value);
    dispatch(filterByProfession(e.target.value));
  };

  useEffect(() => {
    dispatch(getProfessionals());
    dispatch(getSubCategory());
  }, [dispatch]);
  // console.log(allProfessionals);

  return (
    <div className={styles.divAllProfessionals}>
      <NavBar />
      <div className={styles.profBtn}>
        <Link to="/home">
          <button>
            <i className="fa-solid fa-circle-chevron-left"></i>
          </button>
        </Link>
      </div>
      {/* <Filter /> */}
      <div>
        <p className={styles.titles}>PROFESSIONS</p>

        <select
          onChange={(e) => handlerprofession(e)}
          className={styles.select}
          defaultValue="All"
        >
          <option value="All">All</option>
          {profession &&
            profession.map((sub) => (
              <option value={sub.profession} key={sub.id}>
                {sub.profession}
              </option>
            ))}
        </select>
      </div>
      <OrderBy />

      <div className={styles.divCardsBody}>
        <h1 className="col-12 text-center text-dark fs-1 ">Professionals</h1>
        <div className={styles.containerCard}>
          {allProfessionals.length > 0 ? (
            <div className={styles.profContainer}>
              {allProfessionals.map((prof) => {
                return (
                  <div key={prof.id} className={styles.profCard}>
                    <Link
                      className={styles.link}
                      to={`/professionals/${prof.id}`}
                    >
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
                        prof.rating < 2
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
                );
              })}
            </div>
          ) : (
            <div className={styles.divLoading}>
              <img
                className={styles.loading}
                src="https://img1.picmix.com/output/stamp/normal/8/5/2/9/509258_fb107.gif"
                alt="Img not found"
                width="150px"
              />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllProfessionals;
