'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import axios from 'axios';
import Header from '../Components/partials/header';
import Footer from '../Components/partials/footer';

const page = () => {

  const [user, setUser] = useState({
    fullname: '',
    email:'',
    password: ''
  })  

  const onChangeInput = e => {
    const {name, value} = e.target;
    setUser({...user, [name]:value})
  }
  
  const registerSubmit = async e => {
    e.preventDefault()
    try{
      await axios.post('http://localhost:8000/user/register',{...user},console.log('Login success'))

      localStorage.setItem('firstLogin',true)

      window.location.href = "/product"
    }
    catch(err){
      alert(err.response.data.msg)
    }
  }



  return (
    <>
    <Header/>
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Login to Your Account</h2>
        <form onSubmit={registerSubmit}>
        <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email"> Name </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              name='fullname'
              value={user.fullname}
              placeholder="Enter your name"
              onChange={onChangeInput}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email"> Email </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              name='email'
              value={user.email}
              placeholder="Enter your email"
              onChange={onChangeInput}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              name='password'
              value={user.password}
              placeholder="Enter your password"
              onChange={onChangeInput}
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Register
            </button>
            <h1 className='font-bold text-xl'> OR </h1>
            <Link
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              href="/login"> Login </Link>
          </div>
        </form>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default page