import React from 'react';
import FoodCard from '../components/FoodCard';
import { useNavigate, useLocation } from 'react-router-dom';
import '../css/testbutton.css';

const ShopDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
      <div
        className={
          (location.pathname === '/shopdetails?breakfast') |
          (location.pathname === '/shopdetails?lunch') |
          (location.pathname === '/shopdetails?dinner')
            ? 'bhgu'
            : ''
        }
      >
        <div className="w-[100vw] flex items-center justify-center gap-x-[2.5vw] h-16 text-white">
          <button
            onClick={reloader}
            className={location.pathname + location.search === '/shopdetails?breakfast' ? 'active' : ''}
          >
            Breakfast
          </button>
          <button
            onClick={reloader2}
            className={location.pathname + location.search === '/shopdetails?lunch' ? 'active' : ''}
          >
            Lunch
          </button>
          <button
            onClick={reloader3}
            className={location.pathname + location.search === '/shopdetails?dinner' ? 'active' : ''}
          >
            Dinner
          </button>
        </div>
        <div className="flex items-center justify-center ">
          <div>
            <FoodCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopDetails;
