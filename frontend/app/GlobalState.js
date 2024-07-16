'use client'
import React, { createContext } from 'react';
import useProductApi from './api/productApi';

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [products, setProducts] = useProductApi();

  return (
    <GlobalState.Provider value={{ productApi: { products, setProducts } }}>
      {children}
    </GlobalState.Provider>
  );
};
