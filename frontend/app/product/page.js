'use client'
import React, { useContext } from 'react';
import Header from '../Components/partials/header';
import Footer from '../Components/partials/footer';
import { GlobalState } from '../GlobalState';
import ProductaList from '../utils/productList/productaList';

const Page = () => {
  const state = useContext(GlobalState);

  if (!state) {
    return <div>Loading...</div>; // Add a loading state or handle errors as needed
  }

  const { products } = state.productApi;

  if (!products) {
    return <div>Loading products...</div>; // Handle cases where products is undefined
  }

  return (
    <>
      <Header />
      <div className=''>Products</div>
      <ul>
        {products.length > 0 ? (
          products.map((product) => (
            <ProductaList key={product.id} product={product} />
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
