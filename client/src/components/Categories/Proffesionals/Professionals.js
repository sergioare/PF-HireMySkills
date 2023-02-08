import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../../Navbar/Navbar";
import { getProfessionals } from "../../../redux/actions/actions";
import styles from "./Professionals.module.css";
import ShowCard from "../../AllProfessionals/ShowCard";

function Professionals() {
  const { id } = useParams();
  const navegate = useNavigate();
  const dispatch = useDispatch();
  const allProfessionals = useSelector((state) => state.allProfessionals);

  useEffect(() => {
    dispatch(getProfessionals(id));
  }, [dispatch, id]);

  // console.log(allProfessionals);
  //console.log(id);
  let aux = allProfessionals.filter((wr) =>
    wr.professions.some((sk) => sk.id === parseInt(id))
  );
  // console.log(aux);
  return (
    <div className={styles.divProf}>
      <Navbar />
      <div className={styles.profBtn}>
        <button onClick={() => navegate(-1)}>
          <i className="fa-solid fa-circle-chevron-left"></i>
        </button>
      </div>
      <div className="containerdelascards2">
        <h1 className="text-center fs-1" style={{ color: " #1F1F1F" }}>
          Professionals
        </h1>
        <div className="container d-flex justify-content-center align items-center h-100">
          {aux.length ? (
            aux.map((prof) => {
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
