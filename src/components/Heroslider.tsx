import { useState, useEffect } from 'react';
import image1 from '@/assets/front-blank-white-tshirt-with-hanger-template.png';
import image2 from '@/assets/monocolor-doodle-softball-is-my-passion-t-shirt.png';
import image3 from '@/assets/black-shirt-with-word-ultra-it.png';
import Image from 'next/image';

const HeroSlider = () => {
  const images = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [images.length]);

  return (
    <div className="relative w-full h-96 overflow-hidden"> {/* Adjusted height for responsiveness */}
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={image}
            alt={`Slide ${index + 1}`}
            layout="fill" // Ensure the image covers the container
            objectFit="contain" // Ensure the image covers the container without distortion
            className="absolute inset-0"
            priority // To improve loading performance
          />
        </div>
      ))}

      {/* Navigation buttons */}
      {/* <div className="absolute inset-0 flex items-center justify-between px-4">
        <button
          onClick={() => setCurrentIndex((currentIndex - 1 + images.length) % images.length)}
          className="bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          &#10094;
        </button>
        <button
          onClick={() => setCurrentIndex((currentIndex + 1) % images.length)}
          className="bg-black bg-opacity-50 text-white p-2 rounded-full"
        >
          &#10095;
        </button>
      </div> */}
    </div>
  );
};

export default HeroSlider;
