import react from "react";
import Header from "./Header/Header";
import CartModal from "./Header/Modal";
import { useState } from "react";
import HeroSection from "./Main/HeroSection";
import Product from "./Main/Product";
import Cart from "./Main/Cart";
import CartProvider from "./Context/CartProvider";

function App() {
  const [show, setShow] = useState(false);
  const [cart, setCart] = useState(false);

  const ShowCart = () => {
    setCart(!cart);
  };

  const CloseCart = () => {
    setCart(false);
  };

  const ShowMenu = () => {
    setShow(!show);
  };

  const CloseMenu = () => {
    setShow(false);
  };

  return (
    <CartProvider>
      <Header onClick={ShowMenu} onShowCart={ShowCart} />
      {show && <CartModal onClick={CloseMenu} />}
      <HeroSection />
      <Product />
      {cart && <Cart onClose={CloseCart} />}
    </CartProvider>
  );
}

export default App;
