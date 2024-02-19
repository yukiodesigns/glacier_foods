'use client'
import Breadcrumb from '@/components/shared/Breadcrumb';
import Link from 'next/link';
import React, { useState } from 'react'

const bgImage = ''
const title = 'Product';
 const navItems = [
   { label: 'Dairy', link: '/shop/dairy' },
   { label: 'Product' },
 ]; 
const page = () => {
  const [quantity, setQuantity] = useState(1);
  const [liked, setLiked] = useState(false);

  const handleIncreaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleDecreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleLike = () => {
    setLiked(!liked);
  };
  return (
    <div>
      <Breadcrumb title={title} navItems={navItems} bgImage={bgImage}/>
      <div className="flex flex-col md:flex-row justify-center items-start mt-8 mx-6 mb-8">
      <div className="md:w-1/2 md:mr-8">
        <img src="https://img.taste.com.au/wkJJ4Mg5/w1200-h630-cfill/taste/2007/04/eggs-182316-1.jpg" alt="Product" className="max-w-full h-auto" />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-2xl font-semibold mb-2">Product Name</h2>
        <p className="text-gray-600 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra erat in pharetra dapibus. Donec ac magna id ligula dictum vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra erat in pharetra dapibus. Donec ac magna id ligula dictum vestibulum.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam viverra erat in pharetra dapibus. Donec ac magna id ligula dictum vestibulum.</p>
        <p className="text-lg font-semibold text-green-600 mb-2">$99.99</p>
        <div className="flex items-center mb-4">
          <span className="bg-black text-white px-2 py-1 rounded-md text-xs mr-2 font-bold">In stock</span>
          <button onClick={handleLike} className={`focus:outline-none ${liked ? 'text-red-500' : 'text-gray-500'}`}>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              {liked ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 18.3429L8.8 17.1714C3.73333 12.5143 0 9.14286 0 5.17143C0 2.34286 2.4 0 5.33333 0C7.46667 0 8.66667 1.22857 10 3C11.3333 1.22857 12.5333 0 14.6667 0C17.6 0 20 2.34286 20 5.17143C20 9.14286 16.2667 12.5143 11.2 17.1714L10 18.3429Z"
                  fill="currentColor"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10 18.3429L8.8 17.1714C3.73333 12.5143 0 9.14286 0 5.17143C0 2.34286 2.4 0 5.33333 0C7.46667 0 8.66667 1.22857 10 3C11.3333 1.22857 12.5333 0 14.6667 0C17.6 0 20 2.34286 20 5.17143C20 9.14286 16.2667 12.5143 11.2 17.1714L10 18.3429ZM5.33333 1.71429C2.8 1.71429 0.666667 3.88571 0.666667 5.17143C0.666667 9.05714 3.73333 12.3429 8 16.3429L9.33333 17.5143L10 18.1714L10.6667 17.5143L12 16.3429C16.2667 12.3429 19.3333 9.05714 19.3333 5.17143C19.3333 3.88571 17.2 1.71429 14.6667 1.71429C13.1333 1.71429 11.6667 3 10 3C8.33333 3 6.86667 1.71429 5.33333 1.71429Z"
                  fill="currentColor"
                />
              )}
            </svg>
          </button>
        </div>
        <div className="flex items-center mb-4">
          <button onClick={handleDecreaseQuantity} className="bg-gray-200 px-3 py-1 rounded-l-md focus:outline-none"> - </button>
          <input type="text" value={quantity} readOnly className="px-3 py-1 bg-gray-100 text-center" placeholder='num'/>
          <button onClick={handleIncreaseQuantity} className="bg-gray-200 px-3 py-1 rounded-r-md focus:outline-none"> + </button>
        </div>
        <Link href='/cart'>
        <button className="bg-yellow-500 text-white px-4 py-2 rounded-md focus:outline-none mb-4">Add to Cart</button>
        </Link>
      </div>
    </div>
    </div>
  )
}

export default page