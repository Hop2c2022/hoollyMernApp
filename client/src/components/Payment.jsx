import React, { useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Payment = () => {
  const [avsn, setAvsn] = useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const [bga, setBga] = useState(false);
  const navigate = useNavigate();

  const realData = [];

  const submit = async () => {
    try {
      const res = await axios.get(`https://hoolly-api.vercel.app/getadminOrder/${localStorage.getItem('id')}`);
      setAvsn(res?.data);
      setShowModal(true);
    } catch (err) {
      return err;
    }
  };
  useEffect(() => {
    avsn.map((el) => {
      realData.push(el);
    });
  }, [avsn]);

  const confirm = async () => {
    const res2 = await axios.post(`https://hoolly-api.vercel.app/postadminOrder/${localStorage.getItem('id')}`, {
      userId: `${localStorage.getItem('id')}`,
      data: realData,
      phoneNumber: localStorage.getItem('number'),
      fullInformation: localStorage.getItem('fullinfo'),
      street: localStorage.getItem('street'),
      district: localStorage.getItem('dist'),
    });
    await axios.delete(`https://hoolly-api.vercel.app/allcheck/${localStorage.getItem('id')}`);
    setBga(true);
    setShowModal(false);
    setTimeout(() => {
      navigate('/');
      window.location.reload();
    }, 3000);
  };

  return (
    <div>
      <div
        className="py-12 bg-[#111] transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0"
        id="modal"
      >
        <div role="alert" className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
          <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
            <div className="w-full flex justify-start text-gray-600 mb-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-wallet"
                width="52"
                height="52"
                viewBox="0 0 24 24"
                strokeWidth="1"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />
                <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
              </svg>
            </div>
            <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
              Enter Billing Details
            </h1>
            <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
              Owner Name
            </label>
            <input
              id="name"
              className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
              placeholder="YourName"
            />
            <label htmlFor="email2" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
              Card Number
            </label>
            <div className="relative mb-5 mt-2">
              <div className="absolute text-gray-600 flex items-center px-4 border-r h-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-credit-card"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x="3" y="5" width="18" height="14" rx="3" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                  <line x1="7" y1="15" x2="7.01" y2="15" />
                  <line x1="11" y1="15" x2="13" y2="15" />
                </svg>
              </div>
              <input
                id="email2"
                type="number"
                className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border"
                placeholder="XXXX - XXXX - XXXX - XXXX"
              />
            </div>
            <label htmlFor="expiry" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
              Expiry Date
            </label>
            <div className="relative mb-5 mt-2">
              <input
                id="expiry"
                type="month"
                className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center flex justify-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="MM/YY"
              />
            </div>
            <label htmlFor="cvc" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">
              CVC
            </label>
            <div className="relative mb-5 mt-2">
              <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-info-circle"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z"></path>
                  <circle cx="12" cy="12" r="9"></circle>
                  <line x1="12" y1="8" x2="12.01" y2="8"></line>
                  <polyline points="11 12 12 12 12 16 13 16"></polyline>
                </svg>
              </div>
              <input
                id="cvc"
                className="mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                placeholder="* * *"
              />
            </div>
            <div className="flex items-center justify-start w-full">
              <button
                className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm"
                onClick={() => submit()}
              >
                Submit
              </button>
              <Link to="/checkout">
                <button className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm">
                  Cancel
                </button>
              </Link>
            </div>
            <Link to="/checkout">
              <button
                className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600"
                aria-label="close modal"
                role="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-x"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  strokeWidth="2.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </Link>
          </div>
          {showModal ? (
            <div>
              <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <h3 className="text-3xl font-semibold">Payment confirmation</h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}

                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Cancel
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={confirm}
                      >
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </div>
          ) : null}
          {bga ? (
            <div className="w-full h-full">
              <div id="modal-bg" className="w-full h-full bg-[#FAFCFF] top-0 absolute hidden"></div>
              <div
                id="modal-box"
                className="sm:w-[385px] sm:min-w-[40vw] min-w-[80vw] min-h-[50vh] flex flex-col items-center gap-2 -translate-y-1/2 p-6 bg-[#FAFCFF] rounded-lg top-1/2 left-1/2 -translate-x-1/2 absolute  justify-center "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="text-[#059669] mx-auto h-11 rounded-full bg-[#D1FAE5] w-11"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-2xl font-medium">Payment Successful</span>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default Payment;
