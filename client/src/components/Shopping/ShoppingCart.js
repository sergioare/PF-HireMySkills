import styles from "./ShoppingCart.module.css";
import CartService from "./CartService/CartService";
import NavBar from "../Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import { clearCart, deleteFromCart } from "../../redux/actions/actions";
import PaymentCheckout from "../PaymentCheckout/PaymentCheckout";

// const cartFromLocalStorage =JSON.parse(localStorage.getItem('shopping') || '[]')

function ShoppingCart() {
  //  const state = useSelector(state=>state)
  const dispatch = useDispatch();
  const shopping = useSelector((state) => state.shoppingCart);
  const values = shopping
    .map((service) => service.quantity)
    .reduce((acc, element) => acc + element, 0);
  const total = shopping
    .map((service) => service.quantity * service.price)
    .reduce((acc, element) => acc + element, 0);
  console.log(total);

  // useEffect(()=>{
  //     localStorage.setItem('shopping', JSON.stringify(shopping))
  //    },[shopping])

  return (
    <div>
      <NavBar />

      <h2>Shopping Cart</h2>
      {/* <h3>Services</h3>
            <article className={styles.box}>
                {services.map(service=>
                <Services 
                  key={service.id} 
                  data={service} 
                  addToCart={()=>dispatch(addToCart(service.id))}/>)
                  }
            
            </article> */}

      <h3>Cart</h3>
      <article className={styles.box}>
        <button onClick={() => dispatch(clearCart())}> Clear Cart </button>
        {shopping.map((item, index) => (
          <CartService
            key={index}
            data={item}
            deleteOneFromCart={() => dispatch(deleteFromCart(item.id))}
            deleteAllFromCart={() => dispatch(deleteFromCart(item.id, true))}
          />
        ))}
      </article>

      <PaymentCheckout />
    </div>
  );
}

export default ShoppingCart;
