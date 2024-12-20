

import React from "react";
import Image from "next/image";
import FeatureImage from "../../../public/images/back.png";

const FeatureFF = () => {
  return (
    <div className="w-full max-w-[1440px] h-auto mx-auto flex flex-col md:flex-row items-center justify-between px-4 md:px-[120px] gap-6">
      {/* Text Section */}
      <div className="w-full md:w-[630px] bg-[#2A254B] p-8 md:px-[64px] md:py-[54px] rounded-lg">
        <h1 className="font-clash-display text-[28px] md:text-[32px] text-white font-normal leading-[1.3] mb-4">
          It started with a small idea
        </h1>
        <p className="font-satoshi text-[16px] md:text-[18px] text-white leading-[1.5] mb-6">
          A global brand with local beginnings, our story began in a small studio in South London in early 2014.
        </p>
        <div className="text-center md:text-left">
          <button className="px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-900">
            View Collection
          </button>
        </div>
      </div>
      
      {/* Image Section */}
      <div className="w-full md:w-[630px] flex items-center justify-center">
        <Image 
          src={FeatureImage} 
          alt="Feature Image" 
          width={630} 
          height={430} 
          className="rounded-lg shadow-lg object-cover"
          priority
        />
      </div>
    </div>
  );
};

export default FeatureFF;
