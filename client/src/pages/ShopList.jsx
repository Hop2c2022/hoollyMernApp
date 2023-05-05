import { useEffect, useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ShopList = () => {
  const [priceValue, setPriceValue] = useState(1);
  const [addVal, setAddVal] = useState([]);

  let val = window.location.search.split('?')[1];

  const add = async () => {
    const result = await axios.get(`http://localhost:8000/orders/${val}`);
    setAddVal(result?.data?.result);
    setPrice(result?.data?.result?.price);
  };

  const send = async () => {
    await axios.post(`http://localhost:8000/auth/postCheck/${val}`, {
      userId: localStorage.getItem('id'),
      price: lastprice,
      title: addVal?.title,
      image: addVal?.image,
      currentprice: addVal?.price,
    });
    toast.dark('Successfully Added', {
      icon: '🤯',
    });
  };

  const [price, setPrice] = useState();

  const [num, setNum] = useState(1);

  useEffect(() => {
    add();
  }, [add]);

  const minusValue = () => {
    if (priceValue != 1) {
      setPriceValue(priceValue - 1);
      setNum(num - 1);
    }
  };

  const plusValue = () => {
    if (addVal?.amount != priceValue) {
      setPriceValue(priceValue + 1);
      setNum(num + 1);
    }
  };

  const lastprice = price * num;

  return (
    <div className="bg-[#111]  text-[#fff] flex justify-center">
      <div>
        <ToastContainer />
      </div>
      <div className="relative top-8">
        <a className=" poppins  select-none flex items-center space-x-2" href="/shopdetails?breakfast">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 24 24"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path fill="none" d="M0 0h24v24H0V0z"></path>
            <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21v-2z"></path>
          </svg>
          <span>Back</span>
        </a>
      </div>
      <div className="flex flex-col justify-center items-center h-screen w-3/5">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          <div className="order-2 md:order-1 lg:order-1 flex flex-col justify-center">
            <h1 className="text-center md:text-left lg:text-left text-3xl lg:text-4xl font-semibold poppins pb-4  select-none">
              {addVal?.title}
            </h1>
            <p className="text-center md:text-left lg:text-left text-sm poppins leading-relaxed select-none ">
              {addVal?.description}
            </p>
            <div className="flex items-center justify-center md:justify-start lg:justify-start space-x-6 pt-8">
              <h1 className="text-3xl font-bold poppins select-none">{price * num}$</h1>
              <div className="flex items-center border border-gray-200 px-4 py-2 space-x-6 rounded-full">
                <svg
                  onClick={minusValue}
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 1024 1024"
                  className="text-2xl bg-blue-500 w-8 h-8 rounded-full text-white hover:scale-105 transform transition duration-500 cursor-pointer p-1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M872 474H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h720c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path>
                </svg>
                <div className="flex ">{priceValue}</div>
                <svg
                  onClick={plusValue}
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  t="1551322312294"
                  viewBox="0 0 1024 1024"
                  version="1.1"
                  className="text-2xl bg-blue-500 w-8 h-8 rounded-full text-white hover:scale-105 transform transition duration-500 cursor-pointer p-1"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs></defs>
                  <path d="M474 152m8 0l60 0q8 0 8 8l0 704q0 8-8 8l-60 0q-8 0-8-8l0-704q0-8 8-8Z"></path>
                  <path d="M168 474m8 0l672 0q8 0 8 8l0 60q0 8-8 8l-672 0q-8 0-8-8l0-60q0-8 8-8Z"></path>
                </svg>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-center md:justify-start lg:justify-start">
              <button
                className="flex items-center space-x-3 bg-blue-500 px-6 py-3 text-white poppins rounded-full ring-blue-300 focus:outline-none focus:ring-4 transform transition duration-700 hover:scale-105"
                onClick={send}
              >
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  className="text-xl"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
                </svg>
                <span>Add to Cart</span>
              </button>

              <p className="ml-3 font-bold text-cyan-300">(Remain: {addVal?.amount})</p>
            </div>
          </div>
          <div className="order-1 md:order-2 lg:order-2">
            <img src={addVal?.image} className="w-3/3 md:w-3/3 mx-auto" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopList;
