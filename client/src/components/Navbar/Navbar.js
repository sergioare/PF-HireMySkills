import React from "react";
import styles from "./NavBar.module.css";
import Menu from "../Menu/Menu";
import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const shopping = useSelector((state) => state.shoppingCart);
  const values = shopping
    .map((service) => service.quantity)
    .reduce((acc, element) => acc + element, 0);
  const total = shopping
    .map((service) => service.quantity * service.price)
    .reduce((acc, element) => acc + element, 0);
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

        <Link to="/shopping" className={styles.navLink}>
          <div
            id="cart-info"
            className="nav-info align-items-center cart-info d-flex justify-content-between mx-lg-5"
          >
            <span className="cart-info__icon mr-lg-3">
              <i className="fas fa-shopping-cart"></i>
            </span>
            <p className="mb-0 text-capitalize">
              <span id="item-count">{values} </span> Services - $
              <span className="item-total">{total}</span>
            </p>
          </div>
        </Link>

        <Link to="/account" className={styles.navLink}>
          <i className="fa-solid fa-user px-1 fs-3"></i>
          {isLoading ? "Loading..." : isAuthenticated ? user.name : "Account"}
        </Link>

        {/* <div className={styles.menu}>
          <Menu />
        </div> */}
      </div>
    </div>
  );
};

export default NavBar;
