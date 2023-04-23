import kfc from '../assets/Khash-Erdene/kfc.png';
import pizzahut from '../assets/Khash-Erdene/pizzahut.png';
import burgerking from '../assets/Khash-Erdene/burgerking.png';
import mcdonalds from '../assets/Khash-Erdene/mcdonalds.png';

const Companies = () => {
  return (
    <div className="bg-[#111] text-[#fff] flex flex-col justify-center h-[80vh] w-[100vw] lg:h-[90vh]">
      <div className=" flex flex-col justify-evenly h-[30vh] items-center">
        <p className="text-[20px] sm:text-[25x] md:text-[44px]">We work with the best companies</p>
        <div className="flex justify-evenly w-[90vw] items-center">
          <img
            className="w-[18vw] transition ease-in-out delay-50 duration-700 hover:-translate-y-1 hover:scale-110 object-cover hover:grayscale-0 grayscale cursor-pointer "
            src={kfc}
            alt=""
          />
          <img
            className="w-[18vw] transition ease-in-out delay-50 duration-700 hover:-translate-y-1 hover:scale-110 object-cover hover:grayscale-0 grayscale cursor-pointer "
            src={pizzahut}
            alt=""
          />
          <img
            className="w-[18vw] transition ease-in-out delay-50 duration-700 hover:-translate-y-1 hover:scale-110 object-cover hover:grayscale-0 grayscale cursor-pointer "
            src={burgerking}
            alt=""
          />
          <img
            className="w-[18vw] transition ease-in-out delay-50 duration-700 hover:-translate-y-1 hover:scale-110 object-cover hover:grayscale-0 grayscale cursor-pointer "
            src={mcdonalds}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Companies;
