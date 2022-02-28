import react from "react";
import CartBg from "../Ui/CartModal";
import "./cart.css";
import CartProduct from "./cartItems";

function Cart(props) {
  return (
    <CartBg onClose={props.onClose}>
      <CartProduct />
    </CartBg>
  );
}

export default Cart;
