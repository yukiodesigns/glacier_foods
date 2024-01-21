import React from 'react'
import Link from 'next/link';
import { Button } from '../ui/button';

const Header = () => {
  return (
  <header className="body-font bg-black text-white">
    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center ">
      <Link href="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span className="ml-3 text-xl text-white">Glaicier</span>
      </Link>
      <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
        <Link href="/about" className="mr-5 hover:text-yellow-800">About</Link>
        <Link href="/shop" className="mr-5 hover:text-yellow-800">Shop</Link>
        <Link href="/privacy-policy" className="mr-5 hover:text-yellow-800">Privacy Policy</Link>
      </nav>
      
      <Button className='inline-flex items-center border-yellow-500 border-2 focus:outline-none text-base mt-4 md:mt- bg-gold text-white px-4 py-2 rounded-sm hover:bg-yellow-500 mr-5'> <Link href="/login">Login</Link></Button>
      <Button className='inline-flex items-center border-yellow-500 border-2 focus:outline-none text-base mt-4 md:mt- bg-black text-white px-4 py-2 rounded-sm hover:bg-yellow-500 mr-5'><Link href="/register">Register</Link></Button>
    </div>
  </header>
  );
};


export default Header