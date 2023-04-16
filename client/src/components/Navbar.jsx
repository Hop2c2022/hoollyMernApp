import { useState, useEffect } from 'react';
import cartIcon from '../assets/Khash-Erdene/cartIcon.jpg';
import menu from '../assets/Khash-Erdene/menu.png';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);

  const shalgah = () => {
    if (localStorage.getItem('name')) {
      setLoggedIn(true);
    }
  };

  useEffect(() => {
    shalgah();
  }, shalgah);

  const logout = () => {
    localStorage.clear();
    navigate('/login');
    window.location.reload();
  };

  return (
    <>
      <div className="flex text-[#fff] bg-[#111] items-center h-[7vh] w-[100vw]">
        {/* Left Section */}
        <div className="flex items-center justify-center ml-[5vw]">
          <Link to="/">
            <img className="hidden md:flex w-[100%] h-[4.5vh]" src={logo} alt="" />
          </Link>
        </div>
        <div className="flex md:justify-end sm:w-[45vw] w-[10vw] ">
          <ul className="space-x-6 hidden sm:flex">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/shopdetails">Menu</a>
            </li>
            <li>
              <a href="/aboutus">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
          <div className="flex sm:hidden">
            <img className="w-[7vw] sm:w-[5vw]" src={menu} alt="" />
          </div>
        </div>
        {/* Right Section */}
        <div className="flex w-[80vw]  sm:w-[41vw] justify-end">
          <div className="flex items-center">
            <div className="lg:flex space-x-1 hidden">
              <input
                type="text"
                className="  block w-full px-4 py-1 text-blue-500 bg-black border border-blue-400 rounded-full focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Search..."
              />
              <button className="px-2 text-white bg-blue-500 rounded-full ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </div>
            <Link to="/checkout">
              <img
                className="w-[10vw] sm:w-[5vw] 2xl:w-[2vw] md:w-[4vw] lg:w-[3vw]  ml-[0.5vw] h-[4vh] object-contain cursor-pointer"
                src={cartIcon}
                alt=""
              />
            </Link>
            {loggedIn ? (
              <div className="flex items-center gap-x-2 pl-3">
                <button
                  type="button"
                  className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-1.5 text-center ml-2 text-[10px]"
                >
                  {localStorage.getItem('name')}
                </button>
                <button
                  onClick={logout}
                  type="button"
                  className="text-[16px] font-semibold transition duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:via-peach-300 hover:to-blue-300"
                >
                  LogOut
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-x-2 pl-3">
                <Link to="/login">
                  <button
                    type="button"
                    className="text-[16px] font-semibold transition duration-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-blue-500 hover:via-peach-300 hover:to-blue-300"
                  >
                    Login
                  </button>
                </Link>
                <Link to="/register">
                  <button
                    type="button"
                    className="text-black bg-gradient-to-r from-blue-500 via-peach-300 to-blue-300 hover:bg-gradient-to-bl   font-semibold rounded-lg text-[17px] px-4 py-1.5 text-center ml-2"
                  >
                    Register
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
