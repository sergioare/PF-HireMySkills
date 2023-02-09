import React from "react";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../Navbar/Navbar";
import {
  filterByProfession,
  filterByProvince,
  getProfessionals,
  getSubCategory,
  orderByName,
  filterTown,
} from "../../redux/actions/actions";
import styles from "../AllProfessionals/AllProfessionals.module.css";
import ShowCard from "./ShowCard";
import LoaderGeneral from "../LoaderGeneral/LoaderGeneral";

const AllProfessionals = () => {
  const [act, setAct] = useState(false);
  const dispatch = useDispatch();
  const allProfessionals = useSelector((state) => state.allProfessionals);
  const profession = useSelector((state) => state.subCategory);
  const town = useSelector((state) => state.town);
  // const [filtros, setFiltros] = useState("");

  // console.log(allProfessionals[0].skills, "all");
  //  ----------- filter------------
  const handlerprofession = (e) => {
    e.preventDefault();
    dispatch(filterByProfession(e.target.value));
  };
  const handlerprovince = (e) => {
    e.preventDefault();
    dispatch(filterByProvince(e.target.value));
  };

  const handlerByName = (e) => {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    if (act === true) setAct(false);
    else setAct(true);
  };

  const navigate = useNavigate(-1);

  useEffect(() => {
    dispatch(filterTown());
    dispatch(getProfessionals());
    dispatch(getSubCategory());
  }, [dispatch]);

  // useEffect(() => {
  //   localStorage.setItem("filter", JSON.stringify(filtros));
  // }, [filtros]);

  // if (localStorage.getItem("filter")) {
  //   setFiltros(JSON.parse(localStorage.getItem("filter")));
  // } else {
  //   setFiltros();
  // }

  let prof = allProfessionals.filter((pf) => pf.deleted === false);

  return (
    <div className={styles.divAllProfessionals}>
      <NavBar />
      <div className={styles.profBtn}>
        <button onClick={() => navigate(-1)}>
          <i className="fa-solid fa-circle-chevron-left"></i>
        </button>

        {/* ----Filter profession--------*/}
        <div className={styles.divAllFilter_order}>
          <div className={styles.allFilterPro}>
            <div className={styles.divTitleOrder}>
              <p className="text-center" style={{ color: " #1F1F1F" }}>
                FILTER BY
              </p>
            </div>
            <p className="px-2 d-inline-block" style={{ color: " #1F1F1F" }}>
              PROFESSIONS
            </p>

            <select
              onChange={(e) => handlerprofession(e)}
              className={styles.select}
              defaultValue="All"
            >
              <option value="All">All</option>
              {profession &&
                profession.map((sub) => (
                  <option value={sub.profession} key={sub.id}>
                    {sub.profession}
                  </option>
                ))}
            </select>
          </div>
          {/* ----Filter province--------*/}
          <div className={styles.allFilterTown}>
            <div className={styles.divTitleOrder}>
              <p className="text-center" style={{ color: " #1F1F1F" }}>
                FILTER BY
              </p>
            </div>
            <p className="px-2 d-inline-block" style={{ color: " #1F1F1F" }}>
              TOWN
            </p>

            <select
              onChange={(e) => handlerprovince(e)}
              className={styles.select}
              defaultValue="All"
            >
              <option value="All">All</option>
              {town.length &&
                town.map((city) => (
                  <option value={city} key={city}>
                    {city}
                  </option>
                ))}
            </select>
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
        </div>
      </div>

      <div className="">
        <h1
          className="col-12 text-center fs-1"
          style={{ color: " #1F1F1F", height: "3vw" }}
        >
          Professionals
        </h1>
        <div className="container h-100 d-flex justify-content-center">
          {prof.length > 0 ? (
            <div className="row col-md-12 d-flex align-items-center justify-content-around">
              {prof.map((prof) => {
                return (
                  <div key={prof.id} className="col-md-4">
                    <ShowCard
                      name={prof.name}
                      photo={prof.photo}
                      id={prof.id}
                      rating={prof.rating}
                      professions={prof.skills}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="d-flex justify-content-center align-items-center mt-5">
              <LoaderGeneral />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllProfessionals;
