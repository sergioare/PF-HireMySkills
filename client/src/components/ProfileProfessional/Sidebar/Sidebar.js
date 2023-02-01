import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.divSidebar}>
      <ul>
        <li>
          <NavLink
            exact
            className="btn btn-outline-primary rounded py-2 w-100 d-inline-block px-3 text-white"
            activeClassName="active"
          >
            <i className="fa-regular fa-address-card px-2 fs-4"></i>
            Complete profile
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            className="btn btn-outline-primary rounded py-2 w-100 d-inline-block px-3 text-white"
            activeClassName="active"
          >
            <i className="fa-solid fa-list px-2 fs-4"></i>
            View posts
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            className="btn btn-outline-primary rounded py-2 w-100 d-inline-block px-3 text-white"
            activeClassName="active"
          >
            <i className="fa-solid fa-pen-to-square px-2 fs-4"></i>
            Add services
          </NavLink>
        </li>

        <li>
          <NavLink
            exact
            className="btn btn-outline-primary rounded py-2 w-100 d-inline-block px-3 text-white"
            activeClassName="active"
          >
            <i className="fa-regular fa-circle-xmark px-2 fs-4"></i>
            Remove services
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            className="btn btn-outline-primary rounded py-2 w-100 d-inline-block px-3 text-white"
            activeClassName="active"
          >
            <i className="fa-solid fa-rocket px-2 fs-4"></i>
            Increase visibility
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            className="btn btn-outline-primary rounded py-2 w-100 d-inline-block px-3 text-white"
            activeClassName="active"
          >
            <i class="fa-solid fa-user-xmark px-2 fs-4"></i>
            Deactivate
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
