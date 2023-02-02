import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../General/GeneralCategory.module.css";
import NavBar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import Category from "./Category";

const GeneralCategory = () => {
  const navegate = useNavigate();

  return (
    /*  */
    <div className={styles.general}>
      <NavBar />
      <div className={styles.profBtn}>
        <button onClick={() => navegate(-1)}>
          <i className="fa-solid fa-circle-chevron-left"></i>
        </button>
        <h1 className={styles.cardHeader}>Categories</h1>
      </div>
      <Category styles={styles} />
      <Footer />
    </div>
  );
};

export default GeneralCategory;
