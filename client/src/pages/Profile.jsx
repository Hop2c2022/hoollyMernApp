import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
  const [check, setCheck] = useState('');
  const [showModal, setShowModal] = React.useState(false);
  const [newName, setNewName] = useState('');
  const [userInfo, setUserInfo] = useState('');

  const getRandomEmoji = () => {
    const emojis = ['❤️‍🔥', '❤', '🧡', '💛', '💚', '💙', '💜', '🤎', '🖤', '🤍'];
    return emojis[~~(Math.random() * emojis.length)];
  };
  const emoji = getRandomEmoji();
  const navigate = useNavigate();

  const info = async () => {
    const res = await axios.get(`http://localhost:8000/auth/${localStorage.getItem('id')}`);
    setCheck(res?.data?.data?.admin);
    const res2 = await axios.get(`http://localhost:8000/auth/${localStorage.getItem('id')}`);
    setUserInfo(res2?.data?.data?.name);
  };

  const edit = async () => {
    if (newName.length != 0) {
      const res = await axios.patch(`http://localhost:8000/auth/${localStorage.getItem('id')}`, {
        name: newName,
      });
      if (res?.status == 200) {
        toast.success('Successfully changed.');
        setTimeout(() => {
          window.location.reload();
        }, 1500);
      } else {
        toast.warning('Error.');
      }
    } else {
      toast.warning('Length must be higher than zero.');
    }
  };

  useEffect(() => {
    info();
  }, [info]);

  return (
    <div className="bg-[#111] w-[100vw]">
      <div>
        <ToastContainer />
      </div>
      <div>
        <div className=" ml-[5vw] mr-[5vw] flex h-[86.9vh] w-[90vw] items-center justify-center ">
          <div className="w-full rounded-xl p-12 shadow-2xl shadow-blue-200 md:w-8/12 lg:w-6/12 bg-white">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              <div className="grid-cols-1 lg:col-span-3">
                <div className="mx-auto flex h-[90px] w-[90px] items-center justify-center rounded-full bg-blue-100 p-4">
                  <svg
                    id="logo-39"
                    width="50"
                    height="40"
                    viewBox="0 0 50 40"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M25.0001 0L50 15.0098V24.9863L25.0001 40L0 24.9863V15.0099L25.0001 0Z"
                      fill="#A5B4FC"
                      className="ccompli2"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0 15.0098L25 0L50 15.0098V24.9863L25 40L0 24.9863V15.0098ZM25 33.631L44.6967 21.8022V18.1951L44.6957 18.1945L25 30.0197L5.30426 18.1945L5.3033 18.1951V21.8022L25 33.631ZM25 24.5046L40.1018 15.4376L36.4229 13.2298L25 20.0881L13.5771 13.2298L9.89822 15.4376L25 24.5046ZM25 14.573L31.829 10.4729L25 6.37467L18.171 10.4729L25 14.573Z"
                      fill="#4F46E5"
                      className="ccustom"
                    ></path>
                    <path
                      d="M25.0001 0L0 15.0099V24.9863L25 40L25.0001 0Z"
                      fill="#A5B4FC"
                      className="ccompli2"
                      fillOpacity="0.3"
                    ></path>
                  </svg>
                </div>
              </div>

              <div className="col-span-1 lg:col-span-9">
                <div className="justify-center lg:justify-normal lg:text-left flex space-x-2">
                  <h2 className="text-2xl font-bold text-zinc-700">{userInfo}</h2>
                  <h2 className="text-2xl font-bold text-zinc-700">{emoji}</h2>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-6 text-center lg:text-left">
                  <div>
                    <p className="font-bold text-zinc-700">99</p>
                    <p className="text-sm font-semibold text-zinc-700">Global Rank</p>
                  </div>

                  <div>
                    <p className="font-bold text-zinc-700">23</p>
                    <p className="text-sm font-semibold text-zinc-700">Total food taken</p>
                  </div>

                  <div>
                    <p className="font-bold text-zinc-700">730K</p>
                    <p className="text-sm font-semibold text-zinc-700">Total purchases</p>
                  </div>
                </div>

                <div className="mt-6 grid  grid-cols-2 gap-4">
                  {check ? (
                    <button
                      onClick={() => navigate('/admin')}
                      className="w-full rounded-xl border-2 border-blue-500 bg-white px-3 py-2 font-semibold text-blue-500 hover:bg-blue-500 hover:text-white"
                    >
                      Admin
                    </button>
                  ) : (
                    <button
                      onClick={() => navigate('/contact')}
                      className="w-full rounded-xl border-2 border-blue-500 bg-white px-3 py-2 font-semibold text-blue-500 hover:bg-blue-500 hover:text-white"
                    >
                      Contact
                    </button>
                  )}

                  <div>
                    <button
                      className="w-[15vw] bg-orange-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(true)}
                    >
                      Edit Name
                    </button>
                    {showModal ? (
                      <div>
                        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
                          <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            {/*content*/}
                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                              {/*header*/}
                              <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                <h3 className="text-3xl font-semibold">Here you change name</h3>
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
                              <div className="relative p-6 flex-auto">
                                <input
                                  className="bg-white border border-gray-300 text-black text-sm focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-10 p-2.5 "
                                  placeholder="Enter your new name"
                                  onChange={(e) => setNewName(e.target.value)}
                                />
                              </div>
                              {/*footer*/}
                              <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                <button
                                  className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                  type="button"
                                  onClick={() => setShowModal(false)}
                                >
                                  Close
                                </button>
                                <button
                                  className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                  type="button"
                                  onClick={edit}
                                >
                                  Save Changes
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                      </div>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
