import classes from "./CartItem.module.css";

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className={classes["cart-item"]}>
      <div className={classes.imgcontainer}>
        <img src={props.img} className={classes.img} />
      </div>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <h2 className={classes.price}>{price}</h2>
          <h2 className={classes.amount}> x {props.amount}</h2>
        </div>
      </div>
      <div className={classes.actions}>
        <button onClick={props.onRemove}>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  );
};

export default CartItem;
