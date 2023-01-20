import React from "react";
import "./NavBar.css";
import Menu from "../Menu/Menu";
import { Link, Outlet } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="BigContainer_NavBar">
      <div className="Container_NavBar">
        <Link to="/home">
          <div className="HMS_NavBar">HireMySkills</div>
        </Link>
        <Link to="/categories">
          <div className="Categories_NavBar">Categories</div>
        </Link>
        <Link to="/about">
          <div className="AboutUs_NavBar">About us</div>
        </Link>
        <Link to="/FAQs">
          <div className="FAQs_NavBar">FAQs</div>
        </Link>
        <Link to="/account">
          <div className="SignIn_NavBar">Account</div>
        </Link>
        {/*         <Link to="/Join">
          <div className="Join_NavBar">Join</div>
        </Link> */}
        <div className="Menu_NavBar">
          <Menu />
        </div>
        <section>
          <Outlet />
        </section>
      </div>
    </div>
  );
};

export default NavBar;
