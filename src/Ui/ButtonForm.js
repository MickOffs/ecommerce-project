import react from "react";
import "./buttonform.css";
import { useState, useRef } from "react";

function Button(props) {
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (enteredAmount.trim === 0 || enteredAmount < 1 || enteredAmount > 5) {
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  const [counter, setCounter] = useState(1);

  const Add = () => {
    if (counter >= 5) {
      return setCounter(5);
    }
    return setCounter((prevCounter) => prevCounter + 1);
  };

  const Subtract = () => {
    if (counter <= 1) {
      return setCounter(1);
    }
    return setCounter((prevCounter) => prevCounter - 1);
  };

  const value = (event) => {
    if (counter <= 1) {
      return setCounter(1);
    }
    return setCounter(Number(event.target.value));
  };

  return (
    <div>
      <div className="input-select">
        <button className="btn-selector" onClick={Subtract}>
          -
        </button>
        <input
          ref={amountInputRef}
          type="number"
          className="input-btn"
          value={counter}
          onChange={value}
          min="1"
          max="5"
        />
        <button className="btn-selector" onClick={Add}>
          +
        </button>
      </div>
      <form onSubmit={submitHandler}>
        <div>
          <button className="custom-button"> Aggiungi </button>
        </div>
      </form>
    </div>
  );
}

export default Button;
