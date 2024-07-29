import React from 'react'
import Image from 'next/image'
import img1 from '@/assets/jennifer-marquez-60VYe8pVah8-unsplash-removebg-preview.png'
import shirts from '@/assets/shirt-mockup-concept-with-plain-clothing.png'
import img2 from '@/assets/tania-mousinho-4nkHv1jlbOk-unsplash-removebg-preview.png'
import ImageSlider from '@/components/imageslider'
const hero = function (){
    const IMAGES = [
        { url: img1, alt: "Image One" },
        { url: img2, alt: "Image Two" },
    ]
    return (
        <div className="flex flex-col-reverse md:flex-row items-center border-2 border-gray-300 m-2 rounded-lg justify-between bg-gray-300 p-6 md:p-12">
      <div className="flex flex-col items-center md:items-start text-center md:text-left md:w-1/2 space-y-4">
        <h1 className="text-2xl md:text-4xl font-bold">
          GET UPTO 30% OFF ON NEW ARRIVALS
        </h1>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
          Shop Now
        </button>
      </div>
      <div className="md:w-1/2 mb-6 md:mb-0">
        <Image
          src={shirts}
          alt="Featured Product"
          width={500}
          height={500}
          className="object-cover"
        />
      </div>
    </div>
    )

}
export default hero