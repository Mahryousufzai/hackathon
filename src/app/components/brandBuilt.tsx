import React from "react";

const BrandBuilt = () => {
  return (
    <>
      <div className="h-[277px] w-[1100] flex justify-between items-center px-8 md:px-16 bg-gray-50">
        {/* Left Text Section */}
        <div className="text-lg md:text-2xl font-semibold text-gray-800 max-w-[700px]">
          A brand built on the love of craftsmanship, quality, and outstanding customer service
        </div>
        
        {/* Right Button Section */}
        <div>
          <button className="px-6 py-3 bg-[#2A254B] text-white rounded-lg font-medium hover:bg-gray-900 transition-all">
            Sign up
          </button>
        </div>
      </div>
    </>
  );
};

export default BrandBuilt;