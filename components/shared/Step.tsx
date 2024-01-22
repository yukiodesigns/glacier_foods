import React from 'react';
import { GiBullseye } from "react-icons/gi";
import { FaRegEye } from "react-icons/fa";
import { IoDiamondOutline } from "react-icons/io5";

const Step = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8 text-center">Quality Assurance</h2>
        <div className="relative wrap overflow-hidden">
          <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border left-1/2"></div>
          
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-black shadow-xl w-12 h-12 rounded-full">
              <h1 className="mx-auto font-semibold text-xl text-yellow-600">
                <span><GiBullseye /></span>
              </h1>
            </div>
            <div className="order-1 bg-black rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-yellow-600 text-xl">Mission</h3>
              <p className="text-white leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisi commodo, aliquet velit ac, dapibus elit.</p>
            </div>
          </div>

          <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-black shadow-xl w-12 h-12 rounded-full">
              <h1 className="mx-auto font-semibold text-xl text-yellow-600">
                <span><FaRegEye /></span>
              </h1>
            </div>
            <div className="order-1 bg-black rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-yellow-600 text-xl">Vision</h3>
              <p className="text-white leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisi commodo, aliquet velit ac, dapibus elit.</p>
            </div>
          </div>

         
          <div className="mb-8 flex justify-between items-center w-full right-timeline">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-black shadow-xl w-12 h-12 rounded-full">
              <h1 className="mx-auto font-semibold text-xl text-yellow-600">
                <span><IoDiamondOutline /></span>
              </h1>
            </div>
            <div className="order-1 bg-black rounded-lg shadow-xl w-5/12 px-6 py-4">
              <h3 className="mb-3 font-bold text-yellow-600 text-xl">Values</h3>
              <p className="text-white leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in nisi commodo, aliquet velit ac, dapibus elit.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Step;
