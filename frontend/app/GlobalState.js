'use client'; // This is for Next.js to enforce the component to be rendered on the client side

import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import useProductApi from './api/productApi'; // Assuming this hook fetches products

export const GlobalState = createContext();

export const DataProvider = ({ children }) => {
  const [token, setToken] = useState(false); // Corrected `flase` typo to `false`
  const [products, setProducts] = useProductApi();

  // Function to refresh the token
  const refreshToken = async () => {
    try {
      const response = await axios.get('http://localhost:8000/user/rt');
      setToken(response.data.accessToken); // Assuming `token` is returned in `response.data`
      
    } catch (error) {
      console.error("Failed to refresh token", error);
    }
  };

  // Effect to call refreshToken when the component mounts
  useEffect(() => {
    const firstLogin = localStorage.getItem('firstLogin')
    if(firstLogin) refreshToken(); // Call token refresh on component mount
  }, []); // Empty dependency array ensures it runs once after mount

  // Consolidating all state values into `state` object
  const state = {
    token: [token, setToken],
    productApi: { products, setProducts }
  };


  return (
    <GlobalState.Provider value={state}>
      {children}
    </GlobalState.Provider>
  );
};


// 'use client'
// import React, { createContext } from 'react';
// import useProductApi from './api/productApi';

// export const GlobalState = createContext();

// export const DataProvider = ({ children }) => {
//   const [products, setProducts] = useProductApi();

//   return (
//     <GlobalState.Provider value={{ productApi: { products, setProducts } }}>
//       {children}
//     </GlobalState.Provider>
//   );
// };




