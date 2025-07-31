import React from "react";
import { assets, features } from "../assets/assets";

const BottomBanner = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl mx-4 md:mx-8 lg:mx-16 my-2 md:my-12 shadow-xl">
      {/* Background Section */}
      <div className="relative h-full md:h-200 min-h-[680px] md:min-h-[500px]">
        {/* Desktop Image */}
        <img
          src={assets.bottom_banner_image}
          alt="banner"
          className="hidden md:block absolute inset-0 w-full md:w-full md:h-270 h-full object-cover"
        />

        {/* Mobile Image */}
        <img
          src={assets.bottom_banner_image_sm}
          alt="banner"
          className="md:hidden absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/60" />
      </div>

      {/* Content Section */}
      {/* <div className="absolute inset-y-0 left-0 flex items-center"> */}
      <div className="absolute inset-y-0 md:right-22 flex items-center justify-end">
        <div className="container md:ml-120 px-6 md:px-12 lg:px-24">
          <div className="max-w-xl">
            {/* Section Header */}
            <div className="flex items-center mb-6">
              <div className="w-14 h-1 md:mr-40 mr-7" />
              <span className="text-sm font-semibold tracking-wider text-white uppercase">
                Why Choose Us
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 leading-tight text-center">
              Exceptional Quality You Can Trust
            </h2>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20 hover:bg-white/20 transition-all"
                >
                  <div className="flex items- space-x-3">
                    {/* Icon */}
                    {/* <div className="bg-primary/10 p-3 rounded-full">
                      <img
                        src={feature.icon}
                        alt={feature.title}
                        className="w-6 h-6 md:w-6 md:h-6 lg:w-7 lg:h-10" 
                      />
                    </div> */}

                    {/* Title & Description */}
                    <div>
                      <h3 className="text-lg font-semibold text-white text-center">
                        {feature.title}
                      </h3>
                      <p className="text-white/80 mt-1 text-sm text-center">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomBanner;
