import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios';
import Loader from './reloadcard';
import Empty from './Empty';

const FoodCard = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const [foods, setFoods] = useState([]);
  const [checkData, setCheckData] = useState(false);
  let val = window.location.search.split('?')[1];
  const orders = async () => {
    if (val == 'breakfast') {
      const res = await axios.get('https://hoolly-api.vercel.app/orders/breakfast');
      setFoods(res?.data?.result);
      setLoading(false);
    } else if (val == 'dinner') {
      const res = await axios.get('https://hoolly-api.vercel.app/orders/dinner');
      setFoods(res?.data?.result);
      setLoading(false);
    } else if (val == 'lunch') {
      const res = await axios.get('https://hoolly-api.vercel.app/orders/lunch');
      setFoods(res?.data?.result);
      setLoading(false);
    } else {
      const res = await axios.get(`https://hoolly-api.vercel.app/restaurant/${val}`);
      if (res?.data?.result?.length == 0) {
        setCheckData(true);
        setLoading(false);
      } else {
        setFoods(res?.data?.result);
        setLoading(false);
      }
    }
  };

  useState(() => {
    orders();
  }, [orders]);

  return (
    <>
      {checkData ? (
        <div>
          <Empty />
        </div>
      ) : (
        ''
      )}
      {loading ? (
        <Loader />
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12 mt-12 mb-12 xl:grid-cols-3 ">
          {foods?.map((el, key) => {
            return (
              <div
                onClick={() => navigate(`/shoplist?${el?._id}`)}
                key={key}
                className="bg-slay-300 hover:bg-white hover:text-black cursor-pointer text-[#fff] border border-black-100 transition transform duration-700 hover:scale-105 p-4 relative w-[90vw] lg:w-[28vw] xl:w-96 hover:shadow-gray-400 hover:shadow-xl rounded-lg"
              >
                <p className="bg-blue-500 border border-blue-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4">
                  {el?.type}
                </p>
                <img className="w-64 h-64 object-contain mx-auto " src={el?.image} />
                <div className="flex flex-col items-center my-3 space-y-2 gap-3">
                  <h1 className=" poppins text-lg">{el?.title}</h1>
                  <p className=" poppins text-sm text-center">From: {el?.brand}</p>
                  <h2 className=" poppins text-2xl font-bold">{el?.price} ₮</h2>
                  <button
                    onClick={() => (window.location = `/shoplist?${el?._id}`)}
                    className="bg-blue-800 text-[#fff] px-8 py-2 focus:outline-none poppins rounded-full transform transition duration-300 hover:scale-105"
                  >
                    Order Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};

export default FoodCard;
