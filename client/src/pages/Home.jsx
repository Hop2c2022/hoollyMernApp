import foodCover from '../assets/Khash-Erdene/foodCover.png';
import AboutUsFood from '../components/AboutUsFood';
import WhyChooseUs from '../components/WhyChooseUs';
import Companies from '../components/Companies';

const Home = () => {
  return (
    <>
      <div className="flex flex-col text-[#fff] bg-[#111] items-center h-[100vh] w-[100vw] md:flex-row sm:h-[100vh] mt-[0.2vh]">
        {/* Left Section */}
        <div className=" w-[90vw]  ml-[5vw] xl:w-[50vw] md:w-[40vw]">
          <div className="h-[45vh]  flex flex-col  justify-evenly md:h-[30vh]">
            <p>Its Quick & Amusing!</p>
            <p className="text-[44px] ">The Art of speed food Quality</p>
            <p className=" text-[16px] ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
            </p>
            <button className="bg-[#FF9F0D] w-[40vw] md:w-[16vw] mt-[1vh] hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-full">
              See Menu
            </button>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex w-[90vw] md:items-center justify-end xl:w-[40vw] md:w-[50vw] h-[60vh] md:h-[100vh]">
          <img
            className="w-[90vw] h-[40vh] md:h-[50vh] md:w-[50vw] xl:w-[30vw]  object-contain"
            src={foodCover}
            alt=""
          />
        </div>
      </div>
      {/* Additianol components */}
      <AboutUsFood />
      <WhyChooseUs />
      <Companies />
    </>
  );
};

export default Home;
