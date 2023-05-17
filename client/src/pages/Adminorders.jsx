import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import _ from 'lodash';
const Adminorders = () => {
  const navigate = useNavigate();
  const [Data, setData] = useState([]);
  const [adData, setAdData] = useState([]);
  const [addressD, setAddressD] = useState([]);
  const restaurant = async () => {
    const res = await axios.get(`http://localhost:8000/getadminOrders`);
    setData(res?.data);
    setAdData(orderData);
    setAddressD(res?.data);
  };

  const b = [];

  addressD.map((el) => {
    b.push(el?.data[0]);
  });

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
        {orderData.map((el, id) => {
          return (
            <div key={id}>
              <div>
                {el.map((ed, key) => {
                  return (
                    <div
                      key={key}
                      className="block p-3 border-solid border-2 border-blue-500 border-opacity-50 h-full rounded-lg"
                    >
                      {ed.title} <div>Pieces: {ed.pieces}</div>
                    </div>
                  );
                })}
              </div>
              {b.map((el, i) => {
                return (
                  <div
                    key={i}
                    style={{ display: id == i ? 'flex' : 'none' }}
                    className="border-solid border-2 border-gray-500 p-4 rounded-lg flex-col"
                  >
                    <p>District: {el?.district}</p>
                    <p>Street: {el?.street}</p>
                    <p>Full Information: {el?.fullInformation}</p>
                    <p>Phone Number: {el?.phoneNumber}</p>
                  </div>
                );
              })}
              <div className=" relative inline-flex group">
                <div className="  absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                <a
                  title="Get quote now"
                  className="relative inline-flex items-center justify-center px-4 py-2 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  Complete
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Adminorders;
