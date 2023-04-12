import kfc from '../assets/Khash-Erdene/kfc.png';
import pizzahut from '../assets/Khash-Erdene/pizzahut.png';
import burgerking from '../assets/Khash-Erdene/burgerking.png';
import mcdonalds from '../assets/Khash-Erdene/mcdonalds.png';

const Companies = () => {
  return (
    <div className="bg-[#111] text-[#fff] flex flex-col justify-center h-[50vh] w-[100vw] lg:h-[90vh]">
      <div className=" flex flex-col justify-evenly h-[30vh] items-center">
        <p className="text-[25px] md:text-[44px]">We work with the best companies</p>
        <div className="flex justify-evenly w-[90vw] items-center">
          <img
            className="xl:w-[330px] xl:h-[330px] lg:w-[200px] lg:h-[200px] md:w-[130px] md:h-[130px] sm:w-[120px] sm:h-[120px] w-[70px] h-[70px] transition duration-300 object-cover hover:grayscale-0 grayscale cursor-pointer "
            src={kfc}
            alt=""
          />
          <img
            className="xl:w-[330px] xl:h-[330px] lg:w-[200px] lg:h-[200px] md:w-[130px] md:h-[130px] sm:w-[120px] sm:h-[120px] w-[70px] h-[70px] transition duration-300 object-cover hover:grayscale-0 grayscale cursor-pointer "
            src={pizzahut}
            alt=""
          />
          <img
            className="xl:w-[330px] xl:h-[330px] lg:w-[200px] lg:h-[200px] md:w-[130px] md:h-[130px] sm:w-[120px] sm:h-[120px] w-[70px] h-[70px] transition duration-300 object-cover hover:grayscale-0 grayscale cursor-pointer "
            src={burgerking}
            alt=""
          />
          <img
            className="xl:w-[330px] xl:h-[330px] lg:w-[200px] lg:h-[200px] md:w-[130px] md:h-[130px] sm:w-[120px] sm:h-[120px] w-[70px] h-[70px] transition duration-300 object-cover hover:grayscale-0 grayscale cursor-pointer "
            src={mcdonalds}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Companies;
