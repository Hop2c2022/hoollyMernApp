import ButtonComp from './ButtonComp';
import { useEffect, useState } from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateFood = () => {
  const [foodName, setFoodName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [amount, setAmount] = useState('');
  const [foodImg, setFoodImg] = useState('');
  const [foodBrand, setFoodBrand] = useState('');
  const [type, setType] = useState('');

  const info = async () => {
    const res = await axios.get(`http://localhost:8000/auth/${localStorage.getItem('id')}`);
    setFoodBrand(res?.data?.data?.company);
  };

  useEffect(() => {
    info();
  }, [info]);

  console.log(foodName);

  const submit = async () => {
    try {
      const res = await axios.post('http://localhost:8000/auth/createOrder', {
        amount: amount,
        price: price,
        title: foodName,
        image: foodImg,
        description: description,
        type: type,
        brand: foodBrand,
        restaurantId: localStorage.getItem('id'),
      });
      console.log(res);
      if (res?.status == 201) {
        toast.success('Successfully created');
      }
    } catch (err) {
      console.log(err);
      toast.warning('Please write all field');
    }
  };

  return (
    <div className="w-[100vw] flex justify-center items-center bg-[#111]">
      <div>
        <ToastContainer />
      </div>
      <div className="flex flex-col items-center w-[90vw] min-h-screen pt-6 sm:justify-center sm:pt-0 bg-[#111]">
        <div>
          <Link to="/">
            <img src={logo} className="h-[50px]" alt="" />
          </Link>
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
                  onChange={(e) => setFoodName(e.target.value)}
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
                  onChange={(e) => setFoodImg(e.target.value)}
                  placeholder="example.jpg"
                  className="p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="mt-4">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 undefined">
                Food Restaurant Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  name="text"
                  placeholder="Pinecone"
                  readOnly
                  defaultValue={foodBrand}
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
                  name="number"
                  placeholder="9.99$"
                  onChange={(e) => setPrice(e.target.value)}
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
                  onChange={(e) => setDescription(e.target.value)}
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
                  onChange={(e) => setAmount(e.target.value)}
                  className="p-2 block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="flex flex-col items-start mt-4">
              <select
                className="block appearance-none w-full border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                onChange={(e) => setType(e.target.value)}
              >
                <option defaultValue={'breakfast'}>breakfast</option>
                <option>lunch</option>
                <option>dinner</option>
              </select>
            </div>
            <div onClick={submit} className="flex items-center justify-end mt-4">
              <ButtonComp />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateFood;
