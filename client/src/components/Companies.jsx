import kfc from "../assets/Khash-Erdene/kfc.png";
import pizzahut from "../assets/Khash-Erdene/pizzahut.png";
import burgerking from "../assets/Khash-Erdene/burgerking.png";
import mcdonalds from "../assets/Khash-Erdene/mcdonalds.png";

const Companies = () => {
  return (
    <div className="bg-[#111] text-[#fff] flex flex-col justify-center h-[100vh]  w-[100vw]">
      <div className=" flex flex-col justify-evenly h-[30vh] items-center">
        <p className="text-[25px] md:text-[44px]">
          We work with the best companies
        </p>
        <div className="flex justify-evenly w-[90vw] items-center">
          <img
            className="w-[18vw]   h-[40vh] object-contain brightness-75 hover:brightness-100 cursor-pointer"
            src={kfc}
            alt=""
          />
          <img
            className="w-[18vw]   h-[40vh] object-contain brightness-75 hover:brightness-100 cursor-pointer"
            src={pizzahut}
            alt=""
          />
          <img
            className="w-[18vw]   h-[40vh] object-contain brightness-75 hover:brightness-100 cursor-pointer"
            src={burgerking}
            alt=""
          />
          <img
            className="w-[18vw]   h-[40vh] object-contain brightness-75 hover:brightness-100 cursor-pointer"
            src={mcdonalds}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Companies;
