import React from "react";
import styles from "./NavBar.module.css";
import Menu from "../Menu/Menu";
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={styles.BigContainer_NavBar}>
      <div className={styles.min_container}>
        <div className={styles.left_NavBar}>
          <Link to="/" className={styles.navLink}>
            <span className={styles.HMS_NavBar}>HireMySkills</span>
          </Link>
          <Link to="/categories" className={styles.navLink}>
            <span className={styles.Categories_NavBar}>Categories</span>
          </Link>
          <Link to="/professionals" className={styles.navLink}>
            <span className={styles.Professionals_NavBar}>Professionals</span>
          </Link>
          <Link to="/about" className={styles.navLink}>
            <span className={styles.AboutUs_NavBar}>About us</span>
          </Link>
        </div>
        <div className={styles.right_NavBar}>
          <Link to="/account" className={styles.navLink}>
            <div className={styles.SignIn_NavBar}>Account</div>
          </Link>
          <Link to="/shopping">
            <div className={styles.Shopping_NavBar}>Shopping</div>
          </Link>

          <div className={styles.Menu_NavBar}>
            <Menu />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
