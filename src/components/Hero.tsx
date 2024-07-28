import React from 'react'
import Image from 'next/image'
import img1 from '@/assets/jennifer-marquez-60VYe8pVah8-unsplash-removebg-preview.png'
import img2 from '@/assets/tania-mousinho-4nkHv1jlbOk-unsplash-removebg-preview.png'
import ImageSlider from '@/components/imageslider'
const hero = function (){
    const IMAGES = [
        { url: img1, alt: "Image One" },
        { url: img2, alt: "Image Two" },
    ]
    return (
        <div className='flex min-h-screen w-ful bg-gray-200 md:flex-row flex-col md:order-1 order-2'>
            <div className='h-screen w-full border-2 border-black flex flex-col p-4 justify-center items-center'>
                <div className='flex flex-col space-y-4'>
                    <div className='border-2 border-black'>
                        <h1 className='text-5xl'>GET UPTO 30% OFF </h1>
                        <h1 className='text-5xl'>NEW SUMMER ARRIVALS</h1>

                    </div>
                    <div className='border-2 border-black'>
                        <button className='px-4 py-2 m-4 bg-red-500 text-white rounded font-semibold '>Shop Now</button>
                    </div>
                    <div></div>
                </div>

            </div>
            <div className='h-screen w-full border-2 border-black flex flex-col p-4 items-center justify-center md-order-2 order-1 '>
                <ImageSlider images={IMAGES}></ImageSlider>
            

            </div>
        </div>
    )

}
export default hero