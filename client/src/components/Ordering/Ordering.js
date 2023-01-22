import React from "react";
import styles from "../Ordering/Ordering.module.css";

export default function Ordering({ handlerByNameCategories, namechange }) {
  return (
    <div className={styles.order}>
      <div className={styles.divName}>
        <label className={styles.subTitles}>SORT </label>
        <select
          value={namechange}
          onChange={(e) => handlerByNameCategories(e)}
          className={styles.selects}
        >
          <option value="">--Categories--</option>
          <option value="asc">(A - Z)</option>
          <option value="desc">(Z - A)</option>
        </select>
      </div>
    </div>
  );
}
