import React from "react";
import styles from "./NavBar.module.css";
import Menu from "../Menu/Menu";
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={styles.BigContainer_NavBar}>
      <div className={styles.Container_NavBar}>
        <Link to="/">
          <div className={styles.HMS_NavBar}>HireMySkills</div>
        </Link>
        <Link to="/categories">
          <div className={styles.Categories_NavBar}>Categories</div>
        </Link>
        <Link to="/about">
          <div className={styles.AboutUs_NavBar}>About us</div>
        </Link>
        <Link to="/FAQs">
          <div className={styles.FAQs_NavBar}>FAQs</div>
        </Link>
        <Link to="/account">
          <div className={styles.SignIn_NavBar}>Account</div>
        </Link>
        <Link to="/shopping">
          <div className={styles.Shopping_NavBar}>Shopping</div>
        </Link>        
        <div className={styles.Menu_NavBar}>
          <Menu />
        </div>
        <section>
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default NavBar;
