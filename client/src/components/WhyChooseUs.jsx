import { useNavigate } from 'react-router-dom';
import foodGroup from '../assets/Khash-Erdene/foodGroup.png';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const WhyChooseUs = () => {
  return (
    <div className="bg-[#111] text-[#fff] h-full flex sm:items-center  w-[100vw] flex-col md:flex-row ">
      <div>
        <ToastContainer />
      </div>
      {/* Left Section */}
      <div className="w-[90vw] items-center flex ml-[5vw] md:h-[90vh] h-[100vh]  md:w-[40vw] lg:w-[35vw] ">
        <div className="flex flex-col ">
          <div className="flex">
            <img className="w-[90vw] h-[50vh] md:h-[100vh] md:w-[40vw] object-contain " src={foodGroup} alt="" />
          </div>
        </div>
      </div>
      {/* Right Section */}
      <div className="ml-[5vw] flex w-[90vw] sm:justify-end md:w-[50vw] lg:ml-[5vw]">
        <div className="flex flex-col  justify-evenly md:h-[40vh]">
          <p>Why Choose Us</p>
          <p className="text-[24px] md:text-[44px]">Extra ordinary taste And Experienced </p>
          <p className="w-[90vw] md:w-[50vw]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat
            fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed
            vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
          </p>
          <button
            onClick={() => toast.dark('Developing process!')}
            className="mt-[1vh] md:mt-[0.5vh]  inline-block px-4 py-2  text-white bg-blue-600 rounded-full hover:bg-blue-700 w-[40vw] md:w-[16vw] "
          >
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
