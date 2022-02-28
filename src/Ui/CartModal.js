import react from "react";
import "./cartmodal.css";
import { useEffect } from "react";

function CartContainer(props) {
  return <div className="cartcontainer"> {props.children} </div>;
}

function CartBackdrop(props) {
  return <div className="backdrop" onClick={props.onClick}></div>;
}

function CartBg(props) {
  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <div className="cartbg">
      <CartBackdrop onClick={props.onClose} />
      <CartContainer>{props.children}</CartContainer>
    </div>
  );
}

export default CartBg;
