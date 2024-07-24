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
          {/* <p>{product.desc}</p> */}
          <h1>{product.price}</h1>
          <br/>
          {/* Add more product details as needed */}
          <Link className='' id='btn_buy' href={`#!`}> Buy Now </Link>
          <Link id='view_btn' href={`details/${product._id}`}> View </Link>
        </>
      )}
    </div>
  );
};

export default ProductaList;
