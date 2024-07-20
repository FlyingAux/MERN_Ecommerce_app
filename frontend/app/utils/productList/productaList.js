'use client'
import Link from 'next/link';
import React from 'react';

const ProductaList = ({ product }) => {
  console.log(product);
  return (
    <div className='ProductCard'>
      {product && (
        <>
          <h3>{product.title}</h3>
          <p>{product.desc}</p>
          <h1>{product.price}</h1>
          <br/>
          {/* Add more product details as needed */}
          <Link href=''>HELLO</Link>
        </>
      )}
    </div>
  );
};

export default ProductaList;
