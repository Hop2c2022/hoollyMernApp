import React from 'react';
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <div className=" flex flex-col items-center justify-center overflow-hidden h-[86.7vh] mt-[0.1vh] text-center bg-black">
      <h1 className="text-blue-500 font-semibold text-8xl ">404</h1>
      <h1 className="text-3xl pt-[1.5%] text-white">Oops! Look likes something going wrong</h1>
      <p className="text-center text-xl pt-[1%] pb-[1%] text-gray-500">
        Page Cannot be found! we’ll have it figured out in no time.
        <br />
        Meanwhile, cheek out these fresh ideas:
      </p>
      <Link to="/">
        <button className=" h-12 px-6 tracking-wide text-white font-semibold transition-colors duration-200 transform bg-blue-400 rounded-md hover:bg-blue-600 focus:outline-none">
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default PageNotFound;
