import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCategories, getProfessionals } from "../../redux/actions/actions";
import GeneralCategory from "../Categories/General/GeneralCategory";
import styles from "./Home.module.css";
import Searchbar from "../searchbar/searchbar";
import NavBar from "../Navbar/Navbar";
// import GeneralCategory from "../Categories/General/GeneralCategory";
// import Ordering from "../Ordering/Ordering";
//import { orderCategories } from "../../redux/actions/actions";
import Footer from "../Footer/Footer";
import api from "../../api.json";

const Home = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state)=>state?.categories)
  const worker = useSelector((state)=>state?.worker)

  useEffect(()=>{
    dispatch(getCategories())
    dispatch(getProfessionals())
  },[dispatch])

  console.log(worker)


  return (
    <div>
      {/* <Ordering
      handlerByName={handlerByNameCategories}
      namechange={namechange}
      /> */}
      <NavBar />
      {/* <Ordering
      handlerByName={handlerByNameCategories}
      namechange={namechange}
      /> */}
      <div className={styles.BigContainer_Home}>
        {/* <h1>
          aplicar css a este compomente y en la seccion popular poner una slice
          de profesionales con el mayor rating
        </h1> */}
        <div className={styles.TextPro_Home}>
          FIND THE PERFECT PROFESSIONAL SERVICES FOR YOU
        </div>
        <div className={styles.SearchBar_Home}>
          <Searchbar/>
          {/* <input
            type="text"
            placeholder={`TRY "CARPENTER, DESIGNER, ELECTRICIAN"`}
            className={styles.SearchInput_Home}
          />{" "}
          <button type="submit" className={styles.SearchButton_Home}>
            Search
          </button> */}
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

      <div className={styles.catGeneral}>
        {worker.length>0 ? worker.map((prof)=>{
          return(
            <div key={prof.id} className={styles.profCard}>
              <h1 className={styles.profName}>{prof.name}</h1>
            </div>
          )
        }):
            
            <div>
            <h1 className={styles.cardHeader}>Categories</h1>
            <div className={styles.card}>
              

            <GeneralCategory />

            </div>
            </div>}
        
        
        
        
        
      </div>

      <div className={styles.divGeneral_Home}>
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default Home;
