import styles from './CartServices.module.css'
const CartService = ({data, deleteFromCart}) => {
    let{id, name, price, quantity}= data
    return (
        <div className={styles.cartService}>
         <h4>{name}</h4>   
         <h5>${price}.00 x {quantity}</h5>
         <h5>Total ${price*quantity}.00</h5>
         <button onClick={()=>deleteFromCart(id)}>Delete One</button>
         <br/>
         <button onClick={()=>deleteFromCart(id, true)}>Delete All</button>
        </div>
    );
};

export default CartService;