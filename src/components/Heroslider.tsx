import { useState, useEffect } from 'react';
import image1 from '@/assets/DALLE2024-08-1921.49.27-Amodernt-shirtdisplayedonaplainwhitebackgroundasifshowcasedinastore.Thet-shirtiscasualwithaminimalistgeometricpatterninblac-ezgif.com-webp-to-jpg-converter-removebg-preview.png';

import image3 from '@/assets/DALLE2024-08-1922.32.38-Astylishshort-sleevedbutton-upshirthangingonahangerfeaturingavibrantcolorfulabstractfloralpatternsimilartovintageHawaiianshirts-ezgif.com-webp-to-jpg-converter-removebg-preview.png';
import image4 from '@/assets/DALLE2024-08-1922.32.44-Astylishshort-sleevedbutton-upshirthangingonahangerfeaturingamoderngeometricpattern.Thedesignincludescleanabstractshapesinamo-ezgif.com-webp-to-jpg-converter-removebg-preview.png'
import image5 from '@/assets/f3__1_-removebg-preview.png'
import image6 from '@/assets/f6__1_-removebg-preview.png'
import image7 from '@/assets/f8__1_-removebg-preview.png'
import Image from 'next/image';

const HeroSlider = () => {
  const images = [image1,image3,image4 , image5,image6,image7];
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
