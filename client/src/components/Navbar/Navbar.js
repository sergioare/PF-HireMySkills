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
          <Link to="/about" className={styles.navLink}>
            <span className={styles.AboutUs_NavBar}>About us</span>
          </Link>
          <Link to="/FAQs" className={styles.navLink}>
            <span className={styles.FAQs_NavBar}>FAQs</span>
          </Link>
        </div>
        <div className={styles.right_NavBar}>
          <Link to="/account" className={styles.navLink}>
            <div className={styles.SignIn_NavBar}>Account</div>
          </Link>
          {/*         <Link to="/Join">
          <div className="Join_NavBar">Join</div>
        </Link> */}
          <div className={styles.Menu_NavBar}>
            <Menu />
          </div>
        </div>
        {/* {
          <section>
            <Outlet />
          </section>
        } */}
      </div>
    </div>
  );
};

export default NavBar;
