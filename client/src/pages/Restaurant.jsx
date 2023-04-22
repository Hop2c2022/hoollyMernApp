import React from 'react';
import RestaurantComp from '../components/RestaurantComp';

const Restaurant = () => {
  return (
    <div className="bg-[#111] h-full">
      <div className="flex items-center justify-center">
        <div>
          <RestaurantComp />
        </div>
      </div>
    </div>
  );
};

export default Restaurant;
