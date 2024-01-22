'use client';
import React, { useState } from 'react';

const Product = () => {
  const [activeTab, setActiveTab] = useState('bestSeller');

  const products = [
    { id: 1, name: 'Product 1', price: '$19.99', image: 'https://img.taste.com.au/wkJJ4Mg5/w1200-h630-cfill/taste/2007/04/eggs-182316-1.jpg' },
    { id: 2, name: 'Product 2', price: '$29.99', image: 'https://www.allrecipes.com/thmb/zN81HQ86Fa2rHnkH-KUvUf6pBZE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Cuts-of-Beef-3x2-1-a557f31f8b13462185b4f2c17ab5b746.png' },
    { id: 3, name: 'Product 3', price: '$39.99', image: 'https://greenspoon.co.ke/wp-content/uploads/2022/02/Greenspoon-Kales-Sukuma-Wiki-Mlango-Farm-1.jpg' },
    { id: 4, name: 'Product 4', price: '$49.99', image: 'https://www.qualityfood.ae/cdn/shop/products/yellow-mango-350g-638177_1200x1200.jpg?v=1672845030' },
    { id: 5, name: 'Product 5', price: '$39.99', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Oat_milk_glass_and_bottles.jpg/1200px-Oat_milk_glass_and_bottles.jpg' },
    { id: 6, name: 'Product 6', price: '$49.99', image: 'https://www.licious.in/blog/wp-content/uploads/2022/03/Chicken-Curry-Cut-min-750x750.png' },
    { id: 7, name: 'Product 7', price: '$39.99', image: 'https://cdnprod.mafretailproxy.com/sys-master-root/h2c/he4/17160499626014/1461_main.jpg_480Wx480H' },
    { id: 8, name: 'Product 8', price: '$49.99', image: 'https://static.toiimg.com/thumb/msid-104607360,width-1280,height-720,resizemode-4/104607360.jpg' },
  ];

  const filteredProducts = activeTab === 'bestSeller'
    ? products.slice(0, 4) // Display top 2 best sellers
    : products.slice(4); // Display the other 2 products as new arrivals

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Featured Products</h2>
          <div className="mt-2 flex justify-center">
            <button
              className={`mx-4 px-4 py-2 text-sm font-medium focus:outline-none ${activeTab === 'bestSeller' ? 'text-white bg-yellow-500' : 'text-black bg-white border border-yellow-500'}`}
              onClick={() => setActiveTab('bestSeller')}
            >
              Best Seller
            </button>
            <button
              className={`mx-4 px-4 py-2 text-sm font-medium focus:outline-none ${activeTab === 'newArrivals' ? 'text-white bg-yellow-500' : 'text-black bg-white border border-yellow-500'}`}
              onClick={() => setActiveTab('newArrivals')}
            >
              New Arrivals
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white p-8 rounded-lg shadow-md">
              <img src={product.image} alt={product.name} className="w-full h-52 object-cover mb-4" />
              <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
              <p className="text-gray-600">{product.price}</p>
              <button
                className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 focus:outline-none focus:bg-yellow-600"
                onClick={() => console.log(`Added ${product.name} to cart`)}
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Product;
