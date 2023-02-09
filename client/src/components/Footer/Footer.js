import React from "react";
import { Link } from "react-router-dom";
import styles from "../Footer/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <footer className="text-white py-4 bg-secondary justify-content-start ps-3 w-100">
        <nav className="row">
          <Link to="/" className="col-12 col-md-3 text-decoration-none">
            <h1 className="fs-4">
              <b>HireMySkills</b>
            </h1>
          </Link>
          <ul className="col-12 col-md-3 list-unstyled ">
            <li className="mb-2 text-center">
              <Link to="/about" className="text-white text-decoration-none">
                <b>About Us</b>
              </Link>
            </li>
          </ul>
          <ul className="col-12 col-md-3 list-unstyled">
            <li className="mb-2 text-center">
              <Link to="/FAQs" className="text-white text-decoration-none">
                <b>FAQs</b>
              </Link>
            </li>
          </ul>
          <ul className="col-12 col-md-3 list-unstyled">
            <li className="font-weight-bold mb-2 text-center ">
              <Link
                to="/contact-us"
                className="text-white text-decoration-none"
              >
                <b>Contact Us</b>
              </Link>
            </li>
          </ul>

          <div className="row">
            <div className="col-12 col-md-6 text-white">
              All rights reserved © 2023, Working Group XI.
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-end">
              <i className="fa-brands fa-facebook px-4 fs-3"></i>
              <i className="fa-brands fa-whatsapp px-4 fs-3"></i>
              <i className="fa-brands fa-instagram px-4 fs-3"></i>
              <i className="fa-brands fa-github px-4 fs-3"></i>
              <i className="fa-brands fa-linkedin px-4 fs-3"></i>
            </div>
          </div>
        </nav>
      </footer>
    </div>

    // <div className={styles.Footer}>
    //   <h1 className={styles.fooLogo}>HireMySkills</h1>
    //   <div className={styles.fooIcon}>
    //     <i className="fa-brands fa-facebook"></i>
    //     <i className="fa-brands fa-whatsapp"></i>
    //     <i className="fa-brands fa-instagram"></i>
    //     <i className="fa-brands fa-github"></i>
    //     <i className="fa-brands fa-linkedin"></i>

    //   </div>
    //   <div className={styles.fooDerch}>
    //     All rights reserved © 2023, Working Group XI .
    //   </div>
    // </div>
  );
};

export default Footer;