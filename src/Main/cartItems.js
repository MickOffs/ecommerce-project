import react from "react";
import { useContext } from "react";
import CartContext from "../Context/CartContext";
import CartItem from "./CartItem";
import "./cartitems.css";

function CartProduct() {
  const cartCtx = useContext(CartContext);

  const totalAmount = `${cartCtx.totalAmount.toFixed(2)} € `;

  const cartItemRemoveHandler = (id) => {};
  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul>
      {cartCtx.items.map((item) => (
        <CartItem
          img={item.img}
          key={item.id}
          id={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onRemove={cartItemRemoveHandler.bind(null, item.id)}
          onAdd={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  return (
    <>
      <div className="cart-item-container">
        <div>{cartItems}</div>
      </div>
      <div>
        <button className="checkout-btn"> CheckOut - {totalAmount} </button>
      </div>
    </>
  );
}

export default CartProduct;
