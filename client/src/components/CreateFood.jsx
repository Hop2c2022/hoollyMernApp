import ButtonComp from './ButtonComp';
import { useState } from 'react';
import logo from '../assets/logo.png';

const CreateFood = () => {
  const [foodname, setFoodname] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');

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
                Food Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="name"
                  placeholder="Chicken"
                  className="p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 undefined">
                Food Image (url)
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
                Food Restaurant
              </label>
              <div className="flex flex-col items-start">
                <input
                  name="text"
                  placeholder="Pinecone"
                  className="p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="text" className="block text-sm font-medium text-gray-700 undefined">
                Food price
              </label>
              <div className="flex flex-col items-start">
                <input
                  name="text"
                  placeholder="9.99$"
                  className="p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="text" className="block text-sm font-medium text-gray-700 undefined">
                Food description
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
                Food amount
              </label>
              <div className="flex flex-col items-start">
                <input
                  name="text"
                  placeholder="20"
                  className="p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
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

export default CreateFood;
