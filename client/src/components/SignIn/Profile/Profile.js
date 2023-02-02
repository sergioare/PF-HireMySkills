import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styles from "./Profile.module.css";
import { Link } from "react-router-dom";

const Profile = () => {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <div className={styles.Container_imgProfile}>
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
        <div className={styles.divPerfil}>
          <h3>{user.name}</h3>
          <h5>Email: {user.email}</h5>
          <Link to="/form">
            <h6>
              Right now you are a client, if you want to offer a service please
              click here
            </h6>
          </Link>
        </div>
      </div>
    )
  );
};

export default Profile;
