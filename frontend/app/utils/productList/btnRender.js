'use client'
import { GlobalState } from '@/app/GlobalState';
import React, { useContext } from 'react'
import Link from 'next/link';



const btnRender = ({product}) => {


    const state = useContext(GlobalState);
    const { products } = state.productApi;
    const addCart = state.userApi.addCart
    const [isAdmin] = state.userApi.isAdmin

  return (
    <div className='button_cont h-8 w-full flex items-center justify-between'>
            {
              isAdmin ? <> <Link className='font-semibold border-2 border-black rounded-md px-3 py-2' id='btn_buy' href={`#!`}> delete </Link>
              <Link className='font-semibold border-2 border-black rounded-md px-3 py-2' id='view_btn' href={`details/${product._id}`}> edit </Link> </>
              :
              <><Link className='font-semibold border-2 border-black rounded-md px-3 py-2' id='btn_buy' href={`#!`} onClick={()=> addCart(product)}> Buy Now </Link>
            <Link className='font-semibold border-2 border-black rounded-md px-3 py-2' id='view_btn' href={`details/${product._id}`}> View </Link> </>
            }
    
          </div>
  )
}

export default btnRender