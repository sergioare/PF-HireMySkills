// import React from 'react';
// import styles from './ShoppingCart.module.css'
// import axios from 'axios'

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

import React, { useState } from 'react';

function ShoppingCart() {
  const [items, setItems] = useState([]);

  function addItem(item) {
    setItems([...items, item]);
  }

  function removeItem(item) {
    setItems(items.filter(i => i !== item));
  }

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => removeItem(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <button onClick={() => addItem('New Item')}>Add Item</button>
    </div>
  );
}

export default ShoppingCart;