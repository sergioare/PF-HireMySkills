import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Navbar/Navbar";
import {
  getProfessionals,
  getSubCategory,
  orderByName,
} from "../../../redux/actions/actions";
import styles from "./Professionals.module.css";
import ShowCard from "../../AllProfessionals/ShowCard";

function Professionals() {
  const { id } = useParams();
  const navegate = useNavigate();
  const dispatch = useDispatch();
  const [act, setAct] = useState(false);
  const allProfessionals = useSelector((state) => state.allProfessionals);
  const subCategory = useSelector((state) => state.subCategory);

  // console.log(subCategory, "profe");
  const handlerByName = (e) => {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    if (act === true) setAct(false);
    else setAct(true);
  };

  useEffect(() => {
    dispatch(getProfessionals(id));
    dispatch(getSubCategory());
  }, [dispatch, id]);

  // console.log(allProfessionals);
  //console.log(id);

  let aux = allProfessionals.filter((wr) =>
    wr.professions.some((sk) => sk.id === parseInt(id))
  );
  console.log(aux, "aux");
  let prof = aux.filter((pf) => pf.deleted === false);
  console.log(prof, "ghj");
  return (
    <div className={styles.divProf}>
      <Navbar />
      <div className={styles.profBtn}>
        <button onClick={() => navegate(-1)}>
          <i className="fa-solid fa-circle-chevron-left"></i>
        </button>
      </div>
      {/* -----------Order name---------- */}
      <div className={styles.orderNameRating}>
        <div className={styles.divTitleOrder}>
          <p className="text-center" style={{ color: " #1F1F1F" }}>
            SORT BY
          </p>
        </div>

        <div className={styles.divNameRating}>
          <div className={styles.divName}>
            <p className="px-2" style={{ color: " #1F1F1F" }}>
              Name{" "}
            </p>
            <select
              onChange={(e) => handlerByName(e)}
              className={styles.selects}
            >
              <option value="select">--Select--</option>
              <option value="asc">(A - Z)</option>
              <option value="desc">(Z - A)</option>
            </select>
          </div>
          {/* -----------Order rating---------- */}
          <div className={styles.divRating}>
            <p className="px-2" style={{ color: " #1F1F1F" }}>
              Rating
            </p>
            <select
              onChange={(e) => handlerByName(e)}
              className={styles.selects}
            >
              <option value="select">--Select--</option>
              <option value="min">Min</option>
              <option value="max">Máx</option>
            </select>
          </div>
        </div>
      </div>

      <div className="containerdelascards2">
        <h1 className="text-center fs-1" style={{ color: " #1F1F1F" }}>
          Professionals
        </h1>
        <div className="container d-flex justify-content-center align items-center h-100">
          {prof.length ? (
            prof.map((prof) => {
              return (
                <div
                  key={prof.id}
                  className="col-md-4 d-flex justify-content-around"
                >
                  <ShowCard
                    name={prof.name}
                    photo={prof.photo}
                    id={prof.id}
                    rating={prof.rating}
                    professions={prof.skills.map((e) => e)}
                  />
                </div>
              );
            })
          ) : (
            <div className="d-flex">
              <h1 className={styles.notProf}>Not found professionals</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Professionals;
