import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../General/GeneralCategory.module.css";
import NavBar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import Category from "./Category";

const GeneralCategory = ({ name, id }) => {
  return (
    <div
      className="card text-center bg-dark"
      style={{ width: "18rem", marginTop: "10%", marginBottom: "10%" }}
    >
      <div className="overflow">
        <img
          src=""
          alt="a wallpaper"
          className="card-img-top object-fit-contain"
          style={{ height: "200px" }}
        />
      </div>
      <div className="card-body text-light">
        <h4 className="card-title">{name}</h4>
        <a
          href={`/categories/profession/${id}`}
          className="btn btn-outline-secondary rounded-0"
        >
          See SubCategories
        </a>
      </div>
    </div>
  );
};
/*  */
{
  /* <div className={styles.general}>
      <NavBar />
      <div className={styles.profBtn}>
        <button onClick={() => navegate(-1)}>
          <i className="fa-solid fa-circle-chevron-left"></i>
        </button>

        <h1 className={styles.cardHeader}>Categories</h1>
      </div>
      <Category styles={styles} />
      <Footer />
    </div> */
}
export default GeneralCategory;
