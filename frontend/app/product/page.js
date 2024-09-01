'use client'
import React, { useContext, useState } from 'react';
import Header from '../Components/partials/header';
import Footer from '../Components/partials/footer';
import { GlobalState } from '../GlobalState';
import ProductaList from '../utils/productList/productaList';
import userApi from '../api/userApi';

const Page = () => {
  const state = useContext(GlobalState);

  if (!state) {
    return <div>Loading...</div>; // Add a loading state or handle errors as needed
  }

  const [token] = state.token;
  const { products } = state.productApi;
  const [isAdmin] = state.userApi.isAdmin

  console.log("Token:", token);
  console.log('Product:', products)

  if (!products) {
    return <div>Loading products...</div>; // Handle cases where products is undefined
  }

  return (
    <>
      <Header />
      {/* <div className=''>Products</div> */}
      
      <ul className='flex gap-8 flex-wrap flex-shrink-0 w-full justify-center py-10 leading-none'>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductaList key={product.id} product={product} isAdmin={isAdmin}/>
          ))
        ) : (
          <li>No products available</li>
        )}
      </ul>
    
      <Footer />
    </>
  );
};

export default Page;
