'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import axios from 'axios';
import Header from '../Components/partials/header';
import Footer from '../Components/partials/footer';
import { useRouter } from 'next/navigation'; // Use `next/navigation` for programmatic navigation

const Page = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  });

  const router = useRouter(); // Initialize router for navigation

  const onChangeInput = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const loginSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/user/login', user);
      localStorage.setItem('firstLogin', 'true'); // Ensure the value is a string
      router.push('/product'); // Use router.push for navigation
    } catch (err) {
      console.error('Login error:', err); // Log the error for debugging
      alert(err.response?.data?.msg || 'An error occurred'); // Optional: Fallback message if error response is not available
    }
  };

  return (
    <>
      <Header />
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Login to Your Account</h2>
          <form onSubmit={loginSubmit}>
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
                Login
              </button>
              <Link
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                href="/register"> Register </Link>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;
