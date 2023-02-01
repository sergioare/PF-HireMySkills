import React from "react";
import styles from "./OrderBy.module.css";

const OrderBy = (handlerByName, namechange, handlerByRating, ratingchange) => {
  return (
    <div>
      <p className={styles.titles}>SORT BY</p>

      <div className={styles.divName}>
        <label className={styles.subTitles}>Name </label>
        <select
          value={namechange}
          onChange={(e) => handlerByName(e)}
          className={styles.selects}
        >
          {/* <option value="">--Select--</option> */}
          <option value="asc">(A - Z)</option>
          <option value="desc">(Z - A)</option>
        </select>
      </div>

      <div className={styles.divRating}>
        <label className={styles.subTitles}>Rating</label>
        <select
          value={ratingchange}
          onChange={(e) => handlerByRating(e)}
          className={styles.selects}
        >
          <option value="">--Select--</option>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
    </div>
  );
};

export default OrderBy;
