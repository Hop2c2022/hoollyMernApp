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

  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2  gap-x-12 gap-y-12 lg:grid-cols-3 xl:grid-cols-4 mb-14 mt-14">
      {data?.map((el) => {
        return (
          <div
            onClick={() => navigate(`/shopdetails?${el?.brandName}`)}
            key={el?._id}
            className="block  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] h-[45vh] sm:h-[40vh] w-[90vw] sm:w-[42vw]  lg:w-[28vw] xl:w-[20vw]  transition transform duration-700 hover:scale-105 cursor-pointer hover:text-white hover:bg-[#000] hover:shadow-gray-400 hover:shadow-xl rounded-lg"
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
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantComp;
