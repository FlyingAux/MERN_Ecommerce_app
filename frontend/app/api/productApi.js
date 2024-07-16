'use client'
import axios from 'axios';
import { useState, useEffect } from 'react';

const useProductApi = () => {
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    try {
      const res = await axios.get('http://localhost:8000/product'); // Adjust this endpoint as needed
      console.log('API Response:', res); // Log the entire response
      if (res.data && res.data.products) {
        setProducts(res.data.products); // Adjust this based on the actual data structure
      } else {
        console.warn('No products found in the response');
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  return [products, setProducts];
};

export default useProductApi;
