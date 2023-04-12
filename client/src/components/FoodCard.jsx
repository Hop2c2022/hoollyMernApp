import Breakfast from '../assets/Uchral/breakfast.png';

const FoodCard = () => {
  return (
    <div>
      <div className="bg-blue-100 text-[#] border border-black-100 transition transform duration-700 hover:shadow-xl hover:scale-105 p-4 rounded-lg relative w-96 ">
        <p className="bg-blue-300 border border-blue-500 rounded-full text-primary text-sm poppins px-4 py-1 inline-block mb-4">
          Breakfast
        </p>
        <img className="w-64 mx-auto transform transition duration-400 hover:scale-105" src={Breakfast} />
        <div className="flex flex-col items-center my-3 space-y-2 gap-3">
          <h1 className="text-[#111] poppins text-lg">Eggs Benedict</h1>
          <p class="text-[#111] poppins text-sm text-center">Gay one the what walk then she. Demesne mention pr</p>
          <h2 className="text-[#111] poppins text-2xl font-bold">$8.99</h2>
          <a href="http://127.0.0.1:5173/shoplist">
            <button className="bg-blue-800 text-[#fff] px-8 py-2 focus:outline-none poppins rounded-full transform transition duration-300 hover:scale-105">
              Order Now
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
