import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import UserType from "../../UserType/UserType";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { postUser } from "../../../redux/actions/actions";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  const dispatch = useDispatch();

  useEffect(() => {
    const { name, email, picture, sub } = user;

    const photo = picture;

    dispatch(postUser({ name, email, photo, sub }));
  }, [dispatch]);

  return (
    isAuthenticated && (
      <div classNameName="container" style={{ marginTop: "3%" }}>
        <div className="d-flex row align-items-center justify-content-center">
          <img
            src={user.picture}
            className="img-thumbnail object-fit-contain"
            style={{
              width: "50%",
              borderRadius: "50%",
            }}
          />
          <h3 className="text-center text-white mt-5">{user.name}</h3>
          <p className="text-center text-white mb-5">Email: {user.email}</p>
        </div>
        <div className="container">
          <div
            className="d-flex align-items-center justify-content-center"
            style={{ marginBottom: "5%" }}
          >
            {" "}
            <UserType />
          </div>
        </div>
      </div>
    )
  );
  /* return (
    isAuthenticated && (
      <div>
        <div classNameName={styles.Container_imgProfile}>
          <img
            src={user.picture}
            alt="profile img"
            style={{
              width: "250px",
              height: "400px",
              border: "solid orange 5px",
              borderRadius: "30%",
            }}
          />
          <div classNameName={styles.divPerfil}>
            <h3>{user.name}</h3>
            <h5>Email: {user.email}</h5>
            <div>
              <UserType />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  ); */
};

export default Profile;
