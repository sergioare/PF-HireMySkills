import React, { useEffect } from "react";
import {  useSelector } from "react-redux";
import styles from "./Home.module.css";
import Searchbar from "../searchbar/searchbar";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Category from "../Categories/General/Category";


const Home = () => {

  const worker = useSelector((state)=>state?.worker)



  return (
    <div>
  
      <NavBar />
        <div className={styles.BigContainer_Home}>
      
        <div className={styles.TextPro_Home}>
          FIND THE PERFECT PROFESSIONAL SERVICES FOR YOU
        </div>
        <div className={styles.SearchBar_Home}>
          <Searchbar/>
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
              

            <Category />

            </div>
            </div>}

      </div>

      <Footer />
    </div>
  );
};

export default Home;