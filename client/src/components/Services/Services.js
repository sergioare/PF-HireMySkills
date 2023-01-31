import React from 'react';
import styles from './Services.module.css'
const Services = ({data, addToCart}) => {
    let {id, name, price}=data
    return (
        <div className={styles.container}>
           <h4>{name}</h4>
           <h5>${price}.00</h5> 
           <button onClick={()=>addToCart(id)}>Add to Cart</button>
        </div>
    );
};

export default Services;