'use client'
import Breadcrumb from '@/components/shared/Breadcrumb';
import Link from 'next/link'
import React, { useState } from 'react'

const bgImage = 'https://extension.umd.edu/sites/extension.umd.edu/files/styles/optimized/public/2021-01/Veg_crop_carrot-2743498_1920_Pix.jpg?itok=RXPlXhI7'
const title = 'Cart';
 const navItems = [
   { label: 'Shop', link: '/shop' },
   { label: 'Cart' },
 ];
const page = () => {
  const [quantity, setQuantity] = useState(1);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div>
      <Breadcrumb title={title} navItems={navItems} bgImage={bgImage}/>
      <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-semibold mb-4">Your Cart</h1>
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-2/3 mb-8 md:mr-4">
          {/* Cart items */}
          <div className="bg-white shadow-md rounded-md p-4">
            <h2 className="text-xl font-semibold mb-4">Cart Items</h2>
            {/* Replace the dummy content with your actual cart items */}
            <div className="border-b border-gray-200 pb-4 mb-4 flex items-center">
              {/* Small image */}
              <div className="mr-8">
                <img src="https://www.liveeatlearn.com/wp-content/uploads/2023/05/How-to-Cut-Pineapple-01.jpg" alt="Product" className="w-16 h-16 rounded-md" />
              </div>
              <div className="flex flex-col w-full">
                {/* Product Name */}
                <p className="text-lg font-semibold mb-2">Product Name</p>
                {/* Quantity */}
                <div className="flex items-center mb-2">
                  <button onClick={handleDecreaseQuantity} className="bg-gray-200 px-3 py-1 rounded-l-md focus:outline-none mr-1"> - </button>
                  <input type="text" value={quantity} readOnly className="px-3 py-1 bg-gray-100 text-center w-12" />
                  <button onClick={handleIncreaseQuantity} className="bg-gray-200 px-3 py-1 rounded-r-md focus:outline-none ml-1"> + </button>
                </div>
                {/* Price */}
                <p className="text-gray-600">Price: $99.99</p>
              </div>
            </div>

            <div className="border-b border-gray-200 pb-4 mb-4 flex items-center">
              {/* Small image */}
              <div className="mr-8">
                <img src="https://www.liveeatlearn.com/wp-content/uploads/2023/05/How-to-Cut-Pineapple-01.jpg" alt="Product" className="w-16 h-16 rounded-md" />
              </div>
              <div className="flex flex-col w-full">
                {/* Product Name */}
                <p className="text-lg font-semibold mb-2">Product Name</p>
                {/* Quantity */}
                <div className="flex items-center mb-2">
                  <button onClick={handleDecreaseQuantity} className="bg-gray-200 px-3 py-1 rounded-l-md focus:outline-none mr-1"> - </button>
                  <input type="text" value={quantity} readOnly className="px-3 py-1 bg-gray-100 text-center w-12" />
                  <button onClick={handleIncreaseQuantity} className="bg-gray-200 px-3 py-1 rounded-r-md focus:outline-none ml-1"> + </button>
                </div>
                {/* Price */}
                <p className="text-gray-600">Price: $99.99</p>
              </div>
            </div>

            <div className="border-b border-gray-200 pb-4 mb-4 flex items-center">
              {/* Small image */}
              <div className="mr-8">
                <img src="https://www.liveeatlearn.com/wp-content/uploads/2023/05/How-to-Cut-Pineapple-01.jpg" alt="Product" className="w-16 h-16 rounded-md" />
              </div>
              <div className="flex flex-col w-full">
                {/* Product Name */}
                <p className="text-lg font-semibold mb-2">Product Name</p>
                {/* Quantity */}
                <div className="flex items-center mb-2">
                  <button onClick={handleDecreaseQuantity} className="bg-gray-200 px-3 py-1 rounded-l-md focus:outline-none mr-1"> - </button>
                  <input type="text" value={quantity} readOnly className="px-3 py-1 bg-gray-100 text-center w-12" />
                  <button onClick={handleIncreaseQuantity} className="bg-gray-200 px-3 py-1 rounded-r-md focus:outline-none ml-1"> + </button>
                </div>
                {/* Price */}
                <p className="text-gray-600">Price: $99.99</p>
              </div>
            </div>

            <div className="border-b border-gray-200 pb-4 mb-4 flex items-center">
              {/* Small image */}
              <div className="mr-8">
                <img src="https://www.liveeatlearn.com/wp-content/uploads/2023/05/How-to-Cut-Pineapple-01.jpg" alt="Product" className="w-16 h-16 rounded-md" />
              </div>
              <div className="flex flex-col w-full">
                {/* Product Name */}
                <p className="text-lg font-semibold mb-2">Product Name</p>
                {/* Quantity */}
                <div className="flex items-center mb-2">
                  <button onClick={handleDecreaseQuantity} className="bg-gray-200 px-3 py-1 rounded-l-md focus:outline-none mr-1"> - </button>
                  <input type="text" value={quantity} readOnly className="px-3 py-1 bg-gray-100 text-center w-12" />
                  <button onClick={handleIncreaseQuantity} className="bg-gray-200 px-3 py-1 rounded-r-md focus:outline-none ml-1"> + </button>
                </div>
                {/* Price */}
                <p className="text-gray-600">Price: $99.99</p>
              </div>
            </div>
            {/* Repeat this block for each cart item */}
          </div>
        </div>
        <div className="w-full md:w-1/3">
          {/* Cart summary */}
          <div className="bg-white shadow-md rounded-md p-4">
            <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
            {/* Calculate and display total price */}
            <p className="text-lg font-semibold mb-4">Total: $99.99</p>
            {/* Checkout button */}
            <Link href="/checkout" className="bg-yellow-500 text-white px-4 py-2 rounded-md inline-block">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default page