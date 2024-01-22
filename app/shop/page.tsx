import OfferBanner from '@/components/shared/Banner';
import Products from '@/components/shared/Products';
import Link from 'next/link'
import React from 'react'

const page = () => {
  const categories = [
    { id: 1, name: 'Dairy', image: '/images/electronics.jpg' },
    { id: 2, name: 'Vegetables', image: '/images/clothing.jpg' },
    { id: 3, name: 'Fruits', image: '/images/books.jpg' },
    { id: 4, name: 'Vegetables', image: '/images/clothing.jpg' },
    { id: 5, name: 'Fruits', image: '/images/books.jpg' },
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

      {/* Best seller */}
      <Products />

      {/* Banner */}
      <OfferBanner/>
      
    </div>
  )
}

export default page