import React from 'react';
import Bf from '../assets/Uchral/breakfast.png';
import { useState } from 'react';

function Testimonial() {
  const [activeSlide, setActiveSlide] = useState(0);
  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget metus nec velit lobortis dapibus.',
    },
    {
      id: 2,
      name: 'Jaden Smith',
      comment: 'Vestibulum ultricies lacus sed turpis hendrerit, vel egestas ligula placerat. Suspendisse potenti.',
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      comment:
        'Fusce id erat quis turpis sagittis euismod. Integer vitae ligula maximus, condimentum diam a, luctus purus.',
    },
    {
      id: 4,
      name: 'Sarah Johnson',
      comment:
        'Fusce id erat quis turpis sagittis euismod. Integer vitae ligula maximus, condimentum diam a, luctus purus.',
    },
  ];

  const prevSlide = () => {
    setActiveSlide(activeSlide === 0 ? testimonials.length - 1 : activeSlide - 1);
  };

  const nextSlide = () => {
    setActiveSlide(activeSlide === testimonials.length - 1 ? 0 : activeSlide + 1);
  };

  return (
    <div className=" w-[100vw] xl:h-[50vh] h-[20vh] bg-[#111] ">
      <div className="max-w-3xl mx-auto ">
        <div className="relative">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`w-full absolute transition-opacity duration-500 ${
                activeSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <div className="bg-white rounded-lg p-6 shadow-md h-56">
                <p className="text-gray-800 text-lg mb-4">{testimonial.comment}</p>
                <p className="text-gray-600 font-semibold">{testimonial.name}</p>
              </div>
              <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-4">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`w-4 h-4 mx-2 rounded-full focus:outline-none ${
                      activeSlide === index ? 'bg-gray-800' : 'bg-gray-400'
                    }`}
                    onClick={() => setActiveSlide(index)}
                  ></button>
                ))}
              </div>
            </div>
          ))}

          <button
            className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded-full focus:outline-none"
            onClick={prevSlide}
          >
            Prev
          </button>
          <button
            className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-blue-600 text-white px-3 py-1 rounded-full focus:outline-none"
            onClick={nextSlide}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
