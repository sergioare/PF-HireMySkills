import React from "react";

import styles from "../General/GeneralCategory.module.css";
import NavBar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import Category from "./Category";

const GeneralCategory = () => {

  return (
    <div className={styles.general}>
      <NavBar />
      <h1 className={styles.cardHeader}>Categories</h1>
      <Category styles={styles}/>
      <Footer />
    </div>
  );
};

export default GeneralCategory;
