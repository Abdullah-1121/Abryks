import React from 'react'
import {InfiniteMovingCards} from './movingcards'
import {TypewriterEffectSmooth} from '@/components/typewriter'

const cards = () => {
    const words = [
        {
          text: "What",
          className: "text-gray-600 dark:text-gray-800 text-xl md:text-4xl",
          
        },
        {
          text: "Our",
          className: "text-gray-800 dark:text-gray-800 text-xl md:text-4xl",
        },
        {
          text: "Clients",
          className: "text-emerald-500 dark:text-emerald-500 text-2xl md:text-4xl",
        },
        {
          text: "say",
          className: "text-gray-800 dark:text-gray-800 text-xl md:text-4xl",
        },
      
      ];
  return (
    <div className="h-[30rem] border-2 rounded-md flex flex-col  bg-white items-center justify-around relative overflow-hidden">
        <div className=''><TypewriterEffectSmooth words={words} /></div>
    <InfiniteMovingCards
      items={testimonials}
      direction="right"
      speed="slow"
    />
  </div>
  )
}
const testimonials = [
    {
      quote:
        "I couldn't be happier with my purchase! The quality is top-notch, and the fit is perfect. It's rare to find such attention to detail in online shopping these days. Definitely coming back for more!",
      name: "Emily Carter",
      title: "Verified Buyer",
    },
    {
      quote:
        "The customer service was amazing! They helped me choose the right size, and it arrived sooner than expected. The clothes feel great and look even better. A fantastic shopping experience overall.",
      name: "James Foster",
      title: "Happy Customer",
    },
    {
      quote:
        "The fabric is soft and comfortable, and the style is just what I was looking for. I’ve gotten so many compliments on my new outfit!",
      name: "Olivia Martinez",
      title: "Satisfied Shopper",
    },
    {
      quote:
        "I love the variety of styles offered, but the shipping was a bit slower than I expected. Still, the quality of the clothes made up for it. I’ll order again but plan ahead next time.",
      name: "Michael Smith",
      title: "Frequent Buyer",
    },
    {
      quote:
        "Absolutely thrilled with my purchase! The clothes are true to size and the colors are just as vibrant as they looked online. Highly recommend this store to anyone looking for quality and style.",
      name: "Sophia Lee",
      title: "Fashion Enthusiast",
    },
  ];
  

export default cards