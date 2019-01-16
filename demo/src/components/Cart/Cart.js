import React from "react";
import "./cart.css";

const Cart = ({ count }) => (
  <div className="pw-cart">
    <button className="pw-cart__button">
      <span className="pw-cart__count">{count}</span>
    </button>
  </div>
);

export default Cart;
