import React from 'react';
import Navbar from './navbar';
import Products from './products';
import productList from './product-data-list';
import './../style.css';

const uniqueCategories = [...new Set(productList.map(item => item.category)), "all"];

const Restaurant = () => {

  const [products, setProducts] = React.useState(productList);

  const filterProducts = (menuItem) => {
    const updatedList = menuItem==='all' ? productList : productList.filter(product => product.category === menuItem)
    setProducts(updatedList);
  }

  return (
    <div>
      <Navbar categories={uniqueCategories} filterProducts={filterProducts} />
      <Products productList={products} />
    </div>
  )
};

export default Restaurant;
