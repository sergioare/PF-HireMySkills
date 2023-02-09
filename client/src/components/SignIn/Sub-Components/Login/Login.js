import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
const Swal = require("sweetalert2");

const Login = () => {
  const { loginWithPopup, user } = useAuth0();

  const showAlert = () => {
    Swal.fire({
      title: "You have entered correctly",
      icon: "success",
    });
  };

  // const submitUser = (e) => {
  //   e.preventDefault();
  //   dispatch(postUser(input));
  //   setInput({
  //     name: user.name,
  //     email: user.email,
  //     photo: user.picture || "https://www.shutterstock.com/image-vector/man-icon-vector-600w-1040084344.jpg",
  //   });
  // };

  const logg = async () => {
    await loginWithPopup();
    showAlert();
  };

  return (
    <button onClick={() => logg()} className="btn btn-outline-dark">
      Login
    </button>
  );
};

export default Login;
