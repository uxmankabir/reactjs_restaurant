import React from'react';
import ProductItem from './product-item';

const Products = ({productList} ) => {
  return (
    <main className='products-list'>
      {
        productList.map( (product, index ) => <ProductItem key={ product.id }  productData = { product } productNumber = {index+1} /> )
      }
    </main>
  )
}

export default Products;
