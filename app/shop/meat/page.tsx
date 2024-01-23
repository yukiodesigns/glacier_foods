'use client';
import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';


const Meat = () => {
  // Sample product data
  const products = [
    { id: 1, name: 'Product 1', price: '$19.99', category: 'Electronics', image: 'https://www.liveeatlearn.com/wp-content/uploads/2023/05/How-to-Cut-Pineapple-01.jpg' },
    { id: 2, name: 'Product 2', price: '$29.99', category: 'Clothing', image: 'https://www.foodandwine.com/thmb/h7XBIk5uparmVpDEyQ9oC7brCpA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/A-Feast-of-Apples-FT-2-MAG1123-980271d42b1a489bab239b1466588ca4.jpg' },
    { id: 3, name: 'Product 3', price: '$39.99', category: 'Home & Garden', image: 'https://www.liveeatlearn.com/wp-content/uploads/2023/05/How-to-Cut-Pineapple-01.jpg' },
    { id: 4, name: 'Product 4', price: '$19.99', category: 'Electronics', image: 'https://www.foodandwine.com/thmb/h7XBIk5uparmVpDEyQ9oC7brCpA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/A-Feast-of-Apples-FT-2-MAG1123-980271d42b1a489bab239b1466588ca4.jpg' },
    { id: 5, name: 'Product 5', price: '$29.99', category: 'Clothing', image: 'https://www.liveeatlearn.com/wp-content/uploads/2023/05/How-to-Cut-Pineapple-01.jpg' },
    { id: 6, name: 'Product 6', price: '$39.99', category: 'Home & Garden', image: 'https://www.foodandwine.com/thmb/h7XBIk5uparmVpDEyQ9oC7brCpA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/A-Feast-of-Apples-FT-2-MAG1123-980271d42b1a489bab239b1466588ca4.jpg' },
    { id: 7, name: 'Product 7', price: '$19.99', category: 'Electronics', image: 'https://www.liveeatlearn.com/wp-content/uploads/2023/05/How-to-Cut-Pineapple-01.jpg' },
    { id: 8, name: 'Product 8', price: '$29.99', category: 'Clothing', image: 'https://www.foodandwine.com/thmb/h7XBIk5uparmVpDEyQ9oC7brCpA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/A-Feast-of-Apples-FT-2-MAG1123-980271d42b1a489bab239b1466588ca4.jpg' },
    { id: 9, name: 'Product 9', price: '$39.99', category: 'Home & Garden', image: 'https://www.liveeatlearn.com/wp-content/uploads/2023/05/How-to-Cut-Pineapple-01.jpg' },
    { id: 10, name: 'Product 10', price: '$19.99', category: 'Electronics', image: 'https://www.foodandwine.com/thmb/h7XBIk5uparmVpDEyQ9oC7brCpA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/A-Feast-of-Apples-FT-2-MAG1123-980271d42b1a489bab239b1466588ca4.jpg' },
    { id: 11, name: 'Product 11', price: '$29.99', category: 'Clothing', image: 'https://www.liveeatlearn.com/wp-content/uploads/2023/05/How-to-Cut-Pineapple-01.jpg' },
    { id: 12, name: 'Product 12', price: '$39.99', category: 'Home & Garden', image: 'https://www.foodandwine.com/thmb/h7XBIk5uparmVpDEyQ9oC7brCpA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/A-Feast-of-Apples-FT-2-MAG1123-980271d42b1a489bab239b1466588ca4.jpg' },
    // Add more product data as needed
  ];

  // Sample filter options
  const filterOptions = [
    { id: 1, label: 'Electronics' },
    { id: 2, label: 'Clothing' },
    { id: 3, label: 'Home & Garden' },
    // Add more filter options as needed
  ]; 
  const availabilityOptions = [
    { id: 1, label: 'In Stock' },
    { id: 2, label: 'Out of stock' },
 
  ]; 
  // Display 9 products per page
  const productsPerPage = 9;
  const [currentPage, setCurrentPage] = React.useState(1);
  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const paginatedProducts = products.slice(startIndex, endIndex);
  const [selectedPrice, setSelectedPrice] = useState(50);
  const [selectedRate, setSelectedRate] = useState(1);
  const totalPages = Math.ceil(products.length / productsPerPage);

  function handlePageChange(newPage: number) {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  }
  const handlePriceChange = (value: number) => {
    setSelectedPrice(value);
    // You can perform additional actions here based on the new selected price
  };
  const handleRateChange = (value: number) => {
    setSelectedRate(value);
    // You can perform additional actions here based on the new selected price
  };

  return (
    <div className="container mx-auto p-4">
      <Head>
        <title>Product List</title>
      </Head>

      {/* Breadcrumb */}
      <nav className="text-sm font-medium text-gray-600 mb-4">
        <Link href="/shop" className="hover:text-gray-800">Shop</Link> &gt; <span className="text-gray-800">Meat</span>
      </nav>

      {/* Product List and Filters */}
      <div className="flex flex-col md:flex-row">
        {/* Product List */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 bg-gray-100 overflow-x-hidden overflow-y-auto max-h-[600px] px-10 py-12">
          {paginatedProducts.map(product => (
            <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
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

        {/* Filters */}
        <div className="w-full md:w-1/4 md:sticky top-0 ml-10">
          {/* Category filter options */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">Category</h3>
            <ul className="list-none p-0">
              {filterOptions.map(option => (
                      <li key={option.id} className="mb-1">
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          {option.label}
                        </label>
                      </li>
              ))}
            </ul>
          </div>

          {/* Price filter options */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">Price</h3>
            <label htmlFor="priceRange" className="text-gray-600">Select Price Range:</label>
            <input
              type="range"
              id="priceRange"
              name="priceRange"
              min={50} 
              max={100000}
              step={1}
              value={selectedPrice}
              onChange={(e) => handlePriceChange(Number(e.target.value))}
              className="block w-full mt-2"
            />
            <p className="text-gray-600">Selected Price: ${selectedPrice}</p>
          </div>

          {/* Availability filter options */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-2">Availability</h3>
            <ul className="list-none p-0">
            {availabilityOptions.map(option => (
                      <li key={option.id} className="mb-1">
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          {option.label}
                        </label>
                      </li>
              ))}
            </ul>
          </div>

          {/* Rating filter options */}
          {/* <div>
            <h3 className="text-lg font-semibold mb-2">Rating</h3>
            <label htmlFor="rating" className="text-gray-600">Select Rating:</label>
            <StarRating value={selectedRate} onChange={handleRateChange} />
            <p className="text-gray-600">Selected Rate: {selectedRate}</p>
          </div> */}
        </div>
      </div>


      {/* Pagination */}
      <div className="flex justify-center mt-4">
        <button
          className="bg-white text-black border-yellow-500 border-2 px-4 py-2 mr-2 rounded-md"
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button
          className="bg-white text-black border-yellow-500 border-2 px-4 py-2 ml-2 rounded-md"
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Meat;
