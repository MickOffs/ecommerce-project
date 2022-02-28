import react from "react";
import "./Modal.css";
import FinalModal from "../Ui/backdrop.js";

function CartModal(props) {
  return (
    <FinalModal onClick={props.onClick}>
      <ul className="nav-mobile">
        <a href="">
          <li> Home </li>
        </a>
        <a href="">
          <li> Prodotti </li>
        </a>
        <a href="">
          <li> Negozio </li>
        </a>
        <a href="">
          <li> Accessori </li>
        </a>
      </ul>
      <button className="close-modal" onClick={props.onClick}>
        X
      </button>
    </FinalModal>
  );
}

export default CartModal;
