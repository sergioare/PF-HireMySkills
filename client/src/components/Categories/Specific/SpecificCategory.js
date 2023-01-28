import React from "react";
import styles from "../Specific/SpecificCategory.module.css";
import { Link, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { getSubCategory } from "../../../redux/actions/actions";

const SpecificCategory = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const subCategory = useSelector((state) => state.subCategory);

  useEffect(() => {
    dispatch(getSubCategory());
  }, [dispatch, id]);

  let aux = subCategory.filter((pf) => pf.categoryId === parseInt(id));
  console.log(aux);

  return (
    <div className={styles.specific}>
      <NavBar />
      <div className={styles.cardSub}>
        <h1>Profession</h1>
      </div>
      <div className={styles.cardSubCat}>
        {aux.map((prof) => {
          return (
            <div key={prof.id} className={styles.divSpecific}>
              <Link to={`/categories/profession/professionals/${prof.id}`}>
                <h3>{prof.profession} </h3>
              </Link>
            </div>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default SpecificCategory;
