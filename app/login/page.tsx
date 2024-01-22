// pages/login.js
import React from 'react';

const page = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full">
        <div>
          <img
            className="mx-auto h-12 w-auto"
            src="https://www.svgrepo.com/show/301692/login.svg"
            alt="Workflow"
          />
          <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
            Log in to your account
          </h2>
        </div>
        <form className="mt-8">
          <div className="rounded-md shadow-sm">
            <div>
              <label className='text-lg'>Email Address</label>
              <input
                aria-label="Email address"
                name="email"
                type="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Email address"
              />
            </div>
            <div className="-mt-px">
              <label className='text-lg py-2 mb-2'>Password</label>
              <input
                aria-label="Password"
                name="password"
                type="password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10 sm:text-sm sm:leading-5"
                placeholder="Password"
              />
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember_me"
                type="checkbox"
                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
              />
              <label htmlFor="remember_me" className="ml-2 block text-sm leading-5 text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm leading-5">
              <a href="#" className="font-medium text-yellow-600 hover:text-yellow-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                Forgot your password?
              </a>
            </div>
          </div>
          <div className="text-lg mt-2 ">
              <a href="#" className="font-medium text-black focus:outline-none focus:underline transition ease-in-out duration-150">
                Don't have an account? <span className='text-yellow-600'>Register</span>
              </a>
            </div>
          <div className="mt-4">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-500 focus:outline-none focus:border-yellow-700 focus:shadow-outline-indigo active:bg-yellow-800 transition duration-150 ease-in-out"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default page;
