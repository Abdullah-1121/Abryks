"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/images-slider";
import { Cover } from "./cover";

export default function ImagesSliderDemo() {
  const images = [
    "https://images.unsplash.com/photo-1582719188393-bb71ca45dbb9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2xvdGhpbmclMjBzdG9yZXxlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1524275539700-cf51138f679b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGZyZWUlMjBpbWFnZXMlMjBvZiUyMGNvbW1lcmNlJTIwY2xvdGhlc3xlbnwwfHwwfHx8MA%3D%3D",
    "https://images.unsplash.com/photo-1509319117193-57bab727e09d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZnJlZSUyMGltYWdlcyUyMG9mJTIwY29tbWVyY2UlMjBjbG90aGVzfGVufDB8fDB8fHww",
     "https://images.unsplash.com/photo-1523380677598-64d85d015339?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGZyZWUlMjBpbWFnZXMlMjBvZiUyMGNsb3RoaW5nJTIwc3RvcmV8ZW58MHx8MHx8fDA%3D",
     "https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZyZWUlMjBpbWFnZXMlMjBvZiUyMGNsb3RoaW5nJTIwc3RvcmV8ZW58MHx8MHx8fDA%3D"
  ];
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-40 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          GET UPTO <span className="text-emerald-600">30% OFF</span> <br /> ON 
          <Cover>NEW ARRIVALS</Cover> 
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Shop now →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  );
}
