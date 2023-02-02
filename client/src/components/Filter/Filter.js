import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubCategory } from "../../redux/actions/actions";
import styles from "../Filter/Filter.module.css";

const Filter = ({ professionchange, handlerprofession }) => {
  const dispatch = useDispatch();
  const profession = useSelector((state) => state.subCategory);

  useEffect(() => {
    dispatch(getSubCategory());
  }, [dispatch]);

  return (
    <div className={styles.divFilter}>
      <div>
        <p className={styles.titles}>PROFESSIONS</p>

        <select
          value={professionchange}
          onChange={(e) => handlerprofession(e)}
          className={styles.select}
        >
          <option value="">--Select--</option>
          <option value="All">All</option>
          {profession &&
            profession.map((sub) => (
              <option value={sub.profession} key={sub.id}>
                {sub.profession}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
