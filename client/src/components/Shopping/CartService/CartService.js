import styles from './CartServices.module.css'
const CartService = ({data, deleteOneFromCart, deleteAllFromCart}) => {
    let{id, name, price, quantity,img}= data
    return (
        <div className={styles.cartService}>
         <h4>{name}</h4>   
         <h5>${price} x {quantity}</h5>
         <h5>Total ${price*quantity}.00</h5>
         <img src={img} alt={name}/>
         <button onClick={()=>deleteOneFromCart(id)}>Delete One</button>
         <br/>
         <button onClick={()=>deleteAllFromCart(id, true)}>Delete All</button>
        </div>
    );
};

export default CartService;