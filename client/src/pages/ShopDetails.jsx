import FoodCard from '../components/FoodCard';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import '../css/testbutton.css';
import React, { useEffect, useState } from 'react';

const ShopDetails = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [alga, setAlga] = useState(false);

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

  useEffect(() => {
    if (location.search === '?breakfast' || location.search === '?lunch' || location.search === '?dinner') {
      setAlga(true);
    }
  }, [location.search]);

  console.log(location.search);
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
        {alga ? (
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
        ) : (
          <div>
            <div className="w-[100vw] flex items-center gap-x-[2.5vw] h-16 text-white">
              <div className="relative top-8 xl:ml-[22vw] lg:ml-[20vw] ml-[5vw]">
                <a className=" poppins  select-none flex items-center space-x-2" href="/restaurant">
                  <svg
                    stroke="currentColor"
                    fill="currentColor"
                    strokeWidth="0"
                    viewBox="0 0 24 24"
                    height="1em"
                    width="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path fill="none" d="M0 0h24v24H0V0z"></path>
                    <path d="M21 11H6.83l3.58-3.59L9 6l-6 6 6 6 1.41-1.41L6.83 13H21v-2z"></path>
                  </svg>
                  <span>Back</span>
                </a>
              </div>
            </div>
          </div>
        )}
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
