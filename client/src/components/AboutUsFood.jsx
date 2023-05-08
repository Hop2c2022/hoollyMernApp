import upperCover from '../assets/Khash-Erdene/upperCover.png';
import bottomCover1 from '../assets/Khash-Erdene/bottomCover1.png';
import bottomCover2 from '../assets/Khash-Erdene/bottomCover2.png';

const AboutUsFood = () => {
  return (
    <div className="bg-[#111] text-[#fff]  h-[100vh] flex items-center w-[100vw] flex-col md:flex-row">
      {/* Left Section */}
      <div className=" ml-[5vw] w-[90vw] md:w-[40vw] flex flex-col justify-evenly h-[50vh] space-y-2">
        <p>About Us</p>
        <p className="text-[22px] md:text-[44px]">We Create the best foody product</p>
        <p className="md:w-[36vw] text-[12px] w-[85vw]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
          fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae
          mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
        </p>
        <div className="flex space-x-2">
          <p>✔</p>
          <p className="text-[12px] md:text-[14px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, vitae.
          </p>
        </div>
        <div className="flex space-x-2">
          <p>✔</p>
          <p className="text-[12px] md:text-[14px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, vitae.
          </p>
        </div>
        <div className="flex space-x-2">
          <p>✔</p>
          <p className="text-[12px] md:text-[14px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, vitae.
          </p>
        </div>
        <button className="inline-block px-4 py-2  text-white bg-blue-600 rounded-full hover:bg-blue-700 w-[40vw] md:w-[16vw] ">
          Read More
        </button>
      </div>
      {/* Right Section */}
      <div className="w-[90vw] md:w-[50vw] justify-end mt-[2vh] md:mt-0 md:ml-[5vw]">
        <div className="flex flex-col ">
          <div className="flex ">
            <img className="w-[90vw] md:w-[45vw]" src={upperCover} alt="" />
          </div>
          <div className="flex  md:w-[50vw] w-[90vw] mt-[2vh]">
            <img className="md:mr-[2vw] mr-[6vw] md:w-[21.5vw] w-[42vw]" src={bottomCover1} alt="" />
            <img className="md:w-[21.5vw] w-[42vw]" src={bottomCover2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsFood;
