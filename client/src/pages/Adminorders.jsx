import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';
const Adminorders = () => {
  const navigate = useNavigate();
  const [Data, setData] = useState([]);
  const [adData, setAdData] = useState([]);
  const restaurant = async () => {
    const res = await axios.get(`http://localhost:8000/getadminOrders/${localStorage.getItem('id')}`);
    setData(res?.data);
    // console.log(res);
    setAdData(orderData);
  };

  const lastData = [];
  Data.map((el) => {
    lastData.push(el?.data[0]);
  });
  // const other =
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

  // console.log(orderData);

  useEffect(() => {
    restaurant();
  }, [restaurant]);

  return (
    <>
      <div className=" grid grid-cols-1 sm:grid-cols-2  gap-x-12 gap-y-12 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 mb-14 mt-14">
        {lastData?.map((el, key) => {
          return (
            <div
              key={key}
              className="block p-6 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] h-[40vh] md:h-[35vh] lg:h-[38vh] xl:h-[35vh] w-[85vw] sm:w-[43vw] xl:w-[28vw] 2xl:h-[36vh] 2xl:w-[20vw] rounded-lg"
            >
              <div>Street: {el?.street}</div>
              <div>District: {el?.district}</div>
              <div>Phone Number: {el?.phoneNumber}</div>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight  "></h5>
                <p className="mb-4 text-base ">{el?.description}</p>
              </div>
            </div>
          );
        })}
        {a?.map((el, key) => {
          return (
            <div
              key={key}
              // onClick={() => console.log(el)}
              className="block p-6 bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] h-[40vh] md:h-[35vh] lg:h-[38vh] xl:h-[35vh] w-[85vw] sm:w-[43vw] xl:w-[28vw] 2xl:h-[36vh] 2xl:w-[20vw] rounded-lg"
            >
              <div>
                {orderData.map((el) => {
                  return (
                    <div style={{ border: '1px solid red' }}>
                      {el.map((ed) => {
                        return <div>{ed.price}</div>;
                      })}
                    </div>
                  );
                })}
              </div>
              <div>T: {el?._id}</div>
              <div>F: {el?.company}</div>
              <div>G: {el?.phoneNumber}</div>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight  "></h5>
                <p className="mb-4 text-base ">{el?.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Adminorders;
