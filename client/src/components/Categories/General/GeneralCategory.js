import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "../General/GeneralCategory.module.css";
import NavBar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { getCategories } from "../../../redux/actions/actions";

const GeneralCategory = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div className={styles.general}>
      <NavBar />
      <h1 className={styles.cardHeader}>Categories</h1>
      <div className={styles.card}>
        {categories.map((cat) => {
          return (
            <div className={styles.cardBody}>
              <Link
                to={`/categories/profession/${cat.id}`}
                className={styles.cardLink}
              >
                <h3 className={styles.cardName}>{cat.typecategory}</h3>
              </Link>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default GeneralCategory;
