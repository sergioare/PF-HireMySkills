import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postUser } from "../../../../redux/actions/actions";
import { useAuth0 } from "@auth0/auth0-react";
const Swal = require("sweetalert2");

const Login = () => {
  const { loginWithPopup, user } = useAuth0();

  const dispatch = useDispatch();

  const [input, setInput] = useState({
    name: "",
    photo: "",
    email: "",
  });

  const showAlert = () => {
    Swal.fire({
      title: "You have entered correctly",
      icon: "success",
    });
  };

  const submitUser = (e) => {
    e.preventDefault(input);
    dispatch(postUser(input));
    setInput({
      name: user.name,
      email: user.email,
      photo: user.picture,
    });
  };

  const logg = async () => {
    await loginWithPopup();
    showAlert();
    submitUser();
  };

  return <button onClick={() => logg()}>Login</button>;
};

export default Login;
