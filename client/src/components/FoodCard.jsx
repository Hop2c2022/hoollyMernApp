import Breakfast from '../assets/Uchral/breakfast.png';
import { Link } from 'react-router-dom';

const FoodCard = () => {
  return (
    <div>
      <div className="bg-slay-300 hover:bg-white hover:text-black  text-[#fff] border border-black-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative w-96">
        <p className="bg-blue-500 border border-blue-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4">
          Breakfast
        </p>
        <img className="w-64 mx-auto " src={Breakfast} />
        <div className="flex flex-col items-center my-3 space-y-2 gap-3">
          <h1 className=" poppins text-lg">Eggs Benedict</h1>
          <p class=" poppins text-sm text-center">Gay one the what walk then she. Demesne mention pr</p>
          <h2 className=" poppins text-2xl font-bold">$8.99</h2>
          <Link to="/shoplist">
            <button className="bg-blue-800 text-[#fff] px-8 py-2 focus:outline-none poppins rounded-full transform transition duration-300 hover:scale-105">
              Order Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
