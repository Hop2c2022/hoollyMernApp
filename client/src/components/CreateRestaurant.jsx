import React from 'react';
import logo from '../assets/logo.png';
import ButtonComp from './ButtonComp';
const CreateRestaurant = () => {
  return (
    <div className="w-[100vw] flex justify-center items-center bg-[#111]">
      <div className="flex flex-col items-center w-[90vw] min-h-screen pt-6 sm:justify-center sm:pt-0 bg-[#111]">
        <div>
          <a href="/">
            <img src={logo} className="h-[50px]" alt="" />
          </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
          <form>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 undefined">
                Restaurant Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="name"
                  placeholder="Pinecone"
                  className="p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 undefined">
                Restaurant Image (url)
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="url"
                  name="url"
                  placeholder="example.jpg"
                  className="p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 undefined">
                Restaurant Description
              </label>
              <div className="flex flex-col items-start">
                <input
                  name="text"
                  placeholder="exampleInfo"
                  className="p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="text" className="block text-sm font-medium text-gray-700 undefined">
                Restaurant Open Time
              </label>
              <div className="flex flex-col items-start">
                <input
                  name="text"
                  placeholder="10:00"
                  className="p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="text" className="block text-sm font-medium text-gray-700 undefined">
                Restaurant Close Time
              </label>
              <div className="flex flex-col items-start">
                <input
                  name="text"
                  placeholder="20:00"
                  className="p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="text" className="block text-sm font-medium text-gray-700 undefined">
                Restaurant Rest Day
              </label>
              <div className="flex flex-col items-start">
                <select
                  className="block appearance-none w-full border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                >
                  <option>Monday</option>
                  <option>Tuesday</option>
                  <option>Wednesday</option>
                  <option>Thursday</option>
                  <option>Friday</option>
                  <option>Saturday</option>
                  <option>Sunday</option>
                </select>
              </div>
            </div>
            <div className="flex items-center justify-end mt-4">
              <ButtonComp />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateRestaurant;
