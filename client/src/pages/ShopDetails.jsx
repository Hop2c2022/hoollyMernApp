import React from 'react';
import FoodCard from '../components/FoodCard';
import { useNavigate } from 'react-router-dom';

const ShopDetails = () => {
  const navigate = useNavigate();

  const reloader = () => {
    navigate('/shopdetails?breakfast');
    window.location.reload();
  };

  const reloader2 = () => {
    navigate('/shopdetails?lunch');
    window.location.reload();
  };

  const reloader3 = () => {
    navigate('/shopdetails?dinner');
    window.location.reload();
  };

  return (
    <div className="bg-[#111] h-full">
      <div className="flex items-center justify-center space-x-6 h-16 text-white">
        <button
          onClick={reloader}
          className="flex w-24 h-9 active_menu_tab poppins bg-blue-500 justify-center rounded-full items-center"
        >
          Breakfast
        </button>
        <button onClick={reloader2} className="flex w-24 h-9 menu_tab poppins justify-center rounded-full items-center">
          Lunch
        </button>
        <button onClick={reloader3} className="flex w-24 h-9 menu_tab poppins justify-center rounded-full items-center">
          Dinner
        </button>
      </div>
      <div className="flex items-center justify-center ">
        <div>
          <FoodCard />
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
