import React from "react";

const CartItem = ({cartItem, removeFromCart, itemIndex})=>{
  return (
    <div className="cart-item">
      <div>{cartItem.title}</div>
      <button onClick={()=> removeFromCart(itemIndex)}>Remove</button>
    </div>
  )
}

const CartItems = ({cartItems, removeFromCart}) => {
  return (
    <div className="cart-items">
      {
        cartItems.map(((cartItem, index) => <CartItem key={index} cartItem={cartItem} removeFromCart={removeFromCart} itemIndex={index}/>))
      }
    </div>
  )
}

export default CartItems
