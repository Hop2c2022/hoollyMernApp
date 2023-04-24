import React, { useState } from 'react';
import right from '../assets/A.Tengis/rightarrow.png';
import food from '../assets/A.Tengis/food.png';
import arrowright from '../assets/A.Tengis/ArrowRight.png';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';

const CheckOut = () => {
  const chingelteidata = [
    '1r horoo',
    '2r horoo',
    '3r horoo',
    '4r horoo',
    '5r horoo',
    '6r horoo',
    '7r horoo',
    '8r horoo',
    '9r horoo',
    '10r horoo',
    '11r horoo',
    '12r horoo',
    '13r horoo',
  ];
  const Baganuurdata = [
    '1r horoo',
    '2r horoo',
    '3r horoo',
    '4r horoo',
    '5r horoo',
    '6r horoo',
    '7r horoo',
    '8r horoo',
    '9r horoo',
    '10r horoo',
    '11r horoo',
    '12r horoo',
    '13r horoo',
    '14r horoo',
  ];
  const bagakhangaidata = [
    '1r horoo',
    '2r horoo',
    '3r horoo',
    '4r horoo',
    '5r horoo',
    '6r horoo',
    '7r horoo',
    '8r horoo',
    '9r horoo',
    '10r horoo',
    '11r horoo',
    '12r horoo',
    '13r horoo',
    '14r horoo',
  ];
  const [number, setNumber] = useState('');
  const [dist, setDist] = useState();
  const [street, setStreet] = useState('');
  const [fullInfo, setFullInfo] = useState('');
  const [qr, setQR] = useState(false);
  let [count, setCount] = useState(1);
  const [distCheck, setDistCheck] = useState([]);

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
        phoneNumber: number,
      });
      toast.success('Successfully saved!');
      e.preventDefault();
      localStorage.setItem('number', number);
      localStorage.setItem('dist', dist);
      localStorage.setItem('fullInfo', fullInfo);
    }
  };

  const rickroll = () => {
    setQR(true);
  };

  const exceptThisSymbols = ['e', 'E', '+', '-', '.'];

  useEffect(() => {
    if (dist === 'Chingeltei') {
      setDistCheck(chingelteidata);
    } else if (dist == 'Baganuur') {
      setDistCheck(Baganuurdata);
    } else if (dist == 'Baganuur') {
      setDistCheck(Baganuurdata);
    } else if (dist == 'Baganuur') {
      setDistCheck(Baganuurdata);
    } else if (dist == 'Baganuur') {
      setDistCheck(Baganuurdata);
    } else if (dist == 'Baganuur') {
      setDistCheck(Baganuurdata);
    } else if (dist == 'Baganuur') {
      setDistCheck(Baganuurdata);
    } else if (dist == 'Baganuur') {
      setDistCheck(Baganuurdata);
    }
  }, [dist]);

  console.log(street);
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

            <div className="col-span-full">
              <h1>Billing Address</h1>
              <div className="checkbox">
                <input type="checkbox" id="scales" name="scales" className="accent-blue-500  hover:bg-blue-600 mr-2 " />
                <label htmlFor="scales" className="text-gray-300 text-sm">
                  Same as shipping address
                </label>
              </div>
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
        <div className="border w-full lg:h-[97%] 2xl:h-[85%] flex flex-col border-gray-400 p-5 lg:w-[25rem]">
          <div className="flex flex-col h-full justify-evenly">
            <div className="flex flex-col h-full justify-evenly">
              <div className=" gap-x-3 flex ">
                <img src={food} alt="food" className="object-cover h-[80px] w-[80px]" />
                <div className="flex justify-between w-full items-center">
                  <div>
                    <h1>Chicken Tikka Kebab</h1>
                    <h1>50$</h1>

                    <div>
                      <select
                        id="cities"
                        className="bg-black border border-gray-400 text-gray-200 text-sm 0 w-[40%] pl-2 h-[30px] rounded-lg"
                      >
                        <option defaultChecked value="1">
                          1
                        </option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </div>
                  </div>
                  <button className="text-[25px]">✖</button>
                </div>
              </div>
              <div className="h-0.5 w-full bg-gray-300 mt-[0.7vh] mb-[0.7vh]" />
            </div>

            <div className="flex flex-col h-full justify-evenly">
              <div className=" gap-x-3 flex ">
                <img src={food} alt="food" className="object-cover h-[80px] w-[80px]" />
                <div className="flex justify-between w-full items-center">
                  <div>
                    <h1>Chicken Tikka Kebab</h1>
                    <h1>50$</h1>

                    <div>
                      <select
                        id="cities"
                        className="bg-black border border-gray-400 text-gray-200 text-sm 0 w-[40%] pl-2 h-[30px] rounded-lg"
                      >
                        <option defaultChecked value="1">
                          1
                        </option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </div>
                  </div>
                  <button className="text-[25px]">✖</button>
                </div>
              </div>
              <div className="h-0.5 w-full bg-gray-300 mt-[0.7vh] mb-[0.7vh]" />
            </div>
            <div className="flex flex-col h-full justify-evenly">
              <div className=" gap-x-3 flex ">
                <img src={food} alt="food" className="object-cover h-[80px] w-[80px]" />
                <div className="flex justify-between w-full items-center">
                  <div>
                    <h1>Chicken Tikka Kebab</h1>
                    <h1>50$</h1>

                    <div>
                      <select
                        id="cities"
                        className="bg-black border border-gray-400 text-gray-200 text-sm 0 w-[40%] pl-2 h-[30px] rounded-lg"
                      >
                        <option defaultChecked value="1">
                          1
                        </option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                      </select>
                    </div>
                  </div>
                  <button className="text-[25px]">✖</button>
                </div>
              </div>
              <div className="h-0.5 w-full bg-gray-300 mt-[0.7vh] mb-[0.7vh]" />
            </div>
          </div>
          <div className="flex flex-col h-[100%] justify-evenly">
            <div className="">
              <div className="flex justify-between ">
                <h1 className="text-gray-300">Sub Total</h1>
                <p>130$</p>
              </div>
              <div className="flex justify-between">
                <h1 className="text-gray-300">Shipping</h1>
                <p>Free</p>
              </div>
              <div className="flex justify-between">
                <h1 className="text-gray-300">Discount</h1>
                <p>25%</p>
              </div>
              <div className="flex justify-between">
                <h1 className="text-gray-300">Tax</h1>
                <p>54.76$</p>
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
