import Step from '@/components/shared/Step'
import { Button } from '@/components/ui/button'
import Image from 'next/image';
import Link from 'next/link'
import React from 'react'
import { IoPersonOutline } from "react-icons/io5";

const page = () => {
  return (
    <>
    {/* Hero Section */}
      <section className="relative bg-cover bg-center h-screen flex items-center" style={{backgroundImage: 'url("https://value.co.ke/wp-content/uploads/2023/06/d6tu_l3chle.jpg")'}}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-white text-center relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">About Us</h1>
          <nav className="text-sm md:text-base lg:text-lg" aria-label="Breadcrumb">
            <ol className="list-none p-0 inline-flex">
              <li className="flex items-center">
                <Link href="/" className="text-gray-300 hover:underline">Home</Link>
                <span className='ml-1 mr-1'>/</span>
              </li>
              <li className="flex items-center">
                <span className="text-gray-400">About</span>
              </li>
            </ol>
          </nav>
        </div>
      </section>

    {/* Our Story */}
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto">
        <div className="md:w-1/2 lg:w-full pr-8">
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Our History</h3>
          <p className="text-gray-700 leading-loose text-justify lg:w-full">
           Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi placeat eum eligendi aliquid sint. Porro labore delectus est necessitatibus odit architecto quas in corrupti laudantium obcaecati! Ducimus quos fugit beatae earum blanditiis vero, qui odit natus doloremque enim ea sit necessitatibus incidunt corrupti quisquam ex animi dicta dolorum. Ipsa porro assumenda totam quibusdam voluptatem dignissimos, voluptate reprehenderit ut sapiente cumque! Perspiciatis, reprehenderit. Optio neque explicabo aut saepe, et deserunt. Soluta, nulla, quia error labore voluptatibus beatae nostrum nam minus deleniti ad voluptas dolor, doloremque neque praesentium fugit aperiam! In hic necessitatibus fugiat facere quo tempore ex eum quia quis provident qui, deleniti modi voluptas magni! Dolorem reprehenderit nam officiis tempore explicabo autem! Praesentium aperiam animi odit magnam blanditiis incidunt labore voluptatum minus. Doloribus autem tempore soluta delectus, sed pariatur natus voluptatum reprehenderit sunt nihil quisquam recusandae odio minima cumque quidem ex eius illo. Necessitatibus, debitis minima beatae sint cum officiis mollitia blanditiis? Officia omnis aliquam nisi laborum ducimus aliquid quisquam unde sit corporis exercitationem sunt minus earum culpa reiciendis atque a esse fugit molestiae accusamus odio suscipit, porro ipsam. Harum soluta quisquam exercitationem id. Fugit ut sequi ipsa porro praesentium dolorum, saepe nesciunt distinctio doloribus repudiandae sapiente corrupti consequuntur ea.
          </p>
        </div>
      </div>
    </section>

    {/* Quality Assuarance */}
    <Step />

    {/* Statistics */}
    <section className="bg-black text-white body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-yellow-600">2.7K+</h2>
            <p className="leading-relaxed">Users</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-yellow-600">1.8K+</h2>
            <p className="leading-relaxed">Subscribes</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-yellow-600">35+</h2>
            <p className="leading-relaxed">Downloads</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-yellow-600">400+</h2>
            <p className="leading-relaxed">Products</p>
          </div>
        </div>
      </div>
    </section>
    
    {/* Team Members */}
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-14 mx-auto mt-10">
        <div className="flex flex-col text-center w-full mb-8">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Our Team</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them.</p>
        </div>
        <div className="flex flex-wrap -m-2">

          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img src="https://dummyimage.com/84x84" alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"  />
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">Yuki Oduor</h2>
                <p className="text-gray-500">Manager</p>
              </div>
            </div>
          </div>

          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84"/>
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">Romeo Kallel</h2>
                <p className="text-gray-500">Assistant Manager</p>
              </div>
            </div>
          </div>

          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"/>
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">Jebin Singirankabo</h2>
                <p className="text-gray-500">Accountant</p>
              </div>
            </div>
          </div>

          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84"/>
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">Wambui Karanja</h2>
                <p className="text-gray-500">Sales Manager</p>
              </div>
            </div>
          </div>

          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/80x80"/>
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">Sean Omondi</h2>
                <p className="text-gray-500">Attendant</p>
              </div>
            </div>
          </div>

          <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
            <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
              <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/84x84"/>
              <div className="flex-grow">
                <h2 className="text-gray-900 title-font font-medium">Rin Okumura</h2>
                <p className="text-gray-500">Security</p>
              </div>
            </div>
          </div>   
            
        </div>
      </div>
    </section>

    {/* Call to Action */}
    <section className=" relative bg-cover bg-center bg-gray-50 dark:bg-gray-800 mt-20" style={{ backgroundImage: 'url("https://extension.umd.edu/sites/extension.umd.edu/files/styles/optimized/public/2021-01/Veg_crop_carrot-2743498_1920_Pix.jpg?itok=RXPlXhI7")' }}>
      <div className='absolute inset-0 bg-black opacity-50'></div>
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6 relative z-10">
        <div className="max-w-screen-sm mx-auto text-center">
          <h2 className="mb-4 text-3xl font-extrabold leading-tight tracking-tight text-white dark:text-white">Start
            your free trial today</h2>
          <p className="mb-6 font-light text-white dark:text-gray-400 md:text-lg">From farm-fresh produce to pantry essentials, we've got you covered.</p>
          <a href="#"
            className="text-white bg-yellow-500 hover:bg-yello-700 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none ">
            Explore Now</a>
        </div>
      </div>
    </section>
    </>
  )
}

export default page