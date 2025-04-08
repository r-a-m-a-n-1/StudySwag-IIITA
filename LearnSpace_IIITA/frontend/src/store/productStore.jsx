// src/store/productStore.js
import React, { createContext, useContext, useState, useEffect } from 'react';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  // Fetch products from the database
  const fetchProducts = async () => {
    const res = await fetch('http://localhost:5000/api/products');
    if (res.ok) {
      const data = await res.json();
      setProducts(data.products); // Assuming the response is structured correctly
    } else {
      console.error('Failed to fetch products');
    }
  };

  useEffect(() => {
    fetchProducts(); // Fetch products when the app loads
  }, []);

  return (
    <ProductContext.Provider value={{ products, fetchProducts }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductStore = () => {
  return useContext(ProductContext);
};
