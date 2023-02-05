import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
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
  const detailProfessional = useSelector((state) => state.detail);
  // const prueba = useSelector((state) => state.allProfessionals);
  // console.log(town, "A");
  // console.log(profession, "B");

  //  ----------- filter------------
  const handlerprofession = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
    dispatch(filterByProfession(e.target.value));
  };
  const handlerprovince = (e) => {
    e.preventDefault();
    // console.log(e.target.value, "W");
    dispatch(filterByProvince(e.target.value));
  };

  const handlerByName = (e) => {
    e.preventDefault();
    // console.log(e.target.value);
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
  // console.log(allProfessionals);
  // let aux = []
  // for (let i = 0; i < allProfessionals.length; i++) {
  //  if()

  // }

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
              <p className="text-center text-white">SORT BY</p>
            </div>
            <p className="px-2 d-inline-block text-white">PROFESSIONS</p>

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
              <p className="text-center text-white">SORT BY</p>
            </div>
            <p className="px-2 d-inline-block text-white">TOWN</p>

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
              <p className="text-center text-white">SORT BY</p>
            </div>

            <div className={styles.divNameRating}>
              <div className={styles.divName}>
                <p className="px-2 text-white">Name </p>
                <select
                  onChange={(e) => handlerByName(e)}
                  className={styles.selects}
                >
                  <option value="">--Select--</option>
                  <option value="asc">(A - Z)</option>
                  <option value="desc">(Z - A)</option>
                </select>
              </div>
              {/* -----------Order rating---------- */}
              <div className={styles.divRating}>
                <p className="px-2 text-white">Rating</p>
                <select
                  onChange={(e) => handlerByName(e)}
                  className={styles.selects}
                >
                  <option value="">--Select--</option>
                  <option value="min">Min</option>
                  <option value="max">Máx</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="divconteinerdelascards ">
        <h1 className="col-12 text-center text-light fs-1 ">Professionals</h1>
        <div className="container d-flex justify-content-center align items-center h-100">
          {allProfessionals.length > 0 ? (
            <div className="row">
              {allProfessionals.map((prof) => {
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
                      professions={prof.skills.join(", ")}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <div>
              <LoaderGeneral />
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllProfessionals;
