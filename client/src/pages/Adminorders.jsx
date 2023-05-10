import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Adminorders = () => {
  const navigate = useNavigate();
  const [Data, setData] = useState([]);
  let bolson = [];
  const restaurant = async () => {
    const res = await axios.get(`http://localhost:8000/getadminOrders/${localStorage.getItem('id')}`);
    setData(res?.data);
  };

  //   const getDt = () => {
  Data.map((el) => {
    bolson.push(el);
  });
  //   };

  //   useEffect(() => {
  //     getDt;
  //   }, [getDt]);

  //   console.log(bolson);

  useEffect(() => {
    restaurant();
  }, [restaurant]);

  return (
    <>
      <div className=" grid grid-cols-1 sm:grid-cols-2  gap-x-12 gap-y-12 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mb-14 mt-14">
        {bolson?.map((el) => {
          return (
            <div
              key={el?._id}
              className="block p-6 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] h-[40vh] md:h-[35vh] lg:h-[38vh] xl:h-[35vh] w-[85vw] sm:w-[43vw] xl:w-[28vw] 2xl:h-[36vh] 2xl:w-[20vw] rounded-lg"
            >
              <div>Street:{el?.street}</div>
              <div>District:{el?.district}</div>
              <div>Phone Number:{el?.phoneNumber}</div>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight  ">
                  {el?.brandName} ({el?.openTime}-{el?.closeTime})
                </h5>
                <p className="mb-4 text-base ">{el?.description}</p>
                <p>pieces {el?.restDay}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Adminorders;
