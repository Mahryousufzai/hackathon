// import React from "react";
// import Image from "next/image";
// import FeatureImage from "../../../public/images/back.png";

// const FeatureFF = () => {
//   return (
//     <>
//       <div className="w-[1440px] h-[598px] flex items-center justify-center px-[120px] gap-[36px]">
//         <div className="w-[630px] h-[430px] bg-[#2A254B]   px-[64px] py-[54px]">
//           <h1 className="font-clash-display text-[32px] text-[#FFFFFF] font-normal leading-[39.36px] text-left underline-position-from-font decoration-none w-[383px] h-[39px]  ">It started with a small idea</h1>
//           <p className="font-satoshi text-[18px] font-normal leading-[24.3px] px-[24] text-white text-left underline-position-from-font   w-[495px] h-[48px]">A global brand with local beginnings, our story begain in a small studio in South London in early 2014</p>
//           <div className="mt-6 text-center md:text-right">
//           <button className="w-full md:w-auto px-6 py-3 bg-gray-800 text-white font-medium rounded-lg left-[64px] p-[16px_32px] gap-[10px]  hover:bg-gray-900 ">
//              View Collection 
//           </button>
//         </div>
//         </div>
//         <div className="w-[630px] h-[430px] flex items-center justify-center">
//            <Image src={FeatureImage} alt="image" height={430} width={630} /> 
//         </div>
//       </div>
//     </>
//   );
// };

// export default FeatureFF;

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
