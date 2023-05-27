import React, { useEffect } from 'react';
import emailicon from '../assets/A.Tengis/emailicon.png';
import { useState } from 'react';
import verify from '../assets/A.Tengis/verified.png';
import emailjs from '@emailjs/browser';
import axios from 'axios';
import _ from 'lodash';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Forgotpass = () => {
  const [Code, setCode] = useState(true);
  const [Coding, setCoding] = useState(false);
  const [newPass, setNewPass] = useState(false);
  const [too, setToo] = useState('');
  const [resetValue, setResetValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [idz, setId] = useState('');
  const [passValue, setPassValue] = useState('');
  const [checkGmail, setCheckGmail] = useState([]);

  const generator = () => {
    const minm = 100000;
    const maxm = 999999;
    const output = Math.floor(Math.random() * (maxm - minm + 1)) + minm;
    return output;
  };

  const dataRetriever = async (e) => {
    e.preventDefault();
    try {
      const output = generator();
      setToo(output);
      emailjs.send(
        'service_zddymub',
        'template_owc1pob',
        {
          verify_code: output,
          send_to: emailValue,
        },
        'CrUADr8S7uiZ8X8Yr'
      );

      checkGmail.map((el) => {
        if (el?.email == emailValue) {
          setCode(false);
          setCoding(true);
          setId(el?._id);
        } else {
        }
      });
    } catch (err) {
      return err;
    }
  };

  const newData = async () => {
    const res = await axios.get('https://hoolly-mern-api.vercel.app/', {});
    setCheckGmail(res?.data?.result);
  };

  useEffect(() => {
    newData();
  }, [newData]);

  const handleNameChange = (e) => {
    e.preventDefault();
    setResetValue(e.target.value.slice(0, 6));
  };

  const reset = (e) => {
    e.preventDefault();

    if (resetValue == too) {
      setNewPass(true);
    } else {
      toast.warning('Recover code is incorrect!');
    }
    setCoding(false);
  };

  const dataChanger = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`https://hoolly-api.vercel.app/user/${idz}`, {
        email: emailValue,
        password: passValue,
      });
      window.location.href = '/login';
    } catch (err) {
      return err;
    }
  };

  return (
    <div className="relative flex flex-col justify-center overflow-hidden h-[93vh]  bg-[#111]">
      <div>
        <ToastContainer />
      </div>
      <div className=" p-8 w-3/5 m-auto bg-white shadow-xl max-w-md shadow-blue-100">
        <h1 className="text-2xl font-semibold pt-3">Recover password</h1>
        <form className="mt-6">
          {Code ? (
            <div>
              <div className="mb-2">
                <div className="relative w-full">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <img src={emailicon} alt="emailicon" />
                  </div>

                  <input
                    className="bg-white border border-gray-300 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
                    placeholder="Email"
                    onChange={(e) => setEmailValue(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-center pt-3">
                <button
                  className="w-screen px-5 py-3 tracking-wide text-white font-semibold transition-colors duration-200 transform bg-blue-400 rounded-md hover:bg-blue-600 focus:outline-none"
                  onClick={dataRetriever}
                >
                  Get Email Code
                </button>
              </div>
            </div>
          ) : (
            ''
          )}
          {Coding ? (
            <div>
              <div className="mb-2 mt-5">
                <div className="relative w-full">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <img src={verify} alt="lockicon" width={'20px'} />
                  </div>

                  <input
                    value={resetValue}
                    className="bg-white border border-gray-300 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
                    placeholder="Recover code"
                    onChange={handleNameChange}
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-center pt-3">
                <button
                  className="w-screen px-5 py-3 tracking-wide text-white font-semibold transition-colors duration-200 transform bg-blue-400 rounded-md hover:bg-blue-600 focus:outline-none"
                  onClick={reset}
                >
                  Enter Code
                </button>
              </div>
            </div>
          ) : (
            ''
          )}

          {newPass ? (
            <div>
              <div className="mb-2 mt-5">
                <div className="relative w-full">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <img src={verify} alt="lockicon" width={'20px'} />
                  </div>

                  <input
                    type="password"
                    className="bg-white border border-gray-300 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 "
                    placeholder="New password"
                    onChange={(e) => setPassValue(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-6 flex justify-center pt-3">
                <button
                  className="w-screen px-5 py-3 tracking-wide text-white font-semibold transition-colors duration-200 transform bg-blue-400 rounded-md hover:bg-blue-600 focus:outline-none"
                  onClick={dataChanger}
                >
                  Change password
                </button>
              </div>
            </div>
          ) : (
            ''
          )}
        </form>
      </div>
    </div>
  );
};

export default Forgotpass;
