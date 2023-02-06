import React from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../../redux/actions/actions";
import styles from "./Category.module.css";
import GeneralCategory from "./GeneralCategory";
import NavBar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import LoaderGeneral from "../../LoaderGeneral/LoaderGeneral";

const CatHome = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  return (
    <div>
      <h2 className="text-center text-white">Categories</h2>
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

export default CatHome;
