import React from "react";
import styles from "./NavBar.module.css";
import Menu from "../Menu/Menu";

import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <div className={styles.BigContainer_NavBar}>

      <div className={styles.nabvar}>
        
          <Link to="/" className={styles.logo}>
           HireMySkills
          </Link>

          <Link to="/categories" className={styles.navLink}>
         Categories
          </Link>

          <Link to="/professionals" className={styles.navLink}>
           Professionals
          </Link>

          <Link to="/about" className={styles.navLink}>
            About us
          </Link>
        
      
          <Link to="/account" className={styles.navLink}>
            Account
          </Link>

          <Link to="/shopping" className={styles.navLink}>
          Shopping
          </Link>


          <div className={styles.menu}>
            <Menu />
          </div>
        
      </div>
    </div>
  );
};

export default NavBar;
