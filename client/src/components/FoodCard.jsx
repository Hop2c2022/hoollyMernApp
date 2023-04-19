import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';

const FoodCard = () => {
  const navigate = useNavigate();
  const [foods, setFoods] = useState([]);
  let val = window.location.search.split('?')[1];
  const orders = async () => {
    if (val == 'breakfast') {
      const res = await axios.get('http://localhost:8000/orders/breakfast');
      setFoods(res?.data?.result);
    } else if (val == 'dinner') {
      const res = await axios.get('http://localhost:8000/orders/dinner');
      setFoods(res?.data?.result);
    } else {
      const res = await axios.get('http://localhost:8000/orders/lunch');
      setFoods(res?.data?.result);
    }
  };

  useState(() => {
    orders();
  }, [orders]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12 mt-12 mb-12 xl:grid-cols-3 ">
      {foods?.map((el) => {
        return (
          <div className="bg-slay-300 hover:bg-white hover:text-black  text-[#fff] border border-black-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 relative w-96 hover:shadow-gray-400 rounded-lg">
            <p className="bg-blue-500 border border-blue-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4">
              {el?.type}
            </p>
            <img className="w-64 h-64 object-contain mx-auto " src={el?.image} />
            <div className="flex flex-col items-center my-3 space-y-2 gap-3">
              <h1 className=" poppins text-lg">{el?.title}</h1>
              <p className=" poppins text-sm text-center">From: {el?.brand}</p>
              <h2 className=" poppins text-2xl font-bold">{el?.price}</h2>
              <button
                onClick={() => navigate(`/shoplist?${el?._id}`)}
                className="bg-blue-800 text-[#fff] px-8 py-2 focus:outline-none poppins rounded-full transform transition duration-300 hover:scale-105"
              >
                Order Now
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FoodCard;
