import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import NavBar from "../Navbar/Navbar";
import { getCategories } from "../../redux/actions/actions";
import Footer from "../Footer/Footer";

const Home = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div>
      <NavBar />

      <div className={styles.BigContainer_Home}>
        <div className={styles.TextPro_Home}>
          FIND THE PERFECT PROFESSIONAL SERVICES FOR YOU
        </div>
        <div className={styles.SearchBar_Home}>
          <input
            type="text"
            placeholder={`TRY "CARPENTER, DESIGNER, ELECTRICIAN"`}
            className={styles.SearchInput_Home}
          />{" "}
          <button type="submit" className={styles.SearchButton_Home}>
            Search
          </button>
        </div>
        <div className={styles.Popular_Home}>POPULAR SECTION</div>
        <div>
          <img
            src="https://media.istockphoto.com/id/1181830509/es/foto/urbano-feliz-mujer-de-negocios-usando-la-tableta-y-trabajando.jpg?s=612x612&w=0&k=20&c=p7EW36clLJUH6ICRXqYjic2VKMEcOfGP01SdI8nawkE="
            alt="Profesional"
            className={styles.Photo_Home}
          />
        </div>
        <div className={styles.ProfesionalName_Home}>Professional Name</div>
        <div className={styles.Stars_Home}>⭐⭐⭐⭐⭐</div>
      </div>

      <div className={styles.catGeneral}>
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
      </div>

      <Footer />
    </div>
  );
};

export default Home;
