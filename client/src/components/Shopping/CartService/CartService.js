import styles from "./CartServices.module.css";
const CartService = ({ data, deleteOneFromCart, deleteAllFromCart }) => {
  let { id, name, price, quantity, img } = data;
  return (
    <div className={styles.cartService}>
      <h4>{name}</h4>
      <h5>
        ${price} x {quantity}
      </h5>
      <h5>Total ${price * quantity}.00</h5>
      <img src={img} alt={name} className={styles.imgCart} />
      {/* <button className={styles.btnCart} onClick={() => deleteOneFromCart(id)}>
        Delete One
      </button> */}
      <button
        className={styles.btnCart}
        onClick={() => deleteAllFromCart(id, true)}
      >
        Delete services
      </button>
    </div>
  );
};

export default CartService;
