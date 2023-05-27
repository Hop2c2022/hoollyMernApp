import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import menuBg from '../assets/Khash-Erdene/menuBg.jpg';
import restaurantBg from '../assets/Khash-Erdene/restaurantBg.jpg';
import foodDel from '../assets/Khash-Erdene/foodDel.jpg';
import axios from 'axios';

const Admin = () => {
  const [checkRes, setCheckRes] = useState(true);

  const check = async () => {
    const result = await axios.get(`https://hoolly-api.vercel.app/auth/${localStorage.getItem('id')}`);
    setCheckRes(result?.data?.data?.restaurantCreated);
  };

  useEffect(() => {
    check();
  }, [check]);

  const navigate = useNavigate();
  return (
    <div className="bg-[#111]">
      <div className="flex justify-center items-center">
        <div className=" grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-12 mb-12 mt-12">
          <div className="block  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-[90vw] md:w-[50vw] lg:w-[30vw] h-[75vh] transition transform duration-700 hover:scale-105 cursor-pointer hover:text-white hover:bg-[#000] hover:shadow-gray-400 hover:shadow-xl rounded-lg">
            <div onClick={() => navigate('/admin/createMenu')} data-te-ripple-init data-te-ripple-color="light">
              <img className="rounded-t-lg h-[45vh] w-full object-cover" src={menuBg} alt="" />
            </div>
            <div className="p-6">
              <h5 className="mb-2 text-xl font-medium leading-tight  ">Create Menu</h5>
              <p className="mb-4 text-base ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus molestias possimus eum ducimus
                amet, sapiente voluptatum incidunt distinctio doloremque eveniet.
              </p>
              <button
                type="button"
                className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                data-te-ripple-init
                data-te-ripple-color="light"
                onClick={() => navigate('/admin/createMenu')}
              >
                Add Menu
              </button>
            </div>
          </div>
          {checkRes ? (
            <div className="block  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-[90vw] md:w-[50vw] lg:w-[30vw] md:h-[75vh] h-[80vh] transition transform duration-700 hover:scale-105 cursor-pointer hover:text-white hover:bg-[#000] hover:shadow-gray-400 hover:shadow-xl rounded-lg">
              <div onClick={() => navigate('/admin/orders')} data-te-ripple-init data-te-ripple-color="light">
                <img className="rounded-t-lg h-[45vh] w-full object-cover" src={foodDel} alt="" />
              </div>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight  ">Admin Orders</h5>
                <p className="mb-4 text-base ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus molestias possimus eum ducimus
                  amet, sapiente voluptatum incidunt distinctio doloremque eveniet.
                </p>
                <button
                  type="button"
                  className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  onClick={() => navigate('/admin/orders')}
                >
                  Check Orders
                </button>
              </div>
            </div>
          ) : (
            <div className="block  bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] w-[90vw] md:w-[50vw] lg:w-[30vw] h-[75vh] transition transform duration-700 hover:scale-105 cursor-pointer hover:text-white hover:bg-[#000] hover:shadow-gray-400 hover:shadow-xl rounded-lg">
              <div onClick={() => navigate('/admin/createRestaurant')} data-te-ripple-init data-te-ripple-color="light">
                <img className="rounded-t-lg h-[45vh] w-full object-cover" src={restaurantBg} alt="" />
              </div>
              <div className="p-6">
                <h5 className="mb-2 text-xl font-medium leading-tight  ">Create Restaurant</h5>
                <p className="mb-4 text-base ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus molestias possimus eum ducimus
                  amet, sapiente voluptatum incidunt distinctio doloremque eveniet.
                </p>
                <button
                  type="button"
                  className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  onClick={() => navigate('/admin/createRestaurant')}
                >
                  Add Restaurant
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
