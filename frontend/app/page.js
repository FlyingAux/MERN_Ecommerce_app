'use client'
import React from 'react';
import './globals.css';
import Header from '../app/Components/partials/header';
import Footer from '../app/Components/partials/footer';
import { DataProvider } from './GlobalState';

const page = () => {
  return (
    
    <>

      <Header/>
        <h1 className='text-3xl'>Main</h1>
      <Footer/>
    </>

  )
}

export default page