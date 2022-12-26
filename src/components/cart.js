import React from "react";
import CartItems from "./cart-items";

const Cart = ({cartItems, removeFromCart}) => {
  return (
    <div className="cart">
      <button className="cart-button">
        Cart
        <span>{cartItems.length}</span>
      </button>
      <CartItems cartItems={cartItems} removeFromCart={removeFromCart} />
    </div>
  )
}

export default Cart
