import React from'react';

const ProductItem = ( {productData, productNumber, addToCart} ) => {
  return (
    <article className='item'>
      <span className='item__number'>{productNumber}</span>
      <h1 className='item__category'>{productData.category}</h1>
      <h2 className='item__title'>{productData.title}</h2>
      <p className='item__description'>{productData.description}</p>
      <img className='item__image' src={productData.image} alt={productData.title} loading="lazy" />
      <button className='item__button' onClick={() => addToCart(productData)}>Add to Cart</button>
    </article>
  )
}

export default ProductItem;
