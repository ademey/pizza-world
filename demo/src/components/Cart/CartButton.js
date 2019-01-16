import React from "react";
import "./cart-button.css";

const CartButton = ({ count }) => (

    <button className="pw-cart-button">
      <span className="pw-cart-button__count">{count}</span>
    </button>
)

export default CartButton;
