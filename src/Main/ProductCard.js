import react from "react";
import "./ProductCard.css";
import Button from "../Ui/ButtonForm";
import { useContext } from "react";
import CartContext from "../Context/CartContext";

function Card({ item }) {
  const cartCtx = useContext(CartContext);

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: item.id,
      name: item.name,
      amount: amount,
      price: item.price,
      img: item.img,
    });
  };

  return (
    <>
      <div className="cards">
        <img src={item.img} className="product-img" />
        <h1 className="product-name"> {item.name} </h1>
        <h2 className="product-price">{`${item.price} €`}</h2>
        <Button onAddToCart={addToCartHandler} />
      </div>
    </>
  );
}

export default Card;
