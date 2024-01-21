// Import necessary components and libraries
import React from 'react';
import Link from 'next/link';

// AboutUs component
const AboutUsSection = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
        <p className="text-gray-600 mb-6">
          Welcome to Glacier Groceries, where quality meets convenience. Our mission is to provide you with the
          best products and services to make your life easier and healthier.
        </p>
        <Link href="/about" className="text-yellow-500 hover:underline">Learn more</Link>
      </div>
    </section>
  );
};

export default AboutUsSection;
