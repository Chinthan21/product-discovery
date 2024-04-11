// src/redux/actions/productActions.js

// import React, { useEffect } from 'react';
// const ProductActions=() => {
//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response = await fetch('https://fakestoreapi.com/products');
//         if (!response.ok) {
//           throw new Error('Failed to fetch products');
//         }
//         const products = await response.json();
//         console.log(products); // Log products data to the console
//       } catch (error) {
//         console.error('Error fetching products:', error.message);
//       }
//     };

//     fetchProducts();
//   }, []); // Empty dependency array to run the effect only once

//   return (
//     <div>
//       {/* Component rendering logic if needed */}
//     </div>
//   );
// };
// export default ProductActions;
const fetchProducts = async () => {
  let cachedProducts = localStorage.getItem('cachedProducts');
  let cachedDataLength = localStorage.getItem('cachedDataLength');

  if (cachedProducts && cachedDataLength) {
    cachedProducts = JSON.parse(cachedProducts);
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const newProducts = await response.json();

    if (newProducts.length !== parseInt(cachedDataLength)) {
      // Update cached products and data length in localStorage
      localStorage.setItem('cachedProducts', JSON.stringify(newProducts));
      localStorage.setItem('cachedDataLength', newProducts.length.toString());
      return newProducts;
    } else {
      return cachedProducts; 
    }
  } else {
    const response = await fetch('https://fakestoreapi.com/products');
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const products = await response.json();

    // Store fetched products and data length in localStorage so it will increase website performance
    localStorage.setItem('cachedProducts', JSON.stringify(products));
    localStorage.setItem('cachedDataLength', products.length.toString());

    return products;
  }
};

export default fetchProducts;





  