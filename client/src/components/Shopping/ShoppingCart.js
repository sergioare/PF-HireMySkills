// import React from 'react';
import styles from './ShoppingCart.module.css'
import axios from 'axios'

// const ShoppingCart = () => {
//     document.addEventListener('DOMContentLoaded', () => {
//         apiData()
//     })
 
//     const apiData = async()=>{
//         try {
//             // const response = await axios('http://localhost:4000/professionals')
//             const response = await axios('../../api.json')
//             const data = await response.json()
//             console.log(data)
//         } catch (error) {
//             console.log(error)
//         }
//     }
    
//     return (
//         <div className={styles.container}>
//             <h1>Shopping Cart</h1>
//             <hr/>
//             {/* <div className={styles.labels}>

//                 <label className={styles.serviceImage}>Image</label>
//                 <label className={styles.serviceDetails}>service</label>
//                 <label className={styles.servicePrice}>Price</label>
//                 <label className={styles.serviceQuantity}>Quantity</label>
//                 <label className={styles.serviceRemove}>Remove</label>
//                 <label className={styles.serviceTotal}>Total</label>
//             </div>     */}
//         </div>
//     );
// };

// export default ShoppingCart;

import React, { useReducer, useState } from 'react';
import {rootReducer, initialState} from '../../redux/reducer/index';
import Services from '../Services/Services';
import CartService from './CartService/CartService';
import { ADD_TO_CART, CLEAR_CART, REMOVE_ALL_FROM_CART,REMOVE_ONE_FROM_CART } from '../../utils';

function ShoppingCart() {
//   const [items, setItems] = useState([]);

//   function addItem(item) {
//     setItems([...items, item]);
//   }

//   function removeItem(item) {
//     setItems(items.filter(i => i !== item));
//   }
  const[state, dispatch]=useReducer(rootReducer, initialState);
  const {services, shoppingCart}= state;
  
  const addToCart=(id)=>{
    dispatch({type:ADD_TO_CART, payload:id})
  }
  const deleteFromCart=(id,all=false)=>{
    if(all){
        dispatch({type:REMOVE_ALL_FROM_CART, payload:id})
    }else{
        dispatch({type:REMOVE_ONE_FROM_CART, payload:id})
        
    }
  }

  const clearCart=()=>{
    dispatch({type:CLEAR_CART})
  }
  return (
    <div>
      <h2>Shopping Cart</h2>
        <h3>Services</h3>
            <article className={styles.box}>
                {services.map(service=>
                <Services key={service.id} data={service} addToCart={addToCart}/>)}
            </article>
        
        <h3>Cart</h3>
        <article className={styles.box}>
            <button onClick={clearCart}>Clear Cart</button>
            {
                shoppingCart.map((item, index)=> 
                <CartService key={index} data={item} deleteFromCart={deleteFromCart}/>)
            }
        </article>


      {/* <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addItem('New Item')}>Add Item</button> */}
    </div>
  );
}

export default ShoppingCart;