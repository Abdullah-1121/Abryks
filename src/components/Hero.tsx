'use client';
import Image from 'next/image';
import shirts from '@/assets/shirt-mockup-concept-with-plain-clothing.png';
import HeroSlider from '@/components/Heroslider';

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center border-2 border-gray-200 m-2 rounded-lg justify-between shadow-xl bg-gray-200 p-6 md:p-12">
      <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2 space-y-4">
        <h1 className="text-2xl md:text-4xl font-bold">
          GET UP TO 30% OFF ON NEW ARRIVALS
        </h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Shop Now
        </button>
      </div>
      <div className="md:w-1/2 w-full h-96 md:h-auto mb-6 md:mb-0"> {/* Adjusted width and height */}
        <HeroSlider />
      </div>
    </div>
  );
};

export default Hero;
