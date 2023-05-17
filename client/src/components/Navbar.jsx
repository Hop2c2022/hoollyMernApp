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
  const [notf, setNotf] = useState(0);

  const shalgah = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/auth/${localStorage.getItem('id')}`);
      setUserInfo(res?.data?.data?.name);
      if (localStorage.getItem('id')) {
        setLoggedIn(true);
      }
    } catch (err) {
      // console.clear();
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

  const getBadge = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/users/${localStorage.getItem('id')}`);
      setNotf(res?.data);
    } catch (err) {
      return err;
    }
  };

  useEffect(() => {
    if (
      localStorage.getItem('id') &&
      (window.location == 'http://localhost:5173/login' || window.location == 'http://localhost:5173/register')
    ) {
      navigate('/');
    }
  }, []);

  useEffect(() => {
    getBadge();
  }, [getBadge]);

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
            <div className="flex items-center justify-center md:ml-[5vw]">
              <Link to="/">
                <img className="hidden md:flex lg:w-[100px] w-[130px] h-[40px] object-contain" src={logo} alt="" />
              </Link>
            </div>
            <div className="flex md:justify-end md:w-[45vw]md:w-[30vw] md:ml-[2.5vw] ">
              <ul className="gap-x-12 hidden md:flex">
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
                    About
                  </p>
                </li>
              </ul>
            </div>
            {nav ? (
              <div className="flex md:hidden ml-[7vw]">
                <img onClick={hamburgerCheck} className="object-contain w-[7vw] sm:w-[5vw] " src={menu} alt="" />
              </div>
            ) : (
              <div className="flex md:justify-end md:w-[45vw] w-[100vw] overflow-hidden md:hidden">
                <ul
                  style={{ textShadow: '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000' }}
                  className=" flex flex-col absolute h-full top-0 backdrop-blur-md w-full space-y-7 justify-center items-center  text-[#fff] z-50 overflow-hidden"
                >
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
            <div className="flex w-[100vw] sm:mr-[10vw] md:mr-[5vw] mr-[5vw] justify-end">
              <div className="flex items-center">
                <Link to="/checkout">
                  <div
                    type="button"
                    className="relative inline-flex items-center p-3 text-sm font-medium text-center  text-white md:w-[7vw] lg:w-full"
                  >
                    <span className="relative inline-block">
                      <img
                        className=" w-[8vw] sm:w-[5vw]  2xl:w-[1.9vw] lg:w-[3vw]  ml-[0.5vw] h-[4vh] object-contain cursor-pointer"
                        src={cartIcon}
                        alt=""
                      />
                      <span className="absolute top-0 right-0 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
                        {notf.length}
                      </span>
                    </span>
                  </div>
                </Link>
                {loggedIn ? (
                  <div className="flex items-center gap-x-2 pl-3">
                    <button
                      type="button"
                      onClick={() => navigate('/profile')}
                      className="inline-block py-1 text-xl text-white bg-gray-700 px-2 hover:bg-gray-700 rounded-xl text-[7px] xl:text-[12px]"
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
                      <button className="inline-block py-1 text-xl text-white bg-gray-700 px-4 hover:bg-gray-700 rounded-xl">
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
