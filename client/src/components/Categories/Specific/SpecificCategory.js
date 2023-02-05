import React from "react";
import styles from "../Specific/SpecificCategory.module.css";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../Navbar/Navbar";
import Footer from "../../Footer/Footer";
import { getSubCategory } from "../../../redux/actions/actions";
import LoaderGeneral from "../../LoaderGeneral/LoaderGeneral";
import SpecificCard from "./SpecificCard";

const SpecificCategory = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navegate = useNavigate();
  const subCategory = useSelector((state) => state.subCategory);

  useEffect(() => {
    dispatch(getSubCategory());
  }, [dispatch, id]);

  let aux = subCategory.filter((pf) => pf.categoryId === parseInt(id));
  console.log(aux);

  return (
    <div>
      <NavBar />
      <div className={styles.profBtn}>
        <button onClick={() => navegate(-1)}>
          <i className="fa-solid fa-circle-chevron-left"></i>
        </button>
      </div>
      <h2 className="text-center text-white" style={{ margin: "4%" }}>
        Sub-Categories
      </h2>
      <div className="container  h-100">
        {aux.length > 0 ? (
          <div className="row">
            {aux.map((cat) => (
              <div
                className="col-md-4 d-flex justify-content-evenly"
                key={cat.id}
              >
                <SpecificCard name={cat.profession} id={cat.id} />
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
  {
    /* <div className={styles.specific}>
      <NavBar />
      <div className={styles.profBtn}>
        <button onClick={() => navegate(-1)}>
          <i className="fa-solid fa-circle-chevron-left"></i>
        </button>

        <div className={styles.cardSub}>
          <h1>Professions</h1>
        </div>
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
    </div> */
  }
};

export default SpecificCategory;
