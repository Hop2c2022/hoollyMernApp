import React from 'react';
import { Link } from 'react-router-dom';

const Empty = () => {
  return (
    <div className=" flex flex-col items-center justify-center overflow-hidden h-[83vh] mt-[0.2vh] text-center ">
      <h1 className="text-orange-400 font-semibold md:text-8xl text-4xl">😔</h1>
      <h1 className="md:text-3xl text-1xl pt-[1.5%] text-white">Oops! This Restaurant don't have items</h1>
      <p className="text-center md:text-xl text-sm pt-[1%] pb-[1%] text-gray-500">
        Page Cannot be found! we’ll have it figured out in no time.
        <br />
        Menwhile, cheek out these fresh ideas:
      </p>
      <Link to="/">
        <button className=" h-12 md:px-6 px-3 tracking-wide text-white font-semibold transition-colors duration-200 transform bg-orange-400 rounded-md hover:bg-ornage-800 focus:outline-none">
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default Empty;
