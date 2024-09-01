'use client'
import Link from 'next/link';
import React from 'react';
import { useContext } from 'react';
import { GlobalState } from '@/app/GlobalState';
import userApi from '@/app/api/userApi';
import BtnRender from './btnRender';


const ProductaList = ({ product, isAdmin }) => {

  const state = useContext(GlobalState);
  const { products } = state.productApi;
  const addCart = state.userApi.addCart
  // const [isAdmin] = state.userApi.isAdmin
  // console.log(product);
  return (
   
     
        <>
         {product && (
        <div className='ProductCard h-fit w-80 p-3 border-2 border-black rounded-xl bg-zinc-200'>
          {
            isAdmin && <input type='checkbox' checked={product.checked}/>
          }
          <div className='img_Cont h-64 w-full border-[1.8px] border-black overflow-hidden'>
            <img className='h-full w-full object-cover' src='https://conceptboard.com/wp-content/uploads/Product-Development-01-01.png' alt='Loading'/>
          </div>
          <div className='details_Cont h-8 w-full flex gap-3 items-center justify-between py-6 px-2'>
            {/* <h3>{product.title}</h3> */}
            <h1 className='font-semibold uppercase'>{product.product_id}</h1>
            <h1 className='font-bold'>${product.price}</h1>
          </div>
          <br/>

            <BtnRender product={product}/>
          </div>
             )}
        </>
   
 
  );
};

export default ProductaList;
