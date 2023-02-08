import React from "react";
import NavBar from "../../../Navbar/Navbar";
import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.contLoader}>
      <NavBar />
      <div className={styles.container_loader}>
        <div className={styles.loader6}></div>
      </div>
    </div>
  );
};

export default Loader;
