'use client'
import { useState, useEffect } from "react";
import Image from 'next/image'
import Link from 'next/link'
import { FaArrowRight, FaArrowLeft , FaCircle} from 'react-icons/fa'

type ImageSliderProps = {
  images: {
    url: any;
    alt: string;
  }[];
};

export function ImageSlider({ images }: ImageSliderProps) {
  const [imageIndex, setImageIndex] = useState(0);

  function showNextImage() {
    setImageIndex((index) => {
      if (index === images.length - 1) return 0;
      return index + 1;
    });
  }

  function showPrevImage() {
    setImageIndex((index) => {
      if (index === 0) return images.length - 1;
      return index - 1;
    });
  }

  // Automatically change images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      showNextImage();
    }, 3000); // Change image every 3 seconds

    // Clear the interval when the component is unmounted
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      aria-label="Image Slider"
      className="relative w-full h-full"
    >
      
      <div className="flex overflow-hidden w-full h-full">
        {images.map(({ url, alt }, index) => (
          <Image
            key={url}
            src={url}
            width={500}
            height={500}
            alt={alt}
            aria-hidden={imageIndex !== index}
            className={`absolute inset-0 object-contain w-full h-full transition-transform duration-300 ease-in-out ${imageIndex === index ? 'translate-x-0' : 'translate-x-full'}`}
          />
        ))}
      </div>
      {/* <button
        onClick={showPrevImage}
        className="absolute top-0 bottom-0 left-0 p-4 cursor-pointer transition-colors duration-100 ease-in-out hover:bg-black/20 focus-visible:bg-black/20"
        aria-label="View Previous Image"
      >
        <FaArrowLeft aria-hidden className="w-8 h-8 stroke-white fill-black" />
      </button>  */}
      {/* <button
        onClick={showNextImage}
        className="absolute top-0 bottom-0 right-0 p-4 cursor-pointer transition-colors duration-100 ease-in-out hover:bg-black/20 focus-visible:bg-black/20"
        aria-label="View Next Image"
      >
        <FaArrowRight aria-hidden className="w-8 h-8 stroke-white fill-black" />
      </button> */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
        {images.map((_, index) => (
          <button
            key={index}
            className="block cursor-pointer w-4 h-4 transition-transform duration-100 ease-in-out hover:scale-125 focus-visible:scale-125"
            aria-label={`View Image ${index + 1}`}
            onClick={() => setImageIndex(index)}
          >
            {index === imageIndex ? (
              <FaCircle aria-hidden className="w-full h-full stroke-white fill-black" />
            ) : (
              <FaCircle aria-hidden className="w-full h-full stroke-white fill-black" />
            )}
          </button>
        ))}
      </div>
      <div id="after-image-slider-controls" />
    </section>
  );
}
export default ImageSlider