import React from 'react';
import emailicon from '../assets/A.Tengis/emailicon.png';
import { useState } from 'react';
import verify from '../assets/A.Tengis/verified.png';

const Forgotpass = () => {
  const [Code, setCode] = useState(true);

  const recovercode = () => {
    setCode(true);
  };
  return (
    <div className="relative flex flex-col justify-center overflow-hidden h-[93vh]  bg-[#111]">
      <div className=" p-8 w-3/5 m-auto bg-white shadow-xl max-w-md shadow-blue-100">
        <h1 className="text-2xl font-semibold pt-3">Recover password</h1>
        <form className="mt-6">
          <div className="mb-2">
            <div className="relative w-full">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <img src={emailicon} alt="emailicon" />
              </div>

              <input
                type="email"
                className="bg-white border border-gray-300 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
                placeholder="Email"
              />
            </div>
          </div>
          {Code ? (
            <div className="mb-2 mt-5">
              <div className="relative w-full">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <img src={verify} alt="lockicon" width={'20px'} />
                </div>

                <input
                  type="password"
                  className="bg-white border border-gray-300 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
                  placeholder="Recover code"
                />
              </div>
            </div>
          ) : (
            ''
          )}
          <div className="mt-6 flex justify-center pt-3">
            <button
              className="w-screen px-5 py-3 tracking-wide text-white font-semibold transition-colors duration-200 transform bg-blue-400 rounded-md hover:bg-blue-600 focus:outline-none"
              onClick={recovercode}
            >
              Recover password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Forgotpass;
