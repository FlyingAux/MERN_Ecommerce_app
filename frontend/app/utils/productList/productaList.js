'use client'
import Link from 'next/link';
import React from 'react';

const ProductaList = ({ product }) => {
  // console.log(product);
  return (
   
     
        <>
         {product && (
        <div className='ProductCard h-96 w-80 p-3 border-2 border-black rounded-xl bg-zinc-200'>
          <div className='img_Cont h-64 w-full border-[1.8px] border-black overflow-hidden'>
            <img className='h-full w-full object-cover' src='https://conceptboard.com/wp-content/uploads/Product-Development-01-01.png' alt='Loading'/>
          </div>
          <div className='details_Cont h-8 w-full flex gap-3 items-center justify-between py-6 px-2'>
            {/* <h3>{product.title}</h3> */}
            <h1 className='font-semibold uppercase'>{product.product_id}</h1>
            <h1 className='font-bold'>${product.price}</h1>
          </div>
          <br/>
          <div className='button_cont h-8 w-full flex items-center justify-between'>
            <Link className='font-semibold border-2 border-black rounded-md px-3 py-2' id='btn_buy' href={`#!`}> Buy Now </Link>
            <Link className='font-semibold border-2 border-black rounded-md px-3 py-2' id='view_btn' href={`details/${product._id}`}> View </Link>
          </div>
          </div>
             )}
        </>
   
 
  );
};

export default ProductaList;
