import React, { useState, useEffect } from "react";
import styles from "./Services.module.css";

const cartFromLocalStorage = JSON.parse(
  localStorage.getItem("shopping") || "[]"
);
const Services = ({ data, addToCart }) => {
  let { id, name, price, img } = data;
  const [shoppingCart, setShoppingCart] = useState(cartFromLocalStorage);
  useEffect(() => {
    localStorage.setItem("shopping", JSON.stringify(shoppingCart));
  }, [shoppingCart]);
  return (
    <div className={styles.container}>
      <h4>{name}</h4>
      <h5>${price}</h5>
      <img className={styles.serviceImg} src={img} alt={name} />
      <button onClick={() => addToCart(id, name)}>Add to Cart</button>
    </div>
  );
};

export default Services;
