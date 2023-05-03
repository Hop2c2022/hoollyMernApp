import { useState, useEffect } from 'react';
import cartIcon from '../assets/Khash-Erdene/cartIcon.jpg';
import menu from '../assets/Khash-Erdene/menu.png';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Navbar = () => {
  const navigate = useNavigate();
  const [loggedIn, setLoggedIn] = useState(false);
  const [nav, setNav] = useState(true);
  const [New, setNew] = useState(false);
  const [userInfo, setUserInfo] = useState('');

  const shalgah = async () => {
    const res = await axios.get(`http://localhost:8000/auth/${localStorage.getItem('id')}`);
    setUserInfo(res?.data?.data?.name);
    if (localStorage.getItem('id')) {
      setLoggedIn(true);
    }
  };

  useEffect(() => {
    shalgah();
  }, [shalgah]);

  const logout = () => {
    localStorage.clear();
    navigate('/login');
    window.location.reload();
  };
  const hamburgerCheck = () => {
    if (nav != true) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  for (let i = 0; i > 2; i++) {
    if (nav === true) {
      setNew(true);
    } else {
    }
  }

  return (
    <>
      <div
        className={
          location.pathname === '/' ||
          location.pathname === '/aboutus' ||
          location.search === '?dinner' ||
          '?lunch' ||
          '?breakfast' ||
          location.pathname === '/contact' ||
          location.search.length == 0
            ? 'none'
            : ''
        }
      >
        <div className="flex text-[#fff] bg-[#111] items-center justify-center h-[7vh] w-[100vw] ">
          <div className=" flex items-center mx-3 w-screen ">
            <div className="flex items-center justify-center sm:ml-[5vw]">
              <Link to="/">
                <img className="hidden md:flex w-[100%] h-[4.5vh] object-contain" src={logo} alt="" />
              </Link>
            </div>
            <div className="flex md:justify-end sm:w-[45vw]md:w-[30vw] sm:ml-[2.5vw] ">
              <ul className="gap-x-12 hidden sm:flex">
                <li className="cursor-pointer">
                  <p onClick={() => navigate('/')} className={location.pathname + location.search === '/' ? 'bga' : ''}>
                    Home
                  </p>
                </li>
                <li className="cursor-pointer">
                  <p
                    onClick={() => navigate('/shopdetails?breakfast')}
                    className={
                      location.pathname === '/shopdetails' ||
                      (location.search.length == 25 && location.pathname === '/shoplist')
                        ? 'bga'
                        : ''
                    }
                  >
                    Menu
                  </p>
                </li>
                <li className="cursor-pointer">
                  <p
                    className={location.pathname === '/restaurant' ? 'bga' : ''}
                    onClick={() => navigate('/restaurant')}
                  >
                    Restaurants
                  </p>
                </li>
                <li className="cursor-pointer">
                  <p onClick={() => navigate('/contact')} className={location.pathname === '/contact' ? 'bga' : ''}>
                    Contact
                  </p>
                </li>
                <li className="cursor-pointer">
                  <p
                    onClick={() => navigate('/aboutus')}
                    className={location.pathname + location.search === '/aboutus' ? 'bga' : ''}
                  >
                    AboutUs
                  </p>
                </li>
              </ul>
            </div>
            {nav ? (
              <div className="flex sm:hidden ml-[3.5vw]">
                <img onClick={hamburgerCheck} className="object-contain w-[8vw] sm:w-[5vw]" src={menu} alt="" />
              </div>
            ) : (
              <div className="flex md:justify-end sm:w-[45vw] w-[100vw] overflow-hidden sm:hidden">
                <ul className=" flex flex-col absolute h-full top-0 backdrop-blur-md w-full space-y-7 justify-center items-center  text-[#fff] z-50 overflow-hidden">
                  <li>
                    <a href="/">Home</a>
                  </li>
                  <li>
                    <a href="/shopdetails?breakfast">Menu</a>
                  </li>
                  <li>
                    <a href="/aboutus">About</a>
                  </li>
                  <li>
                    <a href="/contact">Contact</a>
                  </li>
                  <li>
                    <a href="/restaurant">Restaurant</a>
                  </li>
                  <div
                    onClick={() => {
                      window.location.reload();
                    }}
                    className="text-[#fff] cursor-pointer"
                  >
                    ✖
                  </div>
                </ul>
              </div>
            )}

            {/* Right Section */}
            <div className="flex w-[80vw] sm:w-[60vw]  mr-[5vw] justify-end">
              <div className="flex items-center">
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
                      onClick={() => navigate('/profile')}
                      className="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-1.5 text-center ml-2 text-[10px]"
                    >
                      {userInfo}
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
                  <div className="flex items-center gap-x-2 pl-3 mr-[3vw]">
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
        </div>
      </div>
    </>
  );
};

export default Navbar;
