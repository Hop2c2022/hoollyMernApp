import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const getRandomEmoji = () => {
    const emojis = ['❤️‍🔥', '❤', '🧡', '💛', '💚', '💙', '💜', '🤎', '🖤', '🤍'];
    return emojis[~~(Math.random() * emojis.length)];
  };
  const emoji = getRandomEmoji();
  const navigate = useNavigate();

  return (
    <div className="bg-[#111] w-[100vw]">
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
                  <h2 className="text-2xl font-bold text-zinc-700">{localStorage.getItem('name')}</h2>
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
                  <button
                    onClick={() => navigate('/admin')}
                    className="w-full rounded-xl border-2 border-blue-500 bg-white px-3 py-2 font-semibold text-blue-500 hover:bg-blue-500 hover:text-white"
                  >
                    Admin
                  </button>
                  <button className="w-full rounded-xl border-2 border-blue-500 bg-white px-3 py-2 font-semibold text-blue-500 hover:bg-blue-500 hover:text-white">
                    Edit Profile
                  </button>
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
