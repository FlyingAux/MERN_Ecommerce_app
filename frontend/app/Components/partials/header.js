'use client'
import React, { useContext } from 'react'
import Link from 'next/link';
import { RiMenu2Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { GlobalState } from '@/app/GlobalState';
import userApi from '@/app/api/userApi';
import axios from 'axios';

const header = () => {

    const state = useContext(GlobalState)
    const [ isLogged, setIsLogged ] = state.userApi.isLogged
    const [ isAdmin, setIsAdmin ] = state.userApi.isAdmin


    const logoutUser = async ()=>{
        await axios.get('http://localhost:8000/user/logout')
        localStorage.clear()
        setIsAdmin(false)
        setIsLogged(false)
    }


    const adminRouter = ()=>{
        return(
            <>
                <i> <Link href='/create_product' className='not-italic font-bold capitalize'> Create Product </Link> </i>
                <i> <Link href='/category' className='not-italic font-bold capitalize'> Categories </Link> </i>
            </>
        )
    }

    const loginRouter = ()=>{
        return(
            <>
                <i> <Link href='/history' className='not-italic font-bold capitalize'> history </Link> </i>
                <i> <Link href='/' className='not-italic font-bold capitalize' onClick={logoutUser}> Logout </Link> </i>
            </>
        )
    }

  return (
    <>
       <div className='px-2'>
       <div className='w-full flex items-center justify-between px-5 py-3 border-b-[1px] border-black'>
            <div hidden className=''>
                <RiMenu2Fill className='text-3xl'/>
            </div>
            <div>
                <Link href='/' className='text-3xl font-semibold'>{isAdmin?'Admin':'30DCSHOP'}</Link>
            </div>
            <div className=''>

                <ul className='flex gap-5 items-center justify-center'>
                    <li>
                    <Link href='/product' className='text-xl uppercase'>{isAdmin?'Shop':'PRODUCTS'}</Link>
                    </li>

                    {isAdmin && adminRouter()}
                    {isLogged ? loginRouter() :  <li>
                    <Link href='/login' className='text-xl uppercase'>Register & Login</Link>
                    </li>}
                   
                    <li hidden>
                    <IoMdClose className='text-3xl'/>
                    </li>
                </ul>                
            </div>   

            {
                isAdmin ? '' : <div className='flex items-center justify-center gap-2'>
                <span className='text-xl'>0</span>
                <Link href='/cart'><IoCartOutline className='text-2xl' /></Link>
            </div>
            }
            
        </div>
       </div>
    </>
  )
}

export default header