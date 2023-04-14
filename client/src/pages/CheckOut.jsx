import React, { useState } from 'react';
import right from '../assets/A.Tengis/rightarrow.png';
import food from '../assets/A.Tengis/food.png';
import arrowright from '../assets/A.Tengis/ArrowRight.png';
import axios from 'axios';

const CheckOut = () => {
  const [number, setNumber] = useState('');
  const [dist, setDist] = useState('');
  const [fullInfo, setFullInfo] = useState('');

  const save = async (e) => {
    if (number.length != 8) {
      alert('Utasnii toonii urt buruu baina');
    } else if (dist == '') {
      alert('Duurgee songono uu');
    } else {
      const res = await axios.patch(`http://localhost:8000/auth/register/${localStorage.getItem('id')}`, {
        fullInformation: fullInfo,
        district: dist,
        phoneNumber: number,
      });
      console.log(res);
      console.log('success');
      e.preventDefault();
      localStorage.setItem('number', number);
      localStorage.setItem('dist', dist);
      localStorage.setItem('fullInfo', fullInfo);
    }
  };

  return (
    <div>
      <div className="w-full h-full flex flex-col justify-center  gap-x-5 gap-y-5 lg:flex-row p-8 lg:items-center lg:h-[87.7vh]  bg-[#111] text-[#fff] mt-[0.1vh]">
        <form>
          <h1 className="pb-5 text-[17px]">Shipping Address</h1>
          <div className="flex flex-col gap-x-9 gap-y-2 w-full lg:w-[20vw]">
            <div>
              <label htmlFor="number" className="block mb-2 text-sm font-medium ">
                Phone number
              </label>
              <input
                type="number"
                id="first_name"
                className="bg-black border border-gray-400 text-gray-200 text-sm w-full p-2.5 0"
                placeholder="* * * * * * *"
                required
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
                <option defaultChecked>Choose a city</option>
                <option value="Chingeltei">Chingeltei</option>
                <option value="Sukhbaatar">Sukhbaatar</option>
                <option value="Songinokhairkhan">Songinokhairkhan</option>
                <option value="Khan-Uul">Khan-Uul</option>
                <option value="Baynzurkh">Baynzurkh</option>
                <option value="Bayngok">Bayngok</option>
                <option value="Nalaih">Nalaih</option>
              </select>
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
                <input type="checkbox" id="scales" name="scales" className="accent-orange-500 mr-2 " />
                <label htmlFor="scales" className="text-gray-300 text-sm">
                  Same as shipping address
                </label>
              </div>
            </div>

            <div className="flex mt-5 gap-y-3 flex-col">
              <button
                type="button"
                className="flex items-center w-full p-3 border border-gray-300 bg-orange-400 font-semibold text-white justify-center"
                onClick={save}
              >
                <p> Save</p>
                <img src={right} alt="googleicon" />
              </button>
            </div>
          </div>
        </form>
        <div className="border w-full lg:h-[105%] xl:h-[80%] flex flex-col border-gray-400 p-5 lg:w-[25rem]">
          <div>
            <div className="flex flex-col pb-3">
              <div className=" gap-x-3 flex">
                <img src={food} alt="food" className="object-cover h-[80px] w-[80px]" />
                <div className="flex justify-between  w-full items-center">
                  <div>
                    <h1>Chicken Tikka Kebab</h1>
                    <h1>50$</h1>
                    <div className=" h-[20px] w-[5vw] " htmlFor="custom-input-number">
                      <div className="flex flex-row h-[25px] w-[80px] xl:w-[80px] rounded-full relative bg-transparent mt-1 border border-gray-500">
                        <button className=" border-gray-500 text-gray-600  hover:bg-slate-800 h-full w-20 rounded-full cursor-pointer outline-none">
                          <span className="m-auto text-2xl font-thin">−</span>
                        </button>
                        <input
                          type="number"
                          className="outline-none focus:outline-none text-center w-full 0 font-semibold text-md  md:text-basecursor-default flex items-center bg-black"
                        ></input>
                        <button className=" border-gray-500 text-gray-600  hover:bg-slate-800 h-full w-20 rounded-full cursor-pointer outline-none">
                          <span className="m-auto text-2xl font-thin">+</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <button className="text-[25px]">✖</button>
                </div>
              </div>
              <div className="h-0.5 w-full bg-gray-300 mt-3 mb-1" />
            </div>

            <div className="flex flex-col pb-3">
              <div className=" gap-x-3 flex">
                <img src={food} alt="food" className="object-cover h-[80px] w-[80px]" />
                <div className="flex justify-between  w-full items-center">
                  <div>
                    <h1>Chicken Tikka Kebab</h1>
                    <h1>50$</h1>
                    <div className=" h-[20px] w-[5vw] " htmlFor="custom-input-number">
                      <div className="flex flex-row h-[25px] w-[80px] xl:w-[80px] rounded-full relative bg-transparent mt-1 border border-gray-500">
                        <button className=" border-gray-500 text-gray-600  hover:bg-slate-800 h-full w-20 rounded-full cursor-pointer outline-none">
                          <span className="m-auto text-2xl font-thin">−</span>
                        </button>
                        <input
                          type="number"
                          className="outline-none focus:outline-none text-center w-full 0 font-semibold text-md  md:text-basecursor-default flex items-center bg-black"
                        ></input>
                        <button className=" border-gray-500 text-gray-600  hover:bg-slate-800 h-full w-20 rounded-full cursor-pointer outline-none">
                          <span className="m-auto text-2xl font-thin">+</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <button className="text-[25px]">✖</button>
                </div>
              </div>
              <div className="h-0.5 w-full bg-gray-300 mt-3 mb-1" />
            </div>
            <div className="flex flex-col pb-3">
              <div className=" gap-x-3 flex">
                <img src={food} alt="food" className="object-cover h-[80px] w-[80px]" />
                <div className="flex justify-between  w-full items-center">
                  <div>
                    <h1>Chicken Tikka Kebab</h1>
                    <h1>50$</h1>
                    <div className=" h-[20px] w-[5vw] " htmlFor="custom-input-number">
                      <div className="flex flex-row h-[25px] w-[80px] xl:w-[80px] rounded-full relative bg-transparent mt-1 border border-gray-500">
                        <button className=" border-gray-500 text-gray-600  hover:bg-slate-800 h-full w-20 rounded-full cursor-pointer outline-none">
                          <span className="m-auto text-2xl font-thin">−</span>
                        </button>
                        <input
                          type="number"
                          className="outline-none focus:outline-none text-center w-full 0 font-semibold text-md  md:text-basecursor-default flex items-center bg-black"
                        ></input>
                        <button className=" border-gray-500 text-gray-600  hover:bg-slate-800 h-full w-20 rounded-full cursor-pointer outline-none">
                          <span className="m-auto text-2xl font-thin">+</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <button className="text-[25px]">✖</button>
                </div>
              </div>
              <div className="h-0.5 w-full bg-gray-300 mt-3" />
            </div>
          </div>
          <div className="flex flex-col h-[100%] justify-evenly">
            <div className="pt-1">
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
            <div className="h-0.5 w-full bg-gray-300  mb-1" />
            <div className="flex justify-between pt-2">
              <h1 className="text-[17px]">Total</h1>
              <p>432.65$</p>
            </div>

            <div className="flex gap-y-3 flex-col">
              <button
                type="button"
                className="flex items-center w-full p-3 border border-gray-300 bg-orange-400 font-semibold text-white justify-center rounded-md gap-x-2"
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
