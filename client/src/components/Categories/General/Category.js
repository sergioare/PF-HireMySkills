import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../redux/actions/actions";
import styles from "./Category.module.css";
import GeneralCategory from "./GeneralCategory";
import NavBar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import LoaderGeneral from "../../LoaderGeneral/LoaderGeneral";

const Category = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const navigate = useNavigate();

  return (
    <div>
      <NavBar />
      <div className={styles.profBtn}>
        <button onClick={() => navigate(-1)}>
          <i className="fa-solid fa-circle-chevron-left"></i>
        </button>
      </div>
      <h2 className="text-center text-white" style={{ margin: "4%" }}>
        Categories
      </h2>
      <div className="container  h-100">
        {categories.length > 0 ? (
          <div className="row">
            {categories.map((cat) => (
              <div
                className="col-md-4 d-flex justify-content-evenly"
                key={cat.id}
              >
                <GeneralCategory name={cat.typecategory} id={cat.id} />
              </div>
            ))}
          </div>
        ) : (
          <div className="d-flex justify-content-center align-items-center">
            <LoaderGeneral />
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};
{
  /* <div className={styles.divCategory}>
      {categories.length > 0 ? (
        <div className={styles.card}>
          {categories.map((cat) => {
            return (
              <div className={styles.cardBody} key={cat.id}>
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
      ) : (
        <div className={styles.divLoading}>
          <img
            className={styles.loading}
            src="https://img1.picmix.com/output/stamp/normal/8/5/2/9/509258_fb107.gif"
            alt="Img not found"
            width="150px"
          />
        </div>
      )}
    </div> */
}

export default Category;
