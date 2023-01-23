import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./Home.module.css";
import NavBar from "../Navbar/Navbar";
import GeneralCategory from "../Categories/General/GeneralCategory";
import Ordering from "../Ordering/Ordering";
import { orderCategories } from "../../redux/actions/actions";

import Footer from "../Footer/Footer";

const Home = () => {
  // let dispatch = useDispatch();

  // const [namechange, setNamechange] = useState("");
  // const [, setOrder] = useState();

  // function handlerByNameCategories(e) {
  //   dispatch(orderCategories(e.target.value));
  //   setNamechange(e.target.value);
  //   setOrder("Order" + e.target.value);
  // }

  return (
    <div>
      <NavBar />
      <Ordering
      // handlerByName={handlerByNameCategories}
      // namechange={namechange}
      />
      <div className={styles.BigContainer_Home}>
        <div className={styles.TextPro_Home}>
          FIND THE PERFECT PROFESSIONAL SERVICES FOR YOU
        </div>
        <div className={styles.SearchBar_Home}>
          <input
            type="text"
            placeholder={`TRY "CARPENTER, DESIGNER, ELECTRICIAN"`}
            className={styles.SearchInput_Home}
          />{" "}
          <button type="submit" className={styles.SearchButton_Home}>
            Search
          </button>
        </div>
        <div className={styles.Popular_Home}>POPULAR SECTION</div>
        <div>
          <img
            src="https://media.istockphoto.com/id/1181830509/es/foto/urbano-feliz-mujer-de-negocios-usando-la-tableta-y-trabajando.jpg?s=612x612&w=0&k=20&c=p7EW36clLJUH6ICRXqYjic2VKMEcOfGP01SdI8nawkE="
            alt="Profesional"
            className={styles.Photo_Home}
          />
        </div>
        <div className={styles.ProfesionalName_Home}>Professional Name</div>
        <div className={styles.Stars_Home}>⭐⭐⭐⭐⭐</div>
      </div>

      <div className={styles.divGeneral_Home}>
        <GeneralCategory />
      </div>

      <div className={styles.divFooter_Home}>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
