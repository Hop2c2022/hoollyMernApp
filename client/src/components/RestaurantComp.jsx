import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RestaurantComp = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const restaurant = async () => {
    const res = await axios.get('http://localhost:8000/restaurant');
    setData(res?.data?.result);
  };

  useEffect(() => {
    restaurant();
  }, [restaurant]);

  // console.log(data);

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2  gap-x-12 gap-y-12 lg:grid-cols-3 xl:grid-cols-4 mb-12 mt-12">
      {data?.map((el) => {
        return (
          <div
            key={el?._id}
            className="block  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] h-[45vh] sm:h-[50vh] w-[90vw] sm:w-[42vw]  lg:w-[28vw] xl:w-[20vw]  transition transform duration-700 hover:scale-105 cursor-pointer hover:text-white hover:bg-[#000] hover:shadow-gray-400 hover:shadow-xl rounded-lg"
          >
            <a href="#!" data-te-ripple-init data-te-ripple-color="light">
              <img className="rounded-t-lg h-[23vh] w-full object-cover" src={el?.brandImg} alt="" />
            </a>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight  ">
                {el?.brandName} ({el?.openTime}-{el?.closeTime})
              </h5>
              <p className="mb-4 text-base ">{el?.description}</p>
              <p>Close Day: {el?.restDay}</p>
              <button
                type="button"
                className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light"
                onClick={() => navigate(`/shopdetails?${el?.brandName}`)}
              >
                Visit
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantComp;
