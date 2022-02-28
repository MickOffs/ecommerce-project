import react from "react";
import logo from "../dr pepper img/dr-pepper-logo.png";
import "../Header/Header.css";
import cartIcon from "../dr pepper img/icon-cart.png";
import menu from "../dr pepper img/menu.png";
import Navigation from "./Navigation";
import CartContext from "../Context/CartContext";
import { useContext } from "react";

function Header(props) {
  const cartCtx = useContext(CartContext);

  const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <div className="row">
      <img src={menu} className="menu-icon" onClick={props.onClick} />
      <img src={logo} className="logo" alt="logo-icon" />
      <Navigation />
      <div>
        <img src={cartIcon} className="cart-icon" onClick={props.onShowCart} />
        <span>{numberOfCartItems}</span>
      </div>
    </div>
  );
}

export default Header;
