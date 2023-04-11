import foodGroup from '../assets/Khash-Erdene/foodGroup.png';
import foodIcon from '../assets/Khash-Erdene/foodIcon.png';

const WhyChooseUs = () => {
  return (
    <div className="bg-[#111] text-[#fff] h-full flex sm:items-center  w-[100vw] flex-col md:flex-row ">
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
          <img className="w-[90vw] md:w-[20vw] mt-[1.5vh] object-contain" src={foodIcon} alt="" />
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
