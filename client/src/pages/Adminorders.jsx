import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';
const Adminorders = () => {
  const navigate = useNavigate();
  const [Data, setData] = useState([]);
  const [adData, setAdData] = useState([]);
  const restaurant = async () => {
    const res = await axios.get(`http://localhost:8000/getadminOrders`);
    setData(res?.data);
    setAdData(orderData);
  };

  const lastData = [];
  Data.map((el) => {
    lastData.push(el?.data[0]);
  });

  const orderData = [];
  lastData.map((el) => {
    orderData.push(el?.data);
  });
  const a = [];
  orderData.map((el) => {
    return _.map(el, function (ed) {
      a.push(ed);
    });
  });

  useEffect(() => {
    restaurant();
  }, [restaurant]);

  return (
    <>
      <div className="h-[100%] grid grid-cols-1 sm:grid-cols-2  gap-x-12 gap-y-12 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mb-14 mt-14">
        {orderData.map((el) => {
          return (
            <div>
              {el.map((ed, key) => {
                return (
                  <div
                    key={key}
                    className="block p-6 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] h-[40vh] md:h-[35vh] lg:h-[38vh] xl:h-[35vh] w-[85vw] sm:w-[43vw] xl:w-[28vw] 2xl:h-[36vh] 2xl:w-[20vw] rounded-lg"
                  >
                    {ed.company}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Adminorders;
