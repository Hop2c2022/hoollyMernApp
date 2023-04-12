import React from 'react';
import FoodCard from '../components/FoodCard';

const ShopDetails = () => {
  return (
    <div className="bg-[#111]">
      <div className="flex items-center justify-center space-x-6 h-16 text-white">
        <button className="flex w-24 h-9 active_menu_tab poppins bg-blue-500 justify-center rounded-full items-center">
          Breakfast
        </button>
        <button className="flex w-24 h-9 menu_tab poppins justify-center rounded-full items-center">Lunch</button>
        <button className="flex w-24 h-9 menu_tab poppins justify-center rounded-full items-center">Dinner</button>
      </div>
      <div className="flex items-center justify-center ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-7 gap-y-7 mt-12 xl:grid-cols-3 ">
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
          <FoodCard />
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
