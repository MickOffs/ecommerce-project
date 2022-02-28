import react from "react";
import drpepper from "../dr pepper img/dr-pepper.png";
import drpepperzero from "../dr pepper img/dr-pepper-zero-sugar.png";
import drpeppernocaffeine from "../dr pepper img/drpepper-caffeine-free.png";
import cherryvanilla from "../dr pepper img/drpepper-cherry-vanilla.png";
import cherryzero from "../dr pepper img/drpepper-cherry-zero.png";
import cherry from "../dr pepper img/drpepper-cherry.png";
import creamzero from "../dr pepper img/drpepper-cream-zero.png";
import cream from "../dr pepper img/drpepper-cream.png";
import dietcaff from "../dr pepper img/drpepper-diet-caffeine-free.png";
import dietcherry from "../dr pepper img/drpepper-diet-cherry-vanilla.png";
import realsugar from "../dr pepper img/drpepper-real-sugar.png";
import diet from "../dr pepper img/drpepper-diet.png";

import "./Product.css";
import Card from "./ProductCard";

const Dummy = [
  {
    id: "d1",
    name: "Dr Pepper Classic ",
    price: 2.99,
    img: drpepper,
  },
  {
    id: "d2",
    name: "Dr Pepper zero ",
    price: 4.99,
    img: drpepperzero,
  },
  {
    id: "d3",
    name: "Dr Pepper Caffeine ",
    price: 4.99,
    img: drpeppernocaffeine,
  },
  {
    id: "d4",
    name: "Dr Pepper Cherry Vanilla ",
    price: 4.99,
    img: cherryvanilla,
  },
  {
    id: "d5",
    name: "Dr Pepper Cherry Zero ",
    price: 3.99,
    img: cherryzero,
  },
  {
    id: "d6",
    name: "Dr Pepper Cherry",
    price: 2.99,
    img: cherry,
  },
  {
    id: "d7",
    name: "Dr Pepper Cream Zero",
    price: 3.99,
    img: creamzero,
  },
  {
    id: "d8",
    name: "Dr Pepper Cream ",
    price: 2.99,
    img: cream,
  },
  {
    id: "d9",
    name: "Dr Pepper Diet Caffeine Free ",
    price: 1.99,
    img: dietcaff,
  },
  {
    id: "d10",
    name: "Dr Pepper Diet Cherry Vanilla",
    price: 2.99,
    img: dietcherry,
  },
  {
    id: "d11",
    name: "Dr Pepper Diet",
    price: 5.99,
    img: diet,
  },
  {
    id: "d12",
    name: "Dr Pepper Real Sugar",
    price: 6.99,
    img: realsugar,
  },
];

function Product() {
  return (
    <>
      <div className="title-container">
        <h1 className="shop-title"> SODA </h1>
      </div>
      <div className="product-section">
        {Dummy.map((item) => (
          <Card
            item={item}
            key={item.name}
            id={item.id}
            img={item.img}
            price={item.price}
          />
        ))}
      </div>
    </>
  );
}

export default Product;
