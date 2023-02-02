import React from "react";
import styles from "./NavBar.module.css";
import Menu from "../Menu/Menu";
import { useAuth0 } from "@auth0/auth0-react";

import { Link } from "react-router-dom";

const NavBar = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

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
          <i class="fa-solid fa-user px-1 fs-3"></i>
          {isLoading ? "Loading..." : isAuthenticated ? user.name : "Account"}
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
