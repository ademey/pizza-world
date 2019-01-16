import React from "react";
import { formatPrice } from 'utils/format';
import { Spinner } from 'components/Loading';
import "./cart.css";

const Cart = ({ cartItems, summary, submitting, success, onSubmit, deliveryTime }) => (
  <div className="pw-cart">
    <h4 className="pw-cart__title">Your order</h4>
    <ul className="pw-cart__items">
      {cartItems && cartItems.map(item => 
        <li key={item.id}>
        <span className="pw-cart__item-count">
        {item.count}
          </span>
          <span className="pw-cart__item-name">
          {item.name} 
          </span>
          <span className="pw-cart__item-price">
          {formatPrice(item.price)}
          </span>
           
        </li>
      )}
    </ul>
    <div className="pw-cart__summary">
      <div className="pw-cart__summary-item">
        <span className="pw-cart__summary-label">
          Items subtotal
        </span>
        <span className="pw-cart__summary-value">
            {formatPrice(summary.subtotal)}
        </span>
      </div>
      <div className="pw-cart__summary-item">
        <span className="pw-cart__summary-label">
          Delivery fee
        </span>
        <span className="pw-cart__summary-value">
            {formatPrice(summary.delivery)}
        </span>
      </div>
      <div className="pw-cart__summary-item">
        <span className="pw-cart__summary-label">
          Sales tax
        </span>
        <span className="pw-cart__summary-value">
            {formatPrice(summary.tax)}
        </span>
      </div>

      <div className="pw-cart__summary-item pw-cart__summary-item--total">
        <span className="pw-cart__summary-label">
          Total
        </span>
        <span className="pw-cart__summary-value">
            {formatPrice(summary.total)}
        </span>
      </div>
      


    </div>
    {(submitting || success) && 
      <div className="pw-cart__order-result">
       { submitting &&
          <div className="pw-cart__order-loading">
            <h3>Placing Order</h3>
            <Spinner />
          </div> 
       }
      { success &&
        <div>
          <h4>Order Complete</h4>
          <p>Estimated delivery time:</p>
          <p><b>{deliveryTime} minutes</b></p>
        </div>
      }
      </div>
    }

    <div className="pw-cart__footer">
      <button onClick={() => onSubmit(cartItems)} disabled={submitting || success}>
        Checkout: {formatPrice(summary.total)}
      </button>
    </div>
  </div>
);

export default Cart;
