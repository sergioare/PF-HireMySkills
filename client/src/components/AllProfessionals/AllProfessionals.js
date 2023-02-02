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
  orderByName,
  orderByRating,
} from "../../redux/actions/actions";
import styles from "../AllProfessionals/AllProfessionals.module.css";
import imgDefault from "../../assets/imgDefault.jpg";

const AllProfessionals = () => {
  const dispatch = useDispatch();
  const allProfessionals = useSelector((state) => state.allProfessionals);
  const profession = useSelector((state) => state.subCategory);
  // const prueba = useSelector((state) => state.allProfessionals);
  console.log(allProfessionals, "A");
  console.log(profession, "B");

  const handlerprofession = (e) => {
    e.preventDefault();
    console.log(e.target.value);
    dispatch(filterByProfession(e.target.value));
  };

  const handlerByName = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    dispatch(orderByName(e.target.value));
  };
  const handlerByRating = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    dispatch(orderByRating(e.target.value));
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
      {/* ----Filter--------*/}
      <div className={styles.divAllFilter_order}>
        <div className={styles.allFilter}>
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
        <div>
          <p className={styles.titles}>SORT BY</p>

          <div className={styles.divName}>
            <label className={styles.subTitles}>Name </label>
            <select
              onChange={(e) => handlerByName(e)}
              className={styles.selects}
            >
              <option value="">--Select--</option>
              <option value="asc">(A - Z)</option>
              <option value="desc">(Z - A)</option>
            </select>
          </div>

          <div className={styles.divRating}>
            <label className={styles.subTitles}>Rating</label>
            <select
              onChange={(e) => handlerByRating(e)}
              className={styles.selects}
            >
              <option value="">--Select--</option>
              <option value="min">Min</option>
              <option value="max">Max</option>
            </select>
          </div>
        </div>
      </div>

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
