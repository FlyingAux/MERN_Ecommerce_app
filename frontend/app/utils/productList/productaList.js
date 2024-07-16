'use client'
import React from 'react';

const ProductaList = ({ product }) => {
  console.log(product);
  return (
    <div className='ProductCard'>
      {product && (
        <>
          <h3>{product.title}</h3>
          <p>{product.desc}</p>
          {/* Add more product details as needed */}
        </>
      )}
    </div>
  );
};

export default ProductaList;
