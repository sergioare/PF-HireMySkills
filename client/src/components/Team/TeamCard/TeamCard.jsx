import React from "react";
import styles from "./TeamCard.module.css";

const TeamCard = (props) => {
  return (
    <div style={{ height: "700px" }}>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-20 mt-5 pt-5 ">
            <div className="row z-depth-3 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
              <div className="col-sm-4 bg-info rounded-left bg-dark">
                <div
                  className="card-block text-center text-white d-flex row justify-content-center"
                  style={{ height: "600px", margin: "0" }}
                >
                  <img
                    className="rounded-circle img-fluid object-fit-sm-contain"
                    src={props.photo}
                    style={{
                      width: "130px",
                      marginTop: "10px",
                      height: "130px",
                    }}
                  ></img>
                  <h3 className="font-weight-bold m5-4 text-white">
                    {props.name}
                  </h3>
                  <p>{props.prof}</p>
                  <div className={styles.divteamabout}>
                    <p>{props.about} </p>
                  </div>
                  <i className="far fa-edit-tie fa-2x mt-5"></i>
                </div>
              </div>
              <div className="col-sm-8 bg-white rounded-right">
                <h3 className="mt-3 text-center">Information</h3>
                <hr className="badge-secondary mt-0 w-100"></hr>
                <div className="row">
                  <div className="col-sm-8">
                    <p className="font-weight-bold">Email</p>
                    <h6 className="text-muted">{props.email}</h6>
                  </div>
                  <div className="col-sm-6">
                    <p className="font-weight-bold">Phone</p>
                    <h6 className="text-muted">{props.phone}</h6>
                  </div>
                </div>
                <h4 className="mt-3">Projects</h4>
                <hr className="bg-primary" />
                <div className="row">
                  <div className="col-sm-6">
                    <p className="font-weight-bold">Recent</p>
                    <h6 className="text-muted">{props.last}</h6>
                  </div>
                </div>
                <hr className="bg-primary" />
                <ul className="list-unstyled d-flex justify-content-center mt-4">
                  <li>
                    <a href={props.github} target="_blank">
                      <i
                        className="fab fa-github px-3 h4"
                        style={{ color: "black" }}
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href={props.linkedin} target="_blank">
                      <i
                        className="fab fa-linkedin px-3 h4"
                        style={{ color: "black" }}
                      ></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
