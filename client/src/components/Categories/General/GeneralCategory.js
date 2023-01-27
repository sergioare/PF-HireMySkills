import React from "react";
import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import styles from "../General/GeneralCategory.module.css";
import NavBar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
// import { getCategories } from "../../../redux/actions/actions";
import api from "../../../api.json";

const GeneralCategory = () => {
  // const dispatch = useDispatch();
  // const allCategories = useSelector((state) => state.categories);

  // useEffect(() => {
  //   dispatch(getCategories());
  // }, [dispatch]);

  return (
    <div className={styles.general}>
      <NavBar />
      <h1 className={styles.cardHeader}>Categories</h1>
      <div className={styles.card}>
        {api.map((cat) => {
          return (
            <div className={styles.cardBody}>
              <Link
                to={`/categories/profession/${cat.id}`}
                className={styles.cardLink}
              >
                <h3 className={styles.cardName}>{cat.category}</h3>
              </Link>
            </div>
          );
        })}
      </div>
      {/* <div className={styles.card}>
        {allCategories.map((cat) => {
          return (
            <Link to={"/"}>
              <h3>{cat.category}</h3>
            </Link>
          );
        })}
      </div> */}

      {/* <NavBar /> */}
      {/* <h1 className={styles.cardTitle}>Categories</h1>
      <div className={styles.card}>
        {professional.map((prof) => {
          return (
            <Link to={`/categories/${prof.id}`}>
              <div key={prof.id} className={styles.cardBody}>
                <h3 className={styles.cardName}>{prof.name} </h3>
              </div>
            </Link>
          );
        })}
      </div> */}
      <Footer />
    </div>
  );
};

export default GeneralCategory;
