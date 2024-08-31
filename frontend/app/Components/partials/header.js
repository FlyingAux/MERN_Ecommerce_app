'use client'
import React, { useContext } from 'react'
import Link from 'next/link';
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { GlobalState } from '@/app/GlobalState';

const header = () => {

    const state = useContext(GlobalState)
    console.log(state)

  return (
    <>
       <div className='px-2'>
       <div className='w-full flex items-center justify-between px-5 py-3 border-b-[1px] border-black'>
            <div hidden className=''>
                <RiMenu2Fill className='text-3xl'/>
            </div>
            <div>
                <Link href='/' className='text-3xl font-semibold'>30DCSHOP</Link>
            </div>
            <div className=''>

                <ul className='flex gap-5 items-center justify-center'>
                    <li>
                    <Link href='/product' className='text-xl uppercase'>Products</Link>
                    </li>
                    <li>
                    <Link href='/login' className='text-xl uppercase'>Register & Login</Link>
                    </li>
                    <li hidden>
                    <IoMdClose className='text-3xl'/>
                    </li>
                </ul>                
            </div>   
            <div className='flex items-center justify-center gap-2'>
                    <span className='text-xl'>0</span>
                    <Link href='/cart'><IoCartOutline className='text-2xl' /></Link>
                </div>
        </div>
       </div>
    </>
  )
}

export default header