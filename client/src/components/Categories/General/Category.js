import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../redux/actions/actions";
import styles from "./Category.module.css";
import GeneralCategory from "./GeneralCategory";
import NavBar from "../../Navbar/Navbar";
import LoaderGeneral from "../../LoaderGeneral/LoaderGeneral";

const Category = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const navigate = useNavigate();

  return (
    <div style={{ minHeight: "100vh" }}>
      <NavBar />
      <div className={styles.profBtn}>
        <button onClick={() => navigate(-1)}>
          <i className="fa-solid fa-circle-chevron-left"></i>
        </button>
      </div>
      <h2 className="text-center" style={{ margin: "1%", color: " #1F1F1F" }}>
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
    </div>
  );
};

export default Category;
