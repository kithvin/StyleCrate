import { assets } from "../assets/assets";
import React from "react";

const Casualinspirations = () => {
  return (
    <section className="px-4 lg:px-16 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-8 mt-12 md:mt-18 gap-4 md:gap-x-4">
      {/* Text & Button Section - Centered on mobile */}
      <div className="col-span-1 md:col-span-2 mb-4 md:mb-0 text-center md:text-left">
        <h1 className="text-3xl text-neutral-900 sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-2">
          Outfit Inspiration
        </h1>
        <p className="mt-2 md:mt-8 md:text-base text-lg sm:text-base text-gray-700 mx-auto md:mx-0 max-w-md md:max-w-none font-medium text-justify">
          Explore our favorite casual outfit combinations effortlessly stylish,
          comfortable for all day wear, and easy to personalize for your unique
          everyday lifestyle and routine.
        </p>
        <button className="w-full px-5 py-3 bg-black rounded-lg text-white text-center font-medium mt-4 md:mt-8 md:w-auto sm:px-7 transition-all duration-200  md:h-12 border border-neutral-900 flex items-center justify-center mx-auto md:mx-0 cursor-pointer">
          Browse Inspirations
        </button>
      </div>

      {/* First Image - img3 */}
      <div className="relative col-span-1 md:col-span-3 h-60 sm:h-80 rounded-2xl overflow-hidden order-first md:order-none">
        <img
          src={assets.img3}
          alt="Casual outfit inspiration"
          className="rounded-2xl absolute top-0 left-0 w-full h-full object-cover"
        />
      </div>

      {/* Second Image - img5 */}
      <div className="hidden md:block relative col-span-1 md:col-span-3 h-60 sm:h-80 rounded-2xl overflow-hidden">
        <img
          src={assets.img5}
          alt="Casual outfit inspiration"
          className="rounded-2xl absolute top-0 left-0 w-full h-full object-cover object-top"
        />
      </div>
    </section>
  );
};

export default Casualinspirations;
