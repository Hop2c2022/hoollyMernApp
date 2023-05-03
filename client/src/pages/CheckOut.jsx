import React, { useState } from 'react';
import right from '../assets/A.Tengis/rightarrow.png';
import food from '../assets/A.Tengis/food.png';
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
  const [qr, setQR] = useState(false);
  const [distCheck, setDistCheck] = useState([]);
  const [orders, setOrders] = useState([]);
  const [final, setFinal] = useState([]);

  const save = async (e) => {
    if (number.length === 0) {
      toast.warning('Enter your phone number please.');
    } else if (number.length != 8) {
      toast.error('Your phone number must be 8 digits!');
    } else if (dist == '') {
      toast.warning('Choose your District please.');
    } else {
      const res = await axios.post(`http://localhost:8000/auth/orderInfo`, {
        fullInformation: fullInfo,
        district: dist,
        street: strt,
        phoneNumber: number,
      });
      toast.success('Successfully saved!');
      e.preventDefault();
      localStorage.setItem('number', number);
      localStorage.setItem('dist', dist);
      localStorage.setItem('street', strt);
      localStorage.setItem('fullInfo', fullInfo);
      console.log(res);
    }
  };

  const rickroll = () => {
    setQR(true);
  };

  const exceptThisSymbols = ['e', 'E', '+', '-', '.'];

  useEffect(() => {
    if (dist === 'Chingeltei') {
      setDistCheck(Chingelteidata);
    } else if (dist == 'Baganuur') {
      setDistCheck(Baganuurdata);
    } else if (dist == 'Bagahangai') {
      setDistCheck(Bagahangaidata);
    } else if (dist == 'Bayngol') {
      setDistCheck(Bayngoldata);
    } else if (dist == 'Baynzurkh') {
      setDistCheck(Baynzurkhdata);
    } else if (dist == 'Sukhbaatar') {
      setDistCheck(Sukhbaatardata);
    } else if (dist == 'Nalaih') {
      setDistCheck(Nalaihdata);
    } else if (dist == 'Songinhairhan') {
      setDistCheck(SonginoKhairkhanData);
    } else if (dist == 'Khanuul') {
      setDistCheck(KhanUulData);
    }
  }, [dist]);

  const dataRetr = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/users/${localStorage.getItem('id')}`);
      setOrders(res?.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    dataRetr();
  }, [dataRetr]);

  // orders.map((el) => {
  //   console.log(el?.title);
  // });

  // console.log(orders?.);

  return (
    <div>
      <div className="w-full h-full flex flex-col justify-center gap-x-5 gap-y-5 lg:flex-row p-8 lg:items-center lg:h-[86.7vh]  bg-[#111] text-[#fff] mt-[0.1vh] relative">
        <div>
          <ToastContainer />
        </div>
        {qr ? (
          <div class="flex flex-col justify-center absolute bg-white backdrop-filter backdrop-blur-md bg-opacity-25 w-[20vw] h-[40vh] text-center p-5 mt-2 z-40">
            <span class="text-white text-2xl font-semibold">Scan this QR for payment</span>
            <div className="flex justify-center">
              <img
                src="https://i.pinimg.com/originals/60/c1/4a/60c14a43fb4745795b3b358868517e79.png"
                alt=""
                width={'300px'}
              />
            </div>
          </div>
        ) : (
          ''
        )}

        <form>
          <h1 className="pb-5 text-[17px]">Shipping Address</h1>
          <div className="flex flex-col gap-x-9 gap-y-2 w-full lg:w-[20vw]">
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
                <option value="Baganuur">Багануур дүүрэг</option>
                <option value="Bagahangai">Багахангай дүүрэг</option>
                <option value="Bayngol">Баянгол дүүрэг</option>
                <option value="Baynzurkh">Баянзүрх дүүрэг</option>
                <option value="Nalaih">Налайх дүүрэг</option>
                <option value="Songinhairhan">Сонгинохайрхан дүүрэг</option>
                <option value="Sukhbaatar">Сүхбаатар дүүрэг</option>
                <option value="Khanuul">Хан-уул дүүрэг</option>
                <option value="Chingeltei">Чингэлтэй дүүрэг</option>
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
                <img src={right} alt="googleicon" />
              </button>
            </div>
          </div>
        </form>
        <div className="border w-full lg:h-[90%] 2xl:h-[78%] flex flex-col border-gray-400 p-5 lg:w-[25rem]">
          <div className="overflow-y-scroll h-[55vh]">
            {orders?.map((el) => {
              return (
                <div key={el?._id} className="flex flex-col h-[102px] ">
                  <div className="flex flex-col ">
                    <div className=" gap-x-3 flex object-cover">
                      <img src={el?.image} alt="food" className=" h-[80px] w-[80px]" />
                      <div className="flex justify-between w-full items-center">
                        <div>
                          <h1>{el?.title}</h1>
                          <h1>{el?.price}$</h1>
                          <p>3 pieces</p>
                        </div>
                        <button className="text-[25px]">✖</button>
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
              <div className="flex justify-between ">
                <h1 className="text-gray-300">Sub Total</h1>
                <p>130$</p>
              </div>
              <div className="flex justify-between">
                <h1 className="text-gray-300">Shipping</h1>
                <p>5'000₮</p>
              </div>
            </div>
            <div className="h-0.5 w-full bg-gray-300 " />
            <div className="flex justify-between pt-1">
              <h1 className="text-[17px]">Total</h1>
              <p>432.65$</p>
            </div>

            <div className="flex gap-y-3 flex-col">
              <button
                type="button"
                className="flex items-center w-full p-3 border border-gray-300 bg-blue-400  hover:bg-blue-600 font-semibold text-white justify-center rounded-md gap-x-2"
                onClick={rickroll}
              >
                <p>Place an order</p>
                <img src={arrowright} alt="googleicon" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
