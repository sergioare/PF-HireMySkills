import React, { useEffect } from "react";
import {  useSelector } from "react-redux";
import styles from "./Home.module.css";
import Searchbar from "../searchbar/searchbar";
import NavBar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Category from "../Categories/General/Category";
import imgDefault from "../../assets/imgDefault.jpg";
import { Link } from "react-router-dom";

const Home = () => {

  const worker = useSelector((state)=>state?.worker)

  return (
    <div className={styles.wrapper}>
        <NavBar />
      <div className={styles.containerOne}>
          <div className={styles.left}>
              <div className={styles.text}>
                FIND THE PERFECT PROFESSIONAL SERVICES FOR YOU
              </div>

              <div className={styles.search}>
              <Searchbar/>
              </div>
  
          </div>

          <div className={styles.right}>
              <img
                src="https://media.istockphoto.com/id/1181830509/es/foto/urbano-feliz-mujer-de-negocios-usando-la-tableta-y-trabajando.jpg?s=612x612&w=0&k=20&c=p7EW36clLJUH6ICRXqYjic2VKMEcOfGP01SdI8nawkE="
                alt="Profesional"
              />
            
              <div className={styles.profesionalName}>Yuri Nallely</div>
              <div className={styles.stars}>⭐⭐⭐⭐⭐</div>
          </div>
      </div>

      <div className={styles.containerTwo}>
        <div className={styles.catGeneral}>
          {worker.length>0 ? worker.map((prof)=>{
            console.log(worker)
            return(
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

                      <span
                        className={styles.profRating}
                        style={
                          prof.rating < 1
                            ? { backgroundColor: "rgb(255, 77, 91)" }
                            : prof.rating < 4
                            ? { backgroundColor: "rgb(253, 158, 81)" }
                            : { backgroundColor: "rgb(4, 201, 4)" }
                        }
                      >
                        Rating: {prof.rating}
                      </span>
                      <h3 className={styles.description}>Profession:</h3>
                      <p className={styles.profDescrip}>{prof.description}</p>
                      <div className={styles.divBtn}>
                        <button className={styles.btn}>Contract!</button>
                      </div>
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

      </div>


      <Footer />
    </div>
  );
};

export default Home;