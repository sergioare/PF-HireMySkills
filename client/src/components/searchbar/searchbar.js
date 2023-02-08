import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getProfesionalsByProfession } from "../../redux/actions/actions";
import { getProfessionals } from "../../redux/actions/actions";
import styles from "./searchbar.module.css";
import { useSelector } from "react-redux";
const Swal = require("sweetalert2");

function Searchbar() {
  // const dispatch = useDispatch();
  // const [professionals, setProfessionals] = useState([]);
  // const [allProfessionals, setAllProfessionals] = useState([]);
  // const [search, setSearch] = useState("");

  // useEffect(() => {
  //   dispatch(getProfessionals());
  // }, [dispatch]);

  // console.log(getProfessionals);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const worker = useSelector((state) => state?.worker);

  function handleInputChange(e) {
    e.preventDefault();
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(getProfesionalsByProfession(name));
    setName("");
  }
  const showAlert = () => {
    Swal.fire({
      title: "Please enter a profession",
      icon: "error",
    });
  };

  return (
    <>
      <div className={styles.container}>
        <input
          className={styles.input}
          autoComplete="off"
          type="text"
          placeholder={"TRY CARPENTER, DESIGNER, ELECTRICIAN"}
          id="search"
          onChange={(e) => handleInputChange(e)}
        />
        {name === "" ? (
          <button
            className={styles.but}
            type="submit"
            onClick={() => showAlert()}
          >
            SEARCH
          </button>
        ) : (
          <button
            className={styles.but}
            type="submit"
            onClick={(e) => handleSubmit(e)}
          >
            SEARCH
          </button>
        )}
      </div>
    </>
  );
}

export default Searchbar;
