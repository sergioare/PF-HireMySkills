import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getSubCategory,
  filterByProfession,
} from "../../redux/actions/actions";
import styles from "../Filter/Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const profession = useSelector((state) => state.subCategory);

  useEffect(() => {
    dispatch(getSubCategory());
  }, [dispatch]);

  const handlerprofession = (e) => {
    console.log(e.target.value);
    dispatch(filterByProfession(e.target.value));
  };
  return (
    <div className={styles.divFilter}>
      <div>
        <p className={styles.titles}>PROFESSIONS</p>

        <select
          onChange={(e) => handlerprofession(e)}
          className={styles.select}
          defaultValue="All"
        >
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
