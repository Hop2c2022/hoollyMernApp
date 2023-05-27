import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Profile = () => {
  const [check, setCheck] = useState('');
  const [showModal, setShowModal] = React.useState(false);
  const [newName, setNewName] = useState('Loading');
  const [userInfo, setUserInfo] = useState('');
  const [proImg, setProImg] = useState('');

  const getRandomEmoji = () => {
    const emojis = ['❤️‍🔥', '❤', '🧡', '💛', '💚', '💙', '💜', '🤎', '🖤', '🤍'];
    return emojis[~~(Math.random() * emojis.length)];
  };

  const emoji = getRandomEmoji();
  const navigate = useNavigate();

  const edit = async () => {
    if (newName.length != 0 && newName.length < 13) {
      const res = await axios.patch(`https://hoolly-mern-app.vercel.app/auth/${localStorage.getItem('id')}`, {
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
      toast.warning('Length must be higher than zero or less than 12 characters.');
    }
  };

  const info = async () => {
    const res = await axios.get(`https://hoolly-mern-app.vercel.app/auth/${localStorage.getItem('id')}`);
    setCheck(res?.data?.data?.admin);
    setUserInfo(res?.data?.data?.name);
    setProImg(res?.data?.data?.profileImg);
  };

  useEffect(() => {
    info();
  }, []);

  return (
    <div className="bg-[#111] w-[100vw] h-[93vh]">
      <div>
        <ToastContainer />
      </div>
      <div>
        <div className="ml-[5vw] mr-[5vw] flex flex-col h-[86.9vh] w-[90vw] items-center justify-evenly">
          <div className="w-full rounded-xl p-12 shadow-2xl shadow-blue-200 md:w-8/12 xl:w-6/12 bg-white">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
              <div className="grid-cols-1 lg:col-span-3">
                <div className="mx-auto flex h-[200px] w-[150px] items-center justify-center p-4">
                  <img className=" object-contain h-[200px] w-[150px]" src={proImg} alt="LOADING" />
                </div>
              </div>

              <div className="col-span-1 lg:col-span-9 md:ml-[2vw] 2xl:ml-0">
                <div className="justify-center lg:justify-normal lg:text-left flex space-x-2">
                  <h2 className="text-2xl font-bold text-zinc-700">{userInfo || 'LOADING'}</h2>
                  <h2 className="text-2xl font-bold text-zinc-700">{emoji}</h2>
                </div>

                <div className="space-y-3 sm:space-y-0 mt-6 none  sm:grid grid-cols-3 gap-6 text-center lg:text-left">
                  <div>
                    <p className="font-bold text-red-700">500+</p>
                    <p className="text-sm font-semibold text-zinc-700">CUSTOMERS</p>
                  </div>

                  <div>
                    <p className="font-bold text-red-700">8.4/10</p>
                    <p className="text-sm font-semibold text-zinc-700">RATING</p>
                  </div>

                  <div>
                    <p className="font-bold text-red-700">2+</p>
                    <p className="text-sm font-semibold text-zinc-700">EXPERIENCE</p>
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
                      onClick={() => navigate('/aboutus')}
                      className="w-full rounded-xl border-2 border-blue-500 bg-white px-3 py-2 font-semibold text-blue-500 hover:bg-blue-500 hover:text-white"
                    >
                      Connect Us
                    </button>
                  )}

                  <div>
                    <button
                      className="w-[100%] bg-orange-500 text-white active:bg-red-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
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
