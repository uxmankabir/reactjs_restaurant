import React from 'react';
import Navbar from './navbar';
import Products from './products';
import Cart from './cart';
import productList from './product-data-list';
import './../style.css';

const uniqueCategories = [...new Set(productList.map(item => item.category)), "all"];

const Restaurant = () => {

  const [products, setProducts] = React.useState(productList);
  const [cartItems, setCartItems] = React.useState([]);


  const filterProducts = (menuItem) => {
    const updatedList = menuItem==='all' ? productList : productList.filter(product => product.category === menuItem)
    setProducts(updatedList);
  }

  const addToCart = (cartItem)=> {
    setCartItems([...cartItems, cartItem])
  }

  const removeFromCart = (itemIndex)=> {
    let newItems = cartItems.filter((item, index) => index !== itemIndex)
    setCartItems(newItems)
  }

  return (
    <div>
      <header>
        <Navbar categories={uniqueCategories} filterProducts={filterProducts} />
        <Cart cartItems= {cartItems} removeFromCart={removeFromCart} />
      </header>
      <Products productList={products} addToCart={addToCart} />
    </div>
  )
};

export default Restaurant;
