import React from 'react';
import styles from './ShoppingCart.module.css'
import axios from 'axios'

const ShoppingCart = () => {
    document.addEventListener('DOMContentLoaded', () => {
        apiData()
    })
 
    const apiData = async()=>{
        try {
            // const response = await axios('http://localhost:4000/professionals')
            const response = await axios('../../api.json')
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <div className={styles.container}>
            <h1>Shopping Cart</h1>
            <hr/>
            {/* <div className={styles.labels}>

                <label className={styles.serviceImage}>Image</label>
                <label className={styles.serviceDetails}>service</label>
                <label className={styles.servicePrice}>Price</label>
                <label className={styles.serviceQuantity}>Quantity</label>
                <label className={styles.serviceRemove}>Remove</label>
                <label className={styles.serviceTotal}>Total</label>
            </div>     */}
        </div>
    );
};

export default ShoppingCart;