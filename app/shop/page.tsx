'use client';
import OfferBanner from '@/components/shared/Banner';
import Products from '@/components/shared/Products';
import Link from 'next/link'
import React from 'react'

const page = () => {

  const products = [
    { id: 1, name: 'Product 1', price: '$19.99',  image: 'https://img.taste.com.au/wkJJ4Mg5/w1200-h630-cfill/taste/2007/04/eggs-182316-1.jpg' },
    { id: 2, name: 'Product 2', price: '$29.99',  image: 'https://www.allrecipes.com/thmb/zN81HQ86Fa2rHnkH-KUvUf6pBZE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Cuts-of-Beef-3x2-1-a557f31f8b13462185b4f2c17ab5b746.png' },
    { id: 3, name: 'Product 3', price: '$39.99',  image: 'https://cdnprod.mafretailproxy.com/sys-master-root/h2c/he4/17160499626014/1461_main.jpg_480Wx480H' },
    { id: 4, name: 'Product 4', price: '$49.99',  image: 'https://static.toiimg.com/thumb/msid-104607360,width-1280,height-720,resizemode-4/104607360.jpg' },
    { id: 5, name: 'Product 5', price: '$59.99',  image: 'https://www.qualityfood.ae/cdn/shop/products/yellow-mango-350g-638177_1200x1200.jpg?v=1672845030' },
  ];
  return (
    <div>
      {/* Hero */}
      <section className="relative bg-cover bg-center h-screen flex items-center" style={{backgroundImage: 'url("https://staticcookist.akamaized.net/wp-content/uploads/sites/22/2020/07/iStock-1194709125.jpg")'}}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-white text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Shop</h1>
          <nav className="text-sm md:text-base lg:text-lg" aria-label="Breadcrumb">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <Link href="/" className="text-gray-300 hover:underline">Home</Link>
                <span className='ml-1 mr-1'>/</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-400">Shop</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

      {/* Categories */}
      <section className=' py-10 bg-gray-200'>
        <h2 className='text-2xl text-center  '>Our Categories</h2>
        <div className="flex flex-wrap justify-center items-center ">  
            <div className="m-4 p-4 ">
              <Link href='/shop/fruits'>
                <img src='https://www.mooringspark.org/hs-fs/hubfs/bigstock-Fresh-Fruits-assorted-Fruits-C-365480089%20Large.jpeg?width=790&height=579&name=bigstock-Fresh-Fruits-assorted-Fruits-C-365480089%20Large.jpeg' alt= 'Fruit' className="w-32 h-32 object-cover mb-4 rounded-full bg-black" />
              </Link> 
              <p className="text-center font-semibold">Fruit</p>
            </div>  
            <div className="m-4 p-4 ">
              <Link href='/shop/vegetables'>
                <img src='https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-2foodgroups_vegetables_detailfeature.jpg?sfvrsn=226f1bc7_6' alt= 'Vegetables' className="w-32 h-32 object-cover mb-4 rounded-full bg-black" />
              </Link>
              <p className="text-center font-semibold">Vegetables</p>
            </div>  
            <div className="m-4 p-4 ">
              <Link href='/shop/dairy'>
                <img src='https://post.healthline.com/wp-content/uploads/2019/11/milk-soy-hemp-almond-non-dairy-1296x728-header-1296x728.jpg' alt= 'Dairy' className="w-32 h-32 object-cover mb-4 rounded-full bg-black" />
              </Link>
              <p className="text-center font-semibold">Dairy</p>
            </div>  
            <div className="m-4 p-4 ">
              <Link href='/shop/meat'>
                <img src='https://www.redefinemeat.com/wp-content/uploads/2022/04/BLOG1.jpg' alt= 'Meat' className="w-32 h-32 object-cover mb-4 rounded-full bg-black" />
              </Link>
              <p className="text-center font-semibold">Meat</p>
            </div>              
        </div>
      </section>

      {/* Banner */}
      <OfferBanner/>

      {/* Best seller */}
      <Products />

      {/* Deals for the week */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-8">Deals for the Week</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
            {products.map(product => (
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
        </div>
    </section>
      
  </div>
  )
}

export default page