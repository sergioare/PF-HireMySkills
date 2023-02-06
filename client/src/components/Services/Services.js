import React, { useState, useEffect } from "react";
import styles from "./Services.module.css";
import { useDispatch } from "react-redux";

const cartFromLocalStorage = JSON.parse(
  localStorage.getItem("shopping") || "[]"
);
const Services = ({ data, addToCart }) => {
  // const dispatch = useDispatch()
  // const handleAddToCart = ()=>{
  //     dispatch(addToCart(data))
  // }
  let { id, name, price, img } = data;
  const [shoppingCart, setShoppingCart] = useState(cartFromLocalStorage);
  useEffect(() => {
    localStorage.setItem("shopping", JSON.stringify(shoppingCart));
  }, [shoppingCart]);
  return (
    <div className={styles.container}>
      <h4>{name}</h4>
      <h5>${price}</h5>
      <img className={styles.img} src={img} alt={name} />
      <button onClick={() => addToCart(id, name)}>Add to Cart</button>
      {/* <button  onClick={handleAddToCart}>Add to Cart</button> */}
    </div>
  );
};

export default Services;
