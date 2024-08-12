// src/pages/ProductPage.js
import React from 'react';

import Header from '../components/Header';
import ProductCarousel from '../components/ProductCarousel';

const ProductPage = () => {
  return (
    <div>
      <Header />
      <section>
        <h1 className="text-2xl font-bold text-center my-8">Product Carousel</h1>
        <ProductCarousel />
      </section>
      
    </div>
  );
};

export default ProductPage;
