'use client'
import React, { useContext } from 'react'
import Header from '../Components/partials/header';
import Footer from '../Components/partials/footer';
import { GlobalState } from '../GlobalState';
import userApi from '../api/userApi';
import Link from 'next/link';

const page = () => {
  const state = useContext(GlobalState)
  const [cart] = state.userApi.cart

  if(cart.length === 0)
  return <> <Header/> <h1> CART IS EMPTY </h1> </>
  return (
    <>
      <Header/>
      <div className='flex gap-8 flex-wrap flex-shrink-0 w-full p-5 justify-center'>
      { cart.map(product => (
      
      <div className='ProductCard h-96 w-80 p-3 border-2 border-black rounded-xl bg-zinc-200'>
          <div className='img_Cont h-64 w-full border-[1.8px] border-black overflow-hidden'>
            <img className='h-full w-full object-cover' src='https://conceptboard.com/wp-content/uploads/Product-Development-01-01.png' alt='Loading'/>
          </div>
          <div className='details_Cont h-8 w-full flex gap-3 items-center justify-between py-6 px-2'>
            {/* <h3>{product.title}</h3> */}
            <h1 className='font-semibold uppercase'>{product.product_id}</h1>
            <h1 className='font-bold'>${product.price}</h1>
          </div>

          <div className='button_cont h-8 w-full flex items-center justify-center mt-2'>
            <Link className='font-semibold border-2 border-black rounded-md px-3 py-2' id='btn_buy' href={`/cart`}> Buy Now </Link>
            {/* <Link className='font-semibold border-2 border-black rounded-md px-3 py-2' id='view_btn' href={`details/${detailProduct._id}`}> View </Link> */}
          </div>
          </div>
        
          ))}
          </div>
    </>
  )
}

export default page