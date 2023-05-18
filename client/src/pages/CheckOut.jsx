import React, { useState } from 'react';
import arrowright from '../assets/A.Tengis/ArrowRight.png';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import {
  Chingelteidata,
  Baganuurdata,
  Bagahangaidata,
  Bayngoldata,
  Baynzurkhdata,
  Sukhbaatardata,
  Nalaihdata,
  SonginoKhairkhanData,
  KhanUulData,
} from '../duuregdata';

const CheckOut = () => {
  const [number, setNumber] = useState('');
  const [dist, setDist] = useState();
  const [strt, setStreet] = useState();
  const [fullInfo, setFullInfo] = useState('');
  const [distCheck, setDistCheck] = useState([]);
  const [orders, setOrders] = useState([]);
  const [place, setPlace] = useState(false);
  const [places, setPlaces] = useState([]);
  const [songson, setSongson] = useState(false);

  const save = async (e) => {
    if (localStorage.getItem('id')) {
      if (number.length === 0) {
        toast.warning('Enter your phone number please.');
      } else if (number.length != 8) {
        toast.error('Your phone number must be 8 digits!');
      } else if (dist == '') {
        toast.warning('Choose your District please.');
      } else {
        const res = await axios.post(`http://localhost:8000/place`, {
          userId: localStorage.getItem('id'),
          fullInformation: fullInfo,
          district: dist,
          street: strt,
          phoneNumber: number,
        });
        toast.success('Successfully added!');
        e.preventDefault();
      }
    } else {
      toast.warning('Please login first.');
    }
  };

  const exceptThisSymbols = ['e', 'E', '+', '-', '.'];

  useEffect(() => {
    if (dist === 'Чингэлтэй дүүрэг') {
      setDistCheck(Chingelteidata);
    } else if (dist == 'Багануур дүүрэг') {
      setDistCheck(Baganuurdata);
    } else if (dist == 'Багахангай дүүрэг') {
      setDistCheck(Bagahangaidata);
    } else if (dist == 'Баянгол дүүрэг') {
      setDistCheck(Bayngoldata);
    } else if (dist == 'Баянзүрх дүүрэг') {
      setDistCheck(Baynzurkhdata);
    } else if (dist == 'Sukhbaatar') {
      setDistCheck(Sukhbaatardata);
    } else if (dist == 'Налайх дүүрэг') {
      setDistCheck(Nalaihdata);
    } else if (dist == 'Сонгинохайрхан дүүрэг') {
      setDistCheck(SonginoKhairkhanData);
    } else if (dist == 'Хан-уул дүүрэг') {
      setDistCheck(KhanUulData);
    }
  }, [dist]);

  const dataRetr = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/users/${localStorage.getItem('id')}`);
      setOrders(res?.data);
    } catch (err) {
      toast.dark(err.message);
    }
  };

  const Placeret = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/placeget/${localStorage.getItem('id')}`);
      setPlaces(res?.data);
    } catch (err) {
      toast.dark(err.message);
    }
  };

  const fooddelete = async (_id) => {
    try {
      await axios.delete(`http://localhost:8000/checkdel/${_id}`);
      toast.success('Successfully deleted');
    } catch (err) {
      toast.dark(err.message);
    }
  };

  useEffect(() => {
    dataRetr();
    Placeret();
  }, [dataRetr, Placeret]);

  const pnum = localStorage.getItem('number');
  const str = localStorage.getItem('street');
  const distr = localStorage.getItem('dist');

  const ordercheck = (_id) => {
    if (pnum && str && str && distr) {
      window.location = '/payment';
    } else {
      if (localStorage.getItem('id')) {
        toast.dark('Please select address or write address!', {
          icon: '😋',
        });
      } else {
        toast.dark('Please login first', {
          icon: '🚀',
        });
      }
    }
  };

  const selectPlace = async (_id) => {
    try {
      const res = await axios.get(`http://localhost:8000/selectplace/${_id}`);
      if (res?.status == 200) {
        localStorage.setItem('number', res?.data?.result?.phoneNumber);
        localStorage.setItem('dist', res?.data?.result?.district);
        localStorage.setItem('street', res?.data?.result?.street);
        localStorage.setItem('fullInfo', res?.data?.result?.fullInformation);
      }
    } catch (err) {
      toast.dark(err.message);
    }
  };

  const changePlace = () => {
    localStorage.removeItem('dist');
    localStorage.removeItem('street');
    localStorage.removeItem('fullInfo');
    localStorage.removeItem('number');
    setSongson(true);
  };

  const songoh = () => {
    setSongson(false);
  };
  let finalPrice = 0;
  orders.map((el) => {
    finalPrice += el?.price;
  });

  // if(orders)

  return (
    <div>
      <div className="w-full h-full flex flex-col justify-center gap-x-5 gap-y-5 lg:flex-row p-8 lg:items-center lg:h-[93vh]  bg-[#111] text-[#fff] relative">
        <div>
          <ToastContainer />
        </div>
        <form>
          <h1 className="pb-5 text-[17px]">Shipping Address</h1>
          {songson ? (
            <div className="flex flex-col gap-x-9 gap-y-2 w-full lg:w-[20vw]">
              <div
                className="border w-full p-3 overflow-y-scroll h-[55vh]"
                style={{ height: place ? '20vh' : '55.8vh' }}
              >
                {places?.map((el, key) => {
                  return (
                    <div key={key} className="flex flex-col h-[102px ">
                      <div className="flex flex-col ">
                        <div className=" gap-x-3 flex object-cover">
                          <div className="flex justify-between w-full items-center">
                            <div>
                              <h1>{el?.district}</h1>
                              <h1>{el?.street}</h1>
                              <p>{el?.phoneNumber}</p>
                            </div>
                            <div
                              className="  bg-black flex justify-center items-center "
                              value={el?._id}
                              onClick={() => selectPlace(el?._id)}
                            >
                              <div className=" relative inline-flex group" onClick={songoh}>
                                <div className="  absolute transitiona-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt"></div>
                                <a
                                  title="Get quote now"
                                  className="relative inline-flex items-center justify-center px-4 py-2 text-lg font-bold text-white transition-all duration-200 bg-gray-900 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                                  role="button"
                                >
                                  Select
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="h-0.5 w-full bg-gray-300 mt-[0.7vh] mb-[0.7vh]" />
                      </div>
                    </div>
                  );
                })}
              </div>

              {place ? (
                <div>
                  <div>
                    <label htmlFor="number" className="block mb-2 text-sm font-medium " maxLength="8">
                      Phone number
                    </label>
                    <input
                      type="number"
                      id="first_name"
                      className="bg-black border border-gray-400 text-gray-200 text-sm w-full p-2.5 0"
                      placeholder="* * * * * * *"
                      required
                      onKeyDown={(e) => exceptThisSymbols.includes(e.key) && e.preventDefault()}
                      onChange={(e) => setNumber(e.target.value)}
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block mb-2 text-sm font-medium ">
                      Districts
                    </label>
                    <select
                      onChange={(e) => setDist(e.target.value)}
                      id="cities"
                      className="bg-black border border-gray-400 text-gray-200 text-sm p-2.5 0 w-[100%]"
                    >
                      <option defaultChecked>Choose a Districts</option>
                      <option value="Багануур дүүрэг">Багануур дүүрэг</option>
                      <option value="Багахангай дүүрэг">Багахангай дүүрэг</option>
                      <option value="Баянгол дүүрэг">Баянгол дүүрэг</option>
                      <option value="Баянзүрх дүүрэг">Баянзүрх дүүрэг</option>
                      <option value="Налайх дүүрэг">Налайх дүүрэг</option>
                      <option value="Сонгинохайрхан дүүрэг">Сонгинохайрхан дүүрэг</option>
                      <option value="Сүхбаатар дүүрэг">Сүхбаатар дүүрэг</option>
                      <option value="Хан-уул дүүрэг">Хан-уул дүүрэг</option>
                      <option value="Чингэлтэй дүүрэг">Чингэлтэй дүүрэг</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="company" className="block mb-2 text-sm font-medium ">
                      Street
                    </label>
                    {dist ? (
                      <select
                        onChange={(e) => setStreet(e.target.value)}
                        id="street"
                        className="bg-black border border-gray-400 text-gray-200 text-sm p-2.5 0 w-[100%]"
                      >
                        {distCheck?.map((el) => {
                          return <option key={el}>{el}</option>;
                        })}
                      </select>
                    ) : (
                      <select
                        disabled
                        id="street"
                        className="bg-black border border-gray-400 text-gray-200 text-sm p-2.5 0 w-[100%]"
                      >
                        <option defaultChecked>Choose a Street</option>;
                      </select>
                    )}
                  </div>
                  <div>
                    <label htmlFor="company" className="block mb-2 text-sm font-medium ">
                      Full information
                    </label>
                    <input
                      type="text"
                      id="first_name"
                      className="bg-black border border-gray-400 text-gray-200 text-sm w-full p-2.5 0"
                      required
                      onChange={(e) => setFullInfo(e.target.value)}
                    />
                  </div>
                  <div className="flex mt-5 gap-y-3 flex-col">
                    <button
                      type="button"
                      className="flex items-center w-full p-3 border border-gray-300 bg-blue-400  hover:bg-blue-600 font-semibold text-white justify-center"
                      onClick={save}
                    >
                      <p> Save</p>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="flex mt-5 gap-y-3 flex-col">
                  <button
                    type="button"
                    className="flex items-center w-full p-3 border border-gray-300 bg-blue-400  hover:bg-blue-600 font-semibold text-white justify-center"
                    onClick={() => setPlace(true)}
                  >
                    <p> Add Place</p>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <div className="border w-full lg:h-[90%] 2xl:h-[78%] flex flex-col border-gray-400 p-5 lg:w-[25rem]">
                <div>District: {localStorage.getItem('dist')}</div>
                <div>Street: {localStorage.getItem('street')}</div>
                <div>Full information: {localStorage.getItem('fullInfo')} </div>
                <div>Phone Number: {localStorage.getItem('number')}</div>
                <div className="flex mt-5 gap-y-3 flex-col">
                  <button
                    type="button"
                    className="flex items-center w-full p-3 border border-gray-300 bg-blue-400  hover:bg-blue-600 font-semibold text-white justify-center gap-x-2"
                    onClick={changePlace}
                  >
                    <p> Change Place</p>
                    <img
                      className="w-[20px] h-[20px]"
                      src=" https://cdn-icons-png.flaticon.com/512/727/727606.png "
                      alt="googleicon"
                    />
                  </button>
                </div>
              </div>
            </>
          )}
        </form>

        <div className="border w-full lg:h-[90%] 2xl:h-[78%] flex flex-col border-gray-400 p-5 lg:w-[25rem]">
          <div className="overflow-y-scroll h-[55vh]">
            {orders?.map((el) => {
              return (
                <div key={el?._id} className="flex flex-col h-[102px] ">
                  <div className="flex flex-col ">
                    <div className=" gap-x-3 flex object-cover">
                      <img src={el?.image} alt="food" className="h-[80px] w-[80px] object-contain" />
                      <div className="flex justify-between w-full items-center">
                        <div>
                          <h1>{el?.title}</h1>
                          <h1>{el?.price} ₮</h1>
                          <p>{el?.pieces} pieces</p>
                        </div>
                        <button className="text-[25px]" onClick={() => fooddelete(el?._id)}>
                          ✖
                        </button>
                      </div>
                    </div>
                    <div className="h-0.5 w-full bg-gray-300 mt-[0.7vh] mb-[0.7vh]" />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="h-0.5 w-full bg-gray-300 mt-[0.7vh] mb-[0.7vh]" />
          <div className="flex flex-col h-[100%] justify-evenly">
            <div className="">
              <div className="flex justify-between">
                <h1 className="text-gray-300">Shipping</h1>
                <p>5'000₮</p>
              </div>
            </div>
            <div className="h-0.5 w-full bg-gray-300 " />
            <div className="flex justify-between pt-1">
              <h1 className="text-[17px]">Total</h1>
              <p>{finalPrice + 5000} ₮</p>
            </div>

            <div className="flex gap-y-3 flex-col">
              <button
                type="button"
                className="flex items-center w-full p-3 border border-gray-300 bg-blue-400  hover:bg-blue-600 font-semibold text-white justify-center rounded-md gap-x-2"
                onClick={ordercheck}
              >
                <p>Place an order</p>
                <img
                  className="w-[20px] h-[20px]"
                  src="https://cdn-icons-png.flaticon.com/512/2268/2268536.png "
                  alt="googleicon"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
