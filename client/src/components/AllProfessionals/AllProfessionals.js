import React from "react";
import { Link } from "react-router-dom";
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
  filterByState,
  filterByCountry,
} from "../../redux/actions/actions";
import styles from "../AllProfessionals/AllProfessionals.module.css";
import imgDefault from "../../assets/imgDefault.jpg";
import Stars from "../Stars/Stars";

const AllProfessionals = () => {
  const [act, setAct] = useState(false);
  const dispatch = useDispatch();
  const allProfessionals = useSelector((state) => state.allProfessionals);
  const profession = useSelector((state) => state.subCategory);
  const town = useSelector((state) => state.town);
  const stat = useSelector((state) => state.allProfessionals);
  const country = useSelector((state) => state.allProfessionals);

  //  ----------- filter------------
  const handlerprofession = (e) => {
    e.preventDefault();
    dispatch(filterByProfession(e.target.value));
  };
  const handlerprovince = (e) => {
    e.preventDefault();
    dispatch(filterByProvince(e.target.value));
  };
  const handlerstate = (e) => {
    e.preventDefault();
    dispatch(filterByState(e.target.value));
  };
  const handlercountry = (e) => {
    e.preventDefault();
    dispatch(filterByCountry(e.target.value));
  };

  const handlerByName = (e) => {
    e.preventDefault();
    dispatch(orderByName(e.target.value));
    if (act === true) setAct(false);
    else setAct(true);
  };

  useEffect(() => {
    dispatch(filterTown());
    dispatch(getProfessionals());
    dispatch(getSubCategory());
  }, [dispatch]);

  return (
    <div className={styles.divAllProfessionals}>
      <NavBar />
      <div className={styles.profBtn}>
        <Link to="/home">
          <button>
            <i className="fa-solid fa-circle-chevron-left"></i>
          </button>
        </Link>
        {/* ----Filter profession--------*/}
        <div className={styles.divAllFilter_order}>
          <div className={styles.allFilterPro}>
            <p className="px-2 d-inline-block">PROFESSIONS</p>

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
            <p className="px-2 d-inline-block">TOWN</p>

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
          {/* ----Filter state--------*/}
          <div className={styles.allFilterState}>
            <p className="px-2 d-inline-block">STATE</p>

            <select
              onChange={(e) => handlerstate(e)}
              className={styles.select}
              defaultValue="All"
            >
              <option value="All">All</option>
              {stat.length &&
                stat.map((stat) => (
                  <option value={stat} key={stat}>
                    {stat.state}
                  </option>
                ))}
            </select>
          </div>
          {/* ----Filter state--------*/}
          <div className={styles.allFilterState}>
            <p className="px-2 d-inline-block">COUNTRY</p>

            <select
              onChange={(e) => handlercountry(e)}
              className={styles.select}
              defaultValue="All"
            >
              <option value="All">All</option>
              {country.length &&
                country.map((count) => (
                  <option value={count} key={count}>
                    {count.country}
                  </option>
                ))}
            </select>
          </div>
          {/* -----------Order name---------- */}

          <div className={styles.orderNameRating}>
            <div className={styles.divTitleOrder}>
              <p className="text-center">SORT BY</p>
            </div>

            <div className={styles.divNameRating}>
              <div className={styles.divName}>
                <p className="px-2">Name </p>
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
                <p className="px-2">Rating</p>
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

      <div className={styles.divCardsBody}>
        <h1 className="col-12 text-center text-dark fs-1 ">Professionals</h1>
        <div className={styles.containerCard}>
          {allProfessionals.length > 0 ? (
            <div className={styles.profContainer}>
              {allProfessionals.map((prof) => {
                return (
                  <div key={prof.id} className={styles.profCard}>
                    <Link
                      className={styles.link}
                      to={`/professionals/${prof.id}`}
                    >
                      <h1 className={styles.profName}>{prof.name}</h1>
                      <div className={styles.profImg}>
                        <img
                          className={styles.img}
                          src={prof.photo ? prof.photo : imgDefault}
                          alt="Img not found"
                        />
                      </div>
                    </Link>
                    <span className={styles.profRating}>Rating:</span>
                    <Stars value={prof.rating} />
                    <h3 className={styles.description}>Profile:</h3>
                    <p className={styles.profDescrip}>{prof.description}</p>
                    <div className={styles.divBtn}>
                      <button className={styles.btn}>Contract!</button>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <h1 className={styles.notProf}>Not found professionals</h1>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllProfessionals;
